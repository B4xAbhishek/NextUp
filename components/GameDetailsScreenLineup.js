import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GameDetailsScreenLineup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gameDetailsScreenLineup}>
      <BarsStatusBarIPhoneD
        wifi={require("../assets/wifi2.png")}
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
        onPress={() => navigation.navigate("GameDetailsScreenOverview2")}
      >
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </Pressable>
      <Text style={[styles.oneLastStep, styles.oneLastStepTypo]}>
        Upcoming Games
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Pressable
          style={styles.bulls}
          onPress={() => navigation.navigate("GameDetailsScreenOverview")}
        >
          <Text style={styles.overview}>Overview</Text>
        </Pressable>
        <Text style={styles.warriors}>Team Lineup</Text>
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.image8Icon, styles.iconPosition4]}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
      <Image
        style={[styles.image13Icon, styles.iconPosition4]}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <Image
        style={[styles.image9Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={[styles.image14Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Image
        style={[styles.image10Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
      <Image
        style={[styles.image15Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <Image
        style={[styles.image12Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <Image
        style={[styles.image16Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <Image
        style={[styles.image11Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Image
        style={[styles.image17Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-17.png")}
      />
      <View style={[styles.gameDetailsScreenLineupChild, styles.gameLayout]} />
      <View
        style={[styles.gameDetailsScreenLineupItem, styles.rectangleViewLayout]}
      />
      <View style={[styles.gameDetailsScreenLineupInner, styles.gameLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.gameDetailsScreenLineupChild1, styles.gameChildLayout2]}
      />
      <Text style={[styles.anthonyDavis, styles.anthonyTypo]}>
        Anthony Davis
      </Text>
      <Text style={[styles.anthonyDavis1, styles.anthonyTypo]}>
        Anthony Davis
      </Text>
      <View
        style={[styles.gameDetailsScreenLineupChild2, styles.gameChildLayout1]}
      />
      <View
        style={[styles.gameDetailsScreenLineupChild3, styles.gameChildLayout]}
      />
      <View
        style={[styles.gameDetailsScreenLineupChild4, styles.gameChildLayout]}
      />
      <View
        style={[styles.gameDetailsScreenLineupChild5, styles.gameChildLayout2]}
      />
      <View
        style={[styles.gameDetailsScreenLineupChild6, styles.gameChildLayout1]}
      />
      <Text style={[styles.russellWestbrook, styles.malikMonkTypo]}>
        Russell Westbrook
      </Text>
      <Text style={[styles.alexCaruso, styles.alexCarusoTypo]}>
        Alex Caruso
      </Text>
      <Text style={[styles.malikMonk, styles.malikMonkTypo]}>Malik Monk</Text>
      <Text style={[styles.demarDerozan, styles.alexCarusoTypo]}>
        Demar Derozan
      </Text>
      <Text style={[styles.text, styles.anthonyTypo]}>{` `}</Text>
      <Text style={[styles.zachLavine, styles.zachLavineTypo]}>
        Zach Lavine
      </Text>
      <Text style={[styles.charmeloAnthony, styles.anthonyTypo]}>
        Charmelo Anthony
      </Text>
      <Text style={[styles.nikolaVucevic, styles.anthonyTypo]}>
        Nikola Vucevic
      </Text>
      <Text style={[styles.anthonyDavis1, styles.anthonyTypo]}>
        Anthony Davis
      </Text>
      <Text style={[styles.patrickWilliams, styles.zachLavineTypo]}>
        Patrick Williams
      </Text>
      <Text style={[styles.text1, styles.textTypo1]}>{`22 - 4 - 0 `}</Text>
      <Text style={[styles.text2, styles.textTypo1]}>36 - 13 - 0</Text>
      <Text style={[styles.text3, styles.textTypo]}>Chicago Bulls</Text>
      <Text style={[styles.text4, styles.textTypo]}>Los Angeles Lakers</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002856.png")}
      />
      <Image
        style={[styles.gameDetailsScreenLineupChild7, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002857.png")}
      />
      <Image
        style={styles.groupIcon1}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Text style={[styles.mplDLeagueAug, styles.oneLastStepTypo]}>
        MPL D-League Aug 09, 13:03
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oneLastStepTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconPosition4: {
    width: 60,
    left: 243,
    position: "absolute",
  },
  iconLayout1: {
    height: 51,
    width: 66,
    left: 84,
    position: "absolute",
  },
  iconLayout: {
    height: 50,
    top: 412,
  },
  iconPosition2: {
    top: 771,
    height: 51,
  },
  iconPosition1: {
    left: 155,
    height: 51,
    width: 66,
    position: "absolute",
  },
  iconPosition: {
    left: 240,
    width: 66,
    position: "absolute",
  },
  gameLayout: {
    height: 19,
    width: 105,
    borderRadius: Border.br_4xs,
    top: 367,
    backgroundColor: Color.colorMidnightblue,
    position: "absolute",
  },
  rectangleViewLayout: {
    top: 727,
    backgroundColor: Color.colorCrimson,
    height: 19,
    width: 105,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  gameChildLayout2: {
    top: 456,
    height: 19,
    width: 105,
    backgroundColor: Color.colorMidnightblue,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  anthonyTypo: {
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    lineHeight: 14,
    color: Color.neutral0,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  gameChildLayout1: {
    top: 815,
    backgroundColor: Color.colorCrimson,
    height: 19,
    width: 105,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  gameChildLayout: {
    left: 135,
    height: 19,
    width: 105,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  malikMonkTypo: {
    top: 369,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    lineHeight: 14,
    color: Color.neutral0,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  alexCarusoTypo: {
    top: 729,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    lineHeight: 14,
    color: Color.neutral0,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  zachLavineTypo: {
    height: 14,
    top: 818,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    lineHeight: 14,
    color: Color.neutral0,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 15,
    top: 225,
    textAlign: "center",
    fontSize: FontSize.bodyMediumSemibold_size,
    color: Color.neutral0,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    top: 203,
    lineHeight: 15,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.neutral0,
    position: "absolute",
  },
  groupIconLayout: {
    height: 58,
    width: 58,
    top: 136,
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
    color: Color.neutral0,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  groupChild: {
    top: 21,
    left: 112,
    backgroundColor: Color.neutral0,
    width: 170,
    height: 2,
    position: "absolute",
  },
  overview: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    textAlign: "center",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  bulls: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  warriors: {
    left: 153,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 0,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  rectangleParent: {
    top: 268,
    left: 75,
    width: 282,
    height: 23,
    position: "absolute",
  },
  vectorIcon: {
    height: "59.61%",
    width: "84%",
    top: "33.08%",
    right: "8%",
    bottom: "7.3%",
    left: "8%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.1,
    position: "absolute",
    overflow: "hidden",
  },
  image8Icon: {
    top: 325,
    height: 46,
  },
  image13Icon: {
    top: 684,
    height: 47,
  },
  image9Icon: {
    top: 323,
  },
  image14Icon: {
    top: 682,
  },
  image10Icon: {
    width: 66,
    left: 84,
    position: "absolute",
  },
  image15Icon: {
    width: 66,
    left: 84,
    position: "absolute",
  },
  image12Icon: {
    top: 498,
  },
  image16Icon: {
    top: 602,
  },
  image11Icon: {
    height: 50,
    top: 412,
  },
  image17Icon: {
    top: 771,
    height: 51,
  },
  gameDetailsScreenLineupChild: {
    left: 220,
  },
  gameDetailsScreenLineupItem: {
    backgroundColor: Color.colorCrimson,
    left: 220,
  },
  gameDetailsScreenLineupInner: {
    left: 64,
  },
  rectangleView: {
    left: 64,
    backgroundColor: Color.colorCrimson,
  },
  gameDetailsScreenLineupChild1: {
    left: 64,
  },
  anthonyDavis: {
    width: 65,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    top: 458,
    left: 83,
  },
  anthonyDavis1: {
    left: 241,
    width: 65,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    top: 458,
  },
  gameDetailsScreenLineupChild2: {
    left: 64,
  },
  gameDetailsScreenLineupChild3: {
    top: 543,
    backgroundColor: Color.colorMidnightblue,
    left: 135,
  },
  gameDetailsScreenLineupChild4: {
    top: 646,
    backgroundColor: Color.colorCrimson,
  },
  gameDetailsScreenLineupChild5: {
    left: 220,
  },
  gameDetailsScreenLineupChild6: {
    left: 220,
  },
  russellWestbrook: {
    left: 231,
    width: 84,
  },
  alexCaruso: {
    left: 246,
    width: 54,
  },
  malikMonk: {
    left: 91,
    width: 53,
  },
  demarDerozan: {
    width: 69,
    left: 83,
  },
  text: {
    left: 117,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    height: 15,
    top: 458,
  },
  zachLavine: {
    left: 90,
    width: 54,
  },
  charmeloAnthony: {
    top: 545,
    left: 146,
    width: 83,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    height: 15,
  },
  nikolaVucevic: {
    top: 648,
    left: 154,
    width: 67,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    height: 15,
  },
  patrickWilliams: {
    left: 237,
    width: 73,
  },
  text1: {
    left: 48,
  },
  text2: {
    left: 254,
  },
  text3: {
    left: 35,
  },
  text4: {
    left: 220,
  },
  groupIcon: {
    left: 57,
  },
  gameDetailsScreenLineupChild7: {
    left: 257,
  },
  groupIcon1: {
    top: 127,
    left: 172,
    width: 31,
    height: 76,
    position: "absolute",
  },
  mplDLeagueAug: {
    top: 105,
    left: 96,
    fontSize: FontSize.size_smi,
    lineHeight: 22,
    color: Color.colorGray_900,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  gameDetailsScreenLineup: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 931,
    overflow: "hidden",
  },
});

export default GameDetailsScreenLineup;
