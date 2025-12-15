import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export const Routes = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StyledButton icon="trophy" onPress={() => router.push("/records")}>
        <StyledText label="Рекорды" />
      </StyledButton>
      <StyledButton icon="list" onPress={() => router.push("/programs")}>
        <StyledText label="Программы" />
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    gap: 50,
  },
});
