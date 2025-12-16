import { StyledText } from "@/shared/components/StyledText";
import { Exercise, TrainingDay } from "@/types/TrainingProgram/TrainingProgram";
import { FC } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { ExerciseComponent } from "./Exercise/Exercise";

type TrainingSetProps = {
  trainingSet: TrainingDay;
};

export const TrainingSetComponent: FC<TrainingSetProps> = ({ trainingSet }) => {
  const renderExercise = ({ item }: ListRenderItemInfo<Exercise>) => {
    return <ExerciseComponent exercise={item} />;
  };

  return (
    <View style={styles.container}>
      <StyledText
        label={`Тренировка ${trainingSet.trainingNumber}:`}
        style={styles.header}
        variant="subtitle"
      />
      <FlatList
        style={styles.list}
        data={trainingSet.exercises}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderExercise}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
  },
  list: { alignSelf: "center" },
});
