import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HierarchySecondaryIconNo = ({
  label,
  hierarchySecondaryIconNoPosition,
  hierarchySecondaryIconNoAlignSelf,
  hierarchySecondaryIconNoMarginTop,
  hierarchySecondaryIconNoBackgroundColor,
  labelColor,
  onButtonPress,
}) => {
  const hierarchySecondaryIconNoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", hierarchySecondaryIconNoPosition),
      ...getStyleValue("alignSelf", hierarchySecondaryIconNoAlignSelf),
      ...getStyleValue("marginTop", hierarchySecondaryIconNoMarginTop),
      ...getStyleValue(
        "backgroundColor",
        hierarchySecondaryIconNoBackgroundColor
      ),
    };
  }, [
    hierarchySecondaryIconNoPosition,
    hierarchySecondaryIconNoAlignSelf,
    hierarchySecondaryIconNoMarginTop,
    hierarchySecondaryIconNoBackgroundColor,
  ]);

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("color", labelColor),
    };
  }, [labelColor]);

  return (
    <View
      style={[styles.hierarchysecondaryIconno, hierarchySecondaryIconNoStyle]}
      onPress={onButtonPress}
    >
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: FontSize.normalTextBody1X_size,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.normalTextBody1X,
    color: Color.yellow300,
    textAlign: "center",
  },
  hierarchysecondaryIconno: {
    borderRadius: Border.br_981xl,
    backgroundColor: Color.yellow500,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default HierarchySecondaryIconNo;
