import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import SectionCard1 from "../components/SectionCard1";
import { useNavigation } from "@react-navigation/native";
import Level4Section from "../components/Level4Section";
import DribbleChallengeSection from "../components/DribbleChallengeSection";
import DribbleChallengeSection1 from "../components/DribbleChallengeSection1";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PlayerRoadToPro = () => {
  const navigation = useNavigation();

  const handleButtonClick = () => {
    navigation.navigate("PlayerDashboardSomeoneElse");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.playerRoadToPro}>
      <Image
        style={styles.image19Icon}
        contentFit="cover"
        source={require("../assets/image-191.png")}
      />
      <Image
        style={[styles.playerRoadToProChild, styles.playerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-24000.png")}
      />
      <Image
        style={[styles.playerRoadToProItem, styles.playerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-24001.png")}
      />
      <Image
        style={styles.playerRoadToProInner}
        contentFit="cover"
        source={require("../assets/rectangle-24002.png")}
      />
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text, styles.textTypo1]}>6</Text>
        <Text style={[styles.rank, styles.rankClr]}>RANK</Text>
      </View>
      <View style={styles.lebronJamesParent}>
        <Text style={[styles.lebronJames, styles.rankClr]}>Lebron James</Text>
        <Text style={styles.powerForward}>
          Power Forward | Los Angeles Lakers
        </Text>
      </View>
      <BarsStatusBarIPhoneD
        wifi={require("../assets/wifi1.png")}
        barsStatusBarIPhoneDPosition="absolute"
        barsStatusBarIPhoneDBackgroundColor="unset"
        barsStatusBarIPhoneDTop={0}
        barsStatusBarIPhoneDLeft={0}
        barsStatusBarIPhoneDWidth={376}
        timeFontFamily="RobotoSerif-SemiBold"
      />
      <SectionCard1
        inboxIcon="Inbox"
        iconText={require("../assets/users1.png")}
        iconCode={require("../assets/user1.png")}
        propTop={1365}
        propLeft={250}
        propWidth={30}
        propLeft1={3}
      />
      <View style={styles.lineView} />
      <View style={styles.rectangleView} />
      <Text style={[styles.bulls, styles.bullsTypo]}>Stats</Text>
      <Text style={styles.warriors} onPress={() => navigation.navigate("MyTeam1")}>Road to pro</Text>
      <Pressable
        style={[styles.warriors1, styles.bullsPosition]}
        onPress={() => navigation.navigate("PlayerContent1")}
      >
        <Text style={styles.bullsTypo}>Content</Text>
      </Pressable>
      <View style={[styles.startParent, styles.parentPosition]}>
        <Text style={[styles.start, styles.startLayout]}>Start</Text>
        <Text style={[styles.complete, styles.startLayout]}>Complete</Text>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
      </View>
      <Level4Section />
      <View
        style={[styles.playerRoadToProChild1, styles.playerChildPosition]}
      />
      <View style={[styles.playerRoadToProChild2, styles.playerChildLayout]} />
      <Text style={[styles.shootingChallenge, styles.rankClr]}>
        Dribble Challenge
      </Text>
      <Text style={styles.step1}>Step 1</Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-1000003044.png")}
      />
      <View style={[styles.groupView, styles.groupLayout1]}>
        <View style={[styles.groupParent, styles.groupLayout1]}>
          <View style={[styles.groupParent, styles.groupLayout1]}>
            <View style={[styles.groupParent, styles.groupLayout1]}>
              <View style={[styles.groupParent, styles.groupLayout1]}>
                <Text style={[styles.reb, styles.rebTypo]}>REB</Text>
                <Text style={[styles.pts, styles.rebTypo]}>PTS</Text>
                <Text style={[styles.text1, styles.textTypo]}>6</Text>
                <Text style={[styles.text2, styles.textTypo]}>35</Text>
                <Text style={[styles.ast, styles.rebTypo]}>AST</Text>
                <Text style={[styles.text3, styles.textTypo]}>4</Text>
              </View>
            </View>
          </View>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <View style={styles.completedParent}>
          <Text onPress={handleButtonClick} style={[styles.completed, styles.rankClr]}>
            Completed</Text>
          <Image
            style={styles.groupChild1}
            contentFit="cover"
            source={require("../assets/group-1000002633.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.playerRoadToProChild3, styles.playerChildLayout]}
        contentFit="cover"
        source={require("../assets/group-10000030611.png")}
      />
      <Image
        style={styles.vuesaxboldactivityIcon}
        contentFit="cover"
        source={require("../assets/vuesaxboldactivity.png")}
      />
      <DribbleChallengeSection />
      <DribbleChallengeSection1 />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  playerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    left: 8,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  rankClr: {
    color: Color.othersWhite,
    position: "absolute",
  },
  bullsTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    textAlign: "center",
  },
  bullsPosition: {
    top: 468,
    position: "absolute",
  },
  startLayout: {
    width: 164,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.metrophobicRegular,
    top: 8,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
    position: "absolute",
  },
  rectanglePosition: {
    height: 4,
    borderRadius: Border.br_11xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  playerChildPosition: {
    width: 343,
    left: 16,
    top: 744,
  },
  playerChildLayout: {
    height: 45,
    position: "absolute",
  },
  groupLayout1: {
    height: 38,
    width: 191,
    position: "absolute",
  },
  rebTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    top: 20,
    color: Color.othersWhite,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 29,
    borderColor: Color.colorGray_300,
    top: 6,
    width: 1,
    borderRightWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupInnerLayout: {
    height: 23,
    width: 85,
    position: "absolute",
  },
  image19Icon: {
    width: 438,
    height: 489,
    left: 0,
    top: 0,
    position: "absolute",
  },
  playerRoadToProChild: {
    top: 328,
    height: 146,
  },
  playerRoadToProItem: {
    top: 348,
    height: 126,
  },
  playerRoadToProInner: {
    top: 367,
    width: 376,
    height: 124,
    left: 0,
    position: "absolute",
  },
  text: {
    left: 6,
    fontSize: FontSize.size_21xl,
    lineHeight: 40,
    color: Color.colorGoldenrod_100,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  rank: {
    top: 39,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.othersWhite,
    lineHeight: 14,
    textAlign: "center",
    left: 0,
  },
  parent: {
    top: 391,
    width: 35,
    height: 53,
  },
  lebronJames: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  powerForward: {
    top: 29,
    color: Color.colorGray_400,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    lineHeight: 14,
    left: 0,
    position: "absolute",
  },
  lebronJamesParent: {
    top: 396,
    left: 86,
    width: 226,
    height: 43,
    position: "absolute",
  },
  lineView: {
    top: 397,
    left: 72,
    borderColor: Color.othersWhite,
    height: 27,
    opacity: 0.2,
    width: 1,
    borderRightWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleView: {
    top: 489,
    left: 143,
    width: 103,
    height: 2,
    backgroundColor: Color.othersWhite,
    position: "absolute",
  },
  bulls: {
    left: 53,
    top: 468,
    position: "absolute",
  },
  warriors: {
    left: 154,
    fontWeight: "600",
    top: 468,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.othersWhite,
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  warriors1: {
    left: 305,
  },
  start: {
    textAlign: "left",
    left: 0,
  },
  complete: {
    left: 163,
    textAlign: "right",
  },
  rectangle: {
    width: 327,
    backgroundColor: Color.othersWhite,
    opacity: 0.2,
  },
  rectangleCopy: {
    width: 160,
    backgroundColor: Color.colorOrange,
  },
  startParent: {
    top: 692,
    height: 20,
    width: 327,
  },
  playerRoadToProChild1: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkslategray_200,
    height: 183,
    position: "absolute",
  },
  playerRoadToProChild2: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    width: 343,
    left: 16,
    top: 744,
    backgroundColor: Color.colorOrange,
  },
  shootingChallenge: {
    top: 821,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    left: 40,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  step1: {
    top: 842,
    color: Color.colorOrange,
    left: 40,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  groupIcon: {
    top: 750,
    left: 33,
    width: 75,
    height: 64,
    position: "absolute",
  },
  reb: {
    left: 84,
    textAlign: "left",
  },
  pts: {
    textAlign: "center",
    left: 0,
  },
  text1: {
    left: 91,
  },
  text2: {
    left: 3,
  },
  ast: {
    left: 168,
    textAlign: "center",
  },
  text3: {
    left: 174,
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  groupChild: {
    left: 50,
  },
  groupItem: {
    left: 139,
  },
  groupView: {
    top: 869,
    left: 40,
  },
  groupInner: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorLimegreen,
    left: 0,
    top: 0,
  },
  completed: {
    top: 1,
    left: 15,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.othersWhite,
  },
  groupChild1: {
    width: 13,
    height: 13,
    left: 0,
    top: 0,
    position: "absolute",
  },
  completedParent: {
    top: 5,
    left: 5,
    width: 69,
    height: 14,
    position: "absolute",
  },
  rectangleParent: {
    top: 795,
    left: 268,
  },
  playerRoadToProChild3: {
    top: 333,
    left: 258,
    width: 98,
  },
  vuesaxboldactivityIcon: {
    height: "1.38%",
    width: "5.33%",
    top: "56.78%",
    right: "43.47%",
    bottom: "41.84%",
    left: "51.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  playerRoadToPro: {
    backgroundColor: Color.lighterDark,
    flex: 1,
    width: "100%",
    height: 1446,
    overflow: "hidden",
  },
});

export default PlayerRoadToPro;
