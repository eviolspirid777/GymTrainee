import { StyledText } from "@/shared/components/StyledText";
import { useMaxWeight } from "@/shared/hooks/MaxWeights/useMaxWeight";
import { Exercise } from "@/types/TrainingProgram/TrainingProgram";
import { FC } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { RepeatComponent } from "./Repeat/Repeat";

type ExerciseComponentProps = {
  exercise: Exercise;
};

export const ExerciseComponent: FC<ExerciseComponentProps> = ({ exercise }) => {
  const renderRepeat = ({ item, index }: ListRenderItemInfo<number>) => {
    return <RepeatComponent repeat={item} />;
  };

  const { maxWeight, loadMaxWeight } = useMaxWeight();

  const renderRepeats = () => {
    if (Array.isArray(exercise.reps)) {
      return (
        <View>
          <StyledText label="Повторений:" />
          <FlatList
            style={styles.list}
            data={exercise.reps}
            keyExtractor={(rep, index) => index.toString()}
            ItemSeparatorComponent={() => <StyledText label="," />}
            horizontal
            renderItem={renderRepeat}
          />
        </View>
      );
    }
    if (Number.isInteger(exercise.reps)) {
      return <StyledText label={`Повторений: ${exercise.reps}`} />;
    }
    if (exercise.reps === "max") {
      return <StyledText label="Повторений: max" />;
    }
  };

  return (
    <View style={styles.container}>
      <StyledText label={exercise.name} style={styles.tag} />
      <View style={styles["repiets-block"]}>
        {exercise.weight && (
          <StyledText
            label={`Вес: ${exercise.weight(Number(maxWeight))?.toFixed(2)} кг`}
          />
        )}
        <StyledText label={`Подходов: ${exercise.count}`} />
        {renderRepeats()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
    paddingInline: 10,
  },
  tag: {
    flex: 1,
    maxWidth: "70%",
  },
  list: {
    flexDirection: "row",
    maxHeight: 20,
  },
  "repiets-block": {
    alignItems: "center",
  },
});
