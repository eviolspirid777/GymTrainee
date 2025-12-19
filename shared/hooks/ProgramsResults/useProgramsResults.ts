import { programsAtom } from "@/store/Programs/Programs";
import {
  Exercise,
  TrainingDay,
  TrainingProgram,
} from "@/types/TrainingProgram/TrainingProgram";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

type ProgramsResultsStorage = {
  [programId: TrainingProgram["id"]]: {
    [trainingNumber: TrainingDay["trainingNumber"]]: {
      [exerciseName: Exercise["name"]]: boolean;
    };
  };
};

export const useProgramsResults = () => {
  const [programsData, setProgramsData] = useState<TrainingProgram[]>();
  const [programs] = useAtom(programsAtom);

  useEffect(() => {
    syncProgramsWithResults();
  }, []);

  const readResultsFromStorage = async (): Promise<ProgramsResultsStorage> => {
    try {
      const programResults = await AsyncStorage.getItem("programsResults");
      if (!programResults) return {};
      return JSON.parse(programResults) as ProgramsResultsStorage;
    } catch (error) {
      console.error("Ошибка при загрузке результатов программ:", error);
      return {};
    }
  };

  const syncProgramsWithResults = async () => {
    try {
      const basePrograms = programs.map(([_, program]) => program);
      const results = await readResultsFromStorage();

      const mergedPrograms = basePrograms.map((program) => ({
        ...program,
        trainingDays: program.trainingDays.map((day) => ({
          ...day,
          exercises: day.exercises.map((exercise) => {
            const passed =
              results[program.id]?.[day.trainingNumber]?.[exercise.name];
            return {
              ...exercise,
              passed: passed ?? exercise.passed ?? false,
            };
          }),
        })),
      }));

      setProgramsData(mergedPrograms);
    } catch (error) {
      console.error("Ошибка при объединении программ с результатами:", error);
    }
  };

  const addProgramsResult = async (
    trainingProgramId: TrainingProgram["id"],
    trainingDayNumber: TrainingDay["trainingNumber"],
    exerciseName: Exercise["name"],
    state: boolean
  ) => {
    try {
      const results = await readResultsFromStorage();

      if (!results[trainingProgramId]) {
        results[trainingProgramId] = {};
      }
      if (!results[trainingProgramId][trainingDayNumber]) {
        results[trainingProgramId][trainingDayNumber] = {};
      }
      results[trainingProgramId][trainingDayNumber][exerciseName] = !state;

      await AsyncStorage.setItem("programsResults", JSON.stringify(results));
      await syncProgramsWithResults();
    } catch (error) {
      console.error("Ошибка при сохранении результатов программы:", error);
    }
  };

  return {
    programsData,
    addProgramsResult,
  };
};
