import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type ProgramHeaderProps = {
  programName: string;
};

export const ProgramsHeader: FC<ProgramHeaderProps> = ({ programName }) => {
  return (
    <View style={styles.header}>
      <Pressable style={styles.header__back} onPress={() => router.back()}>
        <ArrowLeft size={25} color={COLORS.TEXT_COLOR} />
      </Pressable>
      <StyledText label={programName} variant="header" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: 10,
    paddingBottom: 20,
    borderBottomColor: COLORS.INPUT_BG,
    borderBottomWidth: 1,
  },
  header__back: {
    position: "absolute",
    top: "0%",
    left: 10,
  },
});
