import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { useMaxWeight } from "@/shared/hooks/MaxWeights/useMaxWeight";
import { useRecords } from "@/shared/hooks/Records/useRecords";
import { Exercise } from "@/types/TrainingProgram/TrainingProgram";
import { useRouter } from "expo-router";
import { Info } from "lucide-react-native";
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

  const recordIsExist = records?.find((r) => r.name === exercise.name);

  const renderRecomendedWeight = () => {
    if (recordIsExist) {
      const { reps: s_reps, weight: s_weight } = recordIsExist;
      const weight = Number(s_weight);
      const reps = Number(s_reps);

      const e1RM = weight * (1 + 0.0333 * reps);
      if (Array.isArray(exercise.reps)) {
        return (
          <StyledText
            style={styles.recomended}
            label={`${exercise.reps.map((er, i) =>
              (e1RM / (1 + 0.0333 * er)).toFixed(0)
            )}`}
          />
        );
      } else if (typeof exercise.reps === "number") {
        return (
          <StyledText
            style={styles.recomended}
            label={`${(e1RM / (1 + 0.0333 * exercise.reps)).toFixed(0)}`}
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
      return <StyledText label={`${exercise.reps}`} />;
    }
    if (exercise.reps === "max") {
      return <StyledText label="max" />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container__header}>
        <View style={styles.container__header__title}>
          <StyledText label={exercise.name} variant="header" />
          <Info
            size={23}
            style={styles.icon}
            onPress={() => router.push(`/programs/exercises/${exercise.type}`)}
          />
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
      <View style={styles.container__body}>
        {exercise.weight && (
          <View style={styles.container__body__item}>
            <StyledText label="Вес:" variant="ruby" />
            <StyledText
              label={`${exercise.weight(Number(maxWeight))?.toFixed(2)} кг`}
            />
          </View>
        )}
        {recordIsExist && (
          <View style={styles.container__body__item}>
            <StyledText label="Рекомендовано:" variant="ruby" />
            {renderRecomendedWeight()}
          </View>
        )}
        <View style={styles.container__body__item}>
          <StyledText label="Подходы:" variant="ruby" />
          <StyledText label={`${exercise.count}`} />
        </View>
        <View style={styles.container__body__item}>
          <StyledText label="Повторения:" variant="ruby" />
          {renderRepeats()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: COLORS.CARD_BG,
    borderRadius: 10,
    borderColor: COLORS.PLACEHOLDER_COLOR,
    borderStyle: "solid",
    borderWidth: 0.4,
  },
  container__header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container__header__title: {
    maxWidth: "70%",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 10,
  },
  icon: {
    color: COLORS.SECONDARY_COLOR,
    padding: 2,
    alignSelf: "center",
  },
  container__body: {
    marginTop: 5,
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingInline: 10,
    paddingVertical: 5,
  },
  container__body__item: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    flexDirection: "row",
    maxHeight: 20,
  },
  recomended: {
    color: COLORS.SECONDARY_COLOR,
  },
  // container: {
  //   flexDirection: "row",
  //   gap: 10,
  //   width: "100%",
  //   alignItems: "center",
  //   justifyContent: "space-evenly",
  //   marginVertical: 10,
  //   paddingInline: 10,
  // },
  // tag: {
  //   flex: 1,
  //   maxWidth: "70%",
  // },

  // "repiets-block": {
  //   alignItems: "center",
  // },
});
