"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

function getUserTheme(userId: string): string {
  if (userId === "customerA") return "/themes/customerA.css";
  if (userId === "customerB") return "/themes/customerB.css";

  return "/themes/customerA.css"; // default
}

export default function ThemeLoader() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId"); // ?filter=recent

  console.log("userId", userId);

  useEffect(() => {
    const existing = document.getElementById("customer-theme");
    if (existing) existing.remove();

    // Create new link tag
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = getUserTheme(userId!); // example: /themes/customerA.css
    link.id = "customer-theme";

    document.head.appendChild(link);

    return () => {
      const el = document.getElementById("customer-theme");

      if (el) el.remove();
    };
  }, [userId]);

  return null;
}
