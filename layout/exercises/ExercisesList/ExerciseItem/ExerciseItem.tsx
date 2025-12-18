import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { ExerciseListItemType } from "@/types/Exercises/Exercises";
import { useRouter } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type ExerciseItemProps = {
  exercise: ExerciseListItemType;
};

export const ExerciseItem: FC<ExerciseItemProps> = ({ exercise }) => {
  const router = useRouter();

  return (
    <Pressable style={({ pressed }) => [pressed ? styles.pressed : null]} onPress={() => router.push(`/programs/exercises/${exercise.enum}`)}>
      <View style={styles.container}>
        <StyledText style={styles.container__name} label={exercise.name} variant="primary" />
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
    position: "relative",
    backgroundColor: COLORS.CARD_BG,
    borderRadius: 10,
    minWidth: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
    paddingVertical: 10,
    gap: 25,
  },
  container__name: {
    maxWidth: "90%"
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
