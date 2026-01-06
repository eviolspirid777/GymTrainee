import { programsAtom, programsResultsAtom } from "@/store/Programs/Programs";
import {
  Exercise,
  TrainingDay,
  TrainingProgram,
} from "@/types/TrainingProgram/TrainingProgram";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { useEffect } from "react";

type ProgramsResultsStorage = TrainingProgram[];

export const useProgramsResults = () => {
  const [programsData, setProgramsData] = useAtom(programsResultsAtom);
  const [programs] = useAtom(programsAtom);

  useEffect(() => {
    syncProgramsWithResults();
  }, []);

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
      if (!programsData) return;

      const updatedResults = programsData.map((program) => {
        if (program.id !== trainingProgramId) {
          return program;
        }

        const updatedTrainingDays = program.trainingDays.map((day) => {
          if (day.trainingNumber !== trainingDayNumber) {
            return day;
          }

          const updatedExercises = day.exercises.map((exercise) => {
            if (exercise.name === exerciseName) {
              return { ...exercise, passed: state };
            }
            return exercise;
          });

          return { ...day, exercises: updatedExercises };
        });

        return { ...program, trainingDays: updatedTrainingDays };
      });

      await AsyncStorage.setItem("programsResults", JSON.stringify(updatedResults));
      setProgramsData(updatedResults);
    } catch (error) {
      console.error("Ошибка при сохранении результатов программы:", error);
    }
  };

  return {
    programsData,
    addProgramsResult,
  };
};
