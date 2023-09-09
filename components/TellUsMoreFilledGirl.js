import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BarsStatusBarIPhoneD1 from "../components/BarsStatusBarIPhoneD1";
import VineetContainer from "../components/VineetContainer";
import CityForm from "../components/CityForm";
import ConfirmSection from "../components/ConfirmSection";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const TellUsMoreFilledGirl = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tellUsMoreFilledGirl}>
      <BarsStatusBarIPhoneD1
        wifi={require("../assets/wifi2.png")}
        cellularConnection={require("../assets/cellular-connection1.png")}
        barsStatusBarIPhoneDPosition="absolute"
        barsStatusBarIPhoneDBackgroundColor="unset"
        barsStatusBarIPhoneDTop={0}
        barsStatusBarIPhoneDLeft={0}
        barsStatusBarIPhoneDWidth={376}
        timeFontFamily="RobotoSerif-SemiBold"
      />
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <View style={styles.homeIndicatorLightWrapper}>
        <View style={styles.homeIndicatorLight}>
          <View style={styles.homeIndicatorLight} />
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <VineetContainer propTop={159} />
      <View style={[styles.path5Copy2Parent, styles.path5Layout]}>
        <Image
          style={[styles.path5Copy2, styles.path5Layout]}
          contentFit="cover"
          source={require("../assets/path-5-copy-21.png")}
        />
        <Text style={[styles.firstName, styles.vineetLayout]}>
          DATE OF BIRTH
        </Text>
        <Text style={[styles.vineet, styles.vineetTypo]}>SELECT DATE</Text>
      </View>
      <Text style={[styles.oneLastStep, styles.vineetTypo]}>
        Enter Palyer Details
      </Text>
      <CityForm
        path5Copy6={require("../assets/path-5-copy-6.png")}
        path5Copy7={require("../assets/path-5-copy-6.png")}
        location1="CITY"
        carStateCarWeight="STATE"
        personHeight="Manhattan"
        cityName="New York"
        vector={require("../assets/vector31.png")}
        vector1={require("../assets/vector31.png")}
      />
      <ConfirmSection
        propTop={716}
        onFramePressablePress={() => navigation.navigate("TellUsMoreFilled")}
      />
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
      <CityForm
        path5Copy6={require("../assets/path-5-copy-6.png")}
        path5Copy7={require("../assets/path-5-copy-6.png")}
        location1="HEIGHT"
        carStateCarWeight="WEIGHT"
        personHeight="5’10’’"
        cityName="50 KG"
        vector={require("../assets/vector31.png")}
        vector1={require("../assets/vector31.png")}
        propTop={448}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  path5Layout: {
    width: 311,
    position: "absolute",
  },
  vineetLayout: {
    width: 148,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    left: 0,
  },
  vineetTypo: {
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "left",
    position: "absolute",
  },
  rectanglePosition: {
    height: 7,
    backgroundColor: Color.colorRoyalblue,
    left: 26,
    top: 110,
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
  homeIndicatorLight: {
    top: 0,
    height: 20,
    width: 375,
    left: 0,
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
  homeIndicatorLightWrapper: {
    top: 792,
    height: 20,
    width: 375,
    left: 0,
    position: "absolute",
  },
  path5Copy2: {
    top: 53,
    height: 1,
    left: 0,
    width: 311,
  },
  firstName: {
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    color: Color.colorGray_100,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    top: 0,
    height: 12,
    position: "absolute",
  },
  vineet: {
    top: 24,
    lineHeight: 18,
    fontWeight: "600",
    color: Color.colorDimgray,
    height: 18,
    width: 148,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    left: 0,
    fontSize: FontSize.normalTextBody1X_size,
  },
  path5Copy2Parent: {
    top: 256,
    left: 32,
    height: 54,
  },
  oneLastStep: {
    top: 65,
    left: 65,
    lineHeight: 24,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: Color.neutral0,
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
  tellUsMoreFilledGirl: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default TellUsMoreFilledGirl;
