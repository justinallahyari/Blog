"use client";

import { useEffect } from "react";

export function CodeBlockEnhancer() {
  useEffect(() => {
    const handleClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const button = target?.closest(".copy-code-btn") as HTMLButtonElement | null;
      if (!button) return;

      const encoded = button.getAttribute("data-code");
      if (!encoded) return;

      try {
        const decoded = atob(encoded);
        await navigator.clipboard.writeText(decoded);
        const label = button.querySelector(".copy-label");
        if (label) {
          const original = label.textContent;
          label.textContent = "Copied!";
          setTimeout(() => {
            label.textContent = original || "Copy code";
          }, 2000);
        }
      } catch {}
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
