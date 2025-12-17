import NoRecordsImage from "@/assets/graphics/Empty.png";
import { RecordsAddModal } from "@/layout/records/modal/Add/RecordsAddModal";
import { RecordsEditModal } from "@/layout/records/modal/Edit/RecordsEditModal";
import { RecordComponent } from "@/layout/records/recordComponent/RecordComponent";
import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledPickerData } from "@/shared/components/StyledPicker";
import { StyledText } from "@/shared/components/StyledText";
import { russianExercisesDictionary } from "@/shared/exercises/technique/TechniqueRussification";
import { useRecords } from "@/shared/hooks/Records/useRecords";
import { useWeightsAnalytic } from "@/shared/hooks/WeightsAnalytic/useWeightsAnalytic";
import { RecordType } from "@/types/RecordsType/RecordsType";
import { WeightAnalyticsEnum } from "@/types/WeightAnalytics/WeightAnalytics";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from "react-native";

export default function Index() {
  //TODO: УПражнения можно убрать в store...(Provider)
  const [ exercieses ] = useState<StyledPickerData[]>(() => {
    const _exercises = Object.entries(Object.fromEntries(russianExercisesDictionary));
    return _exercises.map(([k,v]) => ({
      label: v,
      value: k
    }))
  })

  const [addModalVisibile, setAddModalVisibile] = useState(false);
  const [editModalVisibile, setEditModalVisibile] = useState(false);

  const [recordToEdit, setRecordToEdit] = useState<RecordType>();

  const { records, addNewRecord, editRecord, deleteRecord } = useRecords();
  const {addWeightAnalytic} = useWeightsAnalytic()

  const isRecordsAvailable = records && records.length > 0;

  const handleAddModalFinish = async (newRecord: RecordType) => {
    await addNewRecord(newRecord);
  };

  const closeAddModal = () => {
    setAddModalVisibile(false);
  };

  const addAnalytic = async (edittedRecord: RecordType) => {
    switch(edittedRecord.name) {
      case "Жим лежа": {
        return await addWeightAnalytic({
          date: new Date(),
          type: WeightAnalyticsEnum.ZHIM_LEZHA,
          weight: Number(edittedRecord.weight)
        }, "zhimLezhaAnalytic")
      }
      case "Становая тяга": {
        return await addWeightAnalytic({
          date: new Date(),
          type: WeightAnalyticsEnum.STANOVAYA_TYAGA,
          weight: Number(edittedRecord.weight)
        }, "stanovayaTyagaAnalytics")
      }
      case "Приседания со штангой": {
        return await addWeightAnalytic({
          date: new Date(),
          type: WeightAnalyticsEnum.PRISEDANYA_SO_SHTANGOI,
          weight: Number(edittedRecord.weight)
        }, "prisedanyaSoShtangoiAnalytics")
      }
    }
  }

  const handleEditFinish = async (edittedRecord: RecordType) => {
    await editRecord(edittedRecord);
    await addAnalytic(edittedRecord)
    setEditModalVisibile(false);
  };

  const renderRecordItem = ({ item }: ListRenderItemInfo<RecordType>) => {
    const handleEdit = (record: RecordType) => {
      setRecordToEdit(record);
      setEditModalVisibile(true);
    };

    return (
      <RecordComponent
        record={item}
        onRecordEdit={handleEdit}
        onDeleteRecord={deleteRecord}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <StyledText label="Рекорды" variant="header" />
        <View
          style={[
            styles["container-data"],
            !isRecordsAvailable ? styles["no-content"] : null,
          ]}
        >
          {isRecordsAvailable ? (
            <FlatList
              data={records}
              renderItem={renderRecordItem}
              keyExtractor={(_, index) => index.toString()}
            />
          ) : (
            <View style={styles["no-content__container"]}>
              <Image
                source={NoRecordsImage}
                style={{
                  width: 300,
                  height: 300,
                  resizeMode: "contain",
                  marginRight: 20,
                }}
              />
            </View>
          )}
          <StyledButton
            style={styles["action-button"]}
            onPress={setAddModalVisibile.bind(null, true)}
            icon={{
              direction: "before",
              type: "plus",
            }}
          >
            <StyledText label="Новая запись" />
          </StyledButton>
        </View>
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
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: 60,
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingVertical: 10,
    minWidth: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
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
  "container-data": {
    minWidth: "100%",
    flex: 1,
    paddingTop: 10,
    flexDirection: "column",
  },
  "action-button": {
    width: "45%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
