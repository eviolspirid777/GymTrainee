import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../colors/colors";

type StyledTextProps = React.ComponentProps<typeof Text> & {
  label: string;
  variant?: "header" | "primary" | "subtitle";
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
      case "subtitle":
        return styles.subtitle;
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
  subtitle: {
    fontSize: 18,
    fontWeight: 600,
  },
});
