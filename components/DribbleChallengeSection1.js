import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DribbleChallengeSection1 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChildLayout} />
      <View style={[styles.groupItem, styles.groupPosition]} />
      <Text style={styles.shootingChallenge}>Dribble Challenge</Text>
      <Text style={[styles.step1, styles.step1Typo]}>Step 1</Text>
      <Image
        style={[styles.groupInner, styles.groupInnerPosition]}
        contentFit="cover"
        source={require("../assets/group-1000003044.png")}
      />
      <View style={[styles.groupWrapper, styles.groupLayout]}>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <View style={[styles.groupParent, styles.groupLayout]}>
              <View style={[styles.groupParent, styles.groupLayout]}>
                <Text style={styles.reb}>REB</Text>
                <Text style={[styles.pts, styles.ptsTypo]}>PTS</Text>
                <Text style={[styles.text, styles.textTypo]}>5</Text>
                <Text style={[styles.text1, styles.textTypo]}>35</Text>
                <Text style={[styles.ast, styles.ptsTypo]}>AST</Text>
                <Text style={[styles.text2, styles.textTypo]}>4</Text>
              </View>
            </View>
          </View>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.groupChild1, styles.lineViewLayout]} />
        </View>
      </View>
      <Image
        style={[styles.vuesaxboldactivityIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxboldactivity1.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <View style={[styles.activeParent, styles.groupInnerPosition]}>
          <Text style={[styles.active, styles.step1Typo]}>Active</Text>
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
        </View>
      </View>
      <View style={[styles.groupChild2, styles.groupChildLayout]} />
      <Image
        style={styles.groupChild3}
        contentFit="cover"
        source={require("../assets/group-1000003055.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    top: 0,
    left: -10,
  },
  step1Typo: {
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  groupInnerPosition: {
    top: 6,
    position: "absolute",
  },
  groupLayout: {
    height: 38,
    width: 191,
    position: "absolute",
  },
  ptsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    top: 20,
    textAlign: "center",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  lineViewLayout: {
    height: 29,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    top: 6,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 23,
    width: 61,
    position: "absolute",
  },
  groupChildLayout: {
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 183,
    width: 343,
    position: "absolute",
  },
  groupItem: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.colorOrange,
    height: 45,
    left: 0,
    width: 343,
    top: 0,
    position: "absolute",
  },
  shootingChallenge: {
    top: 77,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.othersWhite,
    left: 24,
    position: "absolute",
  },
  step1: {
    top: 98,
    lineHeight: 12,
    color: Color.colorOrange,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    left: 24,
  },
  groupInner: {
    left: 17,
    width: 75,
    height: 64,
  },
  reb: {
    left: 84,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.othersWhite,
    top: 0,
    position: "absolute",
  },
  pts: {
    left: 0,
  },
  text: {
    left: 91,
  },
  text1: {
    left: 3,
  },
  ast: {
    left: 168,
  },
  text2: {
    left: 174,
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  lineView: {
    left: 50,
  },
  groupChild1: {
    left: 139,
  },
  groupWrapper: {
    top: 125,
    left: 24,
    width: 191,
  },
  vuesaxboldactivityIcon: {
    height: "10.93%",
    width: "5.83%",
    top: "42.08%",
    right: "42.86%",
    bottom: "46.99%",
    left: "51.31%",
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
    fontWeight: "600",
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
  },
  activeParent: {
    left: 7,
    width: 43,
    height: 13,
  },
  rectangleGroup: {
    top: 51,
    left: 276,
  },
  groupChild2: {
    opacity: 0.7,
  },
  groupChild3: {
    top: 58,
    left: 138,
    width: 67,
    height: 67,
    position: "absolute",
  },
  rectangleParent: {
    top: 1158,
    left: 16,
    height: 183,
    width: 343,
    position: "absolute",
  },
});

export default DribbleChallengeSection1;
