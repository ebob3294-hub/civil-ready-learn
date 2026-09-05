import { createFileRoute, notFound } from "@tanstack/react-router";
import { AlertTriangle, ClipboardList, Gauge, Weight } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { getMateriel } from "@/data/materiel";
import { getMaterielDetail } from "@/data/materiel-details";
import { useLang, useT } from "@/lib/i18n";
import type { ReactNode } from "react";

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
        { title: `${item.name} — Fiche technique & sécurité` },
        { name: "description", content: `${item.desc} Caractéristiques, poids, règles d'emploi et consignes de sécurité.` },
        { property: "og:title", content: `${item.name} — Fiche technique` },
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
  const detail = getMaterielDetail(item.id);
  const t = useT();
  const { lang } = useLang();
  const displayName = lang === "ar" && detail?.nameAr ? detail.nameAr : item.name;

  return (
    <AppShell title={t("fiche")} subtitle={displayName} back={{ to: "/materiel" }}>
      <article className="surface-card overflow-hidden rounded-2xl">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-52 w-full object-cover"
        />
        <div className="p-5">
          <h2 className="text-2xl leading-tight font-semibold">{displayName}</h2>
          {lang === "ar" && detail?.nameAr ? (
            <p className="text-sm text-muted-foreground">{item.name}</p>
          ) : null}
          <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">{item.desc}</p>

          {detail ? (
            <div className="mt-5 rounded-xl border border-border bg-secondary/40 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase">
                <Weight className="size-4 text-primary" />
                {t("weight")}
              </div>
              <p className="mt-1 text-[15px] leading-relaxed text-foreground/85">
                {lang === "ar" ? detail.poidsAr : detail.poids}
              </p>
            </div>
          ) : null}

          <Section icon={<ClipboardList className="size-4 text-primary" />} title={t("composition")} lines={item.items} />

          {detail ? (
            <>
              <Section icon={<Gauge className="size-4 text-primary" />} title={t("specs")} lines={detail.specs} />
              <Section icon={<ClipboardList className="size-4 text-primary" />} title={t("rules")} lines={detail.regles} />
              <div className="border-alert/60 bg-alert/10 mt-6 rounded-xl border p-4">
                <div className="text-alert flex items-center gap-2 text-sm font-semibold uppercase">
                  <AlertTriangle className="size-4" />
                  {t("safety")}
                </div>
                <ul className="mt-3 space-y-2">
                  {detail.securite.map((line, i) => (
                    <li key={i} className="flex gap-2 text-[15px] leading-relaxed">
                      <span className="bg-alert mt-2 size-1.5 shrink-0 rounded-full" />
                      <span className="text-foreground/90">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : null}
        </div>
      </article>
    </AppShell>
  );
}

function Section({ icon, title, lines }: { icon: ReactNode; title: string; lines: string[] }) {
  return (
    <>
      <h3 className="mt-6 flex items-center gap-2 border-l-4 border-primary pl-3 text-base font-semibold uppercase">
        {icon}
        {title}
      </h3>
      <ul className="mt-3 space-y-2">
        {lines.map((line, i) => (
          <li key={i} className="flex gap-2 text-[15px] leading-relaxed">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span className="text-foreground/85">{line}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
