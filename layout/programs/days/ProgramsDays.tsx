import { FC, useEffect, useRef, useState } from "react";
import { LayoutChangeEvent, ScrollView, StyleSheet, View } from "react-native";
import { ProgramDay } from "./day/ProgramDay";

type ProgramsDaysProps = {
  days: {
    wholeDays: number[],
    passedDays?: number[],
  };
  selectedDay: number;
  onDaySelect: (day: number) => void;
};

export const ProgramsDays: FC<ProgramsDaysProps> = ({
  days,
  selectedDay,
  onDaySelect,
}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [itemPositions, setItemPositions] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    if (itemPositions[selectedDay] !== undefined && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: itemPositions[selectedDay] - 40,
        animated: true,
      });
    }
  }, [selectedDay, itemPositions]);

  const handleItemLayout = (index: number) => (event: LayoutChangeEvent) => {
    const { x } = event.nativeEvent.layout;
    setItemPositions((prev) => ({
      ...prev,
      [index]: x,
    }));
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        {days.wholeDays.map((trainingNumber, index) => (
          <View
            key={index}
            onLayout={handleItemLayout(index)}
          >
            <ProgramDay
              day={trainingNumber}
              dayIndex={index}
              isActive={selectedDay === index}
              isPassed={days.passedDays?.includes(trainingNumber)}
              onDaySelect={onDaySelect}
            />
          </View>
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
