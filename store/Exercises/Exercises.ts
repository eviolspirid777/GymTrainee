import { russianExercisesDictionary } from "@/shared/exercises/technique/TechniqueRussification";
import { ExercisesEnum } from "@/types/Exercises/Exercises";
import { atom } from "jotai";

export const exercisesAtom = atom<[ExercisesEnum, string][]>(
  Object.entries(Object.fromEntries(russianExercisesDictionary)) as [
    ExercisesEnum,
    string
  ][]
);
