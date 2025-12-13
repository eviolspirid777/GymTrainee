import { StyledText } from "@/shared/components/StyledText";
import { FC } from "react";
import { View } from "react-native";

type RepeatComponentProps = {
  repeat: number;
  index: number;
};

export const RepeatComponent: FC<RepeatComponentProps> = ({
  repeat,
  index,
}) => {
  return (
    <View>
      <StyledText label={index !== 0 ? `${repeat},` : repeat.toString()} />
    </View>
  );
};
