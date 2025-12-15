import { RecordsAddModal } from "@/layout/records/modal/Add/RecordsAddModal";
import { RecordsEditModal } from "@/layout/records/modal/Edit/RecordsEditModal";
import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { useRecords } from "@/shared/hooks/Records/useRecords";
import { RecordType } from "@/types/RecordsType/RecordsType";
import { declineTimes } from "@/utils/declineTimes/declineTimes";
import React, { useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";

export default function Index() {
  const [addModalVisibile, setAddModalVisibile] = useState(false);
  const [editModalVisibile, setEditModalVisibile] = useState(false);

  const [recordToEdit, setRecordToEdit] = useState<RecordType>();

  const { records, addNewRecord, editRecord, deleteRecord } = useRecords();

  const renderRecordItem = ({ item }: ListRenderItemInfo<RecordType>) => {
    const handleEdit = () => {
      setRecordToEdit(item);
      setEditModalVisibile(true);
    };

    return (
      <View style={styles["record-item-container"]}>
        <View style={styles["record-item-container__data"]}>
          <StyledText label={`Упражнение: ${item.name}`} />
          <StyledText label={`Вес: ${item.weight} кг`} />
          <StyledText
            label={`Повторения: ${item.reps} ${declineTimes(
              Number(item.reps)
            )}`}
          />
        </View>
        <View style={styles["record-item-container__action-buttons"]}>
          <StyledButton icon="edit" onPress={handleEdit} />
          <StyledButton
            icon="trash"
            variant="danger"
            onPress={deleteRecord.bind(null, item.id)}
          />
        </View>
      </View>
    );
  };

  const handleAddModalFinish = (newRecord: RecordType) => {
    addNewRecord(newRecord);
    setAddModalVisibile(false);
  };

  const handleEditFinish = (edittedRecord: RecordType) => {
    editRecord(edittedRecord);
    setEditModalVisibile(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles["container-data"]}>
          {records && records.length > 1 ? (
            <FlatList
              data={records}
              renderItem={renderRecordItem}
              keyExtractor={(_, index) => index.toString()}
            />
          ) : (
            <StyledText
              label="Нет рекордов..."
              style={{
                flex: 1,
              }}
            />
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
        onFinish={handleAddModalFinish}
      />

      <RecordsEditModal
        record={recordToEdit}
        isModalVisible={editModalVisibile}
        onFinish={handleEditFinish}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingVertical: 10,
    minWidth: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  "container-data": {
    minWidth: "100%",
    flex: 1,
    paddingTop: 40,
    flexDirection: "column",
  },
  "record-item-container": {
    flexDirection: "row",
    paddingInline: 20,
    marginVertical: 20,
  },
  "record-item-container__data": {
    flex: 1,
    justifyContent: "center",
  },
  "record-item-container__action-buttons": {
    flexDirection: "row",
    gap: 10,
    height: 55,
  },
  "action-button": {
    alignSelf: "center",
    width: "60%",
    marginBottom: 20,
  },
});
