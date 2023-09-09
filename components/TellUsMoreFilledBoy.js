import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BarsStatusBarIPhoneD1 from "../components/BarsStatusBarIPhoneD1";
import ConfirmSection from "../components/ConfirmSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const TellUsMoreFilledBoy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tellUsMoreFilledBoy}>
      <BarsStatusBarIPhoneD1
        wifi={require("../assets/wifi1.png")}
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
      <View style={[styles.homeIndicatorLightWrapper, styles.homeLayout]}>
        <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]} />
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={[styles.path5Copy2Parent, styles.path5ParentPosition]}>
        <Image
          style={[styles.path5Copy2, styles.path5Layout2]}
          contentFit="cover"
          source={require("../assets/path-5-copy-2.png")}
        />
        <Image
          style={[styles.path5Copy3, styles.path5Layout2]}
          contentFit="cover"
          source={require("../assets/path-5-copy-2.png")}
        />
        <Text style={[styles.firstName, styles.nameTypo1]}>FIRST NAME</Text>
        <Text style={[styles.lastName, styles.nameTypo1]}>LAST NAME</Text>
        <Text style={[styles.vineet, styles.kumarTypo1]}>Vineet</Text>
        <Text style={[styles.kumar, styles.kumarTypo1]}>Kumar</Text>
      </View>
      <View style={[styles.path5Copy2Group, styles.path5ParentPosition]}>
        <Image
          style={[styles.path5Copy21, styles.path5Layout2]}
          contentFit="cover"
          source={require("../assets/path-5-copy-21.png")}
        />
        <Text style={[styles.firstName, styles.nameTypo1]}>DATE OF BIRTH</Text>
        <Text style={[styles.vineet1, styles.vineetTypo]}>SELECT DATE</Text>
      </View>
      <Text style={[styles.oneLastStep, styles.kumarTypo1]}>
        Enter Player Details (Boy)
      </Text>
      <View style={[styles.path5Copy6Parent, styles.path5ParentPosition]}>
        <Image
          style={[styles.path5Copy6, styles.path5Layout1]}
          contentFit="cover"
          source={require("../assets/path-5-copy-6.png")}
        />
        <Image
          style={[styles.path5Copy7, styles.path5Layout1]}
          contentFit="cover"
          source={require("../assets/path-5-copy-6.png")}
        />
        <Text style={[styles.firstName, styles.nameTypo1]}>CITY</Text>
        <Text style={[styles.lastName, styles.nameTypo1]}>STATE</Text>
        <Text style={[styles.vineet2, styles.kumar1Typo]}>Manhattan</Text>
        <Text style={[styles.kumar1, styles.kumar1Typo]}>New York</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
      </View>
      <Image
        style={[styles.path5Copy61, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-6.png")}
      />
      <Image
        style={[styles.path5Copy71, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-6.png")}
      />
      <Text style={[styles.firstName3, styles.nameTypo]}>HEIGHT</Text>
      <Text style={[styles.lastName2, styles.nameTypo]}>WEIGHT</Text>
      <Text style={[styles.vineet3, styles.kumar2Typo]}>5’10</Text>
      <Text style={[styles.kumar2, styles.kumar2Typo]}>5</Text>
      <Text style={[styles.kumar3, styles.kumarTypo]}>KG</Text>
      <Text style={[styles.kumar4, styles.kumarTypo]}>INCH</Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector31.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector31.png")}
      />
      <ConfirmSection
        propTop={716}
        onFramePressablePress={() => navigation.navigate("SelectPlayStyle")}
      />
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    height: 20,
    width: 375,
    left: 0,
    position: "absolute",
  },
  path5ParentPosition: {
    width: "82.93%",
    left: "8.53%",
    right: "8.53%",
    position: "absolute",
  },
  path5Layout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  nameTypo1: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    top: "0%",
    width: "47.59%",
    position: "absolute",
  },
  kumarTypo1: {
    color: Color.neutral0,
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "left",
    position: "absolute",
  },
  vineetTypo: {
    fontWeight: "600",
    lineHeight: 18,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    width: "47.59%",
  },
  path5Layout1: {
    top: "98.21%",
    height: "1.79%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    width: "47.59%",
    position: "absolute",
    overflow: "hidden",
  },
  kumar1Typo: {
    top: "45.54%",
    color: Color.neutral0,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.normalTextBody1X_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    width: "47.59%",
    position: "absolute",
  },
  vectorIconLayout1: {
    bottom: "82.14%",
    top: "7.14%",
    width: "2.89%",
    height: "10.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  path5Layout: {
    bottom: "38.05%",
    top: "61.82%",
    width: "39.47%",
    height: "0.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nameTypo: {
    top: "55.05%",
    width: "39.47%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  kumar2Typo: {
    top: "58.19%",
    color: Color.neutral0,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  kumarTypo: {
    textAlign: "right",
    top: "58.19%",
    color: Color.neutral0,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.normalTextBody1X_size,
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "43.72%",
    top: "55.54%",
    width: "2.4%",
    height: "0.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  path5Copy2: {
    left: "0%",
    right: "52.41%",
    top: "98.2%",
    width: "47.59%",
    height: "1.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
  },
  path5Copy3: {
    left: "52.41%",
    right: "0%",
    top: "98.2%",
    width: "47.59%",
    height: "1.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
  },
  firstName: {
    left: "0%",
  },
  lastName: {
    left: "52.41%",
  },
  vineet: {
    fontWeight: "600",
    lineHeight: 18,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    width: "47.59%",
    top: "45.05%",
    color: Color.neutral0,
    left: "0%",
  },
  kumar: {
    fontWeight: "600",
    lineHeight: 18,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    width: "47.59%",
    top: "45.05%",
    color: Color.neutral0,
    left: "52.41%",
  },
  path5Copy2Parent: {
    height: "6.83%",
    top: "19.46%",
    bottom: "73.71%",
    left: "8.53%",
    right: "8.53%",
  },
  path5Copy21: {
    height: "1.82%",
    top: "98.18%",
    right: "0%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    width: "100%",
  },
  vineet1: {
    top: "45.45%",
    color: Color.colorDimgray,
    fontSize: FontSize.normalTextBody1X_size,
    lineHeight: 18,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  path5Copy2Group: {
    height: "6.77%",
    top: "31.34%",
    bottom: "61.88%",
    left: "8.53%",
    right: "8.53%",
  },
  oneLastStep: {
    top: 65,
    left: 65,
    lineHeight: 24,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
  },
  path5Copy6: {
    left: "0%",
    right: "52.41%",
  },
  path5Copy7: {
    left: "52.41%",
    right: "0%",
  },
  vineet2: {
    left: "0%",
  },
  kumar1: {
    left: "52.41%",
  },
  vectorIcon: {
    left: "97.11%",
    right: "0%",
  },
  vectorIcon1: {
    left: "44.69%",
    right: "52.41%",
  },
  path5Copy6Parent: {
    height: "6.9%",
    top: "43.1%",
    bottom: "50%",
    left: "8.53%",
    right: "8.53%",
  },
  path5Copy61: {
    right: "52%",
    left: "8.53%",
  },
  path5Copy71: {
    left: "52%",
    right: "8.53%",
  },
  firstName3: {
    left: "8.53%",
  },
  lastName2: {
    left: "52%",
  },
  vineet3: {
    width: "10.13%",
    left: "8.53%",
  },
  kumar2: {
    width: "5.07%",
    left: "52%",
  },
  kumar3: {
    width: "5.6%",
    left: "85.87%",
  },
  kumar4: {
    left: "37.87%",
    width: "10.13%",
  },
  vectorIcon2: {
    left: "89.07%",
    right: "8.53%",
  },
  vectorIcon3: {
    left: "45.6%",
    right: "52%",
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
  tellUsMoreFilledBoy: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default TellUsMoreFilledBoy;
