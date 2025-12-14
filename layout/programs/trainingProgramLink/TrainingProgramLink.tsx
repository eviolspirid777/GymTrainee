import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { FC } from "react";
import { StyleSheet, View } from "react-native";

type TrainingProgramLinkProps = {
  trainingLabel: string;
  onTrainingPress: () => void;
};

export const TrainingProgramLink: FC<TrainingProgramLinkProps> = ({
  trainingLabel,
  onTrainingPress,
}) => {
  return (
    <View style={styles.container}>
      <StyledText label={trainingLabel} style={styles.label} />
      <StyledButton onPress={onTrainingPress}>
        <StyledText label="Перейти" />
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingInline: 20,
  },
  label: {
    maxWidth: "70%",
  },
});
