import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { COLORS } from "../colors/colors";

type StyledTextInputProps = TextInputProps & {
  isError?: boolean;
};

export const StyledTextInput: React.FC<StyledTextInputProps> = ({
  isError,
  ...props
}) => {
  return (
    <TextInput
      style={[style.input, props.style, isError ? style.error : null]}
      {...props}
      placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
    />
  );
};

const style = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: COLORS.TEXT_COLOR,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.SECONDARY_COLOR,
    flex: 1,
  },
  error: {
    borderColor: COLORS.DANGER,
  },
});
