import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { Exercise, TrainingDay } from "@/types/TrainingProgram/TrainingProgram";
import { FC } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { ExerciseComponent } from "./Exercise/Exercise";

type TrainingSetProps = {
  trainingSet: TrainingDay;
  onCheckPress: (
    exerciseName: Exercise["name"],
    state: boolean,
    trainingSetDay: TrainingDay["trainingNumber"]
  ) => void;
};

export const TrainingSetComponent: FC<TrainingSetProps> = ({
  trainingSet,
  onCheckPress,
}) => {
  const renderExercise = ({ item }: ListRenderItemInfo<Exercise>) => {
    return (
      <ExerciseComponent
        exercise={item}
        onCheckPress={(name, state) =>
          onCheckPress(name, state, trainingSet.trainingNumber)
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header__container}>
        <StyledText
          label={`Тренировка ${trainingSet.trainingNumber}`}
          style={styles.header}
          variant="title"
        />
        <StyledText
          style={styles.header__container__description}
          label={`${trainingSet.exercises.length} упражнений`}
          variant="subtitle"
        />
      </View>
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
  header__container: {
    gap: 10,
  },
  header: {
    width: "100%",
    textAlign: "center",
  },
  header__container__description: {
    color: COLORS.PLACEHOLDER_COLOR,
  },
  container: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
  },
  list: { alignSelf: "center" },
});
