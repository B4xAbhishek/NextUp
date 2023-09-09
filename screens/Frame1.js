import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={styles.getStartedParent}>
      <Text style={styles.getStarted}>GET STARTED -</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  getStarted: {
    fontSize: FontSize.size_65xl,
    lineHeight: 94,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    textAlign: "left",
    width: 1221,
    height: 94,
  },
  getStartedParent: {
    backgroundColor: Color.colorRoyalblue,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_19xl,
    alignItems: "center",
  },
});

export default Frame1;
