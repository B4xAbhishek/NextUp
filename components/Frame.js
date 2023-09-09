import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.searchParent}>
      <Text style={styles.search}>SEARCH</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    fontSize: FontSize.size_65xl,
    lineHeight: 94,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    textAlign: "left",
  },
  searchParent: {
    backgroundColor: Color.colorRoyalblue,
    width: 1321,
    flexDirection: "row",
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_19xl,
    alignItems: "center",
  },
});

export default Frame;
