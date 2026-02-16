import { useAIConfigStore } from "@/lib/stores/ai-config.store";
import { aiConfigSchema } from "@/lib/validators/ai-config.schema";
import type { AIConfig } from "@/types";

export function useAIConfig() {
  const { config, updateConfig, resetConfig } = useAIConfigStore();

  const validateAndUpdate = (newConfig: Partial<AIConfig>) => {
    try {
      const validated = aiConfigSchema.parse({ ...config, ...newConfig });
      updateConfig(validated);
      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : "Validation failed" };
    }
  };

  const isConfigValid = () => {
    try {
      aiConfigSchema.parse(config);
      return true;
    } catch {
      return false;
    }
  };

  return {
    config,
    updateConfig: validateAndUpdate,
    resetConfig,
    isConfigValid,
  };
}
