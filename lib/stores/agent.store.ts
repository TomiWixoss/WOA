import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Agent } from "@/types";
import { nanoid } from "nanoid";

interface AgentStore {
  agents: Agent[];
  apiKey: string;
  addAgent: (agent: Omit<Agent, "id" | "createdAt" | "updatedAt">) => Agent;
  updateAgent: (id: string, updates: Partial<Omit<Agent, "id" | "createdAt">>) => void;
  deleteAgent: (id: string) => void;
  getAgent: (id: string) => Agent | undefined;
  setApiKey: (key: string) => void;
}

const defaultAgent: Omit<Agent, "id" | "createdAt" | "updatedAt"> = {
  name: "Trợ Lý Mặc Định",
  description: "Trợ lý AI đa năng, hữu ích",
  systemPrompt: "Bạn là một trợ lý AI hữu ích, thông minh và thân thiện.",
  temperature: 0.7,
  maxTokens: 16384,
  topP: 0.9,
};

export const useAgentStore = create<AgentStore>()(
  persist(
    (set, get) => ({
      agents: [],
      apiKey: "",
      
      addAgent: (agent) => {
        const newAgent: Agent = {
          ...agent,
          id: nanoid(),
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        
        set((state) => ({
          agents: [...state.agents, newAgent],
        }));
        
        return newAgent;
      },
      
      updateAgent: (id, updates) => {
        set((state) => ({
          agents: state.agents.map((agent) =>
            agent.id === id
              ? { ...agent, ...updates, updatedAt: Date.now() }
              : agent
          ),
        }));
      },
      
      deleteAgent: (id) => {
        set((state) => ({
          agents: state.agents.filter((agent) => agent.id !== id),
        }));
      },
      
      getAgent: (id) => {
        return get().agents.find((agent) => agent.id === id);
      },
      
      setApiKey: (key) => {
        set({ apiKey: key });
      },
    }),
    {
      name: "agent-storage",
      onRehydrateStorage: () => (state) => {
        // Tạo agent mặc định nếu chưa có
        if (state && state.agents.length === 0) {
          state.addAgent(defaultAgent);
        }
      },
    }
  )
);
