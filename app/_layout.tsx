import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from "expo-router";
import "react-native-get-random-values";

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          animation: "slide_from_right",
          animationDuration: 300,
          headerShown: false,
          gestureEnabled: true, // включить жесты для возврата назад
          gestureDirection: "horizontal", // направление жеста
        }}
      />
    </QueryClientProvider>
  );
}
