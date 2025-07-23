"use client";

import { useEffect } from "react";

export default function CheckServiceWorker() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        console.log("✅ Service Worker Registrations:", registrations);
      });
    }
  }, []);

  return null; // ما نعرض شيء للمستخدم
}
