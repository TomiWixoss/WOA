"use client";

import { useAgentStore } from "@/lib/stores/agent.store";
import { useChatStore } from "@/lib/stores/chat.store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Bot } from "lucide-react";

export function AgentSelector() {
  const { agents } = useAgentStore();
  const { selectedAgentId, setSelectedAgent } = useChatStore();

  return (
    <div className="space-y-2">
      <Label htmlFor="agent-select" className="flex items-center gap-2">
        <Bot className="h-4 w-4" />
        Chọn Agent
      </Label>
      <Select value={selectedAgentId || ""} onValueChange={setSelectedAgent}>
        <SelectTrigger id="agent-select">
          <SelectValue placeholder="Chọn một agent để chat..." />
        </SelectTrigger>
        <SelectContent>
          {agents.map((agent) => (
            <SelectItem key={agent.id} value={agent.id}>
              <div className="flex flex-col">
                <span className="font-medium">{agent.name}</span>
                {agent.description && (
                  <span className="text-xs text-muted-foreground">{agent.description}</span>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
