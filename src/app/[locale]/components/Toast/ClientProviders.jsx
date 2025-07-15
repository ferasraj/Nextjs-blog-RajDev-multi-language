"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import ToastInitializer from "./ToastInitializer";

export default function ClientProviders({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      {mounted && <ToastInitializer />}
    </ThemeProvider>
  );
}
