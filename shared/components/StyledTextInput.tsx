import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { COLORS } from "../colors/colors";

type StyledTextInputProps = TextInputProps & {
  isError?: boolean;
  disabled?: boolean;
};

export const StyledTextInput: React.FC<StyledTextInputProps> = ({
  isError,
  disabled = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      onFocus={setIsFocused.bind(null, true)}
      onBlur={setIsFocused.bind(null, false)}
      style={[
        style.input,
        isFocused ? style.focused : null,
        isError ? style.error : null,
        disabled ? style.disabled : null,
        props.style,
      ]}
      {...props}
      placeholderTextColor={COLORS.PLACEHOLDER_COLOR}
      editable={disabled ? false : true}
    />
  );
};

const style = StyleSheet.create({
  input: {
    paddingHorizontal: 40,
    paddingVertical: 5,
    color: COLORS.TEXT_COLOR,
    backgroundColor: COLORS.INPUT_BG,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PLACEHOLDER_COLOR,
    flex: 1,
  },
  focused: {
    borderColor: COLORS.SECONDARY_COLOR,
  },
  error: {
    borderColor: COLORS.DANGER,
  },
  disabled: {
    opacity: 0.5,
    color: COLORS.PLACEHOLDER_COLOR,
  },
});
