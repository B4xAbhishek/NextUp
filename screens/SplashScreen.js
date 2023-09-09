import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={[styles.bg, styles.bgPosition]} />
      <Image
        style={[styles.photo1563506644863444710df1eIcon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/photo1563506644863444710df1e03-copy.png")}
      />
      <Image
        style={styles.group3Copy}
        contentFit="cover"
        source={require("../assets/group-3-copy.png")}
      />
      <Text style={styles.copyright2020Next}>
        Copyright ©2023 NextUp Inc. All rights reserved.
      </Text>
      <View style={styles.homeIndicatorLightWrapper}>
        <View style={[styles.homeIndicatorLight, styles.boundsPosition]}>
          <View style={styles.boundsPosition} />
          <View style={styles.homeIndicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
    height: 812,
  },
  boundsPosition: {
    height: 20,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bg: {
    backgroundColor: Color.colorGray_200,
  },
  photo1563506644863444710df1eIcon: {
    opacity: 0.08,
  },
  group3Copy: {
    top: 316,
    left: 96,
    width: 182,
    height: 199,
    position: "absolute",
  },
  copyright2020Next: {
    top: 756,
    left: 32,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 311,
    position: "absolute",
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
  homeIndicatorLight: {
    display: "none",
  },
  homeIndicatorLightWrapper: {
    top: 792,
    width: 0,
    height: 0,
    left: 0,
    position: "absolute",
  },
  splashScreen: {
    backgroundColor: Color.othersWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default SplashScreen;
