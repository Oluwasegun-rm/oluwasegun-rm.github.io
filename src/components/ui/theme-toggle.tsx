"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";

const storageKey = "theme";

function resolvedTheme(): "light" | "dark" {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  function toggle() {
    const next = resolvedTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(storageKey, next);
    } catch {}
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Switch between light and dark theme">
      <HugeiconsIcon icon={Moon02Icon} size={15} strokeWidth={1.5} className="theme-toggle__moon" aria-hidden="true" />
      <HugeiconsIcon icon={Sun03Icon} size={15} strokeWidth={1.5} className="theme-toggle__sun" aria-hidden="true" />
    </button>
  );
}

export const themeScript = `(function(){try{var t=localStorage.getItem("${storageKey}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;}catch(e){}})();`;
