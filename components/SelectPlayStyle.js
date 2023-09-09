import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BarsStatusBarIPhoneD1 from "../components/BarsStatusBarIPhoneD1";
import ConfirmSection from "../components/ConfirmSection";
import FrameComponent from "../components/FrameComponent";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const SelectPlayStyle = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selectPlayStyle}>
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
      <Text style={styles.oneLastStep}>Select Player Style (Boy)</Text>
      <ConfirmSection
        propTop={705}
        onFramePressablePress={() =>
          navigation.navigate("UploadPhotoNotAdded1")
        }
      />
      <Text style={styles.loremIpsumDolor}>
        Select from the 5 player styles. Just like a game each style will come
        with different challenges including stats in focus.
      </Text>
      <Text style={[styles.player, styles.playerTypo]}>
        What type of player are you?
      </Text>
      <Text style={[styles.player1, styles.playerTypo]}>Stats of Focus</Text>
      <View style={[styles.instanceParent, styles.parentFlexBox]}>
        <FrameComponent
          prop="56.0"
          points="--"
          showText={false}
          frameViewPosition="unset"
          frameViewElevation={17.04}
          frameViewWidth={79}
          frameViewHeight={62}
          frameViewMarginLeft="unset"
          textFontSize={23}
          textFontFamily="Roboto-Regular"
          pointsFontSize={13}
          pointsFontFamily="Roboto-Regular"
          pointsMarginTop={4.73}
        />
        <FrameComponent
          prop="2.2"
          points="--"
          showText={false}
          frameViewPosition="unset"
          frameViewElevation={17.04}
          frameViewWidth={79}
          frameViewHeight={62}
          frameViewMarginLeft={7.57}
          textFontSize={23}
          textFontFamily="Roboto-Regular"
          pointsFontSize={13}
          pointsFontFamily="Roboto-Regular"
          pointsMarginTop={4.73}
        />
        <FrameComponent
          prop="0.5"
          points="--"
          showText={false}
          frameViewPosition="unset"
          frameViewElevation={17.04}
          frameViewWidth={80}
          frameViewHeight={62}
          frameViewMarginLeft={7.57}
          textFontSize={23}
          textFontFamily="Roboto-Regular"
          pointsFontSize={13}
          pointsFontFamily="Roboto-Regular"
          pointsMarginTop={4.73}
        />
        <FrameComponent
          prop="9.5"
          points="---"
          showText={false}
          frameViewPosition="unset"
          frameViewElevation={17.04}
          frameViewWidth={78}
          frameViewHeight={62}
          frameViewMarginLeft={7.57}
          textFontSize={23}
          textFontFamily="Roboto-Regular"
          pointsFontSize={13}
          pointsFontFamily="Roboto-Regular"
          pointsMarginTop={4.73}
        />
      </View>
      <View style={[styles.slasherParent, styles.parentFlexBox]}>
        <ImageBackground
          style={styles.slasherIcon}
          resizeMode="cover"
          source={require("../assets/slasher.png")}
        >
          <View
            style={[
              styles.httpswwwpexelscomphotomWrapper,
              styles.parentFlexBox,
            ]}
          >
            <Image
              style={styles.httpswwwpexelscomphotomIcon}
              contentFit="cover"
              source={require("../assets/httpswwwpexelscomphotomanplayingbasketballwilson1596111.png")}
            />
          </View>
        </ImageBackground>
        <View style={[styles.pointForward, styles.pointSpaceBlock]}>
          <Image
            style={styles.httpswwwpexelscomphotomIcon}
            contentFit="cover"
            source={require("../assets/httpswwwpexelscomphotophotoofmandoingdunk28349141.png")}
          />
        </View>
        <View style={[styles.pointForward, styles.pointSpaceBlock]}>
          <Image
            style={styles.httpswwwpexelscomphotomIcon}
            contentFit="cover"
            source={require("../assets/httpswwwpexelscomphotobasketballplayerholdingball9745021.png")}
          />
        </View>
        <View style={[styles.pointForward2, styles.pointSpaceBlock]}>
          <Image
            style={styles.httpswwwpexelscomphotomIcon}
            contentFit="cover"
            source={require("../assets/mask2.png")}
          />
        </View>
        <View style={[styles.pointForward2, styles.pointSpaceBlock]}>
          <Image
            style={styles.httpswwwpexelscomphotomIcon}
            contentFit="cover"
            source={require("../assets/mask3.png")}
          />
        </View>
      </View>
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
  playerTypo: {
    textAlign: "center",
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 16,
    color: Color.neutral0,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  pointSpaceBlock: {
    marginLeft: 15,
    height: 151,
    flexDirection: "row",
  },
  rectangle: {
    top: -1,
    left: -1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
    borderStyle: "solid",
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
    width: 30,
    height: 30,
    left: 21,
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
    fontSize: FontSize.normalTextBody1X_size,
    lineHeight: 24,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 514,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    width: 331,
    lineHeight: 16,
    left: 19,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  player: {
    top: 489,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    left: 21,
  },
  player1: {
    top: 564,
    left: 23,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  instanceParent: {
    top: 589,
    left: 19,
    flexDirection: "row",
  },
  httpswwwpexelscomphotomIcon: {
    borderRadius: 8,
    width: 112,
    height: 152,
  },
  httpswwwpexelscomphotomWrapper: {
    top: -2,
    left: -2,
    borderColor: Color.colorOrange,
    borderWidth: 4,
    width: 115,
    height: 155,
    borderStyle: "solid",
  },
  slasherIcon: {
    height: 151,
    width: 100,
  },
  pointForward: {
    width: 100,
    marginLeft: 15,
  },
  pointForward2: {
    width: 111,
  },
  slasherParent: {
    top: 134,
    left: 13,
    width: 330,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  selectPlayStyle: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SelectPlayStyle;
