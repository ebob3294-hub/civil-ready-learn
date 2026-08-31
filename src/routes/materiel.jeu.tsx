import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { materiels, type MaterielItem } from "@/data/materiel";

export const Route = createFileRoute("/materiel/jeu")({
  head: () => ({
    meta: [
      { title: "Jeu de reconnaissance du matériel — Protection Civile" },
      {
        name: "description",
        content:
          "Jeu photo : reconnais le matériel de désincarcération, les outils, les EPI, les tenues et les engins d'incendie et de secours.",
      },
      { property: "og:title", content: "Jeu de reconnaissance du matériel pompier" },
      {
        property: "og:description",
        content: "Identifie chaque matériel et chaque engin à partir de sa photo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MaterielGame,
});

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

type Round = { item: MaterielItem; options: string[] };

function buildRounds(): Round[] {
  return shuffle(materiels).map((item) => {
    const others = shuffle(materiels.filter((m) => m.id !== item.id))
      .slice(0, 3)
      .map((m) => m.name);
    return { item, options: shuffle([item.name, ...others]) };
  });
}

function MaterielGame() {
  const [seed, setSeed] = useState(0);
  const rounds = useMemo(() => buildRounds(), [seed]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const round = rounds[index];
  const done = index >= rounds.length;

  const restart = () => {
    setSeed((s) => s + 1);
    setIndex(0);
    setPicked(null);
    setScore(0);
  };

  if (done || !round) {
    const total = rounds.length;
    return (
      <AppShell title="Jeu terminé" subtitle="Reconnaissance matériel" back={{ to: "/materiel" }}>
        <section className="surface-card rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground uppercase">Score final</p>
          <p className="font-display mt-2 text-5xl font-semibold text-primary">
            {score}/{total}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {score === total
              ? "Parfait, matériel maîtrisé !"
              : "Révise les fiches matériel puis relance le jeu."}
          </p>
          <button
            onClick={restart}
            className="bg-alert shadow-alert tap mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <RotateCcw className="size-4" /> Rejouer
          </button>
        </section>
      </AppShell>
    );
  }

  const correct = round.item.name;

  return (
    <AppShell title="Jeu matériel" subtitle="Quel est ce matériel ?" back={{ to: "/materiel" }}>
      <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground uppercase">
        <span>
          Image {index + 1}/{rounds.length}
        </span>
        <span className="text-primary">Score {score}</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${(index / rounds.length) * 100}%` }}
        />
      </div>

      <div className="surface-card mt-4 overflow-hidden rounded-2xl">
        <img
          src={round.item.image}
          alt="Matériel à identifier"
          width={1024}
          height={768}
          className="h-52 w-full object-cover"
        />
      </div>

      <div className="mt-4 grid gap-2">
        {round.options.map((opt) => {
          const isCorrect = opt === correct;
          const isPicked = picked === opt;
          const state = !picked
            ? "surface-card"
            : isCorrect
              ? "border-primary bg-accent text-accent-foreground"
              : isPicked
                ? "border-destructive/60 bg-destructive/10"
                : "surface-card opacity-60";
          return (
            <button
              key={opt}
              disabled={!!picked}
              onClick={() => {
                setPicked(opt);
                if (isCorrect) setScore((s) => s + 1);
              }}
              className={`tap grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-xl border p-3 text-left text-sm font-medium ${state}`}
            >
              <span>{opt}</span>
              {picked && isCorrect ? <Check className="size-4 text-primary" /> : null}
              {picked && isPicked && !isCorrect ? (
                <X className="size-4 text-destructive" />
              ) : null}
            </button>
          );
        })}
      </div>

      {picked ? (
        <div className="surface-card mt-4 rounded-2xl p-4">
          <p className="text-sm leading-relaxed text-foreground/85">{round.item.desc}</p>
          <button
            onClick={() => {
              setPicked(null);
              setIndex((i) => i + 1);
            }}
            className="bg-alert shadow-alert tap mt-4 w-full rounded-xl px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            {index + 1 === rounds.length ? "Voir le score" : "Image suivante"}
          </button>
        </div>
      ) : null}
    </AppShell>
  );
}
