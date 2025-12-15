import { Stack } from "expo-router";
import "react-native-get-random-values";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        animation: "slide_from_right",
        animationDuration: 300,
        headerShown: false,
        gestureEnabled: true, // включить жесты для возврата назад
        gestureDirection: "horizontal", // направление жеста
      }}
    />
  );
}
