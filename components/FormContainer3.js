import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FormContainer3 = () => {
  return (
    <View style={[styles.rectangleCopy5Parent, styles.rectangleLayout]}>
      <View style={[styles.rectangleCopy5, styles.groupChildPosition]} />
      <Image
        style={[styles.subtractIcon, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/subtract.png")}
      />
      <Image
        style={[styles.groupChild, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002621.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-689.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-689.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6901.png")}
      />
      <Image
        style={[styles.groupChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-6901.png")}
      />
      <Text style={styles.text}>{`Fri
8/16`}</Text>
      <Image
        style={styles.chicagoBullsLogoIcon}
        contentFit="cover"
        source={require("../assets/chicago-bulls-logo3.png")}
      />
      <Image
        style={styles.losAngelesLakersLogoIcon}
        contentFit="cover"
        source={require("../assets/los-angeles-lakers-logo4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 94,
    width: 180,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 52,
    width: 180,
  },
  groupLayout: {
    height: 50,
    width: 50,
    top: 25,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 40,
    width: 40,
    top: 30,
    position: "absolute",
  },
  rectangleCopy5: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.lighterDark,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    height: 94,
    width: 180,
  },
  subtractIcon: {
    borderRadius: Border.br_9xs,
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    left: 20,
  },
  groupInner: {
    left: 110,
  },
  ellipseIcon: {
    left: 25,
  },
  groupChild1: {
    left: 115,
  },
  text: {
    top: 62,
    left: 79,
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.neutral0,
    textAlign: "center",
    position: "absolute",
  },
  chicagoBullsLogoIcon: {
    top: 39,
    left: 32,
    width: 26,
    height: 26,
    position: "absolute",
  },
  losAngelesLakersLogoIcon: {
    top: 38,
    left: 116,
    width: 38,
    height: 23,
    position: "absolute",
  },
  rectangleCopy5Parent: {
    top: 352,
    left: 207,
    position: "absolute",
  },
});

export default FormContainer3;
