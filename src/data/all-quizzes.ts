import type { Quiz } from "./types";
import { quizzes as baseQuizzes } from "./quizzes";
import { quizzesSpecialites } from "./quizzes-specialites";
import { quizzesMateriel } from "./quizzes-materiel";
import { quizzesPlus } from "./quizzes-plus";
import { quizzesBanque } from "./quizzes-banque";
import { quizzesExtra } from "./quizzes-extra";
import { quizzesSeries } from "./quizzes-series";
import { quizzesV2 } from "./quizzes-v2";
import { quizzesV3 } from "./quizzes-v3";

export const quizzes: Quiz[] = [
  ...baseQuizzes,
  ...quizzesSpecialites,
  ...quizzesMateriel,
  ...quizzesPlus,
  ...quizzesBanque,
  ...quizzesExtra,
  ...quizzesSeries,
  ...quizzesV2,
  ...quizzesV3,
];

export const getQuiz = (id: string) => quizzes.find((q) => q.id === id);

export const totalQuestions = quizzes.reduce((n, q) => n + q.questions.length, 0);
