import { StyledText } from "@/shared/components/StyledText";
import { FC } from "react";
import { View } from "react-native";

type RepeatComponentProps = {
  repeat: number;
};

export const RepeatComponent: FC<RepeatComponentProps> = ({ repeat }) => {
  return (
    <View>
      <StyledText label={repeat.toString()} />
    </View>
  );
};
