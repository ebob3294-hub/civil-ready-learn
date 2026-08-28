import { createFileRoute, notFound } from "@tanstack/react-router";
import { AlertTriangle, Clock } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { CategoryIcon } from "@/components/CategoryIcon";
import { categories, getLesson, levels } from "@/data/content";

export const Route = createFileRoute("/lecons/$lessonId")({
  loader: ({ params }) => {
    const lesson = getLesson(params.lessonId);
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Leçon introuvable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { lesson } = loaderData;
    return {
      meta: [
        { title: `${lesson.title} — Formation Protection Civile` },
        { name: "description", content: lesson.summary },
        { property: "og:title", content: lesson.title },
        { property: "og:description", content: lesson.summary },
      ],
    };
  },
  component: LessonDetail,
});

function LessonDetail() {
  const { lesson } = Route.useLoaderData();
  const level = levels.find((l) => l.id === lesson.level)!;
  const category = categories.find((c) => c.id === lesson.category)!;

  return (
    <AppShell title={category.label} subtitle={level.label} back={{ to: "/lecons" }}>
      <article className="surface-card rounded-2xl p-5">
        <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
          <CategoryIcon id={lesson.category} />
        </span>
        <h2 className="mt-3 text-2xl leading-tight font-semibold">{lesson.title}</h2>
        <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3" /> {lesson.duration} · {level.label}
        </p>

        <div className="mt-5 space-y-4">
          {lesson.blocks.map((block, i) => {
            if (block.type === "h") {
              return (
                <h3
                  key={i}
                  className="border-l-4 border-primary pl-3 text-base font-semibold uppercase"
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === "p") {
              return (
                <p key={i} className="text-[15px] leading-relaxed text-foreground/85">
                  {block.text}
                </p>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-[15px] leading-relaxed">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-foreground/85">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <div
                key={i}
                className="flex gap-3 rounded-xl bg-accent p-3 text-accent-foreground ring-1 ring-primary/25"
              >
                <AlertTriangle className="mt-0.5 size-5 shrink-0" />
                <p className="text-sm leading-relaxed font-medium">{block.text}</p>
              </div>
            );
          })}
        </div>
      </article>
    </AppShell>
  );
}
