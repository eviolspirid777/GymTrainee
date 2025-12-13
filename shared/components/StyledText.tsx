import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../colors/colors";

type StyledTextProps = React.ComponentProps<typeof Text> & {
  label: string;
  variant?: "header" | "primary";
};

export const StyledText: FC<StyledTextProps> = ({
  label,
  variant = "primary",
  ...props
}) => {
  const computedVariantStyles = () => {
    switch (variant) {
      case "header":
        return styles.header;
      case "primary":
        return styles.primary;
    }
  };

  return (
    <Text
      {...props}
      style={[styles.base, computedVariantStyles(), props.style]}
    >
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.TEXT_COLOR,
  },
  primary: {
    fontSize: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 900,
  },
});
