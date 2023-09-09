import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Text11 = () => {
  return <Text style={styles.text}>3</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 105,
    fontWeight: "600",
    fontFamily: FontFamily.robotoSerifSemiBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
});

export default Text11;
