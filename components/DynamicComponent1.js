import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import FormContainer2 from "./FormContainer2";
import ContainerCardFormFilter from "./ContainerCardFormFilter";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const DynamicComponent1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleCopyParent}>
      <View style={styles.rectangleCopy} />
      <Text style={[styles.text, styles.textClr]}>Prediction</Text>
      <FormContainer2
        teamAbbreviation="GSW"
        teamAbbreviationOpponent="BOS"
        propTop={86}
        propLeft={99}
        propLeft1={33}
      />
      <ContainerCardFormFilter
        dimensionCode={require("../assets/group-10000028581.png")}
        imageCode={require("../assets/group-10000028591.png")}
        propTop={248}
        propLeft={85}
      />
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.bulls, styles.bullsLayout]}>Overview</Text>
        <Pressable
          style={styles.warriors}
          onPress={() => navigation.navigate("GameDetailsScreenLineup")}
        >
          <Text style={[styles.teamLineup, styles.bullsLayout]}>
            Team Lineup
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textClr: {
    color: Color.neutral0,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  bullsLayout: {
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
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
    fontSize: FontSize.bodyMediumSemibold_size,
    color: Color.neutral0,
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
    top: 0,
    color: Color.neutral0,
    position: "absolute",
  },
  teamLineup: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    textAlign: "center",
  },
  warriors: {
    left: 212,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    width: 293,
    height: 23,
    top: 0,
  },
  rectangleCopyParent: {
    height: "18.57%",
    width: "90.13%",
    top: "14.54%",
    right: "5.07%",
    bottom: "66.89%",
    left: "4.8%",
    position: "absolute",
  },
});

export default DynamicComponent1;
