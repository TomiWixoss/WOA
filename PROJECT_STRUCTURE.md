# Project Structure & Architecture

## 📁 Directory Structure

```
WOA/
├── app/                          # Next.js App Router
│   ├── (dashboard)/             # Dashboard route group
│   │   ├── layout.tsx           # Dashboard layout with sidebar
│   │   ├── config/              # AI Configuration page
│   │   │   └── page.tsx
│   │   ├── chat/                # Chat Test page
│   │   │   └── page.tsx
│   │   ├── playground/          # Placeholder
│   │   ├── builder/             # Placeholder
│   │   ├── analytics/           # Placeholder
│   │   └── ai-mind/             # Placeholder
│   ├── api/
│   │   └── chat/
│   │       └── route.ts         # Chat streaming API (Node.js runtime)
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Redirect to /config
│   └── globals.css              # Global styles (Tailwind v4)
│
├── components/
│   ├── ui/                      # shadcn/ui components (18 components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── slider.tsx
│   │   ├── textarea.tsx
│   │   └── ... (12 more)
│   ├── dashboard/               # Dashboard-specific components
│   │   ├── sidebar.tsx          # Vertical navigation sidebar
│   │   └── header.tsx           # Top header bar
│   ├── config/                  # AI Config components
│   │   ├── ai-config-form.tsx   # Main config form
│   │   └── model-selector.tsx   # Model dropdown
│   ├── chat/                    # Chat components
│   │   ├── chat-interface.tsx   # Main chat container
│   │   ├── message-list.tsx     # Message display
│   │   └── chat-input.tsx       # Input form
│   └── providers.tsx            # React Query + Tooltip providers
│
├── lib/
│   ├── ai/                      # AI client & types
│   │   ├── client.ts            # AIO singleton instance
│   │   └── types.ts             # AI-specific types
│   ├── stores/                  # Zustand state management
│   │   ├── ai-config.store.ts   # AI config state (persisted)
│   │   └── chat.store.ts        # Chat messages state
│   ├── hooks/                   # Custom React hooks
│   │   ├── use-ai-config.ts     # AI config logic
│   │   └── use-chat.ts          # Chat logic (API calls)
│   ├── actions/                 # Business logic (server-side)
│   │   └── chat.actions.ts      # Chat operations
│   ├── validators/              # Zod schemas
│   │   ├── ai-config.schema.ts  # AI config validation
│   │   └── chat.schema.ts       # Chat validation
│   └── utils.ts                 # Utility functions (cn, etc.)
│
├── types/
│   └── index.ts                 # Global TypeScript types
│
├── public/                      # Static assets
│
├── .env.example                 # Environment variables template
├── components.json              # shadcn/ui config
├── next.config.ts               # Next.js config
├── tsconfig.json                # TypeScript config
├── postcss.config.mjs           # PostCSS config (Tailwind v4)
├── package.json                 # Dependencies
├── README.md                    # Main documentation
├── QUICKSTART.md                # Quick start guide
└── PROJECT_STRUCTURE.md         # This file
```

## 🏗️ Architecture Patterns

### 1. Separation of Concerns

**UI Layer** (`components/`)
- Pure presentation components
- Receive props, emit callbacks
- No business logic
- Client components (`"use client"`)

**Logic Layer** (`lib/hooks/`)
- Custom React hooks
- Connect stores to components
- Handle side effects
- Orchestrate data flow

**Business Logic** (`lib/actions/`)
- Pure functions
- Data transformations
- API integrations
- Server-side operations

**State Layer** (`lib/stores/`)
- Zustand stores
- State mutations
- Persistence logic
- Global state management

**Data Layer** (`lib/ai/`)
- External API clients
- Type definitions
- Service integrations

### 2. State Management Strategy

**Client State** (Zustand)
- AI configuration (persisted to localStorage)
- Chat messages (in-memory)
- UI state (loading, errors)

**Server State** (React Query)
- API call caching
- Background refetching
- Optimistic updates

**URL State** (Next.js)
- Active tab (route-based)
- Navigation state

### 3. Data Flow

```
User Input
    ↓
Component (UI)
    ↓
Hook (Logic)
    ↓
Store (State) / API Route
    ↓
Action (Business Logic)
    ↓
AI Client (External API)
    ↓
Response Stream
    ↓
Store Update
    ↓
Component Re-render
```

### 4. Design Patterns Used

**Singleton Pattern**
- `lib/ai/client.ts`: Single AIO instance

**Store Pattern**
- `lib/stores/*.store.ts`: Zustand stores

**Provider Pattern**
- `components/providers.tsx`: React Query + Tooltip

**Compound Component Pattern**
- Chat interface components work together

**Server Actions Pattern**
- `app/api/chat/route.ts`: Streaming API

**Custom Hook Pattern**
- `lib/hooks/*.ts`: Reusable logic

## 🔄 Component Communication

### Config → Chat Flow

1. User configures AI in Config tab
2. Config saved to `useAIConfigStore` (persisted)
3. User navigates to Chat tab
4. Chat reads config from store
5. Chat sends message with config to API
6. API creates AIO client with config
7. Response streams back to Chat

### Store Persistence

```typescript
// AI Config Store (Persisted)
useAIConfigStore → localStorage → Survives refresh

// Chat Store (In-Memory)
useChatStore → RAM → Cleared on refresh
```

## 🎨 Styling Architecture

**Tailwind CSS v4**
- Utility-first CSS
- CSS variables for theming
- OKLCH color space
- Custom design tokens

**Theme System**
```css
:root {
  --primary: oklch(...);
  --secondary: oklch(...);
  --muted: oklch(...);
  --accent: oklch(...);
  --destructive: oklch(...);
}
```

**Component Variants**
- `class-variance-authority` for variant management
- `tailwind-merge` + `clsx` for className utilities

## 🔐 Type Safety

**TypeScript Strict Mode**
- All files typed
- No implicit any
- Strict null checks

**Zod Validation**
- Runtime type checking
- Schema validation
- Type inference

**Type Exports**
```typescript
types/index.ts → Global types
lib/ai/types.ts → AI-specific types
```

## 📦 Dependencies

### Core
- `next@16.1.6` - React framework
- `react@19.2.3` - UI library
- `typescript@5` - Type safety

### AI
- `aio-llm` - Multi-provider LLM client

### State Management
- `zustand` - State management
- `immer` - Immutable updates
- `@tanstack/react-query` - Server state

### UI
- `tailwindcss@4` - Styling
- `shadcn/ui` - Component library
- `lucide-react` - Icons
- `framer-motion` - Animations

### Validation
- `zod` - Schema validation

### Utilities
- `nanoid` - ID generation
- `date-fns` - Date utilities
- `react-markdown` - Markdown rendering

## 🚀 Build & Deploy

**Development**
```bash
npm run dev  # Start dev server (Turbopack)
```

**Production**
```bash
npm run build  # Build for production
npm run start  # Start production server
```

**Type Checking**
```bash
npm run lint  # ESLint + TypeScript check
```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript compiler options
- `postcss.config.mjs` - PostCSS plugins (Tailwind)
- `components.json` - shadcn/ui configuration
- `eslint.config.mjs` - ESLint rules
- `.env.local` - Environment variables (not in repo)

## 📝 Code Style

**File Naming**
- Components: `kebab-case.tsx`
- Types: `kebab-case.ts`
- Stores: `*.store.ts`
- Hooks: `use-*.ts`
- Actions: `*.actions.ts`

**Component Structure**
```typescript
"use client"; // If needed

import { ... } from "...";

interface Props {
  // Props definition
}

export function ComponentName({ props }: Props) {
  // Hooks
  // Event handlers
  // Render
  return (
    <div>...</div>
  );
}
```

**Store Structure**
```typescript
import { create } from "zustand";

interface Store {
  state: Type;
  actions: () => void;
}

export const useStore = create<Store>()((set) => ({
  state: initialValue,
  actions: () => set(...),
}));
```

## 🎯 Future Enhancements

1. **Playground Tab**: Interactive world simulation
2. **Builder Tab**: World/NPC creator
3. **AI Mind Tab**: Thought process visualization
4. **Analytics Tab**: Usage statistics
5. **Multi-world Support**: Multiple simultaneous worlds
6. **Export/Import**: Save/load world states
7. **Collaborative Mode**: Multi-user worlds
8. **Plugin System**: Extensible architecture
