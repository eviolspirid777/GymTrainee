import { RecordsAddModal } from "@/layout/records/modal/Add/RecordsAddModal";
import { RecordsEditModal } from "@/layout/records/modal/Edit/RecordsEditModal";
import { RecordComponent } from "@/layout/records/recordComponent/RecordComponent";
import { COLORS } from "@/shared/colors/colors";
import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { useRecords } from "@/shared/hooks/Records/useRecords";
import { RecordType } from "@/types/RecordsType/RecordsType";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from "react-native";
import NoRecordsImage from "../../assets/graphics/Empty.png";

export default function Index() {
  const [addModalVisibile, setAddModalVisibile] = useState(false);
  const [editModalVisibile, setEditModalVisibile] = useState(false);

  const [recordToEdit, setRecordToEdit] = useState<RecordType>();

  const { records, addNewRecord, editRecord, deleteRecord } = useRecords();

  const isRecordsAvailable = records && records.length > 0;

  const handleAddModalFinish = async (newRecord: RecordType) => {
    await addNewRecord(newRecord);
  };

  const closeAddModal = () => {
    setAddModalVisibile(false);
  };

  const handleEditFinish = async (edittedRecord: RecordType) => {
    await editRecord(edittedRecord);
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
        onFinish={handleAddModalFinish}
        onClose={closeAddModal}
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
    paddingTop: 40,
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
