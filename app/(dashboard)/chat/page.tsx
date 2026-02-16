import { Header } from "@/components/dashboard/header";
import { ChatInterface } from "@/components/chat/chat-interface";

export default function ChatPage() {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="Chat Test"
        description="Test your AI configuration with a chat interface"
      />
      <div className="flex-1 overflow-hidden p-6">
        <div className="mx-auto h-full max-w-5xl">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
