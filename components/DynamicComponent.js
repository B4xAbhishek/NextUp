import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import FormContainer2 from "./FormContainer2";
import ContainerCardFormFilter from "./ContainerCardFormFilter";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const DynamicComponent = () => {
  return (
    <View style={styles.rectangleCopyParent}>
      <View style={styles.rectangleCopy} />
      <Text style={styles.text}>Prediction</Text>
      <FormContainer2 teamAbbreviation="GSW" teamAbbreviationOpponent="BOS" />
      <ContainerCardFormFilter
        dimensionCode={require("../assets/group-1000002858.png")}
        imageCode={require("../assets/group-1000002859.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.bulls, styles.bullsPosition]}>Overview</Text>
        <Text style={[styles.warriors, styles.bullsPosition]}>Team Lineup</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  bullsPosition: {
    lineHeight: 14,
    top: 0,
    fontSize: FontSize.bodyMediumSemibold_size,
    position: "absolute",
  },
  rectangleCopy: {
    height: "87.5%",
    width: "100%",
    top: "12.5%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_700,
    position: "absolute",
  },
  text: {
    top: 58,
    left: 137,
    lineHeight: 15,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "center",
    color: Color.neutral0,
    fontSize: FontSize.bodyMediumSemibold_size,
    position: "absolute",
  },
  groupChild: {
    top: 21,
    backgroundColor: Color.neutral0,
    width: 170,
    height: 2,
  },
  bulls: {
    left: 53,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.neutral0,
  },
  warriors: {
    left: 212,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    textAlign: "center",
  },
  rectangleParent: {
    width: 293,
    height: 23,
    top: 0,
    left: 0,
  },
  rectangleCopyParent: {
    height: "41.38%",
    width: "90.13%",
    top: "32.39%",
    right: "5.07%",
    bottom: "26.23%",
    left: "4.8%",
    position: "absolute",
  },
});

export default DynamicComponent;
