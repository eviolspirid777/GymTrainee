import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { RecordType } from "@/types/RecordsType/RecordsType";
import { Trash, Trophy } from "lucide-react-native";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

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
  const isDeleteAvailable = ![
    "zhim_lezha",
    "stanovaya_tyaga",
    "prisedanya_so_shtangoi",
  ].includes(record.id ?? "");

  return (
    <Pressable
      onPress={onRecordEdit.bind(null, record)}
      style={({ pressed }) => [pressed ? styles.pressed : null]}
    >
      <View key={record.id} style={styles.recordCard}>
        <View style={styles.recordHeader}>
          <View style={styles.recordIconContainer}>
            <Trophy size={20} color={COLORS.SECONDARY_COLOR} strokeWidth={2} />
          </View>
          <View style={styles.recordInfo}>
            <StyledText
              style={styles.recordExercise}
              variant="header"
              label={`${record.name}`}
            />
            <StyledText style={styles.recordDate} label={`${record.id}`} />
          </View>
          {isDeleteAvailable && (
            <View style={styles.actions}>
              <Pressable
                style={({ pressed }) => [pressed ? styles.pressed : null]}
                onPress={onDeleteRecord.bind(null, record.id)}
              >
                <Trash color={COLORS.DANGER} />
              </Pressable>
            </View>
          )}
        </View>

        <View style={styles.recordStats}>
          <View style={styles.statItem}>
            <StyledText
              style={styles.statValue}
              variant="header"
              label={`${record.weight} кг`}
            />
            <StyledText style={styles.statLabel} variant="ruby" label="Вес" />
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <StyledText
              style={styles.statValue}
              variant="header"
              label={`${record.reps}`}
            />
            <StyledText
              style={styles.statLabel}
              variant="ruby"
              label="Повторений"
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
    transform: [{ scale: 0.99 }],
  },
  recordCard: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#333",
  },
  recordHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },
  actions: {
    flexDirection: "row",
    gap: 20,
  },
  recordIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(60, 161, 248, 0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  recordInfo: {
    flex: 1,
  },
  recordExercise: {
    color: COLORS.TEXT_COLOR,
    marginBottom: 2,
  },
  recordDate: {
    fontSize: 13,
    color: COLORS.PLACEHOLDER_COLOR,
  },
  recordStats: {
    flexDirection: "row",
    alignItems: "center",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    color: COLORS.SECONDARY_COLOR,
    marginBottom: 4,
  },
  statLabel: {
    color: COLORS.PLACEHOLDER_COLOR,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: "#333",
  },
  // "record-item-container": {
  //   flexDirection: "row",
  //   paddingInline: 20,
  //   marginVertical: 20,
  // },
  // "record-item-container__data": {
  //   flex: 1,
  //   justifyContent: "center",
  // },
  // "record-item-container__action-buttons": {
  //   flexDirection: "row",
  //   gap: 10,
  //   height: 55,
  // },
});
