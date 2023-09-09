import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text1 = () => {
  return <Text style={styles.text}>2</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_65xl,
    lineHeight: 94,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
});

export default Text1;
