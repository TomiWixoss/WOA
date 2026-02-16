# Quick Start Guide

## 🚀 Start Development Server

```bash
npm run dev
```

Open http://localhost:3000

## 📝 First Steps

### 1. Configure AI (Required)

Navigate to **Config** tab (⚙️ icon in sidebar):

1. **Select Provider**: Choose "nvidia" (recommended for free tier)
2. **API Key**: Get free key at https://build.nvidia.com/settings/api-keys
3. **Model**: Select "stepfun-ai/step-3.5-flash" (fast & free)
4. **System Prompt**: Customize AI behavior (optional)
5. **Parameters**: Adjust temperature, max tokens, top_p (optional)
6. Click **Save Configuration**

### 2. Test Chat

Navigate to **Chat** tab (💬 icon):

1. Type a message in the input box
2. Press Enter or click Send
3. Watch AI response stream in real-time
4. View token usage at the bottom

## 🎯 Features Overview

### Config Tab (⚙️)
- Multi-provider support (Nvidia, OpenRouter, Groq, Cerebras, Google AI)
- API key management
- Model selection
- System prompt customization
- Temperature, max tokens, top_p controls
- Stop sequences configuration
- Persistent storage (saved in browser)

### Chat Tab (💬)
- Real-time streaming responses
- Message history
- Token usage tracking
- Clear conversation button
- Auto-scroll to latest message

### Coming Soon
- 🎮 **Playground**: Interactive world simulation
- 🏗️ **Builder**: Create custom worlds and NPCs
- 🧠 **AI Mind**: View AI thought process
- 📊 **Analytics**: Usage statistics and insights

## 🔑 Getting API Keys

### Nvidia NIM (Recommended - Free)
1. Visit https://build.nvidia.com/settings/api-keys
2. Sign in with Google/GitHub
3. Click "Generate API Key"
4. Copy and paste into Config tab

### Other Providers
- **OpenRouter**: https://openrouter.ai/keys
- **Groq**: https://console.groq.com/keys
- **Cerebras**: https://cloud.cerebras.ai/
- **Google AI**: https://makersuite.google.com/app/apikey

## 💡 Tips

1. **Save Config First**: Always configure and save before testing chat
2. **Free Models**: Use Nvidia's "stepfun-ai/step-3.5-flash" for free tier
3. **Temperature**: 
   - Low (0.1-0.3): Focused, deterministic responses
   - Medium (0.5-0.7): Balanced creativity
   - High (0.8-1.0): Creative, varied responses
4. **Max Tokens**: Controls response length (1000 = ~750 words)
5. **System Prompt**: Define AI personality and behavior

## 🐛 Troubleshooting

### "Invalid API Key" Error
- Check key is copied correctly (no extra spaces)
- Verify key is active in provider dashboard
- Try regenerating key

### No Response / Timeout
- Check internet connection
- Verify provider service status
- Try different model
- Reduce max_tokens

### Slow Responses
- Switch to faster model (e.g., "step-3.5-flash")
- Reduce max_tokens
- Try Groq provider (fastest inference)

## 📚 Next Steps

1. Experiment with different models and providers
2. Customize system prompts for specific use cases
3. Adjust parameters to find optimal settings
4. Stay tuned for Playground, Builder, and AI Mind features!

## 🆘 Need Help?

- Check console for error messages (F12 in browser)
- Review API provider documentation
- Verify API key has sufficient credits/quota
