import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { StyledTextInput } from "@/shared/components/StyledTextInput";
import { useMaxWeight } from "@/shared/hooks/MaxWeights/useMaxWeight";
import { Keyboard, StyleSheet, View } from "react-native";

export const MaxWeight = () => {
  const { maxWeight, setMaxWeight, saveMaxWeight } = useMaxWeight();

  const submitMaxWeight = () => {
    saveMaxWeight();
    Keyboard.dismiss();
  };
  return (
    <>
      <StyledText label="Максимальный жим лежа" variant="header" />
      <View style={styles["main-add-max-weight"]}>
        <StyledTextInput
          style={styles["text-input"]}
          value={maxWeight}
          onChangeText={setMaxWeight}
          placeholder="Максимальный вес(кг)..."
          keyboardType="numeric"
        />
        <StyledButton onPress={submitMaxWeight}>
          <StyledText label="Применить" />
        </StyledButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  "main-add-max-weight": {
    marginTop: 20,
    marginBottom: 40,
    flexDirection: "row",
    marginInline: 10,
    gap: 20,
  },
  "text-input": {
    flex: 1,
    height: 55,
    color: COLORS.TEXT_COLOR,
  },
});
