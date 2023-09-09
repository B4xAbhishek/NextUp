import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import { useNavigation } from "@react-navigation/native";
import SaveForm1 from "../components/SaveForm1";
import CityForm from "../components/CityForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EditProfileOtherDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileOtherDetails}>
      <BarsStatusBarIPhoneD
        wifi={require("../assets/wifi1.png")}
        cellularConnection={require("../assets/cellular-connection1.png")}
        barsStatusBarIPhoneDPosition="absolute"
        barsStatusBarIPhoneDBackgroundColor="unset"
        barsStatusBarIPhoneDWidth={376}
        barsStatusBarIPhoneDTop={0}
        barsStatusBarIPhoneDLeft={0}
        timeFontWeight="600"
        timeFontFamily="RobotoSerif-SemiBold"
      />
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("EditProfileVerification")}
      >
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </Pressable>
      <Text style={styles.oneLastStep}>Enter Coach Details</Text>
      <SaveForm1 />
      <View style={styles.editProfileOtherDetailsChild} />
      <Text style={[styles.bulls, styles.bullsTypo]}>Account Details</Text>
      <Text style={[styles.warriors, styles.bullsTypo]}>Verification</Text>
      <Text style={styles.warriors1}>Other Details</Text>
      <CityForm
        path5Copy6={require("../assets/path-5-copy-2.png")}
        path5Copy7={require("../assets/path-5-copy-2.png")}
        location1="CITY"
        carStateCarWeight="STATE"
        personHeight="Manhattan"
        cityName="New York"
        vector={require("../assets/vector3.png")}
        vector1={require("../assets/vector3.png")}
        propTop={366}
      />
      <View style={[styles.path5Copy4Parent, styles.path5ParentLayout]}>
        <Image
          style={[styles.path5Copy4, styles.path5Position]}
          contentFit="cover"
          source={require("../assets/path-5-copy-4.png")}
        />
        <Text style={[styles.firstName, styles.vineetFlexBox]}>SCHOOL</Text>
        <Text style={[styles.vineet, styles.vineetFlexBox]}>ABC School</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
      </View>
      <View style={[styles.path5Copy2Parent, styles.path5Layout]}>
        <Image
          style={[styles.path5Copy2, styles.path5Layout]}
          contentFit="cover"
          source={require("../assets/path-5-copy-21.png")}
        />
        <Text style={[styles.firstName, styles.vineetFlexBox]}>CLASS OF</Text>
        <Text style={[styles.vineet, styles.vineetFlexBox]}>Nov 26 1993</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
      </View>
      <CityForm
        path5Copy6={require("../assets/path-5-copy-2.png")}
        path5Copy7={require("../assets/path-5-copy-2.png")}
        location1="HEIGHT"
        carStateCarWeight="WEIGHT"
        personHeight="5’10’’"
        cityName="50 KG"
        vector={require("../assets/vector3.png")}
        vector1={require("../assets/vector3.png")}
        propTop={465}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bullsTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 111,
    textAlign: "left",
    position: "absolute",
  },
  path5ParentLayout: {
    height: 55,
    left: 32,
  },
  path5Position: {
    height: 1,
    left: 0,
    top: 54,
  },
  vineetFlexBox: {
    width: 148,
    alignItems: "center",
    display: "flex",
    left: 0,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  path5Layout: {
    width: 311,
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
  oneLastStep: {
    top: 65,
    left: 65,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    color: Color.neutral0,
    fontSize: FontSize.normalTextBody1X_size,
    position: "absolute",
  },
  editProfileOtherDetailsChild: {
    top: 132,
    left: 261,
    backgroundColor: Color.neutral0,
    width: 136,
    height: 2,
    position: "absolute",
  },
  bulls: {
    left: -19,
  },
  warriors: {
    left: 141,
  },
  warriors1: {
    left: 268,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 111,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  path5Copy4: {
    width: 310,
    position: "absolute",
  },
  firstName: {
    top: 0,
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    color: Color.colorGray_100,
    height: 12,
  },
  vineet: {
    top: 24,
    lineHeight: 18,
    height: 18,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    color: Color.neutral0,
    fontSize: FontSize.normalTextBody1X_size,
  },
  vectorIcon: {
    height: "10.91%",
    width: "2.9%",
    top: "5.45%",
    bottom: "83.64%",
    left: "97.1%",
  },
  path5Copy4Parent: {
    top: 168,
    width: 310,
    position: "absolute",
  },
  path5Copy2: {
    height: 1,
    left: 0,
    top: 54,
  },
  vectorIcon1: {
    height: "11.01%",
    width: "2.89%",
    top: "5.5%",
    bottom: "83.49%",
    left: "97.11%",
  },
  path5Copy2Parent: {
    top: 267,
    height: 55,
    left: 32,
  },
  editProfileOtherDetails: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default EditProfileOtherDetails;
