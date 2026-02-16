export interface Agent {
  id: string;
  name: string;
  description: string;
  systemPrompt: string;
  temperature: number;
  maxTokens: number;
  topP: number;
  createdAt: number;
  updatedAt: number;
}

export interface AIConfig {
  provider: string;
  apiKey: string;
  model: string;
  systemPrompt: string;
  temperature: number;
  maxTokens: number;
  topP: number;
  stopSequences: string[];
  enableStreaming: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
}

export type Message = ChatMessage;

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  selectedAgentId: string | null;
}

export interface ModelOption {
  id: string;
  name: string;
  provider: string;
}

export const PROVIDERS = [
  { value: "nvidia", label: "Nvidia NIM" },
] as const;

export const MODELS_BY_PROVIDER: Record<string, ModelOption[]> = {
  nvidia: [
    { id: "stepfun-ai/step-3.5-flash", name: "Step 3.5 Flash", provider: "nvidia" },
  ],
};
