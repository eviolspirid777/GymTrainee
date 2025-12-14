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
  icon?:
    | React.ComponentProps<typeof FontAwesome>["name"]
    | {
        type: React.ComponentProps<typeof FontAwesome>["name"];
        direction: "before" | "after";
      };
  onPress?: (event: GestureResponderEvent) => void;
  type?: "primary" | "link";
  disabled?: boolean;
  children?: React.ReactNode;
};

export const StyledButton: FC<StyledButtonProps> = ({
  onPress,
  style,
  icon,
  type = "primary",
  disabled,
  children,
  ...props
}) => {
  const computePressedStyle = (pressed: boolean): StyleProp<ViewStyle> => {
    if (pressed) {
      return styles.pressed;
    }
  };

  const computeTypeStyle = (): StyleProp<ViewStyle> => {
    switch (type) {
      case "link":
        return {};
      case "primary":
        return styles.primary;
    }
  };

  const computeDisabled = (): StyleProp<ViewStyle> => {
    if (disabled) {
      return styles.disabled;
    }
  };

  const renderIconPrevious = () => {
    if (icon && (typeof icon === "string" || icon.direction === "before")) {
      return (
        <FontAwesome
          name={typeof icon === "string" ? icon : icon.type}
          size={20}
          color={COLORS.SECONDARY_COLOR}
        />
      );
    }
  };

  const renderIconAfter = () => {
    if (icon && typeof icon !== "string" && icon.direction === "after") {
      return (
        <FontAwesome
          name={icon.type}
          size={20}
          color={COLORS.SECONDARY_COLOR}
        />
      );
    }
  };

  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        computePressedStyle(pressed),
        computeTypeStyle(),
        computeDisabled(),
        style,
      ]}
      disabled={disabled}
    >
      {renderIconPrevious()}
      {children && children}
      {renderIconAfter()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 5,
    padding: 15,
  },
  disabled: {
    opacity: 0.5,
    borderColor: COLORS.DANGER,
  },
  primary: {
    borderColor: COLORS.SECONDARY_COLOR,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.5,
  },
});
