import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { StyleSheet, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <StyledText label="Gym Trainee" variant="header" style={styles.header} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    marginTop: 60,
    width: "100%",
    flex: 1,
  },
  header: {
    padding: "4%",
    width: "auto",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.SECONDARY_COLOR,
  },
});
