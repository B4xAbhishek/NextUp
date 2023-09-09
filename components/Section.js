import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Section = ({ matchUpText, propTop, propFontWeight, propFontFamily }) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const continueStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", propFontWeight),
      ...getStyleValue("fontFamily", propFontFamily),
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <View
      style={[
        styles.playerDashboardInner,
        styles.rectangleCopy3Position,
        frameView1Style,
      ]}
    >
      <View style={styles.rectangleLayout}>
        <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
        <Text style={[styles.continue, continueStyle]}>{matchUpText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleCopy3Position: {
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 311,
  },
  rectangleCopy3: {
    top: 0,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorRoyalblue,
    left: 0,
    position: "absolute",
  },
  continue: {
    top: 16,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 16,
    width: 311,
    left: 0,
    position: "absolute",
  },
  playerDashboardInner: {
    top: 1514,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
  },
});

export default Section;
