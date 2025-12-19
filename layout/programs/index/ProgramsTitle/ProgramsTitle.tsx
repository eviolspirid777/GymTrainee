import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { PADDINGS } from "@/shared/paddings/Paddings";
import { StyleSheet, View } from "react-native";

export const ProgramsTitle = () => {
  return (
    <View style={styles.container}>
      <StyledText label="Твой путь к силе!" variant="title" />
      <StyledText
        label="Выбери программу и начни тренировку"
        variant="subtitle"
        style={styles.subtitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: PADDINGS.pTop - 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  subtitle: {
    color: COLORS.PLACEHOLDER_COLOR,
  },
});
