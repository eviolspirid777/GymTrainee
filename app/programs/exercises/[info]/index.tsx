import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { ExercisesEnum } from "@/types/Exercises/Exercises";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import NoRecordsImage from "@/assets/graphics/Empty.png";
import { techniqueDescriptions } from "@/shared/exercises/technique/TechniqueDescription";
import { techniqueImages } from "@/shared/exercises/technique/TechniqueImages";
import { russianExercisesDictionary } from "@/shared/exercises/technique/TechniqueRussification";
import { PADDINGS } from "@/shared/paddings/Paddings";
import { exercisesForListAtom } from "@/store/Exercises/Exercises";
import { useAtom } from "jotai";

const ExerciseInfo = () => {
  const router = useRouter();
  const { info } = useLocalSearchParams();
  const {width} = Dimensions.get("window");

  const [exercisesForList] = useAtom(exercisesForListAtom)

  const parsedInfoName = russianExercisesDictionary.get(info as ExercisesEnum);
  const techniqueImage = techniqueImages.get(info as ExercisesEnum);
  const techniqueDescription = techniqueDescriptions.get(info as ExercisesEnum);
  const tag = exercisesForList.find(e => e.name === parsedInfoName)?.tag?.toString();

  return (
    <View style={styles.container}>
      <StyledText label="Техника" variant="header"/>
      {parsedInfoName && <StyledText label={parsedInfoName} variant="title" />}
      {
        tag && <StyledText style={styles.tag} label={tag} />
      }
      <View style={styles["main-block"]}>
        {techniqueImage ? (
          <Image
            source={techniqueImage}
            style={{
              width: width,
              height: 300,
            }}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={NoRecordsImage}
            style={{
              width: 300,
              height: 300,
              marginRight: 20,
            }}
            resizeMode="contain"
          />
        )}
        {techniqueDescription && (
          <View style={styles["main-block__technique"]}>
            <StyledText label="Техника Выполнения" variant="title" />
            <StyledText
              label={techniqueDescription}
              style={styles["main-block__technique__description"]}
              variant="subtitle"
            />
          </View>
        )}
      </View>
      <StyledButton icon={"arrow-left"} onPress={router.back.bind(null)}>
        <StyledText label="Назад" />
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingInline: PADDINGS.pInline,
    gap: 20,
  },
  tag: {
    backgroundColor: "#2d3b4e",
    color: COLORS.SECONDARY_COLOR,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  "main-block": {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  "main-block__technique": {
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingInline: 20,
  },
  "main-block__technique__description": {
    textAlign: "center",
    marginTop: 20,
  },
});

export default ExerciseInfo;
