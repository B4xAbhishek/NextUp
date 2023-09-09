import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import FormContainer from "../components/FormContainer";
import ConfirmSection from "../components/ConfirmSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TellUsMoreFilledGirl2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tellUsMoreFilledGirl}>
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
      <View style={[styles.homeIndicatorLightWrapper, styles.homeLayout]}>
        <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]} />
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <Text style={styles.signInWithContainer}>
        <Text style={styles.signInWithContainer1}>
          <Text style={styles.tellUs}>{`Tell us
`}</Text>
          <Text style={styles.more}>more</Text>
        </Text>
      </Text>
      <FormContainer
        imageDimensions={require("../assets/augustphliegercreqtqgbfcuunsplash-1.png")}
        imageDimensionsText={require("../assets/group-18181.png")}
      />
      <View
        style={[styles.augustPhliegerCreqtqgbfcuUnParent, styles.augustLayout]}
      >
        <Image
          style={[styles.augustPhliegerCreqtqgbfcuUnIcon, styles.augustLayout]}
          contentFit="cover"
          source={require("../assets/augustphliegercreqtqgbfcuunsplash-11.png")}
        />
        <Text style={[styles.player, styles.playerTypo]}>COACH</Text>
      </View>
      <Image
        style={styles.path5Copy4}
        contentFit="cover"
        source={require("../assets/path-5-copy-4.png")}
      />
      <Image
        style={styles.path5Copy5}
        contentFit="cover"
        source={require("../assets/path-5-copy-2.png")}
      />
      <Text style={[styles.firstName, styles.nameTypo]}>SCHOOL</Text>
      <Text style={[styles.firstName1, styles.nameTypo]}>GENDER</Text>
      <Text style={[styles.lastName, styles.nameTypo]}>CLASS OF</Text>
      <Text style={[styles.vineet, styles.kumarTypo]}>ABC School</Text>
      <Text style={[styles.kumar, styles.kumarTypo]}>2019</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.tellUsMoreFilledGirlChild, styles.tellLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-707.png")}
      />
      <Image
        style={[styles.tellUsMoreFilledGirlItem, styles.tellLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-708.png")}
      />
      <Text style={[styles.oneLastStep, styles.onePosition]}  onPress={() => navigation.navigate("TellUsMoreFilledBoy2")}>Male</Text>
      <Text style={[styles.oneLastStep1, styles.onePosition]}>Female</Text>
      <View style={[styles.homeIndicatorLightWrapper, styles.homeLayout]}>
        <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]} />
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <ConfirmSection
        propTop={716}
        onFramePressablePress={() =>
          navigation.navigate("TellUsMoreFilledGirl1")
        }
      />
      <Image
        style={styles.tellUsMoreFilledGirlInner}
        contentFit="cover"
        source={require("../assets/ellipse-709.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    height: 7,
    backgroundColor: Color.colorRoyalblue,
    left: 26,
    top: 110,
    position: "absolute",
  },
  homeLayout: {
    height: 20,
    width: 375,
    left: 0,
    position: "absolute",
  },
  augustLayout: {
    height: 221,
    width: 162,
    position: "absolute",
  },
  playerTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
  },
  nameTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    width: 148,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    height: 12,
    position: "absolute",
  },
  kumarTypo: {
    height: 18,
    width: 148,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    fontFamily: FontFamily.robotoBold,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "2.4%",
    height: "0.74%",
    position: "absolute",
    overflow: "hidden",
  },
  tellLayout: {
    width: 20,
    top: 501,
    height: 20,
    position: "absolute",
  },
  onePosition: {
    top: 502,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
    position: "absolute",
  },
  rectangle: {
    top: -1,
    left: -1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
    position: "absolute",
  },
  path2Icon: {
    top: 9,
    left: 8,
    width: 14,
    height: 12,
    position: "absolute",
  },
  group: {
    top: 62,
    left: 21,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rectangle1: {
    borderRadius: Border.br_13xl,
    width: 323,
    opacity: 0.08,
  },
  rectangleCopy: {
    borderRadius: Border.br_23xl,
    width: 77,
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
  tellUs: {
    fontWeight: "100",
    fontFamily: FontFamily.robotoThin,
  },
  more: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  signInWithContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  signInWithContainer: {
    top: 135,
    fontSize: FontSize.size_13xl,
    lineHeight: 42,
    width: 311,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.othersWhite,
    left: 26,
    position: "absolute",
  },
  augustPhliegerCreqtqgbfcuUnIcon: {
    bottom: 0,
    borderRadius: Border.br_xs,
    left: 0,
    width: 162,
  },
  player: {
    top: 16,
    left: 11,
    width: 95,
    height: 11,
    opacity: 0.5,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  augustPhliegerCreqtqgbfcuUnParent: {
    bottom: 361,
    left: 195,
  },
  path5Copy4: {
    top: 602,
    width: 310,
    height: 1,
    left: 33,
    position: "absolute",
  },
  path5Copy5: {
    top: 685,
    width: 148,
    left: 32,
    height: 1,
    position: "absolute",
  },
  firstName: {
    top: 548,
    left: 33,
  },
  firstName1: {
    top: 479,
    left: 32,
  },
  lastName: {
    top: 631,
    left: 32,
  },
  vineet: {
    top: 572,
    left: 33,
  },
  kumar: {
    top: 655,
    left: 32,
  },
  vectorIcon: {
    top: "78.08%",
    right: "52%",
    bottom: "21.18%",
    left: "45.6%",
  },
  vectorIcon1: {
    top: "67.86%",
    right: "8.53%",
    bottom: "31.4%",
    left: "89.07%",
  },
  tellUsMoreFilledGirlChild: {
    left: 33,
  },
  tellUsMoreFilledGirlItem: {
    left: 119,
  },
  oneLastStep: {
    left: 59,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_300,
  },
  oneLastStep1: {
    left: 145,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
  },
  tellUsMoreFilledGirlInner: {
    top: 506,
    left: 124,
    width: 10,
    height: 10,
    position: "absolute",
  },
  tellUsMoreFilledGirl: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default TellUsMoreFilledGirl2;
