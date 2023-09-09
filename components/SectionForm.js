import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SectionForm = () => {
  return (
    <View style={styles.rectangleParent}>
      <Image
        style={styles.groupLayout1}
        contentFit="cover"
        source={require("../assets/rectangle-18889.png")}
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
          source={require("../assets/los-angeles-lakers-logo1.png")}
        />
      </View>
      <Text style={[styles.shootingChallenge, styles.textTypo]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.daysLeft, styles.textTypo]}>08 days left</Text>
      <View style={[styles.groupFrame, styles.ellipseLayout]}>
        <View style={[styles.ellipseParent, styles.ellipseLayout]}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-688.png")}
          />
          <View style={[styles.coachParent, styles.parentPosition]}>
            <Text style={[styles.coach, styles.rebTypo]}>Coach</Text>
            <Text style={[styles.vaibhavChibbar, styles.textTypo]}>
              Vaibhav Chibbar
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.videoOctagonIcon}
        contentFit="cover"
        source={require("../assets/videooctagon.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <View style={[styles.completedParent, styles.parentPosition]}>
          <Text style={[styles.completed, styles.rebClr]}>Completed</Text>
          <Image
            style={styles.groupIcon}
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
    height: 167,
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
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    top: 5,
    position: "absolute",
  },
  ellipseLayout: {
    height: 36,
    position: "absolute",
  },
  parentPosition: {
    top: 5,
    position: "absolute",
  },
  rebTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  rectangleLayout: {
    height: 23,
    width: 85,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: "transparent",
  },
  reb: {
    left: 84,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
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
    fontSize: FontSize.bodyLargeBold_size,
    top: 20,
    textAlign: "center",
  },
  text1: {
    left: 3,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
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
    fontSize: FontSize.bodyLargeBold_size,
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
    top: 112,
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
  ellipseIcon: {
    width: 36,
    left: 0,
    top: 0,
  },
  coach: {
    color: Color.colorSilver,
    top: 14,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  vaibhavChibbar: {
    fontSize: FontSize.size_smi,
    lineHeight: 13,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  coachParent: {
    left: 42,
    width: 96,
    height: 28,
  },
  ellipseParent: {
    width: 138,
    height: 36,
    left: 0,
    top: 0,
  },
  groupFrame: {
    top: 66,
    width: 138,
    height: 36,
    left: 15,
  },
  videoOctagonIcon: {
    height: "11.98%",
    width: "5.9%",
    top: "11.38%",
    right: "45.13%",
    bottom: "76.65%",
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
    top: 0,
    position: "absolute",
  },
  completedParent: {
    left: 5,
    width: 69,
    height: 14,
  },
  rectangleGroup: {
    left: 243,
    top: 14,
  },
  rectangleParent: {
    top: 1318,
    left: 19,
    height: 167,
    width: 339,
    position: "absolute",
  },
});

export default SectionForm;
