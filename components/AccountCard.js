import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AccountCard = () => {
  return (
    <View style={styles.imGoingToShakeYParent}>
      <Text style={[styles.imGoingTo, styles.goingTypo]}>Mishel_99</Text>
      <Text style={[styles.imGoingTo1, styles.goingTypo]}>Edit Profile</Text>
      <View style={styles.rectangleWrapper}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-4169.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goingTypo: {
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  imGoingTo: {
    top: 90,
    left: 0,
    fontSize: FontSize.size_xl,
  },
  imGoingTo1: {
    top: 119,
    left: 14,
    fontSize: FontSize.size_smi,
    opacity: 0.57,
  },
  groupChild: {
    top: -1,
    left: -1,
    borderRadius: Border.br_21xl,
    width: 82,
    height: 82,
    position: "absolute",
  },
  rectangleWrapper: {
    top: 0,
    left: 4,
    width: 80,
    height: 80,
    position: "absolute",
  },
  imGoingToShakeYParent: {
    top: 120,
    left: 141,
    width: 93,
    height: 134,
    position: "absolute",
  },
});

export default AccountCard;
