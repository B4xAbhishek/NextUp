import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const RateUsSection = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.groupItem} />
      <Text style={styles.title}>Rate Us</Text>
      <Image
        style={[styles.starIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/star.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 50,
    width: 338,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lighterDark,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
  },
  vectorIcon: {
    height: "23.33%",
    width: "1.88%",
    top: "38.67%",
    right: "4.92%",
    bottom: "38%",
    left: "93.2%",
  },
  groupItem: {
    top: 12,
    left: 298,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderRightWidth: 1,
    width: 1,
    height: 27,
    opacity: 0.2,
    position: "absolute",
  },
  title: {
    top: 17,
    left: 56,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.neutral0,
    textAlign: "left",
    position: "absolute",
  },
  starIcon: {
    height: "52%",
    width: "7.69%",
    top: "24%",
    right: "86.98%",
    bottom: "24%",
    left: "5.33%",
  },
  rectangleParent: {
    top: 677,
    left: 18,
  },
});

export default RateUsSection;
