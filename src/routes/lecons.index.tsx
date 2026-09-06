import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, Clock } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useT } from "@/lib/i18n";
import { CategoryIcon } from "@/components/CategoryIcon";
import { categories, lessons, levels, type CategoryId, type LevelId } from "@/data/content";

export const Route = createFileRoute("/lecons/")({
  head: () => ({
    meta: [
      { title: "Leçons par niveau — Formation Protection Civile" },
      {
        name: "description",
        content:
          "Leçons de sapeur-pompier classées par niveau et par catégorie : incendie, secourisme, opérations diverses, matériel.",
      },
      { property: "og:title", content: "Leçons par niveau — Protection Civile" },
      {
        property: "og:description",
        content: "Contenus de formation clairs, par niveau et par domaine opérationnel.",
      },
    ],
  }),
  component: LessonsPage,
});

function LessonsPage() {
  const t = useT();
  const [level, setLevel] = useState<LevelId>("niveau-1");
  const [category, setCategory] = useState<CategoryId | "all">("all");

  const filtered = lessons.filter(
    (l) => l.level === level && (category === "all" || l.category === category),
  );
  const current = levels.find((l) => l.id === level)!;

  return (
    <AppShell title={t("lessons")} subtitle="Programme de formation">
      <div className="hide-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {levels.map((l) => (
          <button
            key={l.id}
            onClick={() => setLevel(l.id)}
            className={`tap shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${
              level === l.id
                ? "bg-alert shadow-alert text-primary-foreground"
                : "surface-card text-muted-foreground"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{current.subtitle}</p>

      <div className="hide-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1">
        <FilterChip active={category === "all"} onClick={() => setCategory("all")} label="Tout" />
        {categories.map((c) => (
          <FilterChip
            key={c.id}
            active={category === c.id}
            onClick={() => setCategory(c.id)}
            label={c.label}
          />
        ))}
      </div>

      <div className="mt-4 grid gap-3">
        {filtered.map((l) => (
          <Link
            key={l.id}
            to="/lecons/$lessonId"
            params={{ lessonId: l.id }}
            className="surface-card tap grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 rounded-2xl p-4"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
              <CategoryIcon id={l.category} />
            </span>
            <span className="min-w-0">
              <span className="block text-base leading-snug font-semibold">{l.title}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{l.summary}</span>
              <span className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
                <Clock className="size-3" /> {l.duration}
              </span>
            </span>
            <ChevronRight className="mt-2 size-5 shrink-0 text-muted-foreground" />
          </Link>
        ))}
        {filtered.length === 0 ? (
          <p className="surface-card rounded-2xl p-6 text-center text-sm text-muted-foreground">
            Aucune leçon dans cette catégorie pour ce niveau.
          </p>
        ) : null}
      </div>
    </AppShell>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`tap shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium ${
        active
          ? "border-primary bg-accent text-accent-foreground"
          : "border-border bg-card text-muted-foreground"
      }`}
    >
      {label}
    </button>
  );
}
