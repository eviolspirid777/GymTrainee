import { Header } from "@/layout/base/Header/Header";
import { Routes } from "@/layout/base/Routes/Routes";
import { COLORS } from "@/shared/colors/colors";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.main}>
      <Header />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
});
