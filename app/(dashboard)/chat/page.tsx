import { Header } from "@/components/dashboard/header";
import { ChatInterface } from "@/components/chat/chat-interface";

export default function ChatPage() {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="Test Chat"
        description="Kiểm tra cấu hình AI của bạn với giao diện chat"
      />
      <div className="flex-1 overflow-hidden p-6">
        <div className="mx-auto h-full max-w-5xl">
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
