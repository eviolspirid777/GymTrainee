import { FC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ProgramDay } from "./day/ProgramDay";

type ProgramsDaysProps = {
  days: number[];
  selectedDay: number;
  onDaySelect: (day: number) => void;
};

export const ProgramsDays: FC<ProgramsDaysProps> = ({
  days,
  selectedDay,
  onDaySelect,
}) => {
  return (
    <ScrollView
      horizontal
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        {days.map((_, index) => (
          <ProgramDay
            key={index}
            day={index + 1}
            isActive={selectedDay === index}
            onDaySelect={onDaySelect}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 50,
  },
  container: {
    paddingInline: 5,
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
});
