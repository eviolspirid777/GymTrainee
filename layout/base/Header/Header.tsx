import Logo from "@/assets/graphics/GymTraineeLogo.png";
import { COLORS } from "@/shared/colors/colors";
import { Dimensions, Image, StyleSheet, View } from "react-native";

export const Header = () => {
  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: width,
          height: 60,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingBottom: 20,
    borderBottomColor: COLORS.SECONDARY_COLOR,
    borderBottomWidth: 1,
  },
});
