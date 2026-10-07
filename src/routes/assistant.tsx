import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { BookOpen, Lightbulb, Loader2, Send, WifiOff } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { explain } from "@/lib/explain.functions";
import { useLang } from "@/lib/i18n";
import { searchOffline, type OfflineResult } from "@/lib/offline-assistant";

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
  const [offline, setOffline] = useState<OfflineResult | null>(null);

  function goOffline() {
    setOffline(searchOffline(q));
  }

  async function submit() {
    if (q.trim().length < 3 || loading) return;
    setLoading(true);
    setError("");
    setAnswer("");
    setOffline(null);
    if (typeof navigator !== "undefined" && !navigator.onLine) {
      goOffline();
      setLoading(false);
      return;
    }
    try {
      const r = await run({ data: { question: q, lang } });
      if (r.error) setError(r.error);
      else setAnswer(r.text);
    } catch {
      goOffline();
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
            {ar ? "بدون إنترنت، يبحث المساعد تلقائياً في دروس وأسئلة التطبيق." : "Sans internet, l'assistant cherche automatiquement dans les leçons et QCM de l'app."}
          </p>
        </div>
        {error && <div className="rounded-xl border border-destructive bg-destructive/10 p-3 text-sm text-destructive">{error}</div>}
        {offline && (
          <div className="space-y-3 rounded-2xl border border-border bg-card p-4 text-sm">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <WifiOff className="size-4" />
              {ar ? "وضع بدون إنترنت — من محتوى التطبيق" : "Mode hors ligne — contenu de l'application"}
            </div>
            {!offline.lessons.length && !offline.questions.length && (
              <p className="text-muted-foreground">{ar ? "لم يتم العثور على نتيجة. جرّب كلمات أخرى (مثال: ARI، backdraft، DAE)." : "Aucun résultat. Essayez d'autres mots-clés (ex : ARI, backdraft, DAE)."}</p>
            )}
            {offline.lessons.map((l) => (
              <div key={l.id} className="rounded-xl bg-muted/40 p-3">
                <h3 className="font-bold">{l.title}</h3>
                <p className="mt-1">{l.summary}</p>
                {l.points.length > 0 && (
                  <ul className="mt-2">{l.points.map((p, i) => <li key={i} className="ms-5 list-disc">{p}</li>)}</ul>
                )}
                <Link to="/lecons/$lessonId" params={{ lessonId: l.id }} className="mt-2 inline-flex items-center gap-1 font-semibold text-primary">
                  <BookOpen className="size-4" /> {ar ? "راجع الدرس" : "Réviser la leçon"}
                </Link>
              </div>
            ))}
            {offline.questions.length > 0 && (
              <div>
                <h3 className="mb-2 font-bold">{ar ? "أسئلة مشابهة" : "Questions proches"}</h3>
                {offline.questions.map((x, i) => (
                  <div key={i} className="mb-2 rounded-xl border border-border p-3">
                    <p className="font-medium">{x.question}</p>
                    <p className="mt-1 text-primary">✔ {x.answer}</p>
                    {x.explanation && <p className="mt-1 text-muted-foreground">{x.explanation}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {answer && (
          <div dir="auto" className="rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed">
            {answer.split("\n").map(renderLine)}
          </div>
        )}
      </div>
    </AppShell>
  );
}
