import { WeightAnalytics, WeightAnalyticsEnum } from "@/types/WeightAnalytics/WeightAnalytics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const setBasedWeightAnalytics = <T extends WeightAnalyticsEnum>(type: T): WeightAnalytics<T>  => {
  return {
    date: new Date(),
    type: type,
    weight: 0
  }
}

export const useWeightsAnalytic = () => {
  const [zhimLezhaAnalytics, setZhimLezhaAnalytic] = useState<WeightAnalytics<WeightAnalyticsEnum.ZHIM_LEZHA>[]>()
  const [stanovayaTyagaAnalytics, setStanovayaTyagaAnalytics] = useState<WeightAnalytics<WeightAnalyticsEnum.STANOVAYA_TYAGA>[]>()
  const [prisedanyaSoShtangoiAnalytics, setPrisedanyaSoShtangoiAnalytics] = useState<WeightAnalytics<WeightAnalyticsEnum.PRISEDANYA_SO_SHTANGOI>[]>()

  useEffect(() => {
    loadZhimLezhaAnalytics();
    loadStanovayaTyagaAnalytics();
    loadPrisedanyaSoShtangoiAnalytics();
  }, []);

  const loadZhimLezhaAnalytics = async () => {
    try {
      const saveZhimLezhaAnalytics = await AsyncStorage.getItem("zhimLezhaAnalytic");

      if (saveZhimLezhaAnalytics === null) {
        setZhimLezhaAnalytic([setBasedWeightAnalytics(WeightAnalyticsEnum.ZHIM_LEZHA)]);
        return;
      }

      const parsedSavedZhimLezhaAnalytics = JSON.parse(saveZhimLezhaAnalytics) as WeightAnalytics<WeightAnalyticsEnum.ZHIM_LEZHA>;
      setZhimLezhaAnalytic(prev => {
        if(!prev) return prev;
        return [...prev, parsedSavedZhimLezhaAnalytics]
      });
    } catch (error) {
      console.error("Ошибка при загрузке аналитика весов", error);
    }
  }

  const loadStanovayaTyagaAnalytics = async() => {
    try {
      const saveStanovayaTyagaAnalytics = await AsyncStorage.getItem("stanovayaTyagaAnalytics");

      if (saveStanovayaTyagaAnalytics === null) {
        setStanovayaTyagaAnalytics([setBasedWeightAnalytics(WeightAnalyticsEnum.STANOVAYA_TYAGA)]);
        return;
      }

      const parsedSaveStanovayaTyagaAnalytics = JSON.parse(saveStanovayaTyagaAnalytics) as WeightAnalytics<WeightAnalyticsEnum.STANOVAYA_TYAGA>;
      setStanovayaTyagaAnalytics(prev => {
        if(!prev) return prev;
        return [...prev, parsedSaveStanovayaTyagaAnalytics]
      });
    } catch (error) {
      console.error("Ошибка при загрузке аналитика весов", error);
    }
  }

  const loadPrisedanyaSoShtangoiAnalytics = async () => {
    try {
      const savePrisedanyaSoShtangoiAnalytics = await AsyncStorage.getItem("prisedanyaSoShtangoiAnalytics");

      if (savePrisedanyaSoShtangoiAnalytics === null) {
        setPrisedanyaSoShtangoiAnalytics([setBasedWeightAnalytics(WeightAnalyticsEnum.PRISEDANYA_SO_SHTANGOI)]);
        return;
      }

      const parsedSaveStanovayaTyagaAnalytics = JSON.parse(savePrisedanyaSoShtangoiAnalytics) as WeightAnalytics<WeightAnalyticsEnum.PRISEDANYA_SO_SHTANGOI>;
      setPrisedanyaSoShtangoiAnalytics(prev => {
        if(!prev) return prev;
        return [...prev, parsedSaveStanovayaTyagaAnalytics]
      });
    } catch (error) {
      console.error("Ошибка при загрузке аналитика весов", error);
    }
  }

  const addWeightAnalytic = async <T extends WeightAnalyticsEnum>(weightAnalyticsToAdd: WeightAnalytics<T>, storageItemName: "zhimLezhaAnalytic" | "stanovayaTyagaAnalytics" | "prisedanyaSoShtangoiAnalytics") => {
    try {
      const savedWeightAnalytics = await AsyncStorage.getItem(storageItemName);

      if(savedWeightAnalytics) {
        switch(weightAnalyticsToAdd.type) {
          case WeightAnalyticsEnum.PRISEDANYA_SO_SHTANGOI: {
            if(prisedanyaSoShtangoiAnalytics) {
              const localPrisedanyaSoShtangoiAnalytics = [...prisedanyaSoShtangoiAnalytics, weightAnalyticsToAdd]
              const stringifiedLocalPrisedanyaSoShtangoiAnalytics = JSON.stringify(localPrisedanyaSoShtangoiAnalytics);
              await AsyncStorage.setItem(storageItemName, stringifiedLocalPrisedanyaSoShtangoiAnalytics);
              setPrisedanyaSoShtangoiAnalytics(localPrisedanyaSoShtangoiAnalytics)
            }
            break;
          }
          case WeightAnalyticsEnum.STANOVAYA_TYAGA: {
            if(stanovayaTyagaAnalytics) {
              const localStanovayaTyagaAnalytics = [...stanovayaTyagaAnalytics, weightAnalyticsToAdd]
              const stringifiedLocalStanovayaTyagaAnalytics = JSON.stringify(localStanovayaTyagaAnalytics);
              await AsyncStorage.setItem(storageItemName, stringifiedLocalStanovayaTyagaAnalytics);
              setStanovayaTyagaAnalytics(stringifiedLocalStanovayaTyagaAnalytics)
            }
            break;
          }
          case WeightAnalyticsEnum.ZHIM_LEZHA: {
            if(zhimLezhaAnalytics) {
              const localZhimLezhaAnalytics = [...zhimLezhaAnalytics, weightAnalyticsToAdd]
              const stringifiedLocalZhimLezhaAnalytics = JSON.stringify(localZhimLezhaAnalytics);
              await AsyncStorage.setItem(storageItemName, stringifiedLocalZhimLezhaAnalytics);
              setStanovayaTyagaAnalytics(stringifiedLocalZhimLezhaAnalytics)
            }
            break;
          }
        }
      }
    } catch (error) {
      console.error("Ошибка при сохранении аналитики весов:", error);
    }
  }

  return {
    zhimLezhaAnalytics,
    stanovayaTyagaAnalytics,
    prisedanyaSoShtangoiAnalytics,
    addWeightAnalytic,
  }
}