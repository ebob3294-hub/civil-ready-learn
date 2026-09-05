import type { Lesson } from "./types";
import { lessons as baseLessons } from "./lessons";
import { lessonsSpecialites } from "./lessons-specialites";
import { lessonsMateriel } from "./lessons-materiel";
import { lessonsPlus } from "./lessons-plus";

export const lessons: Lesson[] = [...baseLessons, ...lessonsSpecialites, ...lessonsMateriel, ...lessonsPlus];

export const getLesson = (id: string) => lessons.find((l) => l.id === id);
