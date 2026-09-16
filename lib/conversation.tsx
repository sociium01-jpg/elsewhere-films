"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ConversationContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openConversation: () => void;
};

const ConversationContext = createContext<ConversationContextValue | null>(null);

export function ConversationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openConversation = useCallback(() => setOpen(true), []);
  const value = useMemo(
    () => ({ open, setOpen, openConversation }),
    [open, openConversation],
  );

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversation() {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error("useConversation must be used within ConversationProvider");
  }
  return context;
}
