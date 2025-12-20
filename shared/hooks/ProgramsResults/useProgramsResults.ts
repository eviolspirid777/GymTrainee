import { programsAtom } from "@/store/Programs/Programs";
import {
  Exercise,
  TrainingDay,
  TrainingProgram,
} from "@/types/TrainingProgram/TrainingProgram";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

type ProgramsResultsStorage = TrainingProgram[];

export const useProgramsResults = () => {
  const [programsData, setProgramsData] = useState<TrainingProgram[]>();
  const [programs] = useAtom(programsAtom);

  useEffect(() => {
    syncProgramsWithResults();
  });

  const readResultsFromStorage = async () => {
    try {
      const programResults = await AsyncStorage.getItem("programsResults");
      if (programResults) {
        const parsedResults = JSON.parse(
          programResults
        ) as ProgramsResultsStorage;
        return parsedResults;
      }
      return null;
    } catch (error) {
      console.error("Ошибка при загрузке результатов программ:", error);
    }
  };

  const syncProgramsWithResults = async () => {
    try {
      const results = await readResultsFromStorage();

      if (results) {
        setProgramsData(results);
        return;
      }
      if (programs) {
        const data = programs.map(([_, program]) => program);
        const stringifiedData = JSON.stringify(data);
        await AsyncStorage.setItem("programsResults", stringifiedData);
        setProgramsData(data);
        return;
      }
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

      const foundProgram = results?.find((p) => p.id === trainingProgramId);
      const foundProgramTrainingDay = foundProgram?.trainingDays.find(
        (d) => d.trainingNumber === trainingDayNumber
      );
      const foundExercise = foundProgramTrainingDay?.exercises.find(
        (e) => e.name === exerciseName
      );

      if (foundExercise) {
        foundExercise.passed = state;

        await AsyncStorage.setItem("programsResults", JSON.stringify(results));
        await syncProgramsWithResults();
      }
    } catch (error) {
      console.error("Ошибка при сохранении результатов программы:", error);
    }
  };

  return {
    programsData,
    addProgramsResult,
  };
};
