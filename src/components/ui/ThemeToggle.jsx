import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { IconButton } from "./IconButton";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <IconButton
      icon={isDark ? Sun : Moon}
      label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={className}
    />
  );
}
