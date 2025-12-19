import { ProgramsDays } from "@/layout/programs/days/ProgramsDays";
import { ProgramsHeader } from "@/layout/programs/header/ProgramsHeader";
import { TrainingSets } from "@/layout/programs/TrainingSets/TrainingSets";
import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { useProgramsResults } from "@/shared/hooks/ProgramsResults/useProgramsResults";
import { PADDINGS } from "@/shared/paddings/Paddings";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const Index = () => {
  const { id } = useLocalSearchParams();

  const programId = Array.isArray(id) ? id[0] : id;

  const { programsData, addProgramsResult } = useProgramsResults();
  const selectedProgram = programsData?.find((p) => p.id === programId);

  const [selectedTrainingNumber, setSelectedTrainingNumber] = useState(0);

  if (!selectedProgram) {
    return (
      <View style={styles.main}>
        <StyledText label="Загрузка программы..." />
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <ProgramsHeader programName={selectedProgram?.name ?? ""} />
      <ProgramsDays
        days={selectedProgram.trainingDays.map((el) => el.trainingNumber)}
        selectedDay={selectedTrainingNumber}
        onDaySelect={setSelectedTrainingNumber}
      />
      <TrainingSets
        training={selectedProgram.trainingDays[selectedTrainingNumber]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingInline: PADDINGS.pInline,
    paddingTop: 50,
    paddingBottom: 20,
    gap: 30,
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  list: {
    flexDirection: "column",
  },
});

export default Index;
