import { ListSkipButtons } from "@/layout/programs/[label]/ListSkipButton";
import { TrainingSetComponent } from "@/layout/programs/trainingSet/TrainingSet";
import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { useProgramsResults } from "@/shared/hooks/ProgramsResults/useProgramsResults";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const Index = () => {
  const { id } = useLocalSearchParams();

  const { programsData, addProgramsResult } = useProgramsResults();
  const selectedProgram = programsData?.find((p) => p.id === id);

  const [selectedTrainingNumber, setSelectedTrainingNumber] = useState(0);

  return (
    <View style={styles.main}>
      <StyledText
        label={selectedProgram?.name ?? ""}
        variant="header"
        style={styles.header}
      />
      {selectedProgram?.trainingDays[selectedTrainingNumber] && (
        <TrainingSetComponent
          trainingSet={selectedProgram?.trainingDays[selectedTrainingNumber]}
          onCheckPress={(exerciseName, state, dayNumber) =>
            addProgramsResult(
              selectedProgram.id,
              dayNumber,
              exerciseName,
              state
            )
          }
        />
      )}
      <ListSkipButtons
        selectedTrainingNumber={selectedTrainingNumber}
        limits={{
          high: (selectedProgram?.trainingDays.length ?? 0) - 1,
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
