import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const useMaxWeight = () => {
  const [maxWeight, setMaxWeight] = useState<string>();

  // Загружаем сохраненный вес при монтировании компонента
  useEffect(() => {
    loadMaxWeight();
  }, []);

  const loadMaxWeight = async () => {
    try {
      const savedWeight = await AsyncStorage.getItem("maxWeight");
      if (savedWeight !== null) {
        setMaxWeight(savedWeight);
      }
    } catch (error) {
      console.error("Ошибка при загрузке веса:", error);
    }
  };

  const saveMaxWeight = async () => {
    try {
      if (maxWeight?.trim()) {
        await AsyncStorage.setItem("maxWeight", maxWeight);
        setMaxWeight(maxWeight);
      }
    } catch (error) {
      console.error("Ошибка при сохранении веса:", error);
    }
  };

  return {
    maxWeight,
    setMaxWeight,
    saveMaxWeight,
    loadMaxWeight,
  };
};
