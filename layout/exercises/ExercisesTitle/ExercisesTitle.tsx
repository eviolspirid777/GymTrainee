import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { PADDINGS } from "@/shared/paddings/Paddings";
import { StyleSheet, View } from "react-native";

export const ExercisesTitle = () => {
  return (
    <View style={styles.container}>
      <StyledText label="Упражнения" variant="title" />
      <StyledText
        style={styles.description}
        label="Библиотека техник выполнения"
        variant="subtitle"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 5,
    alignItems: "flex-start",
    paddingTop: PADDINGS.pTop - 50,
    paddingBottom: PADDINGS.pBottom,
    paddingInline: PADDINGS.pInline,
  },
  description: {
    color: COLORS.PLACEHOLDER_COLOR,
  },
});
