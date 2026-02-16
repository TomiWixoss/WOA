"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Save, X } from "lucide-react";
import type { Agent } from "@/types";

interface AgentFormProps {
  agent?: Agent;
  onSave: (agent: Omit<Agent, "id" | "createdAt" | "updatedAt">) => void;
  onCancel: () => void;
}

export function AgentForm({ agent, onSave, onCancel }: AgentFormProps) {
  const [formData, setFormData] = useState({
    name: agent?.name || "",
    description: agent?.description || "",
    systemPrompt: agent?.systemPrompt || "Bạn là một trợ lý AI hữu ích.",
    temperature: agent?.temperature || 0.7,
    maxTokens: agent?.maxTokens || 16384,
    topP: agent?.topP || 0.9,
  });

  const handleSubmit = () => {
    if (!formData.name.trim()) return;
    onSave(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{agent ? "Chỉnh Sửa Agent" : "Tạo Agent Mới"}</CardTitle>
        <CardDescription>
          {agent ? "Cập nhật thông tin agent" : "Tạo một agent AI với cấu hình tùy chỉnh"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Tên Agent *</Label>
          <Input
            id="name"
            placeholder="VD: Trợ Lý Lập Trình"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Mô Tả</Label>
          <Input
            id="description"
            placeholder="VD: Chuyên gia về Python và JavaScript"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="systemPrompt">System Prompt</Label>
          <Textarea
            id="systemPrompt"
            placeholder="Bạn là một trợ lý AI..."
            rows={6}
            value={formData.systemPrompt}
            onChange={(e) => setFormData({ ...formData, systemPrompt: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="temperature">Nhiệt Độ</Label>
            <span className="text-sm text-muted-foreground">{formData.temperature}</span>
          </div>
          <Slider
            id="temperature"
            min={0}
            max={2}
            step={0.1}
            value={[formData.temperature]}
            onValueChange={([value]: number[]) => setFormData({ ...formData, temperature: value })}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="maxTokens">Max Tokens</Label>
            <span className="text-sm text-muted-foreground">{formData.maxTokens}</span>
          </div>
          <Slider
            id="maxTokens"
            min={1000}
            max={16384}
            step={1000}
            value={[formData.maxTokens]}
            onValueChange={([value]: number[]) => setFormData({ ...formData, maxTokens: value })}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="topP">Top P</Label>
            <span className="text-sm text-muted-foreground">{formData.topP}</span>
          </div>
          <Slider
            id="topP"
            min={0}
            max={1}
            step={0.05}
            value={[formData.topP]}
            onValueChange={([value]: number[]) => setFormData({ ...formData, topP: value })}
          />
        </div>

        <div className="flex gap-3">
          <Button onClick={handleSubmit} className="flex-1" disabled={!formData.name.trim()}>
            <Save className="mr-2 h-4 w-4" />
            {agent ? "Cập Nhật" : "Tạo Agent"}
          </Button>
          <Button onClick={onCancel} variant="outline">
            <X className="mr-2 h-4 w-4" />
            Hủy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
