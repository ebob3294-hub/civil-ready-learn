import type { Quiz } from "./types";
import { quizzes as baseQuizzes } from "./quizzes";
import { quizzesSpecialites } from "./quizzes-specialites";

export const quizzes: Quiz[] = [...baseQuizzes, ...quizzesSpecialites];

export const getQuiz = (id: string) => quizzes.find((q) => q.id === id);
