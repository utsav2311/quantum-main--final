"use client";

import { LeadModalProvider } from "@/context/LeadModalContext";

export function Providers({ children }) {
  return (
    <LeadModalProvider>
      {children}
    </LeadModalProvider>
  );
}
