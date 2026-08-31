import { Link } from "@tanstack/react-router";
import { BookOpen, ChevronLeft, House, Info, ListChecks, Shield, Wrench } from "lucide-react";
import type { ReactNode } from "react";

export function AppShell({
  title,
  subtitle,
  back,
  children,
}: {
  title: string;
  subtitle?: string;
  back?: { to: string };
  children: ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-background">
      <header className="bg-graphite-gradient sticky top-0 z-20 px-4 pt-5 pb-4 text-graphite-foreground">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="flex min-w-0 items-center gap-3">
            {back ? (
              <Link
                to={back.to}
                aria-label="Retour"
                className="tap grid size-9 shrink-0 place-items-center rounded-full bg-sidebar-accent"
              >
                <ChevronLeft className="size-5" />
              </Link>
            ) : (
              <span className="bg-alert shadow-alert grid size-9 shrink-0 place-items-center rounded-xl">
                <Shield className="size-5 text-primary-foreground" />
              </span>
            )}
            <div className="min-w-0">
              <h1 className="truncate text-xl leading-tight font-semibold uppercase">{title}</h1>
              {subtitle ? (
                <p className="truncate text-xs text-sidebar-foreground/70">{subtitle}</p>
              ) : null}
            </div>
          </div>
          <Link
            to="/apropos"
            aria-label="À propos"
            className="tap grid size-9 shrink-0 place-items-center rounded-full bg-sidebar-accent text-sidebar-accent-foreground"
          >
            <Info className="size-5" />
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 pt-4 pb-24">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto flex max-w-md items-stretch justify-around border-t border-border bg-card/95 pt-2 pb-3 backdrop-blur">
        <TabLink to="/" label="Accueil" icon={<House className="size-5" />} />
        <TabLink to="/lecons" label="Leçons" icon={<BookOpen className="size-5" />} />
        <TabLink to="/qcm" label="QCM" icon={<ListChecks className="size-5" />} />
        <TabLink to="/materiel" label="Matériel" icon={<Wrench className="size-5" />} />
      </nav>
    </div>
  );
}

function TabLink({ to, label, icon }: { to: string; label: string; icon: ReactNode }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: to === "/" }}
      className="tap flex flex-1 flex-col items-center gap-1 text-[11px] font-medium text-muted-foreground"
      activeProps={{ className: "text-primary" }}
    >
      {icon}
      {label}
    </Link>
  );
}
