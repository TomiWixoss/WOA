import { z } from "zod";

export const aiConfigSchema = z.object({
  provider: z.string().min(1, "Provider is required"),
  apiKey: z.string().min(1, "API Key is required"),
  model: z.string().min(1, "Model is required"),
  systemPrompt: z.string().default("You are a helpful AI assistant."),
  temperature: z.number().min(0).max(2).default(0.7),
  maxTokens: z.number().min(1).max(100000).default(1000),
  topP: z.number().min(0).max(1).default(0.9),
  enableStreaming: z.boolean().default(true),
});

export type AIConfigSchema = z.infer<typeof aiConfigSchema>;
