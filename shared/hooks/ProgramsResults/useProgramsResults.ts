import {
  Exercise,
  TrainingDay,
  TrainingProgram,
} from "@/types/TrainingProgram/TrainingProgram";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import * as programsFromFiles from "@/shared/programs";
const programs = Object.entries(programsFromFiles);

export const useProgramsResults = () => {
  const [programsData, setProgramsData] = useState<TrainingProgram[]>();

  useEffect(() => {
    loadProgramsResults();
  }, []);

  const loadProgramsResults = async () => {
    try {
      const programResults = await AsyncStorage.getItem("programsResults");
      if (programResults !== null) {
        const parsedProgramResults = await JSON.parse(programResults);
        setProgramsData(parsedProgramResults);
      } else {
        setProgramsData(programs.map(([k, v]) => v));
      }
    } catch (error) {
      console.error("Ошибка при загрузке веса:", error);
    }
  };

  const addProgramsResult = async (
    trainingProgramId: TrainingProgram["id"],
    trainingDayNumber: TrainingDay["trainingNumber"],
    exerciseName: Exercise["name"],
    state: boolean
  ) => {
    try {
      const programResults = await AsyncStorage.getItem("programsResults");

      let programsArray: TrainingProgram[];

      if (programResults !== null) {
        programsArray = JSON.parse(programResults);
      } else {
        // берём все программы из файлов (как в loadProgramsResults)
        programsArray = programs.map(([_, program]) => program);
      }

      const foundExercise = programsArray
        .find((tp) => tp.id === trainingProgramId)
        ?.trainingDays.find((td) => td.trainingNumber === trainingDayNumber)
        ?.exercises.find((e) => e.name === exerciseName);

      if (foundExercise) {
        foundExercise.passed = state;
      }

      const stringified = JSON.stringify(programsArray);
      await AsyncStorage.setItem("programsResults", stringified);
      setProgramsData(programsArray);
    } catch (error) {
      console.error("Ошибка при сохранении веса:", error);
    }
  };

  return {
    programsData,
    addProgramsResult,
  };
};
