import { Header } from "@/layout/base/Header/Header";
import { Routes } from "@/layout/base/Routes/Routes";
import { COLORS } from "@/shared/colors/colors";
import { Image, StyleSheet, View } from "react-native";
import GymLogo from "../assets/graphics/GymTraineeLogo.png";

export default function Index() {
  return (
    <View style={styles.main}>
      <Header />
      <Image
        source={GymLogo}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "contain",
          marginRight: 46
        }}
      />
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
