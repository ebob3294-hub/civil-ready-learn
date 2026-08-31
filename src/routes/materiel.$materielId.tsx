import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { getMateriel } from "@/data/materiel";

export const Route = createFileRoute("/materiel/$materielId")({
  loader: ({ params }) => {
    const item = getMateriel(params.materielId);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Matériel introuvable" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    return {
      meta: [
        { title: `${item.name} — Matériel Protection Civile` },
        { name: "description", content: item.desc },
        { property: "og:title", content: item.name },
        { property: "og:description", content: item.desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: MaterielDetail,
});

function MaterielDetail() {
  const { item } = Route.useLoaderData();

  return (
    <AppShell title="Fiche matériel" subtitle={item.name} back={{ to: "/materiel" }}>
      <article className="surface-card overflow-hidden rounded-2xl">
        <img
          src={item.image}
          alt={item.name}
          width={1024}
          height={768}
          className="h-52 w-full object-cover"
        />
        <div className="p-5">
          <h2 className="text-2xl leading-tight font-semibold">{item.name}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">{item.desc}</p>
          <h3 className="mt-5 border-l-4 border-primary pl-3 text-base font-semibold uppercase">
            Composition & usage
          </h3>
          <ul className="mt-3 space-y-2">
            {item.items.map((line, i) => (
              <li key={i} className="flex gap-2 text-[15px] leading-relaxed">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/85">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </AppShell>
  );
}
