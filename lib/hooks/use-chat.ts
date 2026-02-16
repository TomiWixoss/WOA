import { useState } from "react";
import { useChatStore } from "@/lib/stores/chat.store";
import { useAgentStore } from "@/lib/stores/agent.store";

export function useChat() {
  const { messages, addMessage, updateLastMessage, setLoading, setError, clearMessages, selectedAgentId, setSelectedAgent } = useChatStore();
  const { getAgent, apiKey } = useAgentStore();
  const [isStreaming, setIsStreaming] = useState(false);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isStreaming || !selectedAgentId) return;

    const agent = getAgent(selectedAgentId);
    if (!agent) {
      setError("Agent không tồn tại");
      return;
    }

    if (!apiKey) {
      setError("Vui lòng cấu hình API key trong tab Xây Dựng Agent");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setIsStreaming(true);

      addMessage({ role: "user", content });
      addMessage({ role: "assistant", content: "" });

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { id: "", role: "user", content, timestamp: Date.now() }],
          config: {
            provider: "nvidia",
            apiKey,
            model: "stepfun-ai/step-3.5-flash",
            systemPrompt: agent.systemPrompt,
            temperature: agent.temperature,
            maxTokens: agent.maxTokens,
            topP: agent.topP,
            stopSequences: [],
            enableStreaming: true,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullResponse = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              try {
                const data = JSON.parse(line.slice(6));
                const content = data.choices?.[0]?.delta?.content;
                if (content) {
                  fullResponse += content;
                  updateLastMessage(fullResponse);
                }
              } catch (e) {
                // Skip invalid JSON
              }
            }
          }
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Gửi tin nhắn thất bại";
      setError(errorMessage);
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
      setIsStreaming(false);
    }
  };

  return {
    messages,
    sendMessage,
    clearMessages,
    isLoading: isStreaming,
    error: useChatStore.getState().error,
    selectedAgentId,
    setSelectedAgent,
  };
}
