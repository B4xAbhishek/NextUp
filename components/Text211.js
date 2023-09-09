import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Text211 = () => {
  return <Text style={styles.text}>4</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_65xl,
    lineHeight: 94,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.neutral500,
    textAlign: "left",
  },
});

export default Text211;
