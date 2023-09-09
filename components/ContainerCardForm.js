import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ContainerCardForm = ({ imageDimensions }) => {
  return (
    <View style={styles.gameDetailsScreenOverviewInner}>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text, styles.textFlexBox]}>22 - 4</Text>
        <Text style={[styles.text1, styles.textFlexBox]}>GSW</Text>
        <Image
          style={[styles.groupChild, styles.parentPosition]}
          contentFit="cover"
          source={imageDimensions}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 0,
    top: 0,
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
    left: 11,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  text1: {
    top: 67,
    left: 13,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  groupChild: {
    height: 58,
  },
  parent: {
    height: 104,
  },
  gameDetailsScreenOverviewInner: {
    top: 136,
    left: 22,
    height: 104,
    width: 58,
    position: "absolute",
  },
});

export default ContainerCardForm;
