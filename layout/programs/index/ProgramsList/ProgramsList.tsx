import { StyledText } from "@/shared/components/StyledText";
import { programsAtom } from "@/store/Programs/Programs";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { StyleSheet, View } from "react-native";
import { TrainingProgramLink } from "../../trainingProgramLink/TrainingProgramLink";

export const ProgramsList = () => {
  const router = useRouter();

  const [programsArray] = useAtom(programsAtom);

  return (
    <View style={styles.container}>
      <StyledText
        label="Программы тренировок"
        variant="header"
        style={styles.header}
      />
      {programsArray.map(([label, program], key) => (
        <TrainingProgramLink
          key={key}
          training={program}
          onTrainingPress={router.push.bind(null, `/programs/${program.id}`)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignSelf: "flex-start",
  },
  list: {
    marginTop: 20,
    flexDirection: "column",
  },
});
