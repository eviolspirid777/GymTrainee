import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { FC } from "react";
import { StyleSheet, Vibration, View } from "react-native";

type ListSkipButtonsProps = {
  selectedTrainingNumber: number;
  limits: {
    low: number;
    high: number;
  };
  onPreviousPress?: () => void;
  onNextPress?: () => void;
};

export const ListSkipButtons: FC<ListSkipButtonsProps> = ({
  selectedTrainingNumber,
  limits,
  onNextPress,
  onPreviousPress,
}) => {
  const handleVibrate = () => {
    Vibration.vibrate(50);
  };

  const handlePreviousPress = () => {
    handleVibrate();
    onPreviousPress?.();
  };

  const handleNextPress = () => {
    handleVibrate();
    onNextPress?.();
  };

  return (
    <View style={styles.container}>
      <StyledButton
        icon="arrow-left"
        onPress={handlePreviousPress}
        disabled={limits.low === selectedTrainingNumber}
      >
        <StyledText label="Назад" />
      </StyledButton>
      <StyledText label={`${selectedTrainingNumber + 1}`} />
      <StyledButton
        icon={{
          type: "arrow-right",
          direction: "after",
        }}
        onPress={handleNextPress}
        disabled={limits.high === selectedTrainingNumber}
      >
        <StyledText label="Дальше" />
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
