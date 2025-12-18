import { COLORS } from "@/shared/colors/colors";
import { StyledText } from "@/shared/components/StyledText";
import { PADDINGS } from "@/shared/paddings/Paddings";
import { Plus } from "lucide-react-native";
import { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type RecordsTitleProps = {
  onNewRecord: () => void;
};

export const RecordsTitle: FC<RecordsTitleProps> = ({ onNewRecord }) => {
  return (
    <View style={styles["title-block"]}>
      <StyledText label="Рекорды" variant="title" />
      <Pressable
        style={({ pressed }) => [
          styles["add-button"],
          pressed ? styles.pressed : null,
        ]}
        onPress={onNewRecord}
      >
        <Plus size={20} color={COLORS.TEXT_COLOR} strokeWidth={2.5} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
    transform: [{ scale: 0.98 }],
  },
  "title-block": {
    width: "100%",
    paddingVertical: PADDINGS.pTop - 50,
    paddingInline: PADDINGS.pInline,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "add-button": {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.SECONDARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});
