import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SectionFilter1 = () => {
  return (
    <View style={styles.rectangleParent}>
      <Image
        style={styles.groupLayout1}
        contentFit="cover"
        source={require("../assets/rectangle-188891.png")}
      />
      <LinearGradient
        style={[styles.groupItem, styles.groupLayout1]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <View style={styles.groupParent}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <Text style={[styles.reb, styles.rebClr]}>REB</Text>
              <Text style={[styles.pts, styles.ptsTypo]}>PTS</Text>
              <Text style={[styles.text, styles.textTypo]}>6</Text>
              <Text style={[styles.text1, styles.textTypo]}>35</Text>
              <Text style={[styles.ast, styles.ptsTypo]}>AST</Text>
              <Text style={[styles.text2, styles.textTypo]}>4</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupInner, styles.lineViewLayout]} />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <Image
          style={styles.losAngelesLakersLogoIcon}
          contentFit="cover"
          source={require("../assets/los-angeles-lakers-logo11.png")}
        />
      </View>
      <Text style={[styles.shootingChallenge, styles.textTypo]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.daysLeft, styles.textTypo]}>08 days left</Text>
      <Image
        style={styles.videoOctagonIcon}
        contentFit="cover"
        source={require("../assets/videooctagon1.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <View style={styles.completedParent}>
          <Text style={[styles.completed, styles.rebClr]}>Completed</Text>
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            contentFit="cover"
            source={require("../assets/group-1000002633.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 114,
    width: 339,
    position: "absolute",
  },
  groupLayout: {
    width: 191,
    height: 38,
    top: 0,
    position: "absolute",
  },
  rebClr: {
    color: Color.othersWhite,
    textAlign: "left",
    position: "absolute",
  },
  ptsTypo: {
    textAlign: "center",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  lineViewLayout: {
    height: 29,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorGray_800,
    borderStyle: "solid",
    top: 5,
    position: "absolute",
  },
  rectangleLayout: {
    height: 23,
    width: 85,
    position: "absolute",
  },
  groupIconPosition: {
    top: 0,
    left: 0,
  },
  groupItem: {
    backgroundColor: "transparent",
  },
  reb: {
    left: 84,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  pts: {
    left: 0,
  },
  text: {
    left: 91,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    lineHeight: 18,
    fontSize: FontSize.normalTextBody1X_size,
    top: 20,
    textAlign: "center",
  },
  text1: {
    left: 3,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    lineHeight: 18,
    fontSize: FontSize.normalTextBody1X_size,
    top: 20,
    textAlign: "center",
  },
  ast: {
    left: 168,
  },
  text2: {
    left: 174,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    lineHeight: 18,
    fontSize: FontSize.normalTextBody1X_size,
    top: 20,
    textAlign: "center",
  },
  groupContainer: {
    left: 0,
  },
  groupWrapper: {
    left: 74,
  },
  groupInner: {
    left: 124,
  },
  lineView: {
    left: 213,
  },
  losAngelesLakersLogoIcon: {
    top: 7,
    width: 53,
    height: 27,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    top: 64,
    width: 265,
    height: 38,
    left: 15,
    position: "absolute",
  },
  shootingChallenge: {
    top: 19,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    textAlign: "left",
    left: 15,
  },
  daysLeft: {
    top: 40,
    lineHeight: 12,
    fontWeight: "600",
    color: Color.colorOrange,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    left: 15,
  },
  videoOctagonIcon: {
    height: "17.54%",
    width: "5.9%",
    top: "16.67%",
    right: "45.13%",
    bottom: "65.79%",
    left: "48.97%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorLimegreen,
    left: 0,
    top: 0,
  },
  completed: {
    top: 1,
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    left: 15,
  },
  groupIcon: {
    width: 13,
    height: 13,
    left: 0,
    position: "absolute",
  },
  completedParent: {
    left: 5,
    width: 69,
    height: 14,
    top: 5,
    position: "absolute",
  },
  rectangleGroup: {
    top: 14,
    left: 243,
  },
  rectangleParent: {
    top: 1318,
    left: 18,
    height: 114,
    width: 339,
    position: "absolute",
  },
});

export default SectionFilter1;
