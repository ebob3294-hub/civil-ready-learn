import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

const KEY = "pc-theme";

const Ctx = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "light" || saved === "dark") {
        setThemeState(saved);
        return;
      }
      // Aucun choix enregistré : suivre la préférence du système.
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const apply = () => setThemeState(mq.matches ? "dark" : "light");
      apply();
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    } catch {
      /* stockage indisponible */
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(KEY, t);
    } catch {
      /* stockage indisponible */
    }
  };

  return <Ctx.Provider value={{ theme, setTheme }}>{children}</Ctx.Provider>;
}

export function useTheme() {
  return useContext(Ctx);
}
