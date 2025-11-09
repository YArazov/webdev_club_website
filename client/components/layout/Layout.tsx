import { PropsWithChildren } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(80%_60%_at_50%_-10%,hsl(var(--accent)/0.15),transparent_60%),radial-gradient(50%_40%_at_70%_10%,hsl(var(--primary)/0.15),transparent_60%)]">
      <SiteHeader />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
