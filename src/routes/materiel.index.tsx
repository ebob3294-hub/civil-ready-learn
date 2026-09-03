import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { materiels } from "@/data/materiel";

export const Route = createFileRoute("/materiel/")({
  head: () => ({
    meta: [
      { title: "Matériel & engins pompiers en images — Protection Civile" },
      {
        name: "description",
        content:
          "Photos et fiches du matériel de désincarcération, outils divers, jonction, matériel de secours, tenues, EPI et engins (camion-citerne feu).",
      },
      { property: "og:title", content: "Matériel & engins pompiers en images" },
      {
        property: "og:description",
        content: "Fiches illustrées du matériel et des engins.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MaterielPage,
});

function MaterielPage() {
  const groups = [
    { key: "materiel" as const, label: "Matériels & équipements" },
    { key: "engin" as const, label: "Engins d'incendie & de secours" },
  ];

  return (
    <AppShell title="Matériel" subtitle="Photos & fiches">
      {groups.map((g) => (
        <div key={g.key}>
          <h2 className="mt-7 mb-3 text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            {g.label}
          </h2>
          <div className="grid gap-3">
            {materiels
              .filter((m) => m.group === g.key)
              .map((m) => (
                <Link
                  key={m.id}
                  to="/materiel/$materielId"
                  params={{ materielId: m.id }}
                  className="surface-card tap overflow-hidden rounded-2xl"
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-40 w-full object-cover"
                  />
                  <span className="block p-4">
                    <span className="block text-base leading-snug font-semibold">{m.name}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{m.desc}</span>
                  </span>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </AppShell>
  );
}
