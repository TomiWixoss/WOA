export interface AIOMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface AIOChatCompletionParams {
  provider: string;
  model: string;
  messages: AIOMessage[];
  systemPrompt?: string;
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
}

export interface AIOChatResponse {
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}
