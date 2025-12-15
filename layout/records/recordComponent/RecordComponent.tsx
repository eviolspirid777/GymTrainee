import { StyledButton } from "@/shared/components/StyledButton";
import { StyledText } from "@/shared/components/StyledText";
import { RecordType } from "@/types/RecordsType/RecordsType";
import { declineTimes } from "@/utils/declineTimes/declineTimes";
import { FC } from "react";
import { StyleSheet, View } from "react-native";

type RecordProps = {
  record: RecordType;
  onDeleteRecord: (recordId?: string) => Promise<void>;
  onRecordEdit: (record: RecordType) => void;
};

export const RecordComponent: FC<RecordProps> = ({
  record,
  onDeleteRecord,
  onRecordEdit,
}) => {
  return (
    <View style={styles["record-item-container"]}>
      <View style={styles["record-item-container__data"]}>
        <StyledText label={`Упражнение: ${record.name}`} />
        <StyledText label={`Вес: ${record.weight} кг`} />
        <StyledText
          label={`Повторения: ${record.reps} ${declineTimes(
            Number(record.reps)
          )}`}
        />
      </View>
      <View style={styles["record-item-container__action-buttons"]}>
        <StyledButton icon="edit" onPress={onRecordEdit.bind(null, record)} />
        <StyledButton
          icon="trash"
          variant="danger"
          onPress={onDeleteRecord.bind(null, record.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
