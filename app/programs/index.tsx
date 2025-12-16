import { TrainingProgramLink } from "@/layout/programs/trainingProgramLink/TrainingProgramLink";
import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { StyledTextInput } from "@/shared/components/StyledTextInput";
import { useMaxWeight } from "@/shared/hooks/MaxWeights/useMaxWeight";
import * as programs from "@/shared/programs/index";
import { TrainingProgram } from "@/types/TrainingProgram/TrainingProgram";
import { useRouter } from "expo-router";
import {
  FlatList,
  Keyboard,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from "react-native";

const Index = () => {
  const router = useRouter();

  const programsArray = Object.entries(programs);

  const { maxWeight, setMaxWeight, saveMaxWeight } = useMaxWeight();

  const renderTrainigProgramsList = ({
    item: [label, data],
  }: ListRenderItemInfo<[string, TrainingProgram]>) => {
    return (
      <TrainingProgramLink
        trainingLabel={data.name}
        onTrainingPress={router.push.bind(null, `/programs/${label}`)}
        onInfoPress={router.push.bind(null, `/programs/info/${label}`)}
      />
    );
  };

  const submitMaxWeight = () => {
    saveMaxWeight();
    Keyboard.dismiss();
  };

  return (
    <View style={styles.main}>
      <StyledText label="Максимальный жим лежа" />
      <View style={styles["main-add-max-weight"]}>
        <StyledTextInput
          style={styles["text-input"]}
          value={maxWeight}
          onChangeText={setMaxWeight}
          placeholder="Максимальный вес(кг)..."
          keyboardType="numeric"
        />
        <StyledButton onPress={submitMaxWeight}>
          <StyledText label="Применить" />
        </StyledButton>
      </View>
      <StyledText label="Программы:" />
      <FlatList
        style={styles.list}
        data={programsArray}
        keyExtractor={([label]) => label}
        renderItem={renderTrainigProgramsList}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "column",
    maxWidth: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  "main-add-max-weight": {
    marginTop: 20,
    marginBottom: 40,
    flexDirection: "row",
    marginInline: 10,
    gap: 20,
  },
  list: {
    marginTop: 20,
    flexDirection: "column",
  },
  "text-input": {
    flex: 1,
    height: 55,
    color: COLORS.TEXT_COLOR,
  },
});
