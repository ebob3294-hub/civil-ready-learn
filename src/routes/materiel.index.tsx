import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Gamepad2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { materiels } from "@/data/materiel";

export const Route = createFileRoute("/materiel/")({
  head: () => ({
    meta: [
      { title: "Matériel & engins pompiers en images — Protection Civile" },
      {
        name: "description",
        content:
          "Photos et fiches du matériel de désincarcération, outils divers, jonction, matériel de secours, tenues, EPI et engins (camion-citerne feu), avec un jeu de reconnaissance.",
      },
      { property: "og:title", content: "Matériel & engins pompiers en images" },
      {
        property: "og:description",
        content: "Fiches illustrées du matériel et des engins, plus un jeu de reconnaissance.",
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
    <AppShell title="Matériel" subtitle="Photos, fiches & jeu">
      <Link
        to="/materiel/jeu"
        className="bg-alert shadow-alert tap grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl p-4 text-primary-foreground"
      >
        <span className="grid size-11 place-items-center rounded-xl bg-primary-foreground/15">
          <Gamepad2 className="size-6" />
        </span>
        <span className="min-w-0">
          <span className="font-display block text-lg leading-tight font-semibold uppercase">
            Jeu de reconnaissance
          </span>
          <span className="block truncate text-xs opacity-85">
            Identifie le matériel sur la photo
          </span>
        </span>
        <ChevronRight className="size-5" />
      </Link>

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
