import { Image, StyleSheet, View } from "react-native";

import NoRecordsImage from "@/assets/graphics/Empty.png";
import { StyledPickerData } from "@/shared/components/StyledPicker";
import { useRecords } from "@/shared/hooks/Records/useRecords";
import { useWeightsAnalytic } from "@/shared/hooks/WeightsAnalytic/useWeightsAnalytic";
import { exercisesAtom } from "@/store/Exercises/Exercises";
import { RecordType } from "@/types/RecordsType/RecordsType";
import { WeightAnalyticsEnum } from "@/types/WeightAnalytics/WeightAnalytics";
import { useAtom } from "jotai";
import { FC, useImperativeHandle, useState } from "react";
import { RecordsAddModal } from "../modal/Add/RecordsAddModal";
import { RecordsEditModal } from "../modal/Edit/RecordsEditModal";
import { RecordComponent } from "../recordComponent/RecordComponent";

type RecordsContentProps = {
  ref: React.RefObject<{
    addNewTask: () => void;
  } | null>;
};

export const RecordsContent: FC<RecordsContentProps> = ({ ref }) => {
  useImperativeHandle(ref, () => {
    return {
      addNewTask: () => setAddModalVisibile(true),
    };
  });

  const [exerciesesFromStore] = useAtom(exercisesAtom);
  const [exercieses] = useState<StyledPickerData[]>(() => {
    return exerciesesFromStore.map(([k, v]) => ({
      label: v,
      value: k,
    }));
  });

  const [addModalVisibile, setAddModalVisibile] = useState(false);
  const [editModalVisibile, setEditModalVisibile] = useState(false);

  const [recordToEdit, setRecordToEdit] = useState<RecordType>();

  const { addWeightAnalytic } = useWeightsAnalytic();

  const { records, addNewRecord, editRecord, deleteRecord } = useRecords();

  const isRecordsAvailable = records && records.length > 0;

  const addAnalytic = async (edittedRecord: RecordType) => {
    switch (edittedRecord.name) {
      case "Жим лежа": {
        return await addWeightAnalytic(
          {
            date: new Date(),
            type: WeightAnalyticsEnum.ZHIM_LEZHA,
            weight: Number(edittedRecord.weight),
          },
          "zhimLezhaAnalytic"
        );
      }
      case "Становая тяга": {
        return await addWeightAnalytic(
          {
            date: new Date(),
            type: WeightAnalyticsEnum.STANOVAYA_TYAGA,
            weight: Number(edittedRecord.weight),
          },
          "stanovayaTyagaAnalytics"
        );
      }
      case "Приседания со штангой": {
        return await addWeightAnalytic(
          {
            date: new Date(),
            type: WeightAnalyticsEnum.PRISEDANYA_SO_SHTANGOI,
            weight: Number(edittedRecord.weight),
          },
          "prisedanyaSoShtangoiAnalytics"
        );
      }
    }
  };

  const handleAddModalFinish = async (newRecord: RecordType) => {
    await addNewRecord(newRecord);
  };

  const closeAddModal = () => {
    setAddModalVisibile(false);
  };
  const handleEditFinish = async (edittedRecord: RecordType) => {
    await editRecord(edittedRecord);
    await addAnalytic(edittedRecord);
    setEditModalVisibile(false);
  };

  const handleEdit = (record: RecordType) => {
    setRecordToEdit(record);
    setEditModalVisibile(true);
  };

  return (
    <>
      <View
        style={[
          styles["container-data"],
          !isRecordsAvailable ? styles["no-content"] : null,
        ]}
      >
        {isRecordsAvailable ? (
          records.map((record, index) => (
            <RecordComponent
              key={index}
              record={record}
              onRecordEdit={handleEdit}
              onDeleteRecord={deleteRecord}
            />
          ))
        ) : (
          <View style={styles["no-content__container"]}>
            <Image
              source={NoRecordsImage}
              style={{
                width: 300,
                height: 300,
                marginRight: 20,
              }}
              resizeMode="contain"
            />
          </View>
        )}
      </View>

      <RecordsAddModal
        isModalVisible={addModalVisibile}
        exercises={exercieses}
        onFinish={handleAddModalFinish}
        onClose={closeAddModal}
      />

      <RecordsEditModal
        isModalVisible={editModalVisibile}
        exercises={exercieses}
        record={recordToEdit}
        onFinish={handleEditFinish}
      />
    </>
  );
};

const styles = StyleSheet.create({
  "container-data": {
    minWidth: "100%",
    flex: 1,
    paddingTop: 10,
    flexDirection: "column",
  },
  "no-content": {
    alignItems: "center",
    justifyContent: "center",
  },
  "no-content__container": {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
