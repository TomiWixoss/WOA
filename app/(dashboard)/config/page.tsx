import { Header } from "@/components/dashboard/header";
import { AIConfigForm } from "@/components/config/ai-config-form";

export default function ConfigPage() {
  return (
    <div className="flex h-full flex-col">
      <Header
        title="AI Configuration"
        description="Configure your AI provider, model, and parameters"
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-3xl">
          <AIConfigForm />
        </div>
      </div>
    </div>
  );
}
