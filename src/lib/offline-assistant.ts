import { lessons } from "@/data/all-lessons";
import { quizzes } from "@/data/all-quizzes";
import type { Lesson } from "@/data/types";

const STOP = new Set(
  "le la les un une des de du d l et ou en au aux a à est sont que qui quoi quel quelle quels quelles dans pour par sur avec sans ce cet cette ces se sa son ses il elle on ne pas plus quelle entre est-ce comment pourquoi faut doit the".split(" "),
);

const norm = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\u0600-\u06ff\s]/g, " ");

const tokens = (s: string) => norm(s).split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w));

function score(text: string, terms: string[]) {
  const t = norm(text);
  let s = 0;
  for (const w of terms) if (t.includes(w)) s += 1;
  return s;
}

const lessonText = (l: Lesson) =>
  [l.title, l.summary, ...l.blocks.map((b) => (b.type === "list" ? b.items.join(" ") : b.text))].join(" ");

export type OfflineResult = {
  lessons: { id: string; title: string; summary: string; points: string[] }[];
  questions: { quizId: string; question: string; answer: string; explanation: string }[];
};

export function searchOffline(query: string): OfflineResult {
  const terms = tokens(query);
  if (!terms.length) return { lessons: [], questions: [] };

  const ls = lessons
    .map((l) => ({ l, s: score(l.title, terms) * 3 + score(lessonText(l), terms) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)
    .map(({ l }) => {
      const points: string[] = [];
      for (const b of l.blocks) {
        if (b.type === "rule") points.push(b.text);
        else if (b.type === "list") points.push(...b.items.filter((i) => score(i, terms) > 0));
      }
      return { id: l.id, title: l.title, summary: l.summary, points: points.slice(0, 5) };
    });

  const qs: { s: number; v: OfflineResult["questions"][number] }[] = [];
  for (const qz of quizzes)
    for (const q of qz.questions) {
      const s = score(q.question, terms) * 2 + score(q.explanation, terms);
      if (s > 0)
        qs.push({ s, v: { quizId: qz.id, question: q.question, answer: q.options[q.answer] ?? "", explanation: q.explanation } });
    }
  qs.sort((a, b) => b.s - a.s);
  const seen = new Set<string>();
  const questions = qs.filter((x) => !seen.has(x.v.question) && seen.add(x.v.question)).slice(0, 3).map((x) => x.v);

  return { lessons: ls, questions };
}
