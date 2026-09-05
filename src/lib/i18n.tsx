import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "ar";

const KEY = "pc-lang";

type Dict = Record<string, { fr: string; ar: string }>;

export const t9n: Dict = {
  appName: { fr: "Protection Civile", ar: "الوقاية المدنية" },
  home: { fr: "Accueil", ar: "الرئيسية" },
  lessons: { fr: "Leçons", ar: "الدروس" },
  quizzes: { fr: "QCM", ar: "الاختبارات" },
  materiel: { fr: "Matériel", ar: "العتاد" },
  game: { fr: "Jeu", ar: "لعبة" },
  about: { fr: "À propos", ar: "حول التطبيق" },
  back: { fr: "Retour", ar: "رجوع" },
  language: { fr: "Langue", ar: "اللغة" },
  fiche: { fr: "Fiche matériel", ar: "بطاقة العتاد" },
  composition: { fr: "Composition & usage", ar: "المكونات والاستخدام" },
  specs: { fr: "Caractéristiques", ar: "المواصفات" },
  weight: { fr: "Poids / encombrement", ar: "الوزن والحجم" },
  rules: { fr: "Règles d'emploi", ar: "قواعد الاستعمال" },
  safety: { fr: "Sécurité & avertissements", ar: "السلامة والتحذيرات" },
  carry: { fr: "À emporter en urgence", ar: "ما يجب حمله في حالة الطوارئ" },
  search: { fr: "Rechercher", ar: "بحث" },
  start: { fr: "Commencer", ar: "ابدأ" },
  resume: { fr: "Reprendre", ar: "متابعة" },
  reset: { fr: "Réinitialiser", ar: "إعادة التعيين" },
  score: { fr: "Score", ar: "النتيجة" },
  next: { fr: "Suivant", ar: "التالي" },
  replay: { fr: "Rejouer", ar: "إعادة اللعب" },
  questions: { fr: "questions", ar: "سؤال" },
  offline: { fr: "Fonctionne hors ligne", ar: "يعمل بدون إنترنت" },
};

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "fr",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "ar" || saved === "fr") setLangState(saved);
    } catch {
      /* stockage indisponible */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {
      /* stockage indisponible */
    }
  };

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}

export function useT() {
  const { lang } = useLang();
  return (key: keyof typeof t9n | string) => t9n[key]?.[lang] ?? String(key);
}
