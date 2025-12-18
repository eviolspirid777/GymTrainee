import { exercisesTagParser } from "@/shared/exercises/TagParser/TagParser";
import { russianExercisesDictionary } from "@/shared/exercises/technique/TechniqueRussification";
import {
  ExerciseListItemType,
  ExercisesEnum,
} from "@/types/Exercises/Exercises";
import { atom } from "jotai";

export const exercisesAtom = atom<[ExercisesEnum, string][]>(
  Object.entries(Object.fromEntries(russianExercisesDictionary)) as [
    ExercisesEnum,
    string
  ][]
);

export const exercisesForListAtom = atom<ExerciseListItemType[]>(() => {
  const items = Object.entries(
    Object.fromEntries(russianExercisesDictionary)
  ) as [ExercisesEnum, string][];

  return items.map(([k, v]) => ({
    name: v,
    tag: exercisesTagParser.get(k),
    enum: k,
  }));
});
