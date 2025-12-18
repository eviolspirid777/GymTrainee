import { exercisesForListAtom } from "@/store/Exercises/Exercises";
import { useAtom } from "jotai";
import { ScrollView, StyleSheet, View } from "react-native";
import { ExerciseItem } from "./ExerciseItem/ExerciseItem";

export const ExercisesList = () => {
  const [exercises] = useAtom(exercisesForListAtom);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container__view}>
        {exercises &&
          exercises.map((exercise, index) => (
            <ExerciseItem key={index} exercise={exercise} />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  container__view: {
    flexDirection: "column",
    gap: 20,
  },
});
