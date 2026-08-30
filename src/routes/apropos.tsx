import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { BookOpen, CheckCircle2, Github, Globe, Info, ListChecks, Mail, Shield, User } from "lucide-react";

export const Route = createFileRoute("/apropos")({
  head: () => ({
    meta: [
      { title: "À propos — Formation Protection Civile" },
      {
        name: "description",
        content:
          "Informations sur l'application Formation Protection Civile : guide d'utilisation, crédits et contact du développeur.",
      },
      { property: "og:title", content: "À propos — Formation Protection Civile" },
      {
        property: "og:description",
        content: "Guide d'utilisation, informations et contact du développeur Ayoub Sadkouni.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <AppShell title="À propos" subtitle="Informations & guide" back={{ to: "/" }}>
      <section className="bg-alert shadow-alert rounded-2xl px-4 py-5 text-primary-foreground">
        <div className="flex items-center gap-3">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary-foreground/15">
            <Shield className="size-7" />
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold uppercase">Formation Protection Civile</h2>
            <p className="text-sm opacity-90">Leçons & QCM pour sapeurs-pompiers</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed opacity-90">
          Application mobile conçue pour accompagner la formation des sapeurs-pompiers et du personnel de Protection Civile.
          Révisez les fondamentaux, approfondissez les spécialités et évaluez vos connaissances par le QCM.
        </p>
      </section>

      <div className="mt-5 grid gap-3">
        <InfoCard
          icon={<User className="size-5" />}
          title="Développeur"
          content="Ayoub Sadkouni"
        />
        <a
          href="mailto:sadkouni1@gmail.com"
          className="surface-card tap grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl p-4"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
            <Mail className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold">Contact</span>
            <span className="block truncate text-xs text-muted-foreground">sadkouni1@gmail.com</span>
          </span>
          <span className="text-xs font-medium text-primary">Écrire</span>
        </a>
        <InfoCard
          icon={<Globe className="size-5" />}
          title="Fonctionnement hors ligne"
          content="Toutes les leçons et QCM sont embarqués. Installez l'application pour un accès sans connexion."
        />
      </div>

      <h3 className="mt-7 mb-3 text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        Guide d'utilisation
      </h3>
      <div className="grid gap-3">
        <GuideStep
          number={1}
          icon={<BookOpen className="size-4" />}
          title="Consulter les leçons"
          desc="Parcourez les cours par niveau (Niveau 1, 2, Avancé) et par domaine : INC, SAP, OD, RT, SDE, matériel..."
        />
        <GuideStep
          number={2}
          icon={<ListChecks className="size-4" />}
          title="Passer les QCM"
          desc="Choisissez un test, répondez aux questions et obtenez une correction immédiate avec explications."
        />
        <GuideStep
          number={3}
          icon={<CheckCircle2 className="size-4" />}
          title="Reprendre plus tard"
          desc="Votre progression est enregistrée sur l'appareil. Reprenez un QCM exactement où vous l'aviez laissé."
        />
      </div>

      <p className="mt-6 text-center text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} Ayoub Sadkouni — Tous droits réservés.
      </p>
    </AppShell>
  );
}

function InfoCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="surface-card grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl p-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold">{title}</span>
        <span className="block text-xs text-muted-foreground">{content}</span>
      </span>
    </div>
  );
}

function GuideStep({
  number,
  icon,
  title,
  desc,
}: {
  number: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="surface-card flex gap-3 rounded-2xl p-4">
      <span className="bg-alert shadow-alert grid size-8 shrink-0 place-items-center rounded-full text-[13px] font-bold text-primary-foreground">
        {number}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-accent-foreground">{icon}</span>
          <span className="text-sm font-semibold">{title}</span>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
