import { RecordType } from "@/types/RecordsType/RecordsType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useRecords = () => {
  const [records, setRecords] = useState<RecordType[]>();

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    try {
      const savedRecords = await AsyncStorage.getItem("records");
      if (savedRecords !== null) {
        const parsedSavedRecords = JSON.parse(savedRecords) as RecordType[];
        setRecords(parsedSavedRecords);
      }
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
    const recordWithId: RecordType = { ...record, id: uuidv4() };
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
          return edittedRecord;
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
