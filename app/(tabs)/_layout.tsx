import { COLORS } from "@/shared/colors/colors";
import { useResponsiveFont } from "@/shared/hooks/HELPERS/ResponsiveFont/useResponsiveFont";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Award, BookOpen, Dumbbell, GitGraphIcon } from "lucide-react-native";

import { Platform } from "react-native";
import Toast from "react-native-toast-message";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  const getTabBarHeight = () => {
    const baseHeight = 53;
    const bottomInset = insets.bottom;

    if (Platform.OS === "android" && bottomInset > 0) {
      return baseHeight + bottomInset;
    }

    return baseHeight;
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.PRIMARY_COLOR,
            borderTopColor: COLORS.INPUT_BG,
            borderTopWidth: 1,
            height: getTabBarHeight(),
            paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
            // height: 77,
            // paddingBottom: 8,
          },
          tabBarActiveTintColor: COLORS.SECONDARY_COLOR,
          tabBarInactiveTintColor: COLORS.PLACEHOLDER_COLOR,
          tabBarLabelStyle: {
            fontSize: useResponsiveFont(12),
            fontWeight: "600",
            marginBottom: Platform.OS === "android" ? 4 : 0,
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
      <Toast />
    </>
  );
}
