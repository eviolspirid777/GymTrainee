import { COLORS } from "@/shared/colors/colors";
import { ScrollView, StyleSheet, View } from "react-native";

import { Header } from "@/layout/base/Header/Header";
import { RecordsContent } from "@/layout/records/RecordsContent/RecordsContent";
import { RecordsTitle } from "@/layout/records/RecordsTitle/RecordsTitle";
import { PADDINGS } from "@/shared/paddings/Paddings";
import { useRef } from "react";

export default function Records() {
  const recordsContentRef = useRef<{ addNewTask: () => void }>(null);

  return (
    <>
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <RecordsTitle
            onNewRecord={() => recordsContentRef.current?.addNewTask()}
          />
          <RecordsContent ref={recordsContentRef} />
        </ScrollView>
      </View>
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
  content: {
    width: "100%",
    paddingInline: PADDINGS.pInline,
  },
});
