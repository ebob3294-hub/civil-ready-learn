import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, ChevronRight, Gamepad2, ListChecks, Play, Wrench } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { CategoryIcon } from "@/components/CategoryIcon";
import { categories, lessons, quizzes } from "@/data/content";
import { loadAllProgress } from "@/lib/progress";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Formation Protection Civile — Leçons & QCM Pompiers" },
      {
        name: "description",
        content:
          "Application mobile de formation Protection Civile : leçons par niveau et QCM interactifs en incendie, secourisme, opérations diverses et matériel.",
      },
      { property: "og:title", content: "Formation Protection Civile — Leçons & QCM" },
      {
        property: "og:description",
        content: "Révisez incendie, secourisme et matériel avec des leçons et des QCM notés.",
      },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const questionCount = quizzes.reduce((n, q) => n + q.questions.length, 0);
  const [resume, setResume] = useState<{ quizId: string; title: string; index: number } | null>(
    null,
  );

  useEffect(() => {
    const all = Object.values(loadAllProgress())
      .filter((p) => !p.done)
      .sort((a, b) => b.updatedAt - a.updatedAt);
    const latest = all[0];
    const quiz = latest ? quizzes.find((q) => q.id === latest.quizId) : undefined;
    if (latest && quiz) setResume({ quizId: quiz.id, title: quiz.title, index: latest.index });
  }, []);



  return (
    <AppShell title="Protection Civile" subtitle="Centre de formation & entraînement">
      <section className="bg-alert shadow-alert rounded-2xl px-4 py-5 text-primary-foreground">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase opacity-80">
          Prêt à intervenir
        </p>
        <h2 className="mt-1 text-2xl leading-tight font-semibold uppercase">
          Formez-vous, testez vos acquis
        </h2>
        <div className="mt-4 flex gap-3">
          <Stat value={String(lessons.length)} label="Leçons" />
          <Stat value={String(quizzes.length)} label="QCM" />
          <Stat value={String(questionCount)} label="Questions" />
        </div>
      </section>

      {resume ? (
        <Link
          to="/qcm/$quizId"
          params={{ quizId: resume.quizId }}
          className="surface-card tap mt-4 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border-primary/40 p-4"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
            <Play className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] font-semibold tracking-widest text-primary uppercase">
              Reprendre
            </span>
            <span className="block truncate text-sm font-semibold">{resume.title}</span>
            <span className="block text-xs text-muted-foreground">
              Question {resume.index + 1}
            </span>
          </span>
          <ChevronRight className="size-5 text-muted-foreground" />
        </Link>
      ) : null}


      <div className="mt-5 grid gap-3">
        <QuickCard
          to="/lecons"
          title="Leçons"
          desc="Niveau 1, Niveau 2 et Niveau Avancé"
          icon={<BookOpen className="size-6" />}
        />
        <QuickCard
          to="/qcm"
          title="QCM Tests"
          desc="Score en direct et correction immédiate"
          icon={<ListChecks className="size-6" />}
        />
        <QuickCard
          to="/materiel"
          title="Matériel & Engins"
          desc="Photos, fiches et jeu de reconnaissance"
          icon={<Wrench className="size-6" />}
        />
      </div>

      <h3 className="mt-7 mb-3 text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        Domaines
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((c) => (
          <Link
            key={c.id}
            to="/lecons"
            className="surface-card tap flex flex-col gap-2 rounded-2xl p-3"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-accent text-accent-foreground">
              <CategoryIcon id={c.id} />
            </span>
            <span className="text-sm leading-tight font-semibold">{c.label}</span>
            <span className="text-xs text-muted-foreground">
              {lessons.filter((l) => l.category === c.id).length} leçons
            </span>
          </Link>
        ))}
      </div>
    </AppShell>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 rounded-xl bg-primary-foreground/15 px-2 py-2 text-center">
      <div className="font-display text-xl leading-none font-semibold">{value}</div>
      <div className="mt-1 text-[10px] tracking-wider uppercase opacity-85">{label}</div>
    </div>
  );
}

function QuickCard({
  to,
  title,
  desc,
  icon,
}: {
  to: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="surface-card tap grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl p-4"
    >
      <span className="grid size-11 place-items-center rounded-xl bg-graphite text-graphite-foreground">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="font-display block text-lg leading-tight font-semibold uppercase">
          {title}
        </span>
        <span className="block truncate text-xs text-muted-foreground">{desc}</span>
      </span>
      <ChevronRight className="size-5 text-muted-foreground" />
    </Link>
  );
}
