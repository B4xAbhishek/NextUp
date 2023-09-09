import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import VineetContainer from "../components/VineetContainer";
import SaveForm from "../components/SaveForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EditProfileCreateNewPass = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileCreateNewPass}>
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
        onPress={() => navigation.navigate("EditProfileEnterOldPassw")}
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
        style={[styles.editProfileCreateNewPassChild, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-710.png")}
      />
      <Image
        style={[styles.editProfileCreateNewPassItem, styles.editLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-711.png")}
      />
      <Image
        style={styles.editProfileCreateNewPassInner}
        contentFit="cover"
        source={require("../assets/group-1000002714.png")}
      />
      <VineetContainer />
      <Image
        style={[styles.path5Copy2, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-22.png")}
      />
      <Text style={[styles.firstName, styles.firstTypo]}>DATE OF BIRTH</Text>
      <Text style={[styles.vineet, styles.vineetTypo1]}>Nov 26 1993</Text>
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
      <Image
        style={[styles.path5Copy5, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-22.png")}
      />
      <Image
        style={[styles.path5Copy6, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-22.png")}
      />
      <Text style={[styles.firstName1, styles.firstTypo]}>PHONE NUMBER</Text>
      <Text style={[styles.firstName2, styles.firstTypo]}>EMAIL ID</Text>
      <Text style={[styles.firstName3, styles.firstTypo]}>
        ENTER OLD PASSWORD
      </Text>
      <Text style={[styles.firstName4, styles.firstTypo]}>NEW PASSWORD</Text>
      <Text style={styles.firstName5}>CONFIRM NEW PASSWORD</Text>
      <Text style={[styles.vineet1, styles.vineetTypo1]}>+1 586 566 5899</Text>
      <Text style={[styles.vineet2, styles.vineetTypo1]}>name@gmail.com</Text>
      <Text style={[styles.vineet3, styles.vineetTypo]}>************</Text>
      <Text style={[styles.vineet4, styles.vineetTypo]}>************</Text>
      <Text style={[styles.vineet5, styles.vineetTypo]}>************</Text>
      <SaveForm
        propTop={907}
        onGroupPressablePress={() =>
          navigation.navigate("EditProfileVerification")
        }
      />
      <Text style={styles.oldPassword}>CREATE NEW</Text>
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
  vineetTypo1: {
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
    fontSize: FontSize.normalTextBody1X_size,
    position: "absolute",
  },
  vineetTypo: {
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
  editProfileCreateNewPassChild: {
    top: 156,
  },
  editProfileCreateNewPassItem: {
    top: 203,
  },
  editProfileCreateNewPassInner: {
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
  path5Copy4: {
    top: 681,
  },
  path5Copy5: {
    top: 768,
  },
  path5Copy6: {
    top: 855,
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
  firstName4: {
    top: 714,
  },
  firstName5: {
    top: 795,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 32,
    textAlign: "left",
    position: "absolute",
  },
  vineet1: {
    top: 477,
  },
  vineet2: {
    top: 564,
  },
  vineet3: {
    top: 656,
  },
  vineet4: {
    top: 743,
  },
  vineet5: {
    top: 830,
  },
  oldPassword: {
    left: "72%",
    color: Color.colorRoyalblue,
    textAlign: "right",
    top: 656,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
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
  editProfileCreateNewPass: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 1029,
    overflow: "hidden",
  },
});

export default EditProfileCreateNewPass;
