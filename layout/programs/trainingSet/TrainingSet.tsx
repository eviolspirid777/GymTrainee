import { StyledText } from "@/shared/components/StyledText";
import {
  Exercise,
  TrainingSet as TrainingSetType,
} from "@/types/TrainingProgram/TrainingProgram";
import { FC } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { ExerciseComponent } from "./Exercise/Exercise";

type TrainingSetProps = {
  trainingSet: TrainingSetType;
};

export const TrainingSetComponent: FC<TrainingSetProps> = ({ trainingSet }) => {
  const renderExercise = ({ item }: ListRenderItemInfo<Exercise>) => {
    return <ExerciseComponent exercise={item} />;
  };

  return (
    <View style={styles.container}>
      <StyledText label={`Тренировка ${trainingSet.trainingNumber}`} />
      <FlatList
        style={styles.list}
        data={trainingSet.exercises}
        keyExtractor={(set) => set.name}
        renderItem={renderExercise}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: { alignSelf: "center" },
});
