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
}

export interface ModelOption {
  id: string;
  name: string;
  provider: string;
}

export const PROVIDERS = [
  { value: "nvidia", label: "Nvidia NIM" },
  { value: "openrouter", label: "OpenRouter" },
  { value: "groq", label: "Groq" },
  { value: "cerebras", label: "Cerebras" },
  { value: "google-ai", label: "Google AI" },
] as const;

export const MODELS_BY_PROVIDER: Record<string, ModelOption[]> = {
  nvidia: [
    { id: "stepfun-ai/step-3.5-flash", name: "Step 3.5 Flash", provider: "nvidia" },
    { id: "meta/llama-3.1-8b-instruct", name: "Llama 3.1 8B", provider: "nvidia" },
    { id: "meta/llama-3.1-70b-instruct", name: "Llama 3.1 70B", provider: "nvidia" },
  ],
  openrouter: [
    { id: "meta-llama/llama-3.1-8b-instruct:free", name: "Llama 3.1 8B (Free)", provider: "openrouter" },
    { id: "google/gemma-2-9b-it:free", name: "Gemma 2 9B (Free)", provider: "openrouter" },
  ],
  groq: [
    { id: "llama-3.1-8b-instant", name: "Llama 3.1 8B Instant", provider: "groq" },
    { id: "mixtral-8x7b-32768", name: "Mixtral 8x7B", provider: "groq" },
  ],
  cerebras: [
    { id: "llama3.1-8b", name: "Llama 3.1 8B", provider: "cerebras" },
  ],
  "google-ai": [
    { id: "gemini-1.5-flash", name: "Gemini 1.5 Flash", provider: "google-ai" },
    { id: "gemini-1.5-pro", name: "Gemini 1.5 Pro", provider: "google-ai" },
  ],
};
