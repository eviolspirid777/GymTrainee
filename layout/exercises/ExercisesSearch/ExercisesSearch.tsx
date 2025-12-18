import { COLORS } from "@/shared/colors/colors";
import { StyledTextInput } from "@/shared/components/StyledTextInput";
import { Search } from "lucide-react-native";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

type ExercisesSearchProps = {
  onSearch: (text: string) => void;
};

export const ExercisesSearch: FC<ExercisesSearchProps> = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <Search
        style={styles["search-icon"]}
        size={20}
        color={COLORS.PLACEHOLDER_COLOR}
      />
      <StyledTextInput
        placeholder="Поиск упражнения"
        onChangeText={onSearch}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 99,
    position: "relative",
    marginBottom: 10,
    height: 50,
    width: "95%",
  },
  "search-icon": {
    position: "absolute",
    zIndex: 98,
    top: 15,
    left: 15,
  },
});
