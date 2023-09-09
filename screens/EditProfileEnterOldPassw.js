import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import { useNavigation } from "@react-navigation/native";
import VineetContainer from "../components/VineetContainer";
import SaveForm2 from "../components/SaveForm2";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EditProfileEnterOldPassw = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileEnterOldPassw}>
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
        onPress={() => navigation.navigate("EditProfileResetPassword")}
      >
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </Pressable>
      <Text style={styles.oneLastStep}>Enter Coach Details</Text>
      <Image
        style={[styles.editProfileEnterOldPasswChild, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-710.png")}
      />
      <Image
        style={[styles.editProfileEnterOldPasswItem, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-711.png")}
      />
      <Image
        style={styles.editProfileEnterOldPasswInner}
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
      <Text style={[styles.vineet, styles.vineetLayout]}>Nov 26 1993</Text>
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
      <Image
        style={[styles.path5Copy4, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-22.png")}
      />
      <Text style={[styles.firstName1, styles.firstTypo]}>PHONE NUMBER</Text>
      <Text style={[styles.firstName2, styles.firstTypo]}>EMAIL ID</Text>
      <Text style={[styles.firstName3, styles.firstTypo]}>
        ENTER OLD PASSWORD
      </Text>
      <Text style={[styles.vineet1, styles.vineetLayout]}>+1 586 566 5899</Text>
      <Text style={[styles.vineet2, styles.vineetLayout]}>name@gmail.com</Text>
      <Text style={[styles.vineet3, styles.vineet3Position]}>************</Text>
      <SaveForm2 />
      <Pressable
        style={[styles.oldPassword, styles.vineet3Position]}
        onPress={() => navigation.navigate("EditProfileCreateNewPass")}
      >
        <Text style={styles.createNew}>CREATE NEW</Text>
      </Pressable>
      <View style={styles.rectangleView} />
      <Text style={styles.bulls}>Account Details</Text>
      <Text style={[styles.warriors, styles.warriorsTypo]}>Verification</Text>
      <Text style={[styles.warriors1, styles.warriorsTypo]}>Other Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 32,
    textAlign: "left",
    height: 12,
    position: "absolute",
  },
  vineetLayout: {
    height: 18,
    fontWeight: "600",
    lineHeight: 18,
    width: 148,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    left: 32,
    textAlign: "left",
    color: Color.neutral0,
  },
  vineet3Position: {
    top: 656,
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
  editProfileEnterOldPasswChild: {
    top: 156,
  },
  editProfileEnterOldPasswItem: {
    top: 203,
  },
  editProfileEnterOldPasswInner: {
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
    fontSize: FontSize.normalTextBody1X_size,
    height: 18,
    fontWeight: "600",
    lineHeight: 18,
    position: "absolute",
  },
  path5Copy21: {
    top: 507,
  },
  path5Copy3: {
    top: 594,
  },
  path5Copy4: {
    top: 681,
  },
  firstName1: {
    top: 453,
  },
  firstName2: {
    top: 540,
  },
  firstName3: {
    top: 627,
  },
  vineet1: {
    top: 477,
    fontSize: FontSize.normalTextBody1X_size,
    height: 18,
    fontWeight: "600",
    lineHeight: 18,
    position: "absolute",
  },
  vineet2: {
    top: 564,
    fontSize: FontSize.normalTextBody1X_size,
    height: 18,
    fontWeight: "600",
    lineHeight: 18,
    position: "absolute",
  },
  vineet3: {
    fontSize: FontSize.size_xl,
    height: 18,
    fontWeight: "600",
    lineHeight: 18,
    width: 148,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    left: 32,
    textAlign: "left",
    color: Color.neutral0,
  },
  createNew: {
    color: Color.colorRoyalblue,
    textAlign: "right",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  oldPassword: {
    left: "72%",
  },
  rectangleView: {
    top: 132,
    left: 18,
    backgroundColor: Color.neutral0,
    width: 136,
    height: 2,
    position: "absolute",
  },
  bulls: {
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 111,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    left: 32,
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
  editProfileEnterOldPassw: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 858,
    overflow: "hidden",
  },
});

export default EditProfileEnterOldPassw;
