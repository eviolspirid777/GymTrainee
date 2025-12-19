import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { useMaxWeight } from "@/shared/hooks/MaxWeights/useMaxWeight";
import { useRecords } from "@/shared/hooks/Records/useRecords";
import { Exercise } from "@/types/TrainingProgram/TrainingProgram";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { FC } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { RepeatComponent } from "./Repeat/Repeat";

type ExerciseComponentProps = {
  exercise: Exercise;
  onCheckPress: (exerciseName: Exercise["name"], state: boolean) => void;
};

export const ExerciseComponent: FC<ExerciseComponentProps> = ({
  exercise,
  onCheckPress,
}) => {
  const router = useRouter();

  const renderRepeat = ({ item, index }: ListRenderItemInfo<number>) => {
    return <RepeatComponent repeat={item} />;
  };

  const { maxWeight } = useMaxWeight();

  const { records } = useRecords();

  const renderRecomendedWeight = () => {
    const existRecord = records?.find((r) => r.name === exercise.name);
    if (existRecord) {
      const { reps: s_reps, weight: s_weight } = existRecord;
      const weight = Number(s_weight);
      const reps = Number(s_reps);

      const e1RM = weight * (1 + 0.0333 * reps);
      if (Array.isArray(exercise.reps)) {
        return (
          <StyledText
            label={`Рек. вес: ${exercise.reps.map((er, i) =>
              (e1RM / (1 + 0.0333 * er)).toFixed(0)
            )}`}
          />
        );
      } else if (typeof exercise.reps === "number") {
        return (
          <StyledText
            label={`Рек. вес: ${(e1RM / (1 + 0.0333 * exercise.reps)).toFixed(
              2
            )}`}
          />
        );
      }
      return null;
    }
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
      <FontAwesome
        name="info-circle"
        size={22}
        style={styles.icon}
        onPress={() => router.push(`/programs/exercises/${exercise.type}`)}
      />
      <StyledText label={exercise.name} style={styles.tag} />
      <View style={styles["repiets-block"]}>
        {exercise.weight && (
          <StyledText
            label={`Вес: ${exercise.weight(Number(maxWeight))?.toFixed(2)} кг`}
          />
        )}
        {renderRecomendedWeight()}
        <StyledText label={`Подходов: ${exercise.count}`} />
        {renderRepeats()}
      </View>
      {exercise.passed ? (
        <StyledButton
          icon="check"
          onPress={onCheckPress.bind(null, exercise.name, !exercise.passed)}
          variant="accept"
        />
      ) : (
        <StyledButton
          icon="check"
          onPress={onCheckPress.bind(null, exercise.name, !exercise.passed)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
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
  icon: {
    color: COLORS.TEXT_COLOR,
    padding: 2,
    alignSelf: "center",
  },
});
