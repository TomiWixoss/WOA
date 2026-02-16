"use client";

import { MODELS_BY_PROVIDER, type ModelOption } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ModelSelectorProps {
  provider: string;
  value: string;
  onChange: (value: string) => void;
}

export function ModelSelector({ provider, value, onChange }: ModelSelectorProps) {
  const models = MODELS_BY_PROVIDER[provider] || [];

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select a model" />
      </SelectTrigger>
      <SelectContent>
        {models.map((model) => (
          <SelectItem key={model.id} value={model.id}>
            {model.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
