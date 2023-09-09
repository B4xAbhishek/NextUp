import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UploadPhotoNotAdded = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.uploadPhotoNotAdded}>
      <BarsStatusBarIPhoneD
        wifi={require("../assets/wifi2.png")}
        cellularConnection={require("../assets/cellular-connection1.png")}
        barsStatusBarIPhoneDPosition="absolute"
        barsStatusBarIPhoneDBackgroundColor="unset"
        barsStatusBarIPhoneDTop={0}
        barsStatusBarIPhoneDLeft={0}
        barsStatusBarIPhoneDWidth={376}
        timeFontFamily="RobotoSerif-SemiBold"
      />
      <Text style={styles.signInWithContainer}>
        <Text style={styles.signInWithContainer1}>
          <Text style={styles.upload}>{`Upload
`}</Text>
          <Text style={styles.photo}>Photo</Text>
        </Text>
      </Text>
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
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("UploadPhotoAdded")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-53.png")}
        />
      </Pressable>
      <View style={[styles.rectangleCopy3Parent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
        <Text style={styles.continue}>Continue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    height: 7,
    top: 110,
    backgroundColor: Color.colorRoyalblue,
    left: 26,
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 311,
    position: "absolute",
  },
  upload: {
    fontWeight: "100",
    fontFamily: FontFamily.robotoThin,
  },
  photo: {
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
    textAlign: "left",
    width: 311,
    alignItems: "center",
    display: "flex",
    color: Color.othersWhite,
    left: 26,
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
  rectangle1: {
    borderRadius: Border.br_13xl,
    width: 323,
    opacity: 0.08,
  },
  rectangleCopy: {
    borderRadius: Border.br_23xl,
    width: 154,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 64,
    top: 296,
    width: 247,
    height: 248,
    position: "absolute",
  },
  rectangleCopy3: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorRoyalblue,
    height: 48,
    top: 0,
    left: 0,
  },
  continue: {
    top: 16,
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    textAlign: "center",
    justifyContent: "center",
    height: 16,
    left: 0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    width: 311,
    alignItems: "center",
    display: "flex",
    color: Color.othersWhite,
    position: "absolute",
  },
  rectangleCopy3Parent: {
    top: 724,
    left: 32,
    opacity: 0.37,
  },
  uploadPhotoNotAdded: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default UploadPhotoNotAdded;
