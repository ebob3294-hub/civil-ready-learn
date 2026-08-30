import type { Lesson } from "./types";
import { lessons as baseLessons } from "./lessons";
import { lessonsSpecialites } from "./lessons-specialites";

export const lessons: Lesson[] = [...baseLessons, ...lessonsSpecialites];

export const getLesson = (id: string) => lessons.find((l) => l.id === id);
