import type { Quiz } from "./types";
import { quizzes as baseQuizzes } from "./quizzes";
import { quizzesSpecialites } from "./quizzes-specialites";
import { quizzesBanque } from "./quizzes-banque";

export const quizzes: Quiz[] = [...baseQuizzes, ...quizzesSpecialites, ...quizzesBanque];

export const getQuiz = (id: string) => quizzes.find((q) => q.id === id);

export const totalQuestions = quizzes.reduce((n, q) => n + q.questions.length, 0);
