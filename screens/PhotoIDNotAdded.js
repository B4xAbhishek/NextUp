import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; 

const PhotoIDNotAdded = () => {

  const navigation = useNavigation(); 
  
  const handleButtonClick = () => {
    // Navigate to the "PhotoIDNotAdded1" screen
    navigation.navigate("PlayerProfileSomeoneElse");
  };


  return (
    <View style={styles.photoIdNotAdded}>
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
          <Text style={styles.oneLast}>{`One last
`}</Text>
          <Text style={styles.step}>Step</Text>
        </Text>
      </Text>
      <View style={styles.group}>
        <View style={[styles.rectangle, styles.rectangleLayout1]} />
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
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
      <View style={[styles.rectangleCopy3Parent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
        <Text onPress={handleButtonClick} style={[styles.continue, styles.continueLayout]}>Continue0</Text>
      </View>
      <Text style={[styles.skip, styles.skipFlexBox]}>Skip0</Text>
      <TouchableOpacity onPress={handleButtonClick}>
        <Image
          style={styles.photoIdNotAddedChild}
          contentFit="cover"
          source={require("../assets/group-5.png")}
        />
      </TouchableOpacity>
      <View style={[styles.forProfileVerificaParent, styles.rectangleLayout1]}>
        <TouchableOpacity onPress={handleButtonClick}>
          <Text style={[styles.forProfileVerifica, styles.toGetYourTypo]}>
            Your document is under verification, We will notify once verified.
          </Text>
        </TouchableOpacity>
        <Image
          style={styles.vuesaxboldinfoCircleIcon}
          contentFit="cover"
          source={require("../assets/vuesaxboldinfocircle.png")}
        />
      </View>
      <View style={styles.mask} />
      <Image
        style={[styles.photoIdNotAddedItem, styles.continueLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002714.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout1: {
    height: 32,
    position: "absolute",
  },
  homeLayout: {
    height: 20,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectanglePosition: {
    height: 7,
    top: 110,
    backgroundColor: Color.colorRoyalblue,
    left: 26,
    position: "absolute",
  },
  toGetYourTypo: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 311,
    position: "absolute",
  },
  continueLayout: {
    height: 16,
    position: "absolute",
  },
  skipFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 16,
    width: 311,
    alignItems: "center",
    display: "flex",
    color: Color.othersWhite,
  },
  oneLast: {
    fontWeight: "100",
    fontFamily: FontFamily.robotoThin,
  },
  step: {
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
    left: 26,
    color: Color.othersWhite,
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
  rectangle1: {
    borderRadius: Border.br_13xl,
    width: 323,
    opacity: 0.08,
  },
  rectangleCopy: {
    borderRadius: Border.br_23xl,
    width: 154,
  },
  toGetYour: {
    top: 228,
    left: 29,
    fontSize: FontSize.size_sm,
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
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
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 16,
    width: 311,
    alignItems: "center",
    display: "flex",
    color: Color.othersWhite,
    fontSize: FontSize.size_sm,
    left: 0,
    height: 16,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  rectangleCopy3Parent: {
    top: 684,
    left: 32,
  },
  skip: {
    top: 750,
    fontSize: FontSize.bodyLargeBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    left: 32,
    position: "absolute",
  },
  photoIdNotAddedChild: {
    top: 360,
    left: 84,
    width: 207,
    height: 148,
    position: "absolute",
  },
  forProfileVerifica: {
    left: 20,
    fontSize: FontSize.size_xs,
    color: Color.colorSlategray,
    top: 0,
  },
  vuesaxboldinfoCircleIcon: {
    height: "50%",
    width: "6.93%",
    top: "6.25%",
    right: "93.07%",
    bottom: "43.75%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  forProfileVerificaParent: {
    top: 530,
    left: 63,
    width: 231,
  },
  mask: {
    top: 376,
    left: 100,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_500,
    width: 175,
    height: 116,
    position: "absolute",
  },
  photoIdNotAddedItem: {
    top: 426,
    left: 179,
    width: 18,
  },
  photoIdNotAdded: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PhotoIDNotAdded;
