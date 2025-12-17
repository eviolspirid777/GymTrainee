import { Picker } from "@react-native-picker/picker";
import { FC } from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { COLORS } from "../colors/colors";

export type StyledPickerData = {
  label: string,
  value: any
}

type StyledPickerProps = {
  data: StyledPickerData[],
  selectedValue?: string;
  style?: StyleProp<TextStyle>;
  onValueChange?: ((itemValue: string, itemIndex: number) => void);
  disabled?: boolean;
}

export const StyledPicker: FC<StyledPickerProps> = ({
  data,
  selectedValue = data[0].value,
  style,
  onValueChange,
  disabled = false
}) => {
  const computeStylesForDisabled = (): StyleProp<TextStyle> => {
    if(disabled) {
      return {
        opacity: 0.5
      }
    }
  }

  return (
    <Picker
      style={[styles.container,computeStylesForDisabled(), style]}
      selectedValue={selectedValue}
      dropdownIconColor={COLORS.TEXT_COLOR}
      onValueChange={onValueChange}
      enabled={!disabled}
    >
      {
        data.map(item => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))
      }
    </Picker>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    color: COLORS.TEXT_COLOR
  }
})