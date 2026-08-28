import { Flame, HeartPulse, Siren, Wrench } from "lucide-react";
import type { CategoryId } from "@/data/content";

export function CategoryIcon({ id, className }: { id: CategoryId; className?: string }) {
  const cls = className ?? "size-5";
  if (id === "incendie") return <Flame className={cls} />;
  if (id === "secourisme") return <HeartPulse className={cls} />;
  if (id === "operations") return <Siren className={cls} />;
  return <Wrench className={cls} />;
}
