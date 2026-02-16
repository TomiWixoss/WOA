import { AIO, type Provider } from "aio-llm";

let aioInstance: AIO | null = null;

interface AIOConfig {
  provider: Provider;
  apiKey: string;
  model: string;
}

export function getAIOClient(config: AIOConfig): AIO {
  const aioConfig = {
    providers: [
      {
        provider: config.provider as Provider,
        apiKeys: [{ key: config.apiKey }],
        models: [{ modelId: config.model }],
      },
    ],
    enableLogging: true,
  };

  if (!aioInstance) {
    aioInstance = new AIO(aioConfig);
  }

  return aioInstance;
}

export function resetAIOClient() {
  aioInstance = null;
}
