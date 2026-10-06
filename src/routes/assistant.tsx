import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Lightbulb, Loader2, Send } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { explain } from "@/lib/explain.functions";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/assistant")({
  head: () => ({
    meta: [
      { title: "Assistant IA — Formation Sapeurs-Pompiers" },
      { name: "description", content: "Obtenez une explication simple et un conseil de révision sur une question ratée." },
      { property: "og:title", content: "Assistant IA — Formation Sapeurs-Pompiers" },
      { property: "og:description", content: "Explications simplifiées et conseils de révision par IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AssistantPage,
});

function renderLine(line: string, i: number) {
  const bold = (s: string) =>
    s.split(/\*\*(.+?)\*\*/g).map((p, j) => (j % 2 ? <strong key={j}>{p}</strong> : p));
  if (/^#{1,4}\s/.test(line))
    return <h3 key={i} className="mt-3 font-bold text-primary">{bold(line.replace(/^#+\s/, ""))}</h3>;
  if (/^\s*[-*•]\s/.test(line))
    return <li key={i} className="ms-5 list-disc">{bold(line.replace(/^\s*[-*•]\s/, ""))}</li>;
  if (!line.trim()) return <div key={i} className="h-2" />;
  return <p key={i}>{bold(line)}</p>;
}

function AssistantPage() {
  const { lang } = useLang();
  const ar = lang === "ar";
  const run = useServerFn(explain);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  async function submit() {
    if (q.trim().length < 3 || loading) return;
    setLoading(true);
    setError("");
    setAnswer("");
    try {
      const r = await run({ data: { question: q, lang } });
      if (r.error) setError(r.error);
      else setAnswer(r.text);
    } catch {
      setError(ar ? "تعذّر الاتصال. هذه الميزة تحتاج إلى الإنترنت." : "Connexion impossible. Cette fonction nécessite internet.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppShell title={ar ? "المساعد الذكي" : "Assistant IA"} subtitle={ar ? "شرح مبسّط ونصيحة للمراجعة" : "Explication & conseil de révision"} back={{ to: "/" }}>
      <div className="space-y-4">
        <div className="rounded-2xl border border-border bg-card p-4">
          <div className="mb-2 flex items-center gap-2 font-semibold">
            <Lightbulb className="size-5 text-primary" />
            {ar ? "اكتب السؤال الذي أخطأت فيه أو الموضوع" : "Collez la question ratée ou le sujet à clarifier"}
          </div>
          <textarea
            value={q}
            onChange={(e) => setQ(e.target.value)}
            rows={5}
            maxLength={2000}
            dir="auto"
            placeholder={ar ? "مثال: ما الفرق بين flashover و backdraft؟" : "Ex : Quelle est la différence entre flashover et backdraft ?"}
            className="w-full resize-none rounded-xl border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="button"
            onClick={submit}
            disabled={loading || q.trim().length < 3}
            className="tap mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground disabled:opacity-50"
          >
            {loading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5 rtl:rotate-180" />}
            {loading ? (ar ? "جارٍ التحليل..." : "Analyse en cours...") : ar ? "اشرح لي" : "Expliquer"}
          </button>
          <p className="mt-2 text-xs text-muted-foreground">
            {ar ? "تتطلب هذه الميزة اتصالاً بالإنترنت." : "Cette fonction nécessite une connexion internet."}
          </p>
        </div>
        {error && <div className="rounded-xl border border-destructive bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}
        {answer && (
          <div dir="auto" className="rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed">
            {answer.split("\n").map(renderLine)}
          </div>
        )}
      </div>
    </AppShell>
  );
}
