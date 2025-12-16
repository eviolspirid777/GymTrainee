import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FC } from "react";
import { StyleSheet, View } from "react-native";

type TrainingProgramLinkProps = {
  trainingLabel: string;
  onTrainingPress: () => void;
  onInfoPress: () => void;
};

export const TrainingProgramLink: FC<TrainingProgramLinkProps> = ({
  trainingLabel,
  onTrainingPress,
  onInfoPress,
}) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name="info-circle"
        size={22}
        style={styles.icon}
        onPress={onInfoPress}
      />
      <StyledText label={trainingLabel} style={styles.label} />
      <StyledButton onPress={onTrainingPress}>
        <StyledText label="Перейти" />
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingInline: 20,
  },
  icon: {
    color: COLORS.TEXT_COLOR,
    padding: 4,
    alignSelf: "center",
  },
  label: {},
});
