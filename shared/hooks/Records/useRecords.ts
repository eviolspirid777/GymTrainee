import { russianExercisesDictionary } from "@/shared/exercises/technique/TechniqueRussification";
import { ExercisesEnum } from "@/types/Exercises/Exercises";
import { RecordType } from "@/types/RecordsType/RecordsType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const getBasedRecords = (): RecordType[] => {
  return [
    {
      id: "zhim_lezha",
      date: dayjs(),
      name: russianExercisesDictionary.get(ExercisesEnum.BENCH_PRESS)!,
      reps: "1",
      weight: "0",
    },
    {
      id: "stanovaya_tyaga",
      date: dayjs(),
      name: russianExercisesDictionary.get(ExercisesEnum.DEAD_LIFT)!,
      reps: "1",
      weight: "0",
    },
    {
      id: "prisedanya_so_shtangoi",
      date: dayjs(),
      name: russianExercisesDictionary.get(ExercisesEnum.SQUATS)!,
      reps: "1",
      weight: "0",
    },
  ];
};

export const useRecords = () => {
  const [records, setRecords] = useState<RecordType[]>();

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    try {
      const savedRecords = await AsyncStorage.getItem("records");

      if (savedRecords === null) {
        setRecords(getBasedRecords());
        return;
      }

      const parsedSavedRecords = JSON.parse(savedRecords) as RecordType[];
      setRecords(parsedSavedRecords);
    } catch (error) {
      console.error("Ошибка при загрузке рекордов", error);
    }
  };

  const saveRecords = async () => {
    try {
      if (records) {
        const recordsStringified = JSON.stringify(records);
        await AsyncStorage.setItem("records", recordsStringified);
      }
    } catch (error) {
      console.error("Ошибка при сохранении рекордов:", error);
    }
  };

  const addNewRecord = async (record: RecordType) => {
    const recordWithId: RecordType = { ...record, id: uuidv4(), date: dayjs() };
    try {
      const newRecords =
        records && records.length > 0
          ? [...records, recordWithId]
          : [recordWithId];
      const newRecordsStringified = JSON.stringify(newRecords);
      await AsyncStorage.setItem("records", newRecordsStringified);
      setRecords(newRecords);
    } catch (error) {
      console.error("Ошибка при добавлении нового рекорда", error);
    }
  };

  const deleteRecord = async (recordId?: string) => {
    try {
      const filteredRecords = records?.filter(
        (record) => record.id !== recordId
      );
      const newRecordsStringified = JSON.stringify(filteredRecords);
      await AsyncStorage.setItem("records", newRecordsStringified);
      setRecords(filteredRecords);
    } catch (error) {
      console.error("Ошибка при удалении рекорда", error);
    }
  };

  const editRecord = async (edittedRecord: RecordType) => {
    try {
      const newRecords = records?.map((record) => {
        if (record.id === edittedRecord.id) {
          return { ...edittedRecord, date: dayjs() };
        }
        return record;
      });
      const newRecordsStringified = JSON.stringify(newRecords);
      await AsyncStorage.setItem("records", newRecordsStringified);
      setRecords(newRecords);
    } catch (error) {
      console.error("Ошибка при редактировании рекорда", error);
    }
  };

  return {
    records,
    setRecords,
    saveRecords,
    loadRecords,
    addNewRecord,
    deleteRecord,
    editRecord,
  };
};
