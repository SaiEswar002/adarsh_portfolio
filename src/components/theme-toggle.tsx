import React from "react";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label="Toggle dark mode"
      data-testid="button-theme-toggle"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 w-5 h-5 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 w-5 h-5 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
      </div>
    </button>
  );
}
