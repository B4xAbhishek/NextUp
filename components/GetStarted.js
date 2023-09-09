import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD1 from "../components/BarsStatusBarIPhoneD1";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const GetStarted = () => {
  return (
    <View style={styles.getStarted}>
      <View style={styles.bg} />
      <View style={[styles.rectangleCopyParent, styles.rectangleParentLayout]}>
        <View style={[styles.rectangleCopy, styles.groupIconLayout]} />
        <Image
          style={[styles.path2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/path-2.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.rectangleCopy4Parent, styles.rectangleParentLayout]}>
        <View style={[styles.rectangleCopy, styles.groupIconLayout]} />
        <Image
          style={[styles.path98642Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/path9864-2.png")}
        />
      </View>
      <Text
        style={[styles.playersCoachesAnd, styles.rectangleLayout]}
      >{`Players,
Coaches and
Fans.`}</Text>
      <Image
        style={[styles.ovalIcon, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval.png")}
      />
      <Image
        style={[styles.ovalCopyIcon, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy.png")}
      />
      <Image
        style={[styles.ovalCopy2, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy.png")}
      />
      <View style={[styles.groupParent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy3Wrapper, styles.rectangleLayout]}>
          <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
        </View>
        <Text
          style={[styles.signInWith, styles.signInWithFlexBox]}
        >{`Sign in with Email `}</Text>
      </View>
      <Text style={[styles.byContinuingYouContainer, styles.signInWithFlexBox]}>
        <Text style={styles.byContinuingYouContainer1}>
          <Text style={styles.byContinuingYouAgreeNextU}>
            <Text style={styles.byContinuingYou}>
              By continuing you agree Next Up
            </Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.signInWithTypo}>{`Terms of 
Services`}</Text>
          <Text style={styles.byContinuingYouAgreeNextU}>
            <Text style={styles.text}>{` `}</Text>
            <Text style={styles.byContinuingYou}>{`&`}</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.signInWithTypo}>Privacy Policy</Text>
        </Text>
      </Text>
      <View style={[styles.homeIndicatorLightWrapper, styles.homeLayout]}>
        <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]} />
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <Image
        style={styles.getStartedChild}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
      <Image
        style={styles.getStartedChild}
        contentFit="cover"
        source={require("../assets/group-6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentLayout: {
    width: 96,
    height: 48,
    top: 676,
    position: "absolute",
  },
  groupIconLayout: {
    height: 49,
    width: 97,
    position: "absolute",
  },
  iconPosition: {
    height: 24,
    top: 12,
    position: "absolute",
  },
  rectangleLayout: {
    width: 311,
    position: "absolute",
  },
  ovalIconLayout: {
    height: 8,
    width: 8,
    top: 554,
    position: "absolute",
  },
  signInWithFlexBox: {
    textAlign: "center",
    lineHeight: 16,
    width: 311,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  homeLayout: {
    height: 20,
    width: 375,
    left: 0,
    position: "absolute",
  },
  bg: {
    left: -5,
    backgroundColor: Color.colorGray_200,
    width: 380,
    top: 0,
    position: "absolute",
    height: 812,
  },
  rectangleCopy: {
    borderRadius: Border.br_12xl,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  path2Icon: {
    left: 42,
    width: 13,
  },
  rectangleCopyParent: {
    height: 48,
    left: 32,
  },
  groupIcon: {
    left: 139,
    top: 676,
    width: 97,
  },
  path98642Icon: {
    left: 36,
    width: 24,
  },
  rectangleCopy4Parent: {
    left: 247,
    height: 48,
  },
  playersCoachesAnd: {
    top: 370,
    fontSize: FontSize.size_21xl,
    lineHeight: 48,
    textAlign: "left",
    height: 144,
    alignItems: "center",
    display: "flex",
    width: 311,
    color: Color.neutral0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 32,
  },
  ovalIcon: {
    left: 32,
  },
  ovalCopyIcon: {
    left: 52,
  },
  ovalCopy2: {
    left: 72,
  },
  rectangleCopy3: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorRoyalblue,
    left: 0,
    height: 48,
    top: 0,
  },
  rectangleCopy3Wrapper: {
    left: 0,
    height: 48,
    top: 0,
  },
  signInWith: {
    top: 16,
    fontSize: FontSize.bodyMediumSemibold_size,
    justifyContent: "center",
    height: 16,
    color: Color.neutral0,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    left: 0,
  },
  groupParent: {
    top: 612,
    height: 48,
    left: 32,
  },
  byContinuingYou: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  byContinuingYouAgreeNextU: {
    color: Color.colorDarkslategray,
  },
  signInWithTypo: {
    color: Color.neutral0,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  byContinuingYouContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  byContinuingYouContainer: {
    top: 740,
    fontSize: FontSize.size_xs,
    left: 32,
  },
  homeIndicatorLight: {
    top: 0,
  },
  homeIndicator: {
    top: 8,
    left: 120,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 4,
    position: "absolute",
  },
  homeIndicatorLightWrapper: {
    top: 792,
  },
  getStartedChild: {
    top: 68,
    height: 252,
    width: 375,
    left: 0,
    position: "absolute",
  },
  getStarted: {
    backgroundColor: Color.neutral0,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default GetStarted;
