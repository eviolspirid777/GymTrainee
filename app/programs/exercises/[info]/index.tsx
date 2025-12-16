import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const ExerciseInfo = () => {
  const params = useLocalSearchParams();
  console.log(params);

  return <View></View>;
};

export default ExerciseInfo;
