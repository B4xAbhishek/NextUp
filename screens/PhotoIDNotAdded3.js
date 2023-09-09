import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PhotoIDNotAdded3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photoIdNotAdded}>
      <BarsStatusBarIPhoneD
        wifi={require("../assets/wifi1.png")}
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
      <Text style={[styles.toGetYour, styles.toGetYourTypo]}>
        To get your profile verified, upload photo ID
      </Text>
      <Text style={[styles.forProfileVerifica, styles.groupParentPosition]}>
        For profile verification, try not to skip the process
      </Text>
      <Pressable
        style={[styles.groupParent, styles.groupParentPosition]}
        onPress={() => navigation.navigate("PhotoIDNotAdded1")}
      >
        <Image
          style={[styles.frameChild, styles.photoIdPosition]}
          contentFit="cover"
          source={require("../assets/group-51.png")}
        />
        <Text style={[styles.photoId, styles.photoIdPosition]}>{`PHOTO
ID`}</Text>
      </Pressable>
      <View style={[styles.rectangleCopy3Parent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
        <Text style={[styles.continue, styles.skipFlexBox]}>Continue</Text>
      </View>
      <Text style={[styles.skip, styles.skipFlexBox]}>Skip</Text>
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
  toGetYourTypo: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
  },
  groupParentPosition: {
    width: 207,
    left: 84,
    position: "absolute",
  },
  photoIdPosition: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleLayout: {
    height: 48,
    width: 311,
    position: "absolute",
  },
  skipFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
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
    left: 26,
    textAlign: "left",
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
  toGetYour: {
    top: 228,
    left: 29,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  forProfileVerifica: {
    top: 539,
    fontSize: FontSize.size_xs,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorSlategray,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
  },
  frameChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  photoId: {
    marginTop: -18,
    top: "50%",
    lineHeight: 18,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
    height: 36,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorSlategray,
    fontSize: FontSize.size_sm,
  },
  groupParent: {
    top: 360,
    height: 148,
    overflow: "hidden",
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
    height: 16,
    textAlign: "center",
    lineHeight: 16,
    width: 311,
    color: Color.othersWhite,
    position: "absolute",
    fontSize: FontSize.size_sm,
    left: 0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  rectangleCopy3Parent: {
    top: 684,
    opacity: 0.37,
    left: 32,
  },
  skip: {
    top: 750,
    fontSize: FontSize.bodyLargeBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    left: 32,
    textAlign: "center",
    lineHeight: 16,
    width: 311,
    color: Color.othersWhite,
    position: "absolute",
  },
  photoIdNotAdded: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PhotoIDNotAdded3;
