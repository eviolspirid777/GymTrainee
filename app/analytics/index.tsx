import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { useRecords } from "@/shared/hooks/Records/useRecords";
import { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { type LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";

const Analytics = () => {
  const screenWidth = Dimensions.get("window").width;

  const { records } = useRecords();

  const [data, setData] = useState<LineChartData>({
    labels: ["Нед1", "Нед2", "Нед3", "Нед4", "Нед5", "Нед6"],
    datasets: [
      {
        data: [80, 82.5, 85, 85.5, 87, 90],
        color: () => COLORS.SECONDARY_COLOR,
        strokeWidth: 1,
      },
    ],
  });

  return (
    <View style={styles.container}>
      <StyledText label="Аналитика" variant="header" style={styles.header} />
      <LineChart
        data={data}
        width={screenWidth - 32}
        height={220}
        chartConfig={{
          backgroundColor: "#1e1e1e",
          backgroundGradientFrom: "#1e1e1e",
          backgroundGradientTo: "#1e1e1e",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLORS.PRIMARY_COLOR,
    flex: 1,
  },
  header: {
    marginBottom: 20,
  },
});

export default Analytics;
