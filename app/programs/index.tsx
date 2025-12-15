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
      />
    );
  };

  const submitMaxWeight = () => {
    saveMaxWeight();
    Keyboard.dismiss();
  };

  return (
    <View style={styles.main}>
      <View style={styles["main-add-max-weight"]}>
        <StyledTextInput
          style={styles["text-input"]}
          value={maxWeight}
          onChangeText={setMaxWeight}
          placeholder="Введите максимальный вес(кг)..."
        />
        <StyledButton onPress={submitMaxWeight}>
          <StyledText label="Добавить" />
        </StyledButton>
      </View>
      <FlatList
        style={styles.list}
        data={programsArray}
        keyExtractor={([label, data]) => label}
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
    marginBottom: 40,
    flexDirection: "row",
    marginInline: 10,
    gap: 20,
  },
  list: {
    flexDirection: "column",
  },
  "text-input": {
    flex: 1,
    height: 40,
    color: COLORS.TEXT_COLOR,
  },
});
