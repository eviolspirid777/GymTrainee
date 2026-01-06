import { apiClient } from "@/api/ApiClient";
import { Header } from "@/layout/base/Header/Header";
import { MaxWeight } from "@/layout/programs/index/MaxWeight/MaxWeight";
import { ProgramsList } from "@/layout/programs/index/ProgramsList/ProgramsList";
import { ProgramsTitle } from "@/layout/programs/index/ProgramsTitle/ProgramsTitle";
import { COLORS } from "@/shared/colors/colors";
import { PADDINGS } from "@/shared/paddings/Paddings";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Index = () => {

  useEffect(() => {
    const test = async () => {
      console.log("HERE")
      const res = await apiClient.getPrograms()
      console.log(res)
    }

    test()
  }, [])

  return (
    <View style={styles.main}>
      <Header />
      <ScrollView style={styles["scroll-view"]}>
        <ProgramsTitle />
        <MaxWeight />
        <ProgramsList />
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  "scroll-view": {
    flex: 1,
    paddingBottom: PADDINGS.pBottom,
    paddingInline: PADDINGS.pInline,
  },
  main: {
    paddingTop: PADDINGS.pTop,
    paddingBottom: PADDINGS.pBottom,
    flexDirection: "column",
    maxWidth: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY_COLOR,
  },
  list: {
    marginTop: 20,
    flexDirection: "column",
  },
});
