import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { ExerciseListItemType } from "@/types/Exercises/Exercises";
import { ChevronRight } from "lucide-react-native";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type ExerciseItemProps = {
  exercise: ExerciseListItemType;
};

export const ExerciseItem: FC<ExerciseItemProps> = ({ exercise }) => {
  return (
    <Pressable style={({ pressed }) => [pressed ? styles.pressed : null]}>
      <View style={styles.container}>
        <StyledText label={exercise.name} variant="primary" />
        <View style={styles["container__tags"]}>
          {exercise.tag && (
            <StyledText style={styles.tag} label={exercise.tag.toString()} />
          )}
        </View>
        <ChevronRight
          style={styles.container__chevron}
          size={20}
          color={COLORS.SECONDARY_COLOR}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
    transform: [{ scale: 0.99 }],
  },
  container: {
    height: 100,
    position: "relative",
    backgroundColor: COLORS.CARD_BG,
    borderRadius: 10,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 10,
  },
  container__tags: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 5,
  },
  tag: {
    backgroundColor: "#2d3b4e",
    color: COLORS.SECONDARY_COLOR,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  container__chevron: {
    position: "absolute",
    top: "50%",
    right: 20,
  },
});
