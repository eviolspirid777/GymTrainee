import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { TrainingProgram } from "@/types/TrainingProgram/TrainingProgram";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import NoRecordsImage from "@/assets/graphics/Empty.png";
import { programsAtom } from "@/store/Programs/Programs";
import { useAtom } from "jotai";

const InformationLabel = () => {
  const { width } = Dimensions.get("window");

  const router = useRouter();
  const { label } = useLocalSearchParams();

  const [programs] = useAtom(programsAtom);

  const selectedProgram = programs.find(
    (p) => p[0] === label
  )?.[1] as TrainingProgram;

  const passedTrainings = selectedProgram.results?.passedTrainings ?? 0;
  const trainingDaysCount = selectedProgram.trainingDays.length;
  return (
    <View style={styles.container}>
      <StyledText variant="header" label={selectedProgram.name} />
      <View style={styles["main-content"]}>
        {selectedProgram.information?.description ? (
          <StyledText label={selectedProgram.information.description} />
        ) : (
          <Image
            source={NoRecordsImage}
            style={{
              width: width,
              height: 300,
              marginRight: 20,
            }}
            resizeMode="contain"
          />
        )}
      </View>
      <View>
        <StyledText
          label={`Пройденных тренировок: ${passedTrainings} / ${trainingDaysCount}`}
        />
      </View>
      <StyledButton icon={"arrow-left"} onPress={router.back.bind(null)}>
        <StyledText label="Назад" />
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    flex: 1,
    backgroundColor: COLORS.PRIMARY_COLOR,
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  "main-content": {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InformationLabel;
