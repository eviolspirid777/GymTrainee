import { StyledText } from "@/shared/components/StyledText";
import { Exercise } from "@/types/TrainingProgram/TrainingProgram";
import { FC } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { RepeatComponent } from "./Repeat/Repeat";

type ExerciseComponentProps = {
  exercise: Exercise;
};

export const ExerciseComponent: FC<ExerciseComponentProps> = ({ exercise }) => {
  const renderRepeat = ({ item, index }: ListRenderItemInfo<number>) => {
    return <RepeatComponent repeat={item} index={index} />;
  };

  const renderRepeats = () => {
    if (Array.isArray(exercise.reps)) {
      return (
        <View>
          <StyledText label="Повторений:" />
          <FlatList
            style={styles.list}
            data={exercise.reps}
            keyExtractor={(rep, index) => index.toString()}
            renderItem={renderRepeat}
          />
        </View>
      );
    }
    if (Number.isInteger(exercise.reps)) {
      return <StyledText label={`Повторений: ${exercise.reps}`} />;
    }
    if (exercise.reps === "max") {
      return <StyledText label="Повторений: Максимум" />;
    }
  };

  return (
    <View style={styles.container}>
      <StyledText label={exercise.name} />
      <StyledText label={`Подходов: ${exercise.count}`} />
      {renderRepeats()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flexDirection: "row",
  },
});
