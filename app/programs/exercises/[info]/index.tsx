import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import {
  ExercisesEnum,
  russianExercisesDictionary,
} from "@/types/Exercises/Exercises";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

import NoRecordsImage from "@/assets/graphics/Empty.png";
import { techniqueDescriptions } from "@/types/Exercises/TechniqueDescription";
import { techniqueImages } from "@/types/Exercises/TechniqueImages";

const ExerciseInfo = () => {
  const router = useRouter();
  const { info } = useLocalSearchParams();

  const parsedInfoName = russianExercisesDictionary.get(info as ExercisesEnum);
  const techniqueImage = techniqueImages.get(info as ExercisesEnum);
  const techniqueDescription = techniqueDescriptions.get(info as ExercisesEnum);

  return (
    <View style={styles.container}>
      {parsedInfoName && <StyledText label={parsedInfoName} variant="header" />}
      <View style={styles["main-block"]}>
        {techniqueImage ? (
          <Image
            source={techniqueImage}
            style={{
              width: 300,
              height: 300,
              resizeMode: "contain",
              marginRight: 20,
            }}
          />
        ) : (
          <Image
            source={NoRecordsImage}
            style={{
              width: 300,
              height: 300,
              resizeMode: "contain",
              marginRight: 20,
            }}
          />
        )}
        {techniqueDescription && (
          <View style={styles["main-block__technique"]}>
            <StyledText label="Техника" variant="subtitle" />
            <StyledText
              label={techniqueDescription}
              style={styles["main-block__technique__description"]}
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
  },
  "main-block": {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  "main-block__technique": {
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingInline: 20,
  },
  "main-block__technique__description": {
    textAlign: "justify",
    marginTop: 20,
  },
});

export default ExerciseInfo;
