"use client";

import { useEffect } from "react";

export default function ManualSWRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("✅ Registered SW manually:", reg);
        })
        .catch((err) => {
          console.error("❌ Manual SW registration failed:", err);
        });
    }
  }, []);

  return null;
}
