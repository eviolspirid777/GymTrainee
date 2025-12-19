import { PADDINGS } from "@/shared/paddings/Paddings";
import { exercisesForListAtom } from "@/store/Exercises/Exercises";
import { useAtom } from "jotai";
import { FC } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import { ExerciseItem } from "./ExerciseItem/ExerciseItem";

import EmptyImage from "@/assets/graphics/Empty.png";

type ExercisesListProps = {
  searchText?: string;
}

export const ExercisesList: FC<ExercisesListProps> = ({
  searchText
}) => {
  const [exercises] = useAtom(exercisesForListAtom);
  const {width} = Dimensions.get("window");

  const renderData = () => {
    if(searchText) {
      const filteredData = exercises.filter(e => e.name.toLowerCase().includes(searchText.toLowerCase()))
      if(filteredData.length > 0) {
        return filteredData.map((exercise, index) => (
          <ExerciseItem key={index} exercise={exercise} />
        ))
      }
      return <Image
              source={EmptyImage}
              style={{
                width: width - 100,
                height: 300,
              }}
              resizeMode="contain"
            />
    }
    return exercises.map((exercise, index) => (
      <ExerciseItem key={index} exercise={exercise} />
    ))
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.container__view}>
        {exercises &&
          renderData()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingInline: PADDINGS.pInline,
  },
  container__view: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingBottom: PADDINGS.pBottom - 20
  },
});
