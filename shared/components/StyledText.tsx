import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../colors/colors";

type StyledTextProps = React.ComponentProps<typeof Text> & {
  label: string;
  variant?: "header" | "primary" | "subtitle";
  type?: "error" | "base";
};

export const StyledText: FC<StyledTextProps> = ({
  label,
  variant = "primary",
  type = "base",
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

  const computeTypeStyles = () => {
    switch (type) {
      case "base":
        return styles.base;
      case "error":
        return styles.error;
    }
  };

  return (
    <Text
      {...props}
      style={[
        styles.base,
        computedVariantStyles(),
        computeTypeStyles(),
        props.style,
      ]}
    >
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.TEXT_COLOR,
  },
  //variant
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
  //type
  error: {
    color: COLORS.DANGER,
  },
});
