import { useWindowDimensions } from "react-native";

export const useResponsiveFont = (baseSize: number) => {
  const { width } = useWindowDimensions();
  const guidelineBaseWidth = 375; // “эталонная” ширина (iPhone 11 и т.п.)
  return (width / guidelineBaseWidth) * baseSize;
};
