import { useProgramsResults } from "@/shared/hooks/ProgramsResults/useProgramsResults";
import { TrainingDay } from "@/types/TrainingProgram/TrainingProgram";
import { useLocalSearchParams } from "expo-router";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { TrainingSetComponent } from "../trainingSet/TrainingSet";

type TrainingSetsProps = {
  training: TrainingDay;
};

export const TrainingSets: FC<TrainingSetsProps> = ({ training }) => {
  const { id } = useLocalSearchParams();
  const programId = Array.isArray(id) ? id[0] : id;

  const { programsData, addProgramsResult } = useProgramsResults();
  const selectedProgram = programsData?.find((p) => p.id === programId);

  return (
    <View style={styles.container}>
      {
        <TrainingSetComponent
          trainingSet={training}
          onCheckPress={(exerciseName, state, dayNumber) =>
            addProgramsResult(
              selectedProgram?.id ?? "",
              dayNumber,
              exerciseName,
              state
            )
          }
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
