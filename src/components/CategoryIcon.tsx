import { Biohazard, Flame, HardHat, HeartPulse, Siren, Wrench } from "lucide-react";
import type { CategoryId } from "@/data/content";

export function CategoryIcon({ id, className }: { id: CategoryId; className?: string }) {
  const cls = className ?? "size-5";
  if (id === "incendie") return <Flame className={cls} />;
  if (id === "secourisme") return <HeartPulse className={cls} />;
  if (id === "operations") return <Siren className={cls} />;
  if (id === "risques") return <Biohazard className={cls} />;
  if (id === "sauvetage") return <HardHat className={cls} />;
  return <Wrench className={cls} />;
}
