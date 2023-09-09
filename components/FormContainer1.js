import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FormContainer1 = ({ imageDimensions }) => {
  return (
    <View style={[styles.parent, styles.parentLayout]}>
      <Text style={[styles.text, styles.textFlexBox]}>36 - 13</Text>
      <Text style={[styles.text1, styles.textFlexBox]}>BOS</Text>
      <Image
        style={[styles.groupChild, styles.parentLayout]}
        contentFit="cover"
        source={imageDimensions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 58,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.neutral0,
    lineHeight: 15,
    position: "absolute",
  },
  text: {
    top: 89,
    left: 6,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  text1: {
    top: 67,
    left: 14,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  groupChild: {
    top: 0,
    left: 0,
    height: 58,
  },
  parent: {
    top: 136,
    left: 296,
    height: 104,
  },
});

export default FormContainer1;
