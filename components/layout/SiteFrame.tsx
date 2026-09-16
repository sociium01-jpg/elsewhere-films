import type { ReactNode } from "react";
import { ConversationPanel } from "@/components/layout/ConversationPanel";
import { ConversationTab } from "@/components/layout/ConversationTab";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageFade } from "@/components/layout/PageFade";
import { ConversationProvider } from "@/lib/conversation";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <ConversationProvider>
      <Navbar />
      <div className="relative z-10">
        <PageFade>{children}</PageFade>
        <Footer />
      </div>
      <ConversationTab />
      <ConversationPanel />
    </ConversationProvider>
  );
}
