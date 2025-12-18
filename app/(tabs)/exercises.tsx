import { Header } from "@/layout/base/Header/Header";
import { ExercisesList } from "@/layout/exercises/ExercisesList/ExercisesList";
import { ExercisesSearch } from "@/layout/exercises/ExercisesSearch/ExercisesSearch";
import { ExercisesTitle } from "@/layout/exercises/ExercisesTitle/ExercisesTitle";
import { COLORS } from "@/shared/colors/colors";
import { PADDINGS } from "@/shared/paddings/Paddings";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Exercises() {
  const [searchText, setSearchText] = useState<string>();

  return (
    <View style={styles.container}>
      <Header />
      <ExercisesTitle />
      <ExercisesSearch onSearch={setSearchText} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ExercisesList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingTop: PADDINGS.pTop,
    paddingBottom: PADDINGS.pBottom,
  },
});
