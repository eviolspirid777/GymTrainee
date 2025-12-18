import { COLORS } from "@/shared/colors/colors";
import { Tabs } from "expo-router";

import { Award, BookOpen, Dumbbell, GitGraphIcon } from "lucide-react-native";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.PRIMARY_COLOR,
            borderTopColor: "#333",
            borderTopWidth: 1,
            height: 60,
            paddingBottom: 8,
          },
          tabBarActiveTintColor: COLORS.SECONDARY_COLOR,
          tabBarInactiveTintColor: COLORS.PLACEHOLDER_COLOR,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Программы",
            tabBarIcon: ({ size, color }) => (
              <Dumbbell size={size} color={color} strokeWidth={2} />
            ),
          }}
        />
        <Tabs.Screen
          name="records"
          options={{
            title: "Рекорды",
            tabBarIcon: ({ size, color }) => (
              <Award size={size} color={color} strokeWidth={2} />
            ),
          }}
        />
        <Tabs.Screen
          name="exercises"
          options={{
            title: "Упражнения",
            tabBarIcon: ({ size, color }) => (
              <BookOpen size={size} color={color} strokeWidth={2} />
            ),
          }}
        />
        <Tabs.Screen
          name="analytics"
          options={{
            title: "Аналитика",
            tabBarIcon: ({ size, color }) => (
              <GitGraphIcon size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
