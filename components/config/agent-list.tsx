"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Bot } from "lucide-react";
import type { Agent } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

interface AgentListProps {
  agents: Agent[];
  onEdit: (agent: Agent) => void;
  onDelete: (id: string) => void;
}

export function AgentList({ agents, onEdit, onDelete }: AgentListProps) {
  if (agents.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Bot className="h-12 w-12 text-muted-foreground opacity-50" />
          <p className="mt-4 text-muted-foreground">Chưa có agent nào</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {agents.map((agent) => (
        <Card key={agent.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  {agent.name}
                </CardTitle>
                {agent.description && (
                  <CardDescription className="mt-1">{agent.description}</CardDescription>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={() => onEdit(agent)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDelete(agent.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="rounded-md bg-muted p-3">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {agent.systemPrompt}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Nhiệt độ: {agent.temperature}</Badge>
                <Badge variant="secondary">Max Tokens: {agent.maxTokens}</Badge>
                <Badge variant="secondary">Top P: {agent.topP}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Cập nhật {formatDistanceToNow(agent.updatedAt, { addSuffix: true, locale: vi })}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
