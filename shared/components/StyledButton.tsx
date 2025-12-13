import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { FC } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { COLORS } from "../colors/colors";

type StyledButtonProps = /*React.ComponentProps<typeof Pressable>*/ {
  style?: StyleProp<ViewStyle>;
  icon?: React.ComponentProps<typeof FontAwesome>["name"];
  onPress?: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
};

export const StyledButton: FC<StyledButtonProps> = ({
  onPress,
  style,
  icon,
  children,
  ...props
}) => {
  const computePressedStyle = (pressed: boolean): StyleProp<ViewStyle> => {
    if (pressed) {
      return {
        opacity: 0.5,
      };
    }
    return {
      opacity: 1,
    };
  };

  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        computePressedStyle(pressed),
        style,
      ]}
    >
      {icon && (
        <FontAwesome name={icon} size={20} color={COLORS.SECONDARY_COLOR} />
      )}
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
    padding: 15,
  },
});
