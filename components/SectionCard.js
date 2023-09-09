import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard = ({ propLeft }) => {
  const groupView4Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.rectangleParent, groupView4Style]}>
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
          source={require("../assets/los-angeles-lakers-logo.png")}
        />
      </View>
      <Text style={[styles.shootingChallenge, styles.textTypo]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.daysLeft, styles.activeTypo]}>08 days left</Text>
      <View style={[styles.groupFrame, styles.ellipseLayout]}>
        <View style={[styles.ellipseParent, styles.ellipseLayout]}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-688.png")}
          />
          <View style={styles.coachParent}>
            <Text style={[styles.coach, styles.rebTypo]}>Coach</Text>
            <Text style={[styles.vaibhavChibbar, styles.textTypo]}>
              Vaibhav Chibbar
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <View style={styles.activeParent}>
          <Text style={[styles.active, styles.activeTypo]}>Active</Text>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group1.png")}
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
    top: 0,
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
    fontWeight: "700",
    color: Color.othersWhite,
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
  activeTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    position: "absolute",
  },
  ellipseLayout: {
    height: 36,
    position: "absolute",
  },
  rebTypo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectangleLayout: {
    height: 23,
    width: 61,
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
    position: "absolute",
  },
  pts: {
    left: 0,
  },
  text: {
    left: 91,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    top: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  text1: {
    left: 3,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    top: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  ast: {
    left: 168,
  },
  text2: {
    left: 174,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    top: 20,
    fontWeight: "700",
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
    textAlign: "left",
    left: 15,
  },
  daysLeft: {
    top: 40,
    lineHeight: 12,
    color: Color.colorOrange,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
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
  },
  vaibhavChibbar: {
    fontSize: FontSize.size_smi,
    lineHeight: 13,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  coachParent: {
    left: 42,
    width: 96,
    height: 28,
    top: 5,
    position: "absolute",
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
  rectangleView: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorRoyalblue,
    left: 0,
    top: 0,
  },
  active: {
    left: 12,
    fontSize: FontSize.size_2xs,
    color: Color.othersWhite,
    top: 0,
  },
  groupIcon: {
    height: "76.93%",
    width: "23.26%",
    top: "0%",
    right: "76.74%",
    bottom: "23.07%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  activeParent: {
    top: 6,
    left: 7,
    width: 43,
    height: 13,
    position: "absolute",
  },
  rectangleGroup: {
    left: 267,
    top: 14,
  },
  rectangleParent: {
    top: 958,
    left: 19,
    height: 167,
    width: 339,
    position: "absolute",
  },
});

export default SectionCard;
