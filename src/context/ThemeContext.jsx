import { useEffect, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ThemeContext } from "./themeContextObject";

export function ThemeProvider({ children }) {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useLocalStorage("theme", null);

  const resolvedTheme = theme ?? (prefersDark ? "dark" : "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [resolvedTheme]);

  const value = useMemo(
    () => ({
      theme: resolvedTheme,
      toggleTheme: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      setTheme,
    }),
    [resolvedTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
