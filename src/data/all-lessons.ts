import type { Lesson } from "./types";
import { lessons as baseLessons } from "./lessons";
import { lessonsSpecialites } from "./lessons-specialites";
import { lessonsMateriel } from "./lessons-materiel";
import { lessonsPlus } from "./lessons-plus";
import { lessonsExtra } from "./lessons-extra";

export const lessons: Lesson[] = [
  ...baseLessons,
  ...lessonsSpecialites,
  ...lessonsMateriel,
  ...lessonsPlus,
  ...lessonsExtra,
];

export const getLesson = (id: string) => lessons.find((l) => l.id === id);
