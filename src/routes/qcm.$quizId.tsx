import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, RotateCcw, Save, Trophy, X } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { getQuiz } from "@/data/content";
import { clearProgress, loadProgress, saveProgress } from "@/lib/progress";

export const Route = createFileRoute("/qcm/$quizId")({
  loader: ({ params }) => {
    const quiz = getQuiz(params.quizId);
    if (!quiz) throw notFound();
    return { quiz };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "QCM introuvable" }, { name: "robots", content: "noindex" }] };
    }
    const { quiz } = loaderData;
    const description = `QCM ${quiz.title} : ${quiz.questions.length} questions avec correction immédiate, score final et reprise automatique hors ligne.`;
    return {
      meta: [
        { title: `${quiz.title} — QCM Protection Civile` },
        { name: "description", content: description },
        { property: "og:title", content: `QCM ${quiz.title}` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: QuizRunner,
});

function QuizRunner() {
  const { quiz } = Route.useLoaderData();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [resumed, setResumed] = useState(false);

  // Restore locally saved progress after hydration (offline-friendly).
  useEffect(() => {
    const saved = loadProgress(quiz.id);
    if (saved && (saved.index > 0 || saved.done || saved.score > 0)) {
      setIndex(Math.min(saved.index, quiz.questions.length - 1));
      setScore(saved.score);
      setDone(saved.done);
      setResumed(!saved.done);
    }
    setHydrated(true);
  }, [quiz.id, quiz.questions.length]);

  // Persist after every change, once restored.
  useEffect(() => {
    if (!hydrated) return;
    saveProgress({ quizId: quiz.id, index, score, answers: [], done });
  }, [hydrated, quiz.id, index, score, done]);

  const question = quiz.questions[index]!;
  const progress = ((index + (selected !== null ? 1 : 0)) / quiz.questions.length) * 100;

  const restart = () => {
    clearProgress(quiz.id);
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setResumed(false);
  };

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === question.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= quiz.questions.length) {
      setDone(true);
      return;
    }
    setIndex(index + 1);
    setSelected(null);
  };

  if (done) {
    const ratio = score / quiz.questions.length;
    const passed = ratio >= 0.7;
    return (
      <AppShell title="Résultats" subtitle={quiz.title} back={{ to: "/qcm" }}>
        <div className="surface-card rounded-2xl p-6 text-center">
          <span
            className={`mx-auto grid size-16 place-items-center rounded-full ${
              passed ? "bg-success text-success-foreground" : "bg-accent text-accent-foreground"
            }`}
          >
            <Trophy className="size-8" />
          </span>
          <h2 className="mt-4 text-2xl font-semibold uppercase">
            {passed ? "Acquis validé" : "À retravailler"}
          </h2>
          <p className="font-display mt-2 text-5xl font-semibold text-primary">
            {score}/{quiz.questions.length}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {Math.round(ratio * 100)} % de bonnes réponses
          </p>

          <div className="mt-6 grid gap-2">
            <button
              onClick={restart}
              className="bg-alert shadow-alert tap flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-primary-foreground uppercase"
            >
              <RotateCcw className="size-4" /> Recommencer
            </button>
            <Link
              to="/qcm"
              className="tap rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground uppercase"
            >
              Autres QCM
            </Link>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell
      title={quiz.title}
      subtitle={`Question ${index + 1} / ${quiz.questions.length}`}
      back={{ to: "/qcm" }}
    >
      {resumed ? (
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-secondary p-3 text-xs text-secondary-foreground">
          <Save className="size-4 shrink-0 text-primary" />
          <span className="min-w-0">Progression reprise à la question {index + 1}.</span>
          <button
            onClick={restart}
            className="tap ml-auto shrink-0 rounded-lg border border-border px-2 py-1 font-semibold"
          >
            Recommencer
          </button>
        </div>
      ) : null}

      <div className="flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
          <div
            className="bg-alert h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-display shrink-0 text-sm font-semibold text-primary">{score} pts</span>
      </div>

      <h2 className="mt-5 text-xl leading-snug font-semibold">{question.question}</h2>

      <div className="mt-4 grid gap-2.5">
        {question.options.map((option, i) => {
          const isAnswer = i === question.answer;
          const isPicked = selected === i;
          let style = "surface-card";
          if (selected !== null && isAnswer)
            style = "bg-success text-success-foreground border border-success";
          else if (isPicked && !isAnswer)
            style = "bg-destructive text-destructive-foreground border border-destructive";
          else if (selected !== null) style = "surface-card opacity-60";

          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`tap grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl px-4 py-3 text-left text-[15px] leading-snug font-medium ${style}`}
            >
              <span className="min-w-0">{option}</span>
              {selected !== null && isAnswer ? <Check className="size-5 shrink-0" /> : null}
              {isPicked && !isAnswer ? <X className="size-5 shrink-0" /> : null}
            </button>
          );
        })}
      </div>

      {selected !== null ? (
        <div className="mt-4">
          <p className="rounded-xl bg-secondary p-3 text-sm leading-relaxed text-secondary-foreground">
            {question.explanation}
          </p>
          <button
            onClick={next}
            className="bg-alert shadow-alert tap mt-3 w-full rounded-xl px-4 py-3 text-sm font-semibold text-primary-foreground uppercase"
          >
            {index + 1 >= quiz.questions.length ? "Voir les résultats" : "Question suivante"}
          </button>
        </div>
      ) : null}
    </AppShell>
  );
}
