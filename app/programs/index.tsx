import { TrainingSetComponent } from "@/layout/programs/trainingSet/TrainingSet";
import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { uncleMishaTrainingProgram } from "@/shared/programs/UncleMisha/UncleMishaProgram";
import { TrainingSet } from "@/types/TrainingProgram/TrainingProgram";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

const Index = () => {
  const renderTrainingSet = ({ item }: ListRenderItemInfo<TrainingSet>) => {
    return <TrainingSetComponent trainingSet={item} />;
  };

  return (
    <View style={styles.main}>
      <StyledText label={uncleMishaTrainingProgram.name} variant="header" />
      <FlatList
        style={styles.list}
        data={uncleMishaTrainingProgram.trainingSets}
        keyExtractor={(d) => d.trainingNumber.toString()}
        renderItem={renderTrainingSet}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  main: {
    paddingInline: 20,
    flexDirection: "column",
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  list: {
    flexDirection: "row",
  },
});
