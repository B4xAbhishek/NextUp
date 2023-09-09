import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  prop,
  points,
  showText,
  frameViewPosition,
  frameViewElevation,
  frameViewWidth,
  frameViewHeight,
  frameViewMarginLeft,
  textFontSize,
  textFontFamily,
  pointsFontSize,
  pointsFontFamily,
  pointsMarginTop,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("position", frameViewPosition),
      ...getStyleValue("elevation", frameViewElevation),
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("height", frameViewHeight),
      ...getStyleValue("marginLeft", frameViewMarginLeft),
    };
  }, [
    frameViewPosition,
    frameViewElevation,
    frameViewWidth,
    frameViewHeight,
    frameViewMarginLeft,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("fontFamily", textFontFamily),
    };
  }, [textFontSize, textFontFamily]);

  const pointsStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", pointsFontSize),
      ...getStyleValue("fontFamily", pointsFontFamily),
      ...getStyleValue("marginTop", pointsMarginTop),
    };
  }, [pointsFontSize, pointsFontFamily, pointsMarginTop]);

  return (
    <View style={[styles.parent, frameViewStyle]}>
      {showText && (
        <Text style={[styles.text, styles.textTypo, textStyle]}>{prop}</Text>
      )}
      <Text style={[styles.points, styles.textTypo, pointsStyle]}>
        {points}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.noah,
  },
  text: {
    fontSize: FontSize.size_5xl,
  },
  points: {
    fontSize: FontSize.bodyMediumSemibold_size,
    opacity: 0.5,
    marginTop: 5,
  },
  parent: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.lighterDark,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 18,
    elevation: 18,
    shadowOpacity: 1,
    width: 83,
    height: 66,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FrameComponent;
