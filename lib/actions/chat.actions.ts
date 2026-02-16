import { getAIOClient } from "@/lib/ai/client";
import type { AIConfig, ChatMessage } from "@/types";
import type { AIOMessage } from "@/lib/ai/types";

export async function sendChatMessage(
  messages: ChatMessage[],
  config: AIConfig
): Promise<string> {
  const aio = getAIOClient({
    provider: config.provider as any,
    apiKey: config.apiKey,
    model: config.model,
  });

  const aioMessages: AIOMessage[] = messages.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  const response = await aio.chatCompletion({
    provider: config.provider as any,
    model: config.model,
    messages: aioMessages,
    systemPrompt: config.systemPrompt,
    temperature: config.temperature,
    max_tokens: config.maxTokens,
    top_p: config.topP,
  });

  return response.choices[0].message.content as string;
}

export async function* streamChatMessage(
  messages: ChatMessage[],
  config: AIConfig
): AsyncGenerator<string, void, unknown> {
  const aio = getAIOClient({
    provider: config.provider as any,
    apiKey: config.apiKey,
    model: config.model,
  });

  const aioMessages: AIOMessage[] = messages.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  const stream = await aio.chatCompletionStream({
    provider: config.provider as any,
    model: config.model,
    messages: aioMessages,
    systemPrompt: config.systemPrompt,
    temperature: config.temperature,
    max_tokens: config.maxTokens,
    top_p: config.topP,
  });

  for await (const chunk of stream) {
    const chunkStr = chunk.toString();
    if (chunkStr.startsWith("data: ")) {
      try {
        const data = JSON.parse(chunkStr.slice(6));
        const content = data.choices?.[0]?.delta?.content;
        if (content) {
          yield content;
        }
      } catch (e) {
        console.error("Failed to parse chunk:", e);
      }
    }
  }
}
