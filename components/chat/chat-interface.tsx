"use client";

import { useChat } from "@/lib/hooks/use-chat";
import { MessageList } from "./message-list";
import { ChatInput } from "./chat-input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Trash2, AlertCircle } from "lucide-react";
import { AgentSelector } from "./agent-selector";

export function ChatInterface() {
  const { messages, sendMessage, clearMessages, isLoading, error, selectedAgentId } = useChat();

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <AgentSelector />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-muted-foreground">
            {messages.length} tin nhắn
          </div>
          {messages.length > 0 && (
            <Button variant="outline" size="sm" onClick={clearMessages}>
              <Trash2 className="mr-2 h-4 w-4" />
              Xóa
            </Button>
          )}
        </div>
      </div>

      {!selectedAgentId && (
        <Alert className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Vui lòng chọn một agent để bắt đầu chat</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex-1 overflow-hidden rounded-lg border bg-card p-4">
        <MessageList messages={messages} />
      </div>

      <div className="mt-4">
        <ChatInput onSend={sendMessage} isLoading={isLoading} disabled={!selectedAgentId} />
      </div>
    </div>
  );
}
