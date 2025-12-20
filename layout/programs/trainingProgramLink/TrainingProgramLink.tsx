import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { useResponsiveFont } from "@/shared/hooks/HELPERS/ResponsiveFont/useResponsiveFont";
import { TrainingProgram } from "@/types/TrainingProgram/TrainingProgram";
import { ChevronRight } from "lucide-react-native";
import { FC, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type TrainingProgramLinkProps = {
  training: TrainingProgram;
  onTrainingPress: () => void;
};

export const TrainingProgramLink: FC<TrainingProgramLinkProps> = ({
  training,
  onTrainingPress,
}) => {
  const styles = StyleSheet.create({
    "pressable-container": {
      marginVertical: 10,
      width: "100%",
    },
    pressed: {
      opacity: 0.5,
    },
    container: {
      gap: 20,
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 20,
      borderRadius: 10,
      backgroundColor: COLORS.CARD_BG,
    },
    "container__header-block": {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "container__header-block__title": {
      maxWidth: "90%",
    },
    "container__description-block": {
      width: "100%",
    },
    "container__description-block__description": {
      width: "auto",
    },
    progressContainer: {
      marginBottom: 16,
      width: "100%",
    },
    progressBar: {
      height: 6,
      backgroundColor: COLORS.PRIMARY_COLOR,
      borderRadius: 3,
      overflow: "hidden",
      marginBottom: 6,
    },
    progressFill: {
      height: "100%",
      backgroundColor: COLORS.SECONDARY_COLOR,
    },
    progressText: {
      fontSize: useResponsiveFont(12),
      color: COLORS.SECONDARY_COLOR,
    },
    icon: {
      color: COLORS.TEXT_COLOR,
      padding: 4,
      alignSelf: "center",
    },
  });
  const [passedTrainingsCount, setPassedTrainingCount] = useState(0);

  useEffect(() => {
    let tempPassedTrainingsCount = 0;

    training.trainingDays.forEach((td) => {
      if (td.exercises.every((e) => e.passed)) {
        tempPassedTrainingsCount += 1;
      }
    });

    setPassedTrainingCount(tempPassedTrainingsCount);
  }, [training]);
  const passedPercents = passedTrainingsCount / training.trainingDays.length;

  return (
    <Pressable
      onPress={onTrainingPress}
      style={({ pressed }) => [
        styles["pressable-container"],
        pressed ? styles["pressed"] : null,
      ]}
    >
      <View style={styles.container}>
        <View style={styles["container__header-block"]}>
          <StyledText
            style={styles["container__header-block__title"]}
            label={training.name}
            variant="header"
          />
          <ChevronRight size={20} color={COLORS.SECONDARY_COLOR} />
        </View>
        <View style={styles["container__description-block"]}>
          <StyledText
            style={styles["container__description-block__description"]}
            label={training.information.description}
            variant="ruby"
          />
        </View>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${passedPercents * 100}%` },
                passedTrainingsCount === training.trainingDays.length
                  ? { backgroundColor: COLORS.ACCEPT }
                  : null,
              ]}
            />
          </View>
          <Text
            style={[
              styles.progressText,
              passedTrainingsCount === training.trainingDays.length
                ? { color: COLORS.ACCEPT }
                : null,
            ]}
          >
            {passedTrainingsCount} / {training.trainingDays.length} тренировок
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
