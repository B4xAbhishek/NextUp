import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD1 from "../components/BarsStatusBarIPhoneD1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TellUsMoreFilledGirl1 = () => {
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
        <View style={[styles.rectangle, styles.rectangleBorder]} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={styles.oneLastStep}>Select your location</Text>
      <View style={[styles.rectangleCopy8, styles.rectangleBorder]} />
      <Text style={styles.search}>Search School</Text>
      <Image
        style={styles.magnifyingglassIcon}
        contentFit="cover"
        source={require("../assets/magnifyingglass.png")}
      />
      <Image
        style={[styles.path5Copy4, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-2.png")}
      />
      <Image
        style={[styles.path5Copy5, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-2.png")}
      />
      <Text style={[styles.firstName, styles.nameTypo]}>STATE</Text>
      <Text style={[styles.lastName, styles.nameTypo]}>CITY</Text>
      <Text style={[styles.vineet, styles.kumarTypo]}>NY</Text>
      <Pressable
        style={styles.vineet1}
        onPress={() => navigation.navigate("TellUsMoreFilledGirl")}
      >
        <Text style={styles.kumarTypo}>Albemarle School</Text>
      </Pressable>
      <Text style={[styles.kumar, styles.kumarTypo]}>New York</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector31.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  path5Layout: {
    height: 1,
    top: 245,
    width: 148,
    position: "absolute",
  },
  nameTypo: {
    fontWeight: "700",
    top: 191,
    width: 148,
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    height: 12,
    position: "absolute",
  },
  kumarTypo: {
    height: 18,
    lineHeight: 18,
    width: 148,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.neutral0,
    fontSize: FontSize.normalTextBody1X_size,
  },
  vectorIconLayout: {
    bottom: "75.37%",
    top: "23.89%",
    width: "2.4%",
    height: "0.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    top: -1,
    left: -1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
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
  oneLastStep: {
    top: 65,
    left: 65,
    lineHeight: 24,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    textAlign: "left",
    color: Color.neutral0,
    fontSize: FontSize.normalTextBody1X_size,
    position: "absolute",
  },
  rectangleCopy8: {
    top: 108,
    left: 24,
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    width: 328,
    height: 49,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
  },
  search: {
    top: 124,
    left: 40,
    lineHeight: 16,
    height: 16,
    width: 148,
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  magnifyingglassIcon: {
    height: "2.71%",
    width: "5.87%",
    top: "14.9%",
    right: "9.6%",
    bottom: "82.39%",
    left: "84.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  path5Copy4: {
    left: 32,
  },
  path5Copy5: {
    left: 195,
  },
  firstName: {
    left: 32,
  },
  lastName: {
    left: 195,
  },
  vineet: {
    top: 215,
    lineHeight: 18,
    position: "absolute",
    left: 32,
  },
  vineet1: {
    top: 274,
    left: 32,
    position: "absolute",
  },
  kumar: {
    top: 215,
    lineHeight: 18,
    position: "absolute",
    left: 195,
  },
  vectorIcon: {
    right: "8.53%",
    left: "89.07%",
  },
  vectorIcon1: {
    right: "52%",
    left: "45.6%",
  },
  tellUsMoreFilledGirl: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
  },
});

export default TellUsMoreFilledGirl1;
