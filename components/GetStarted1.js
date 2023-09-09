import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD1 from "../components/BarsStatusBarIPhoneD1";
import ButtonPillTypeSocialMedia from "../components/ButtonPillTypeSocialMedia2";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const GetStarted1 = () => {
  return (
    <View style={styles.getStarted}>
      <View style={[styles.frame, styles.framePosition]}>
        <BarsStatusBarIPhoneD1
          wifi={require("../assets/wifi.png")}
          cellularConnection={require("../assets/cellular-connection.png")}
          barsStatusBarIPhoneDPosition="relative"
          barsStatusBarIPhoneDBackgroundColor="unset"
          barsStatusBarIPhoneDTop="unset"
          barsStatusBarIPhoneDLeft="unset"
          barsStatusBarIPhoneDWidth={375}
          timeFontFamily="RobotoSerif-SemiBold"
        />
      </View>
      <View style={styles.frame1}>
        <View style={[styles.homeIndicatorLight, styles.frame2Position]} />
        <View style={styles.autoLayoutVertical}>
          <ButtonPillTypeSocialMedia
            frame={require("../assets/frame31.png")}
            continueWithFacebook="Continue with Apple"
            showTextButton
            buttonPillTypeSocialMediaPosition="unset"
            buttonPillTypeSocialMediaAlignSelf="stretch"
            buttonPillTypeSocialMediaMarginTop="unset"
          />
          <ButtonPillTypeSocialMedia
            frame={require("../assets/frame411.png")}
            continueWithFacebook="Continue with Google"
            showTextButton
            buttonPillTypeSocialMediaPosition="unset"
            buttonPillTypeSocialMediaAlignSelf="stretch"
            buttonPillTypeSocialMediaMarginTop={20}
          />
          <ButtonPillTypeSocialMedia
            frame={require("../assets/frame5.png")}
            continueWithFacebook="Continue with Facebook"
            showTextButton
            buttonPillTypeSocialMediaPosition="unset"
            buttonPillTypeSocialMediaAlignSelf="stretch"
            buttonPillTypeSocialMediaMarginTop={20}
          />
        </View>
        <Text
          style={[
            styles.byContinuingYouContainer,
            styles.playersCoachesAndLayout,
          ]}
        >
          <Text style={styles.byContinuingYouContainer1}>
            <Text style={styles.byContinuingYouAgreeNextU}>
              <Text style={styles.byContinuingYou}>
                By continuing you agree Next Up
              </Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
            <Text
              style={[styles.termsOfServices, styles.termsOfServicesTypo]}
            >{`Terms of 
Services`}</Text>
            <Text style={styles.byContinuingYouAgreeNextU}>
              <Text style={styles.text}>{` `}</Text>
              <Text style={styles.byContinuingYou}>{`&`}</Text>
              <Text style={styles.text}>{` `}</Text>
            </Text>
            <Text style={[styles.termsOfServices, styles.termsOfServicesTypo]}>
              Privacy Policy
            </Text>
          </Text>
        </Text>
        <View style={[styles.frame2, styles.frame2Position]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-611.png")}
          />
          <Text
            style={[styles.playersCoachesAnd, styles.termsOfServicesTypo]}
          >{`Players,
Coaches and
Fans.`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    top: 0,
    overflow: "hidden",
    height: 812,
  },
  frame2Position: {
    alignItems: "center",
    width: 375,
    left: 0,
    position: "absolute",
  },
  playersCoachesAndLayout: {
    width: 311,
    display: "flex",
    alignItems: "center",
  },
  termsOfServicesTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  frame: {
    left: -5,
    backgroundColor: Color.colorGray_200,
    width: 380,
    alignItems: "flex-end",
    position: "absolute",
  },
  homeIndicatorLight: {
    top: 792,
    height: 20,
    justifyContent: "center",
  },
  autoLayoutVertical: {
    top: 502,
    left: 60,
    position: "absolute",
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
    color: Color.colorDarkgray,
  },
  termsOfServices: {
    color: Color.colorRoyalblue,
  },
  byContinuingYouContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  byContinuingYouContainer: {
    top: 740,
    left: 32,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    textAlign: "center",
    position: "absolute",
  },
  frameChild: {
    height: 334,
    width: 375,
  },
  playersCoachesAnd: {
    fontSize: FontSize.size_21xl,
    lineHeight: 48,
    color: Color.neutral0,
    textAlign: "left",
    height: 144,
    width: 311,
    display: "flex",
    alignItems: "center",
  },
  frame2: {
    top: 0,
    overflow: "hidden",
    height: 812,
  },
  frame1: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 812,
  },
  getStarted: {
    backgroundColor: Color.neutral0,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default GetStarted1;
