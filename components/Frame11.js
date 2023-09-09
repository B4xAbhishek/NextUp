import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Frame11 = () => {
  return (
    <View style={styles.playerDashboardParent}>
      <Text style={styles.playerDashboard}>PLAYER Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  playerDashboard: {
    fontSize: FontSize.size_65xl,
    lineHeight: 94,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    textAlign: "left",
  },
  playerDashboardParent: {
    backgroundColor: Color.nextupBlue,
    width: 1321,
    flexDirection: "row",
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_19xl,
    alignItems: "center",
  },
});

export default Frame11;
