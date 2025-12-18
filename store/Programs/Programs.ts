import * as programs from "@/shared/programs/index";
import { TrainingProgram } from "@/types/TrainingProgram/TrainingProgram";
import { atom } from "jotai";

export const programsAtom = atom<[string, TrainingProgram][]>(
  Object.entries(programs)
);
