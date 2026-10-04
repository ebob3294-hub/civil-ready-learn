import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { clearHistory, getLevel, loadHistory, type QuizResult } from "@/lib/progress";

export const Route = createFileRoute("/resultats")({
  head: () => ({
    meta: [
      { title: "Mes résultats — Formation SP" },
      { name: "description", content: "Historique des QCM et niveau de progression, sauvegardés hors-ligne." },
      { property: "og:title", content: "Mes résultats — Formation SP" },
      { property: "og:description", content: "Historique des QCM et niveau de progression." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Resultats,
});

function Resultats() {
  const [history, setHistory] = useState<QuizResult[]>([]);
  useEffect(() => setHistory(loadHistory()), []);
  const { level, next, validated, attempted } = getLevel(history);
  const avg = history.length
    ? Math.round((history.reduce((a, h) => a + h.score / h.total, 0) / history.length) * 100)
    : 0;

  return (
    <AppShell title="Mes résultats" subtitle="نتائجي ومستواي" back={{ to: "/" }}>
      <div className="surface-card rounded-2xl p-5 text-center">
        <p className="text-xs uppercase text-muted-foreground">Niveau / المستوى</p>
        <p className="font-display mt-1 text-3xl font-semibold text-primary">{level.name}</p>
        <p className="text-sm">{level.ar}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          {validated} QCM validés · {attempted} tentés · moyenne {avg} %
        </p>
        {next && (
          <p className="mt-1 text-xs text-muted-foreground">
            Prochain niveau : {next.name} ({next.min} QCM validés)
          </p>
        )}
      </div>

      <div className="mt-4 grid gap-2">
        {history.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">Aucun résultat pour l'instant.</p>
        )}
        {history.map((h, i) => (
          <div key={i} className="surface-card flex items-center justify-between rounded-xl p-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{h.title}</p>
              <p className="text-xs text-muted-foreground">{new Date(h.date).toLocaleString("fr-FR")}</p>
            </div>
            <span className={`font-semibold ${h.score / h.total >= 0.7 ? "text-success" : "text-primary"}`}>
              {h.score}/{h.total}
            </span>
          </div>
        ))}
      </div>

      {history.length > 0 && (
        <button
          onClick={() => {
            if (confirm("Effacer l'historique ?")) {
              clearHistory();
              setHistory([]);
            }
          }}
          className="tap mt-4 w-full rounded-xl border border-border px-4 py-3 text-sm font-semibold uppercase"
        >
          Effacer l'historique
        </button>
      )}
    </AppShell>
  );
}
