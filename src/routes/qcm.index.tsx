import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronRight, ListChecks, Trash2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useT } from "@/lib/i18n";
import { CategoryIcon } from "@/components/CategoryIcon";
import { levels, quizzes } from "@/data/content";
import { clearAllProgress, loadAllProgress, type QuizProgress } from "@/lib/progress";

export const Route = createFileRoute("/qcm/")({
  head: () => ({
    meta: [
      { title: "QCM Pompiers — Tests de connaissances" },
      {
        name: "description",
        content:
          "QCM interactifs de Protection Civile : score en direct, correction immédiate, progression enregistrée localement et reprise hors ligne.",
      },
      { property: "og:title", content: "QCM Pompiers — Tests de connaissances" },
      {
        property: "og:description",
        content: "Testez vos acquis en incendie, secourisme, matériel et commandement.",
      },
    ],
  }),
  component: QcmList,
});

function QcmList() {
  const t = useT();
  const [progress, setProgress] = useState<Record<string, QuizProgress>>({});

  useEffect(() => {
    setProgress(loadAllProgress());
  }, []);

  const hasProgress = Object.keys(progress).length > 0;

  return (
    <AppShell title={t("quizzes")} subtitle="Évaluation des connaissances">
      <div className="grid gap-3">
        {quizzes.map((q) => {
          const level = levels.find((l) => l.id === q.level)!;
          const saved = progress[q.id];
          return (
            <Link
              key={q.id}
              to="/qcm/$quizId"
              params={{ quizId: q.id }}
              className="surface-card tap grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl p-4"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-graphite text-graphite-foreground">
                <CategoryIcon id={q.category} />
              </span>
              <span className="min-w-0">
                <span className="block text-base leading-snug font-semibold">{q.title}</span>
                <span className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <ListChecks className="size-3" /> {q.questions.length} questions · {level.label}
                </span>
                {saved ? (
                  <span className="mt-2 inline-flex rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
                    {saved.done
                      ? `Terminé · ${saved.score}/${q.questions.length}`
                      : `Reprendre à la question ${Math.min(saved.index + 1, q.questions.length)}`}
                  </span>
                ) : null}
              </span>
              <ChevronRight className="size-5 shrink-0 text-muted-foreground" />
            </Link>
          );
        })}
      </div>

      {hasProgress ? (
        <button
          onClick={() => {
            clearAllProgress();
            setProgress({});
          }}
          className="tap mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-xs font-semibold text-muted-foreground uppercase"
        >
          <Trash2 className="size-4" /> Effacer ma progression
        </button>
      ) : null}

      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        Progression enregistrée sur l'appareil — fonctionne sans connexion.
      </p>
    </AppShell>
  );
}
