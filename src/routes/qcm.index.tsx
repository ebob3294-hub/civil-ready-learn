import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ListChecks } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { CategoryIcon } from "@/components/CategoryIcon";
import { levels, quizzes } from "@/data/content";

export const Route = createFileRoute("/qcm/")({
  head: () => ({
    meta: [
      { title: "QCM Pompiers — Tests de connaissances" },
      {
        name: "description",
        content:
          "QCM interactifs de Protection Civile : score en direct, correction immédiate et résultat final par niveau de reconnaissance.",
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
  return (
    <AppShell title="QCM Tests" subtitle="Évaluation des connaissances">
      <div className="grid gap-3">
        {quizzes.map((q) => {
          const level = levels.find((l) => l.id === q.level)!;
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
              </span>
              <ChevronRight className="size-5 shrink-0 text-muted-foreground" />
            </Link>
          );
        })}
      </div>
    </AppShell>
  );
}
