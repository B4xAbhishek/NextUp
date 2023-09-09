import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import FormContainer2 from "../components/FormContainer2";
import ContainerCardFormFilter from "../components/ContainerCardFormFilter";
import { useNavigation } from "@react-navigation/native";
import SectionFilter from "../components/SectionFilter";
import StatCollectionSection from "../components/StatCollectionSection";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const GameDetailsScreenOverview2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.gameDetailsScreenOverview}>
      <Text style={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
        sollicitudin viverra ipsum nibh mi lacus. In mi neque risus elementum
        tempor nisl ultricies ultrices ut. Malesuada ultrices vel cursus
        sollicitudin ut nunc et lectus quis.
      </Text>
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
      <View style={styles.group}>
        <View style={[styles.rectangle, styles.rectangleBorder]} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={[styles.oneLastStep, styles.oneLastStepTypo]}>
        Upcoming Games
      </Text>
      <Text style={[styles.text, styles.textTypo8]}>{`22 - 4 - 0 `}</Text>
      <Text style={[styles.text1, styles.textTypo8]}>36 - 13 - 0</Text>
      <Text style={[styles.text2, styles.textTypo5]}>Chicago Bulls</Text>
      <Text style={[styles.text3, styles.textTypo5]}>Los Angeles Lakers</Text>
      <Image
        style={[styles.gameDetailsScreenOverviewChild, styles.gameLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002856.png")}
      />
      <Image
        style={[styles.gameDetailsScreenOverviewItem, styles.gameLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002857.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <View style={[styles.rectangleCopy, styles.rectangleBg]} />
      <Text style={[styles.text4, styles.textTypo8]}>Prediction</Text>
      <FormContainer2
        teamAbbreviation="BULLS"
        teamAbbreviationOpponent="LKR"
        propTop={354}
        propLeft={117}
        propLeft1={27}
      />
      <ContainerCardFormFilter
        dimensionCode={require("../assets/group-1000002858.png")}
        imageCode={require("../assets/group-1000002859.png")}
        propTop={516}
        propLeft={103}
      />
      <Text style={[styles.mplDLeagueAug, styles.oneLastStepTypo]}>
        MPL D-League Aug 09, 13:03
      </Text>
      <Text style={[styles.gameStats, styles.textTypo5]}>Game Stats</Text>
      <View style={[styles.rectangleParent, styles.gameStatsPosition]}>
        <View style={styles.groupChild} />
        <Text style={[styles.bulls, styles.bullsLayout]}>Overview</Text>
        <Pressable
          style={[styles.warriors, styles.bullsPosition]}
          onPress={() => navigation.navigate("GameDetailsScreenLineup")}
        >
          <Text style={[styles.teamLineup, styles.bullsLayout]}>
            Team Lineup
          </Text>
        </Pressable>
      </View>
      <SectionFilter />
      <View style={[styles.rectangleCopyParent, styles.rectanglePosition]}>
        <View style={[styles.rectangleCopy1, styles.rectangleBg]} />
        <View style={[styles.groupItem, styles.rectangleBorder]} />
        <Text style={[styles.q1, styles.q1Typo]}>Q1</Text>
        <Text style={[styles.text5, styles.textTypo4]}>-</Text>
        <Text style={[styles.text6, styles.textTypo4]}>-</Text>
        <Text style={[styles.q2, styles.q1Typo]}>Q2</Text>
        <Text style={[styles.text7, styles.textTypo3]}>-</Text>
        <Text style={[styles.text8, styles.textTypo3]}>-</Text>
        <Text style={[styles.q3, styles.q1Typo]}>Q3</Text>
        <Text style={[styles.text9, styles.textTypo2]}>-</Text>
        <Text style={[styles.text10, styles.textTypo2]}>-</Text>
        <Text style={[styles.q4, styles.q1Typo]}>Q4</Text>
        <Text style={[styles.text11, styles.textTypo1]}>-</Text>
        <Text style={[styles.text12, styles.textTypo1]}>-</Text>
        <Text style={[styles.total, styles.q1Typo]}>Total</Text>
        <Text style={[styles.text13, styles.textTypo]}>-</Text>
        <Text style={[styles.text14, styles.textTypo]}>-</Text>
        <Image
          style={styles.chicagoBullsLogoIcon}
          contentFit="cover"
          source={require("../assets/chicago-bulls-logo1.png")}
        />
        <Image
          style={styles.losAngelesLakersLogoIcon}
          contentFit="cover"
          source={require("../assets/los-angeles-lakers-logo3.png")}
        />
      </View>
      <StatCollectionSection buttonText=" Stat Collection " />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  oneLastStepTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  textTypo8: {
    lineHeight: 15,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.neutral0,
    fontSize: FontSize.bodyMediumSemibold_size,
    position: "absolute",
  },
  textTypo5: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    color: Color.neutral0,
  },
  gameLayout: {
    height: 58,
    width: 58,
    top: 136,
    position: "absolute",
  },
  rectangleBg: {
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  gameStatsPosition: {
    left: 18,
    position: "absolute",
  },
  bullsLayout: {
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  bullsPosition: {
    top: 0,
    position: "absolute",
  },
  rectanglePosition: {
    left: "4.8%",
    right: "5.07%",
    width: "90.13%",
  },
  q1Typo: {
    fontSize: FontSize.size_xs,
    top: 10,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo4: {
    left: 84,
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo3: {
    left: 136,
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo2: {
    left: 190,
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo1: {
    left: 245,
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  textTypo: {
    left: 306,
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 619,
    width: 338,
    textAlign: "left",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 22,
    fontSize: FontSize.bodyMediumSemibold_size,
    left: 18,
    position: "absolute",
  },
  rectangle: {
    top: -1,
    left: -1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
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
  },
  text: {
    left: 48,
    textAlign: "center",
    top: 225,
    lineHeight: 15,
  },
  text1: {
    left: 254,
    textAlign: "center",
    top: 225,
    lineHeight: 15,
  },
  text2: {
    left: 35,
    fontSize: FontSize.size_mini,
    top: 203,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 15,
    position: "absolute",
  },
  text3: {
    left: 220,
    fontSize: FontSize.size_mini,
    top: 203,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 15,
    position: "absolute",
  },
  gameDetailsScreenOverviewChild: {
    left: 57,
  },
  gameDetailsScreenOverviewItem: {
    left: 257,
  },
  groupIcon: {
    top: 127,
    left: 172,
    width: 31,
    height: 76,
    position: "absolute",
  },
  rectangleCopy: {
    height: "25.09%",
    top: "26.45%",
    bottom: "48.46%",
    left: "4.8%",
    right: "5.07%",
    width: "90.13%",
  },
  text4: {
    top: 326,
    left: 155,
    textAlign: "center",
  },
  mplDLeagueAug: {
    top: 105,
    left: 96,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_900,
    lineHeight: 22,
  },
  gameStats: {
    top: 759,
    fontSize: FontSize.headlineHeading5_size,
    textAlign: "left",
    lineHeight: 22,
    left: 18,
    position: "absolute",
  },
  groupChild: {
    top: 21,
    left: 0,
    backgroundColor: Color.neutral0,
    width: 170,
    height: 2,
    position: "absolute",
  },
  bulls: {
    left: 53,
    top: 0,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    color: Color.neutral0,
    textAlign: "left",
  },
  teamLineup: {
    color: Color.colorDarkgray_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
  },
  warriors: {
    left: 212,
  },
  rectangleParent: {
    top: 268,
    width: 293,
    height: 23,
  },
  rectangleCopy1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  groupItem: {
    top: 31,
    left: 74,
    borderColor: Color.neutral0,
    borderTopWidth: 1,
    width: 254,
    height: 1,
    opacity: 0.21,
  },
  q1: {
    left: 78,
  },
  text5: {
    top: 47,
  },
  text6: {
    top: 71,
  },
  q2: {
    left: 130,
  },
  text7: {
    top: 47,
  },
  text8: {
    top: 71,
  },
  q3: {
    left: 184,
  },
  text9: {
    top: 47,
  },
  text10: {
    top: 71,
  },
  q4: {
    left: 239,
  },
  text11: {
    top: 47,
  },
  text12: {
    top: 71,
  },
  total: {
    left: 295,
  },
  text13: {
    top: 47,
  },
  text14: {
    top: 71,
  },
  chicagoBullsLogoIcon: {
    top: 44,
    left: 17,
    width: 20,
    height: 20,
    position: "absolute",
  },
  losAngelesLakersLogoIcon: {
    top: 70,
    left: 14,
    width: 26,
    height: 16,
    position: "absolute",
  },
  rectangleCopyParent: {
    height: "8.53%",
    top: "67.49%",
    bottom: "23.98%",
    position: "absolute",
  },
  gameDetailsScreenOverview: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 1172,
    overflow: "hidden",
    width: "100%",
  },
});

export default GameDetailsScreenOverview2;
