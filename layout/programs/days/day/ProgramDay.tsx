import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type ProgramDayProps = {
  day: number;
  isActive: boolean;
  onDaySelect: (day: number) => void;
};

export const ProgramDay: FC<ProgramDayProps> = ({
  day,
  isActive,
  onDaySelect,
}) => {
  return (
    <Pressable onPress={onDaySelect.bind(null, day - 1)}>
      <View style={[styles.container, isActive ? styles.active : null]}>
        <StyledText
          label={`День ${day}`}
          style={[styles.text, isActive ? styles.active : null]}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingVertical: 13,
    paddingInline: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.CARD_BG,
    borderColor: COLORS.PLACEHOLDER_COLOR,
    borderStyle: "solid",
    borderWidth: 0.5,
  },
  text: {
    color: COLORS.PLACEHOLDER_COLOR,
  },
  active: {
    backgroundColor: COLORS.SECONDARY_COLOR,
    color: COLORS.TEXT_COLOR,

  },
});
