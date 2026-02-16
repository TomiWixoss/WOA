import { z } from "zod";

export const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant", "system"]),
  content: z.string().min(1, "Message cannot be empty"),
});

export const chatRequestSchema = z.object({
  messages: z.array(chatMessageSchema),
  config: z.object({
    provider: z.string(),
    apiKey: z.string(),
    model: z.string(),
    systemPrompt: z.string().optional(),
    temperature: z.number().optional(),
    maxTokens: z.number().optional(),
    topP: z.number().optional(),
  }),
});

export type ChatRequestSchema = z.infer<typeof chatRequestSchema>;
