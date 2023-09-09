import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import Section from "../components/Section";
import PlayerStatsContainer1 from "../components/PlayerStatsContainer1";
import AccountSection from "../components/AccountSection";
import { useNavigation } from "@react-navigation/native";
import SectionCard from "../components/SectionCard";
import SectionFilter from "../components/SectionFilter";
import TeamCard from "../components/TeamCard";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PlayerDashboard1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.playerDashboard}>
      <BarsStatusBarIPhoneD
        wifi={require("../assets/wifi1.png")}
        barsStatusBarIPhoneDPosition="absolute"
        barsStatusBarIPhoneDBackgroundColor="unset"
        barsStatusBarIPhoneDTop={0}
        barsStatusBarIPhoneDLeft={0}
        barsStatusBarIPhoneDWidth={376}
        timeFontFamily="RobotoSerif-SemiBold"
      />
      <View style={styles.vaibhavChibbarParent}>
        <Text style={[styles.vaibhavChibbar, styles.activeTypo]}>
          Vaibhav Chibbar
        </Text>
        <Text style={styles.vaibhavChibbar1}>Welcome</Text>
      </View>
      <Image
        style={styles.playerDashboardChild}
        contentFit="cover"
        source={require("../assets/group-18185.png")}
      />
      <View style={[styles.chevronDownWrapper, styles.chevronLayout]}>
        <View style={[styles.chevronDown, styles.chevronLayout]} />
      </View>
      <Text style={[styles.myChallenges, styles.myTeamsTypo]}>
        My Challenges
      </Text>
      <Text style={[styles.seeAll, styles.seeTypo]}>See All</Text>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.myTeams, styles.myTeamsTypo]}>My Teams</Text>
      <Text style={[styles.upcomingSchedules, styles.myTeamsTypo]}>
        Upcoming Schedules
      </Text>
      <Text style={[styles.playerStats, styles.myTeamsTypo]}>Player Stats</Text>
      <View style={styles.seeAllParent}>
        <Text style={[styles.seeAll1, styles.seeTypo]}>See All</Text>
        <Image
          style={[styles.chevronDownIcon, styles.chevronLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown3.png")}
        />
      </View>
      <Image
        style={[styles.playerDashboardItem, styles.playerLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002622.png")}
      />
      <Image
        style={[styles.playerDashboardInner, styles.playerLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002622.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1000005720.png")}
      />
      <Section
        matchUpText="Add Player Match Up
"
        propTop={1455}
        propFontWeight="700"
        propFontFamily="Roboto-Bold"
      />
      <PlayerStatsContainer1 />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <Text style={[styles.pts, styles.ptsTypo]}>Overall game</Text>
        <Text style={[styles.pts1, styles.ptsTypo]}>Last Game</Text>
      </View>
      <AccountSection propTop={1518} />
      <Image
        style={[styles.playerDashboardChild1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1000005721.png")}
      />
      <Pressable
        style={[styles.ptsParent, styles.ptsParentLayout]}
        onPress={() => navigation.navigate("PlayerDashboard")}
      >
        <Text style={[styles.pts2, styles.pts2Typo]}>Last 5 games</Text>
        <Image
          style={[styles.chevronDownIcon1, styles.ptsParentLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown1.png")}
        />
      </Pressable>
      <SectionCard propLeft={18} />
      <Image
        style={[styles.videoOctagonIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/videooctagon1.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.playerDashboardChild2, styles.rectangleViewPosition]}
      />
      <Text style={[styles.shootingChallenge, styles.daysLeftPosition]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.daysLeft, styles.daysLeftPosition]}>
        08 days left
      </Text>
      <Image
        style={[styles.playerDashboardChild3, styles.daysLeftPosition]}
        contentFit="cover"
        source={require("../assets/group-1000003035.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-778.png")}
      />
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.playerDashboardChild4, styles.playerChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.playerDashboardChild5, styles.playerChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.playerDashboardChild6, styles.playerChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.playerDashboardChild7, styles.playerChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <Image
        style={[styles.playerDashboardChild8, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group-1000003034.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={styles.activeParent}>
          <Text style={[styles.active, styles.activeTypo]}>Active</Text>
          <Image
            style={[styles.groupIcon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.smallcapsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/smallcaps.png")}
      />
      <SectionFilter />
      <TeamCard />
    </View>
  );
};

const styles = StyleSheet.create({
  activeTypo: {
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoBold,
  },
  chevronLayout: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  myTeamsTypo: {
    fontSize: FontSize.size_3xl,
    left: 18,
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 22,
    position: "absolute",
  },
  seeTypo: {
    color: Color.colorRoyalblue,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  playerLayout: {
    height: 96,
    width: 180,
    top: 364,
    position: "absolute",
  },
  groupIconLayout: {
    height: 42,
    width: 42,
    top: 61,
    position: "absolute",
  },
  groupLayout1: {
    height: 6,
    width: 28,
    top: 3,
    position: "absolute",
  },
  ptsTypo: {
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  ptsParentLayout: {
    height: 18,
    position: "absolute",
  },
  pts2Typo: {
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    textAlign: "left",
  },
  iconLayout: {
    width: "5.33%",
    height: "1.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewPosition: {
    width: 343,
    left: 16,
    top: 1141,
    position: "absolute",
  },
  daysLeftPosition: {
    left: 39,
    position: "absolute",
  },
  playerChildLayout: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    backgroundColor: "transparent",
    opacity: 0.5,
    width: 7,
    height: 18,
    position: "absolute",
  },
  groupLayout: {
    height: 23,
    width: 61,
    position: "absolute",
  },
  vaibhavChibbar: {
    top: 16,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    lineHeight: 22,
    left: 0,
  },
  vaibhavChibbar1: {
    lineHeight: 14,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 0,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  vaibhavChibbarParent: {
    top: 70,
    left: 91,
    width: 132,
    height: 38,
    position: "absolute",
  },
  playerDashboardChild: {
    top: 58,
    left: 21,
    height: 61,
    width: 61,
    position: "absolute",
  },
  chevronDown: {
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  chevronDownWrapper: {
    left: 343,
    top: 921,
  },
  myChallenges: {
    top: 917,
  },
  seeAll: {
    left: 297,
    top: 921,
  },
  vectorIcon: {
    height: "0.53%",
    width: "1.33%",
    top: "57.74%",
    right: "5.8%",
    bottom: "41.73%",
    left: "92.87%",
  },
  myTeams: {
    top: 147,
  },
  upcomingSchedules: {
    top: 329,
  },
  playerStats: {
    top: 490,
  },
  seeAll1: {
    top: 0,
    left: 0,
  },
  chevronDownIcon: {
    left: 46,
    top: 0,
    overflow: "hidden",
  },
  seeAllParent: {
    top: 333,
    width: 60,
    height: 16,
    left: 297,
    position: "absolute",
  },
  playerDashboardItem: {
    left: 18,
    height: 96,
    width: 180,
    top: 364,
  },
  playerDashboardInner: {
    left: 210,
  },
  groupIcon: {
    left: 263,
  },
  groupChild: {
    left: 130,
    backgroundColor: Color.colorGoldenrod_200,
  },
  groupItem: {
    backgroundColor: Color.colorDimgray_200,
    left: 0,
  },
  pts: {
    left: 38,
    color: Color.othersWhite,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
  },
  pts1: {
    left: 170,
    color: Color.colorGoldenrod_100,
  },
  rectangleParent: {
    top: 873,
    left: 65,
    width: 219,
    height: 12,
    position: "absolute",
  },
  playerDashboardChild1: {
    left: 313,
  },
  pts2: {
    top: 3,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.othersWhite,
    left: 0,
    position: "absolute",
  },
  chevronDownIcon1: {
    left: 79,
    width: 18,
    top: 0,
    overflow: "hidden",
  },
  ptsParent: {
    top: 492,
    left: 259,
    width: 97,
  },
  videoOctagonIcon: {
    top: "61.1%",
    right: "45.6%",
    bottom: "37.65%",
    left: "49.07%",
  },
  rectangleView: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkslategray_200,
    height: 161,
  },
  playerDashboardChild2: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.colorOrange,
    height: 45,
  },
  shootingChallenge: {
    top: 1218,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    fontWeight: "700",
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoBold,
  },
  daysLeft: {
    top: 1239,
    color: Color.colorOrange,
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    left: 39,
    fontWeight: "600",
  },
  playerDashboardChild3: {
    top: 1263,
    width: 120,
    height: 28,
  },
  ellipseIcon: {
    top: 1162,
    left: 41,
    width: 48,
    height: 48,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 1147,
    left: 60,
    backgroundColor: "transparent",
    opacity: 0.5,
    width: 7,
    height: 18,
    position: "absolute",
  },
  playerDashboardChild4: {
    top: 1160,
    left: 33,
  },
  playerDashboardChild5: {
    top: 1184,
    left: 26,
  },
  playerDashboardChild6: {
    top: 1155,
    left: 89,
  },
  playerDashboardChild7: {
    top: 1177,
    left: 101,
  },
  playerDashboardChild8: {
    height: "3.11%",
    width: "13.27%",
    top: "72.62%",
    right: "76.06%",
    bottom: "24.27%",
    left: "10.67%",
  },
  groupInner: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorRoyalblue,
    top: 0,
    left: 0,
  },
  active: {
    left: 12,
    fontSize: FontSize.size_2xs,
    top: 0,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  groupIcon1: {
    height: "76.93%",
    width: "23.26%",
    top: "0%",
    right: "76.74%",
    bottom: "23.07%",
    left: "0%",
  },
  activeParent: {
    top: 6,
    left: 7,
    width: 43,
    height: 13,
    position: "absolute",
  },
  rectangleGroup: {
    top: 1195,
    left: 290,
  },
  smallcapsIcon: {
    top: "76.17%",
    right: "43.47%",
    bottom: "22.58%",
    left: "51.2%",
  },
  playerDashboard: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 1599,
    overflow: "hidden",
  },
});

export default PlayerDashboard1;
