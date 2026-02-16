import { getAIOClient } from '@/lib/ai/client';
import { type Message } from '@/types';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { messages, config } = await req.json();

    const aio = getAIOClient({
      provider: config.provider as any,
      apiKey: config.apiKey,
      model: config.model,
    });

    const stream = await aio.chatCompletionStream({
      provider: config.provider,
      model: config.model,
      messages: messages.map((m: Message) => ({
        role: m.role,
        content: m.content,
      })),
      systemPrompt: config.systemPrompt || undefined,
      temperature: config.temperature,
      max_tokens: config.maxTokens,
      top_p: config.topP,
      stop: config.stopSequences.length > 0 ? config.stopSequences : undefined,
    });

    return new Response(stream as any, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
