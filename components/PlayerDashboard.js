import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import StatCollectionSection from "../components/StatCollectionSection";
import PlayerStatsContainer from "../components/PlayerStatsContainer";
import AccountSection1 from "../components/AccountSection";
import SectionCard from "../components/SectionCard";
import SectionForm from "../components/SectionForm";
import TeamCard from "../components/TeamCard";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PlayerDashboard = () => {
  return (
    <View style={styles.playerDashboard}>
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
        style={[styles.vectorIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
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
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={[styles.bellsimpleIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/bellsimple2.png")}
      />
      <StatCollectionSection
        buttonText="Add Player Match Up
"
        propTop={1514}
        propFontWeight="700"
        propFontFamily="Roboto-Bold"
      />
      <PlayerStatsContainer />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <Text style={[styles.pts, styles.ptsTypo]}>Overall game</Text>
        <Text style={[styles.pts1, styles.ptsTypo]}>Last Game</Text>
      </View>
      <AccountSection1 />
      <Image
        style={[styles.playerDashboardChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={[styles.magnifyingglassIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/magnifyingglass.png")}
      />
      <View style={[styles.ptsParent, styles.ptsParentLayout]}>
        <Text style={[styles.pts2, styles.pts2Typo]}>Last 5 games</Text>
        <Image
          style={[styles.chevronDownIcon1, styles.ptsParentLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown1.png")}
        />
      </View>
      <View style={styles.rectangleView} />
      <Text style={[styles.last5Games, styles.stateTypo]}>Last 5 games</Text>
      <Text style={[styles.season, styles.stateTypo]}>Season</Text>
      <Text style={[styles.division, styles.stateTypo]}>Division</Text>
      <Text style={[styles.state, styles.stateTypo]}>State</Text>
      <Text style={[styles.national, styles.stateTypo]}>National</Text>
      <Text style={[styles.career, styles.stateTypo]}>Career</Text>
      <View style={[styles.lineView, styles.playerChildLayout1]} />
      <View style={[styles.playerDashboardChild2, styles.playerChildLayout1]} />
      <View style={[styles.playerDashboardChild3, styles.playerChildLayout1]} />
      <View style={[styles.playerDashboardChild4, styles.playerChildLayout1]} />
      <View style={[styles.playerDashboardChild5, styles.playerChildLayout1]} />
      <SectionCard />
      <Image
        style={[styles.videoOctagonIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/videooctagon.png")}
      />
      <View
        style={[styles.playerDashboardChild6, styles.playerChildPosition]}
      />
      <View
        style={[styles.playerDashboardChild7, styles.playerChildPosition]}
      />
      <Text style={[styles.shootingChallenge, styles.daysLeftPosition]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.daysLeft, styles.daysLeftPosition]}>
        08 days left
      </Text>
      <Image
        style={[styles.groupIcon, styles.daysLeftPosition]}
        contentFit="cover"
        source={require("../assets/group-1000003035.png")}
      />
      <Image
        style={styles.playerDashboardChild8}
        contentFit="cover"
        source={require("../assets/ellipse-778.png")}
      />
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.playerDashboardChild9, styles.playerChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.playerDashboardChild10, styles.playerChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.playerDashboardChild11, styles.playerChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.playerDashboardChild12, styles.playerChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <Image
        style={[styles.playerDashboardChild13, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/group-1000003034.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={styles.activeParent}>
          <Text style={[styles.active, styles.activeTypo]}>Active</Text>
          <Image
            style={[styles.groupIcon1, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/group11.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.smallcapsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/smallcaps.png")}
      />
      <SectionForm />
      <TeamCard />
    </View>
  );
};

const styles = StyleSheet.create({
  activeTypo: {
    textAlign: "left",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoBold,
  },
  chevronLayout: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  myTeamsTypo: {
    fontSize: FontSize.headlineHeading5_size,
    left: 18,
    textAlign: "left",
    color: Color.neutral0,
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
  iconLayout2: {
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
  ellipseIconLayout: {
    opacity: 0.05,
    height: 42,
    width: 42,
    top: 61,
    position: "absolute",
  },
  iconLayout1: {
    bottom: "94.39%",
    top: "4.28%",
    width: "5.87%",
    height: "1.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  stateTypo: {
    left: 245,
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  playerChildLayout1: {
    opacity: 0.2,
    height: 1,
    width: 103,
    borderTopWidth: 1,
    borderColor: Color.neutral0,
    borderStyle: "solid",
    left: 245,
    position: "absolute",
  },
  iconLayout: {
    width: "5.33%",
    height: "1.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  playerChildPosition: {
    width: 343,
    left: 17,
    top: 1141,
    position: "absolute",
  },
  daysLeftPosition: {
    left: 40,
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
    color: Color.colorGray_600,
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
    height: "0.51%",
    width: "1.33%",
    top: "55.68%",
    right: "5.8%",
    bottom: "43.8%",
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
  ellipseIcon: {
    left: 263,
  },
  bellsimpleIcon: {
    right: "21.33%",
    left: "72.8%",
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
    color: Color.neutral0,
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
  magnifyingglassIcon: {
    right: "8%",
    left: "86.13%",
  },
  pts2: {
    top: 3,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.neutral0,
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
  rectangleView: {
    top: 514,
    left: 236,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lighterDark,
    shadowColor: "rgba(0, 0, 0, 0.6)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 179,
    width: 120,
    position: "absolute",
  },
  last5Games: {
    top: 524,
  },
  season: {
    top: 552,
  },
  division: {
    top: 580,
  },
  state: {
    top: 608,
  },
  national: {
    top: 636,
  },
  career: {
    top: 666,
  },
  lineView: {
    top: 544,
  },
  playerDashboardChild2: {
    top: 572,
  },
  playerDashboardChild3: {
    top: 600,
  },
  playerDashboardChild4: {
    top: 628,
  },
  playerDashboardChild5: {
    top: 657,
  },
  videoOctagonIcon: {
    top: "58.93%",
    right: "45.33%",
    bottom: "39.87%",
    left: "49.33%",
  },
  playerDashboardChild6: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkslategray_200,
    height: 161,
  },
  playerDashboardChild7: {
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
    color: Color.neutral0,
    fontFamily: FontFamily.robotoBold,
  },
  daysLeft: {
    top: 1239,
    color: Color.colorOrange,
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    left: 40,
    fontWeight: "600",
  },
  groupIcon: {
    top: 1263,
    height: 28,
    width: 120,
  },
  playerDashboardChild8: {
    top: 1162,
    left: 42,
    width: 48,
    height: 48,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 1147,
    left: 61,
    backgroundColor: "transparent",
    opacity: 0.5,
    width: 7,
    height: 18,
    position: "absolute",
  },
  playerDashboardChild9: {
    top: 1160,
    left: 34,
  },
  playerDashboardChild10: {
    top: 1184,
    left: 27,
  },
  playerDashboardChild11: {
    top: 1155,
    left: 90,
  },
  playerDashboardChild12: {
    top: 1177,
    left: 102,
  },
  playerDashboardChild13: {
    height: "3%",
    width: "13.27%",
    top: "70.04%",
    right: "75.8%",
    bottom: "26.96%",
    left: "10.93%",
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
    left: 291,
  },
  smallcapsIcon: {
    top: "73.46%",
    right: "43.2%",
    bottom: "25.33%",
    left: "51.47%",
  },
  playerDashboard: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 1658,
    overflow: "hidden",
  },
});

export default PlayerDashboard;
