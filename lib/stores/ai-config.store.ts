import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AIConfig } from "@/types";

interface AIConfigStore {
  config: AIConfig;
  updateConfig: (config: Partial<AIConfig>) => void;
  resetConfig: () => void;
}

const defaultConfig: AIConfig = {
  provider: "nvidia",
  apiKey: "",
  model: "stepfun-ai/step-3.5-flash",
  systemPrompt: "You are a helpful AI assistant.",
  temperature: 0.7,
  maxTokens: 1000,
  topP: 0.9,
  stopSequences: [],
  enableStreaming: true,
};

export const useAIConfigStore = create<AIConfigStore>()(
  persist(
    (set) => ({
      config: defaultConfig,
      updateConfig: (newConfig) =>
        set((state) => ({
          config: { ...state.config, ...newConfig },
        })),
      resetConfig: () => set({ config: defaultConfig }),
    }),
    {
      name: "ai-config-storage",
    }
  )
);
