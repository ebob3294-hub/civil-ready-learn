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
