export type CategoryId =
  | "incendie"
  | "secourisme"
  | "operations"
  | "materiel"
  | "risques"
  | "sauvetage";

export const categories: { id: CategoryId; label: string }[] = [
  { id: "incendie", label: "Incendie (INC)" },
  { id: "secourisme", label: "Secours à personnes (SAP)" },
  { id: "operations", label: "Opérations Diverses (OD)" },
  { id: "materiel", label: "Matériel" },
  { id: "risques", label: "Risques technologiques (RT)" },
  { id: "sauvetage", label: "Sauvetage & Déblaiement (SDE)" },
];

export type LevelId = "niveau-1" | "niveau-2" | "niveau-avance";

export const levels: { id: LevelId; label: string; subtitle: string }[] = [
  { id: "niveau-1", label: "Niveau 1", subtitle: "Bases du sapeur-pompier" },
  { id: "niveau-2", label: "Niveau 2", subtitle: "Équipier confirmé" },
  { id: "niveau-avance", label: "Niveau Avancé", subtitle: "Chef d'agrès & manœuvres" },
];

export type LessonBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "rule"; text: string };

export type Lesson = {
  id: string;
  title: string;
  level: LevelId;
  category: CategoryId;
  duration: string;
  summary: string;
  blocks: LessonBlock[];
};

export type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Quiz = {
  id: string;
  title: string;
  level: LevelId;
  category: CategoryId;
  questions: Question[];
};
