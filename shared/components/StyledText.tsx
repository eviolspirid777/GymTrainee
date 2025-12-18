import { FC, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../colors/colors";
import { useResponsiveFont } from "../hooks/HELPERS/ResponsiveFont/useResponsiveFont";

type StyledTextProps = React.ComponentProps<typeof Text> & {
  label: string;
  variant?: "title" | "header" | "primary" | "subtitle" | "ruby";
  type?: "error" | "base";
  after?: ReactNode;
  before?: ReactNode;
};

export const StyledText: FC<StyledTextProps> = ({
  label,
  variant = "primary",
  type = "base",
  after,
  before,
  ...props
}) => {
  const computedBaseFontSize = (() => {
    switch (variant) {
      case "primary":
        return 16;
      case "title":
        return 24;
      case "header":
        return 18;
      case "subtitle":
        return 14;
      case "ruby":
        return 12;
    }
  })();

  const fontSize = useResponsiveFont(computedBaseFontSize);

  const computedVariantStyles = () => {
    switch (variant) {
      case "title":
        return styles.title;
      case "header":
        return styles.header;
      case "primary":
        return styles.primary;
      case "subtitle":
        return styles.subtitle;
      case "ruby":
        return styles.ruby;
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

  const styles = StyleSheet.create({
    base: {
      color: COLORS.TEXT_COLOR,
    },
    //variant
    primary: {
      fontSize: fontSize,
    },
    title: {
      fontSize: fontSize,
      fontWeight: 900,
    },
    header: {
      fontSize: fontSize,
      fontWeight: 700,
    },
    subtitle: {
      fontSize: fontSize,
      fontWeight: 300,
    },
    ruby: {
      fontSize,
      fontWeight: 300,
      color: COLORS.PLACEHOLDER_COLOR,
    },
    //type
    error: {
      color: COLORS.DANGER,
    },
  });

  return (
    <Text
      {...props}
      style={[
        styles.base,
        computeTypeStyles(),
        computedVariantStyles(),
        props.style,
      ]}
    >
      {before && before}
      {label}
      {after && after}
    </Text>
  );
};
