import type { Lesson } from "./types";
import { lessons as baseLessons } from "./lessons";
import { lessonsSpecialites } from "./lessons-specialites";
import { lessonsMateriel } from "./lessons-materiel";
import { lessonsPlus } from "./lessons-plus";
import { lessonsExtra } from "./lessons-extra";
import { lessonsV2 } from "./lessons-v2";
import { lessonsV3 } from "./lessons-v3";

export const lessons: Lesson[] = [
  ...baseLessons,
  ...lessonsSpecialites,
  ...lessonsMateriel,
  ...lessonsPlus,
  ...lessonsExtra,
  ...lessonsV2,
  ...lessonsV3,
];

export const getLesson = (id: string) => lessons.find((l) => l.id === id);
