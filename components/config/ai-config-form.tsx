"use client";

import { useEffect, useState } from "react";
import { useAIConfig } from "@/lib/hooks/use-ai-config";
import { PROVIDERS, MODELS_BY_PROVIDER } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ModelSelector } from "./model-selector";
import { Slider } from "@/components/ui/slider";
import { RotateCcw, Save } from "lucide-react";
import { toast } from "sonner";

export function AIConfigForm() {
  const { config, updateConfig, resetConfig } = useAIConfig();
  const [localConfig, setLocalConfig] = useState(config);

  useEffect(() => {
    setLocalConfig(config);
  }, [config]);

  const handleProviderChange = (provider: string) => {
    const firstModel = MODELS_BY_PROVIDER[provider]?.[0]?.id || "";
    setLocalConfig({ ...localConfig, provider, model: firstModel });
  };

  const handleSave = () => {
    const result = updateConfig(localConfig);
    if (result.success) {
      toast.success("Configuration saved successfully!");
    } else {
      toast.error(result.error || "Failed to save configuration");
    }
  };

  const handleReset = () => {
    resetConfig();
    toast.info("Configuration reset to defaults");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Provider Settings</CardTitle>
          <CardDescription>Configure your AI provider and authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="provider">Provider</Label>
            <Select value={localConfig.provider} onValueChange={handleProviderChange}>
              <SelectTrigger id="provider">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PROVIDERS.map((provider) => (
                  <SelectItem key={provider.value} value={provider.value}>
                    {provider.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Enter your API key"
              value={localConfig.apiKey}
              onChange={(e) => setLocalConfig({ ...localConfig, apiKey: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <ModelSelector
              provider={localConfig.provider}
              value={localConfig.model}
              onChange={(model) => setLocalConfig({ ...localConfig, model })}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Model Parameters</CardTitle>
          <CardDescription>Fine-tune the model behavior</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="systemPrompt">System Prompt</Label>
            <Textarea
              id="systemPrompt"
              placeholder="You are a helpful AI assistant..."
              rows={4}
              value={localConfig.systemPrompt}
              onChange={(e) => setLocalConfig({ ...localConfig, systemPrompt: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="temperature">Temperature</Label>
              <span className="text-sm text-muted-foreground">{localConfig.temperature}</span>
            </div>
            <Slider
              id="temperature"
              min={0}
              max={2}
              step={0.1}
              value={[localConfig.temperature]}
              onValueChange={([value]: number[]) => setLocalConfig({ ...localConfig, temperature: value })}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="maxTokens">Max Tokens</Label>
              <span className="text-sm text-muted-foreground">{localConfig.maxTokens}</span>
            </div>
            <Slider
              id="maxTokens"
              min={100}
              max={10000}
              step={100}
              value={[localConfig.maxTokens]}
              onValueChange={([value]: number[]) => setLocalConfig({ ...localConfig, maxTokens: value })}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="topP">Top P</Label>
              <span className="text-sm text-muted-foreground">{localConfig.topP}</span>
            </div>
            <Slider
              id="topP"
              min={0}
              max={1}
              step={0.05}
              value={[localConfig.topP]}
              onValueChange={([value]: number[]) => setLocalConfig({ ...localConfig, topP: value })}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button onClick={handleSave} className="flex-1">
          <Save className="mr-2 h-4 w-4" />
          Save Configuration
        </Button>
        <Button onClick={handleReset} variant="outline">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}
