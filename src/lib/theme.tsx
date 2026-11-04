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
    let mq: MediaQueryList | null = null;
    let onChange: (() => void) | null = null;
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "light" || saved === "dark") {
        setThemeState(saved);
      } else {
        // Aucun choix enregistré : suivre la préférence du système.
        mq = window.matchMedia("(prefers-color-scheme: dark)");
        onChange = () => setThemeState(mq!.matches ? "dark" : "light");
        onChange();
        mq.addEventListener("change", onChange);
      }
    } catch {
      /* stockage indisponible */
    }
    return () => {
      if (mq && onChange) mq.removeEventListener("change", onChange);
    };
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
