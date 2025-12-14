import { ListSkipButtons } from "@/layout/programs/[label]/ListSkipButton";
import { TrainingSetComponent } from "@/layout/programs/trainingSet/TrainingSet";
import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import * as programs from "@/shared/programs";
import { TrainingProgram } from "@/types/TrainingProgram/TrainingProgram";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const Index = () => {
  const { label } = useLocalSearchParams();

  const selectedProgram = programs[label] as TrainingProgram;

  const [selectedTrainingNumber, setSelectedTrainingNumber] = useState(0);

  return (
    <View style={styles.main}>
      <StyledText
        label={selectedProgram.name}
        variant="header"
        style={styles.header}
      />
      <TrainingSetComponent
        trainingSet={selectedProgram.trainingSets[selectedTrainingNumber]}
      />
      <ListSkipButtons
        selectedTrainingNumber={selectedTrainingNumber}
        limits={{
          high: selectedProgram.trainingSets.length - 1,
          low: 0,
        }}
        onNextPress={setSelectedTrainingNumber.bind(null, (prev) => prev + 1)}
        onPreviousPress={setSelectedTrainingNumber.bind(
          null,
          (prev) => prev - 1
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    paddingInline: 10,
  },
  main: {
    paddingTop: 50,
    paddingBottom: 20,
    gap: 30,
    flexDirection: "column",
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  list: {
    flexDirection: "column",
    flex: 1,
  },
});

export default Index;
