import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.scheduleParent}>
      <Text style={styles.schedule}>Schedule</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  schedule: {
    fontSize: FontSize.size_65xl,
    lineHeight: 94,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.neutral0,
    textAlign: "left",
  },
  scheduleParent: {
    backgroundColor: Color.colorRoyalblue,
    width: 1321,
    flexDirection: "row",
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_19xl,
    alignItems: "center",
  },
});

export default Frame2;
