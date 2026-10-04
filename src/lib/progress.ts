/**
 * Local (offline) persistence of QCM progress. Stored in localStorage so the
 * user can close the app and resume where they left off, with no network.
 */

export type QuizProgress = {
  quizId: string;
  index: number;
  score: number;
  answers: (number | null)[];
  done: boolean;
  updatedAt: number;
};

const KEY = "pc-qcm-progress-v1";

type Store = Record<string, QuizProgress>;

function isBrowser() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function readStore(): Store {
  if (!isBrowser()) return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Store;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStore(store: Store) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* quota or private mode: progress is simply not persisted */
  }
}

export function loadProgress(quizId: string): QuizProgress | null {
  return readStore()[quizId] ?? null;
}

export function loadAllProgress(): Store {
  return readStore();
}

export function saveProgress(progress: Omit<QuizProgress, "updatedAt">) {
  const store = readStore();
  store[progress.quizId] = { ...progress, updatedAt: Date.now() };
  writeStore(store);
}

export function clearProgress(quizId: string) {
  const store = readStore();
  delete store[quizId];
  writeStore(store);
}

export function clearAllProgress() {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}

/* ---------- Historique des résultats (persistant, hors-ligne) ---------- */

export type QuizResult = {
  quizId: string;
  title: string;
  score: number;
  total: number;
  date: number;
};

const HKEY = "pc-qcm-history-v1";

export function loadHistory(): QuizResult[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(HKEY);
    const arr = raw ? (JSON.parse(raw) as QuizResult[]) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function addResult(r: Omit<QuizResult, "date">) {
  if (!isBrowser()) return;
  const list = [{ ...r, date: Date.now() }, ...loadHistory()].slice(0, 500);
  try {
    window.localStorage.setItem(HKEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
}

export function clearHistory() {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(HKEY);
  } catch {
    /* ignore */
  }
}

export function getLevel(history: QuizResult[]) {
  const best = new Map<string, number>();
  for (const h of history) best.set(h.quizId, Math.max(best.get(h.quizId) ?? 0, h.score / h.total));
  const validated = [...best.values()].filter((v) => v >= 0.7).length;
  const levels = [
    { min: 0, name: "Recrue", ar: "مبتدئ" },
    { min: 3, name: "Sapeur", ar: "رجل إطفاء" },
    { min: 10, name: "Caporal", ar: "عريف" },
    { min: 25, name: "Sergent", ar: "رقيب" },
    { min: 45, name: "Adjudant", ar: "مساعد" },
    { min: 70, name: "Officier", ar: "ضابط" },
  ];
  let i = 0;
  levels.forEach((l, k) => { if (validated >= l.min) i = k; });
  const next = levels[i + 1];
  return { level: levels[i]!, next, validated, attempted: best.size };
}
