import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import StatCollectionSection from "../components/StatCollectionSection";
import VineetContainer from "../components/VineetContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EditProfileResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileResetPassword}>
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
      <StatCollectionSection
        buttonText="Save"
        propTop={672}
        propFontWeight="700"
        propFontFamily="Roboto-Bold"
      />
      <Text style={styles.oneLastStep}>Enter Coach Details</Text>
      <View style={styles.editProfileResetPasswordChild} />
      <Text style={styles.bulls}>Account Details</Text>
      <Text style={[styles.warriors, styles.warriorsTypo]}>Verification</Text>
      <Text style={[styles.warriors1, styles.warriorsTypo]}>Other Details</Text>
      <Image
        style={[styles.editProfileResetPasswordItem, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-710.png")}
      />
      <Image
        style={[styles.editProfileResetPasswordInner, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-711.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-1000002714.png")}
      />
      <VineetContainer propTop={280} />
      <Image
        style={[styles.path5Copy2, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-22.png")}
      />
      <Text style={[styles.firstName, styles.firstTypo]}>DATE OF BIRTH</Text>
      <Text style={[styles.vineet, styles.vineetTypo]}>Nov 26 1993</Text>
      <Image
        style={[styles.path5Copy21, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-22.png")}
      />
      <Image
        style={[styles.path5Copy3, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-22.png")}
      />
      <Text style={[styles.firstName1, styles.firstTypo]}>PHONE NUMBER</Text>
      <Text style={[styles.firstName2, styles.firstTypo]}>EMAIL ID</Text>
      <Text style={[styles.vineet1, styles.vineetTypo]}>+1 586 566 5899</Text>
      <Text style={[styles.vineet2, styles.vineetTypo]}>name@gmail.com</Text>
      <Pressable
        style={styles.oldPassword}
        onPress={() => navigation.navigate("EditProfileEnterOldPassw")}
      >
        <Text style={styles.resetPassword}>RESET PASSWORD</Text>
      </Pressable>
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
  warriorsTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 111,
    textAlign: "left",
    position: "absolute",
  },
  editLayout: {
    height: 93,
    width: 93,
    left: 141,
    position: "absolute",
  },
  path5Layout: {
    height: 1,
    width: 311,
    left: 32,
    position: "absolute",
  },
  firstTypo: {
    width: 148,
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_100,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    left: 32,
    textAlign: "left",
    height: 12,
    position: "absolute",
  },
  vineetTypo: {
    height: 18,
    lineHeight: 18,
    width: 148,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    left: 32,
    textAlign: "left",
    color: Color.neutral0,
    fontSize: FontSize.normalTextBody1X_size,
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
  editProfileResetPasswordChild: {
    top: 132,
    left: 18,
    backgroundColor: Color.neutral0,
    width: 136,
    height: 2,
    position: "absolute",
  },
  bulls: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    left: 32,
    top: 111,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  warriors: {
    left: 192,
  },
  warriors1: {
    left: 319,
  },
  editProfileResetPasswordItem: {
    top: 156,
  },
  editProfileResetPasswordInner: {
    top: 203,
  },
  groupIcon: {
    top: 224,
    left: 178,
    width: 18,
    height: 16,
    position: "absolute",
  },
  path5Copy2: {
    top: 420,
  },
  firstName: {
    top: 367,
  },
  vineet: {
    top: 391,
  },
  path5Copy21: {
    top: 507,
  },
  path5Copy3: {
    top: 594,
  },
  firstName1: {
    top: 453,
  },
  firstName2: {
    top: 540,
  },
  vineet1: {
    top: 477,
  },
  vineet2: {
    top: 564,
  },
  resetPassword: {
    textDecoration: "underline",
    color: Color.colorRoyalblue,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
  },
  oldPassword: {
    left: "61.07%",
    top: 605,
    position: "absolute",
  },
  editProfileResetPassword: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default EditProfileResetPassword;
