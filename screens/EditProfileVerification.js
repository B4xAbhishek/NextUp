import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import SaveForm from "../components/SaveForm";
import CertificateForm from "../components/CertificateForm";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const EditProfileVerification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileVerification}>
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
        onPress={() => navigation.navigate("EditProfileCreateNewPass")}
      >
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </Pressable>
      <Text style={styles.oneLastStep}>Enter Coach Details</Text>
      <SaveForm
        onGroupPressablePress={() =>
          navigation.navigate("EditProfileOtherDetails")
        }
      />
      <CertificateForm />
      <Image
        style={styles.editProfileVerificationChild}
        contentFit="cover"
        source={require("../assets/group-1000002721.png")}
      />
      <Text style={styles.forProfileVerificaContainer}>
        <Text style={styles.yourDocumentIs}>{`Your document is rejeted. Please
upload right documents..`}</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.text}>
          <Text style={styles.uploadNewDocuments1}>Upload New Documents</Text>
        </Text>
      </Text>
      <View style={styles.editProfileVerificationItem} />
      <Text style={[styles.bulls, styles.bullsTypo]}
       onPress={() => navigation.navigate('EditProfileCreateNewPass')}>Account Details</Text>
      <Text style={styles.warriors}>Verification</Text>
      <Text style={[styles.warriors1, styles.bullsTypo]}>Other Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bullsTypo: {
    color: Color.colorDarkgray_100,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 111,
    fontFamily: FontFamily.robotoRegular,
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
    fontSize: FontSize.normalTextBody1X_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  editProfileVerificationChild: {
    top: 484,
    left: 58,
    width: 36,
    height: 36,
    position: "absolute",
  },
  yourDocumentIs: {
    color: "#989898",
    fontFamily: FontFamily.robotoRegular,
  },
  text: {
    color: Color.colorRoyalblue,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  uploadNewDocuments1: {
    textDecoration: "underline",
  },
  forProfileVerificaContainer: {
    top: 602,
    left: 54,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    textAlign: "center",
    position: "absolute",
  },
  editProfileVerificationItem: {
    top: 132,
    left: 111,
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
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 111,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  warriors1: {
    left: 268,
  },
  editProfileVerification: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default EditProfileVerification;
