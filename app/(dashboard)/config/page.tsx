"use client";

import { useState } from "react";
import { Header } from "@/components/dashboard/header";
import { ApiKeyForm } from "@/components/config/api-key-form";
import { AgentList } from "@/components/config/agent-list";
import { AgentForm } from "@/components/config/agent-form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useAgentStore } from "@/lib/stores/agent.store";
import type { Agent } from "@/types";
import { toast } from "sonner";

export default function ConfigPage() {
  const { agents, apiKey, addAgent, updateAgent, deleteAgent, setApiKey } = useAgentStore();
  const [editingAgent, setEditingAgent] = useState<Agent | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleSaveAgent = (agentData: Omit<Agent, "id" | "createdAt" | "updatedAt">) => {
    if (editingAgent) {
      updateAgent(editingAgent.id, agentData);
      toast.success("Đã cập nhật agent");
      setEditingAgent(null);
    } else {
      addAgent(agentData);
      toast.success("Đã tạo agent mới");
      setIsCreating(false);
    }
  };

  const handleDeleteAgent = (id: string) => {
    if (agents.length === 1) {
      toast.error("Không thể xóa agent cuối cùng");
      return;
    }
    deleteAgent(id);
    toast.success("Đã xóa agent");
  };

  return (
    <div className="flex h-full flex-col">
      <Header
        title="Xây Dựng Agent"
        description="Tạo và quản lý các AI agents với cấu hình tùy chỉnh"
      />
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <ApiKeyForm apiKey={apiKey} onSave={setApiKey} />

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Agents của bạn</h2>
              <p className="text-sm text-muted-foreground">
                {agents.length} agent{agents.length !== 1 ? "s" : ""}
              </p>
            </div>
            {!isCreating && !editingAgent && (
              <Button onClick={() => setIsCreating(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Tạo Agent
              </Button>
            )}
          </div>

          {(isCreating || editingAgent) && (
            <AgentForm
              agent={editingAgent || undefined}
              onSave={handleSaveAgent}
              onCancel={() => {
                setIsCreating(false);
                setEditingAgent(null);
              }}
            />
          )}

          {!isCreating && !editingAgent && (
            <AgentList
              agents={agents}
              onEdit={setEditingAgent}
              onDelete={handleDeleteAgent}
            />
          )}
        </div>
      </div>
    </div>
  );
}
