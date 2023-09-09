import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const RoadToPro = () => {
  return (
    <View style={styles.roadToPro}>
      <View style={styles.barsStatusBarIphoneD}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderLayout]} />
          <Image
            style={[styles.capIcon, styles.capIconLayout]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection1.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout2]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout2]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
          <View style={[styles.bounds, styles.boundsLayout]} />
          <View style={[styles.homeIndicator, styles.capIconLayout]} />
        </View>
        <View style={[styles.exploreParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.homeTypo]}>Message</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chatteardroptext2.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.parentPosition]}>
          <Text style={[styles.home, styles.homeTypo]}>Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/house2.png")}
          />
        </View>
        <View style={[styles.calendarParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.homeTypo]}>Calendar</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/calendarblank.png")}
          />
        </View>
        <View style={[styles.myStandingParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.homeTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
          <Image
            style={[styles.usersIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/users.png")}
          />
        </View>
        <View style={[styles.proParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.homeTypo]}>Account</Text>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user2.png")}
          />
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Image
          style={[styles.path2Icon, styles.path2IconLayout]}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={[styles.oneLastStep, styles.oneLastStepTypo]}>
        My Challenges
      </Text>
      <View style={[styles.roadToProInner, styles.roadToProInnerLayout]}>
        <View style={[styles.rectangleGroup, styles.roadToProInnerLayout]}>
          <View style={styles.groupChild} />
          <Text style={styles.bulls}>AI Driven Challenges</Text>
          <Text style={[styles.warriors, styles.warriorsTypo]}>
            onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
          </Text>
        </View>
      </View>
      <Image
        style={[styles.roadToProChild, styles.roadLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002680.png")}
      />
      <Image
        style={[styles.roadToProItem, styles.roadLayout]}
        contentFit="cover"
        source={require("../assets/group-10000027191.png")}
      />
      <Image
        style={[styles.magnifyingglassIcon, styles.borderLayout]}
        contentFit="cover"
        source={require("../assets/magnifyingglass.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1000003209.png")}
        />
        <Text style={[styles.getThe, styles.getTheText]}>Get the</Text>
        <Text style={[styles.nextupPrime, styles.getTheText]}>
          Nextup prime
        </Text>
        <View
          style={[
            styles.createMultipleLineupParent,
            styles.challengesParentPosition,
          ]}
        >
          <Text style={[styles.createMultipleLineup, styles.warriorsTypo]}>
            Create Multiple Lineup
          </Text>
          <Image
            style={[styles.groupInner, styles.path2IconLayout]}
            contentFit="cover"
            source={require("../assets/polygon-5.png")}
          />
        </View>
        <View
          style={[
            styles.roadToProChallengesParent,
            styles.challengesParentPosition,
          ]}
        >
          <Text style={[styles.createMultipleLineup, styles.warriorsTypo]}>
            onPress={() => navigation.navigate("MyTeam1")}>My Team</Text> challenges
          </Text>
          <Image
            style={[styles.groupInner, styles.path2IconLayout]}
            contentFit="cover"
            source={require("../assets/polygon-5.png")}
          />
        </View>
        <View
          style={[
            styles.asignedMultipleChallengesParent,
            styles.challengesParentPosition,
          ]}
        >
          <Text style={[styles.createMultipleLineup, styles.warriorsTypo]}>
            Asigned multiple challenges
          </Text>
          <Image
            style={[styles.groupInner, styles.path2IconLayout]}
            contentFit="cover"
            source={require("../assets/polygon-5.png")}
          />
        </View>
        <View
          style={[
            styles.seeGameAdvanceStatisticsParent,
            styles.challengesParentPosition,
          ]}
        >
          <Text style={[styles.createMultipleLineup, styles.warriorsTypo]}>
            See game advance statistics
          </Text>
          <Image
            style={[styles.groupInner, styles.path2IconLayout]}
            contentFit="cover"
            source={require("../assets/polygon-5.png")}
          />
        </View>
        <View
          style={[
            styles.seePlayerAdvanceStatisticsParent,
            styles.challengesParentPosition,
          ]}
        >
          <Text style={[styles.createMultipleLineup, styles.warriorsTypo]}>
            See player advance statistics
          </Text>
          <Image
            style={[styles.groupInner, styles.path2IconLayout]}
            contentFit="cover"
            source={require("../assets/polygon-5.png")}
          />
        </View>
        <Image
          style={styles.searchResultsForPremiumF}
          contentFit="cover"
          source={require("../assets/search-results-for-premium--flaticon2-1.png")}
        />
        <Text style={styles.text}>$ 78.99</Text>
        <View style={styles.monthlyParent}>
          <Text style={[styles.monthly, styles.yearlyTypo]}>Monthly</Text>
          <Text style={[styles.yearly, styles.yearlyTypo]}>Yearly</Text>
          <View style={[styles.rectangleContainer, styles.rectangleLayout1]}>
            <View style={[styles.rectangleView, styles.groupChild4Layout]} />
            <View style={[styles.groupChild4, styles.groupChild4Layout]} />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleCopy3Parent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy3, styles.rectanglePosition]} />
        <Text style={[styles.continue, styles.continueTypo]}>
         My Team</Text>
        </Text>
      </View>
      <View style={[styles.rectangleCopy3Group, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy31, styles.rectanglePosition]} />
        <Text style={[styles.continue1, styles.continueTypo]}>
          Purchase onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderLayout: {
    width: 22,
    position: "absolute",
  },
  capIconLayout: {
    height: 4,
    position: "absolute",
  },
  rectangleLayout2: {
    height: 81,
    width: 375,
    left: 0,
    position: "absolute",
  },
  boundsLayout: {
    height: 20,
    width: 375,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    top: 10,
    height: 44,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  path2IconLayout: {
    height: 12,
    position: "absolute",
  },
  oneLastStepTypo: {
    textAlign: "left",
    fontSize: FontSize.normalTextBody1X_size,
  },
  roadToProInnerLayout: {
    height: 23,
    width: 319,
    position: "absolute",
  },
  warriorsTypo: {
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    color: Color.othersWhite,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  roadLayout: {
    height: 85,
    width: 83,
    top: 101,
    position: "absolute",
  },
  groupLayout: {
    height: 440,
    width: 343,
    position: "absolute",
  },
  getTheText: {
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  challengesParentPosition: {
    height: 14,
    left: 17,
    position: "absolute",
  },
  yearlyTypo: {
    top: "23.33%",
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 16,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  rectangleLayout1: {
    width: 52,
    height: 30,
    top: 0,
  },
  groupChild4Layout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 311,
  },
  rectanglePosition: {
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  continueTypo: {
    top: 16,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 16,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    opacity: 0.35,
    borderWidth: 1,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    height: 11,
    top: 0,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    backgroundColor: Color.othersWhite,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 15,
    height: 11,
    width: 24,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    letterSpacing: 0,
    fontFamily: FontFamily.robotoSerifSemiBold,
    textAlign: "center",
    fontWeight: "600",
    color: Color.othersWhite,
    fontSize: FontSize.size_mini,
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    top: 7,
    height: 21,
    width: 54,
    left: 21,
    position: "absolute",
  },
  barsStatusBarIphoneD: {
    width: 376,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    top: 0,
  },
  bounds: {
    top: 0,
  },
  homeIndicator: {
    top: 8,
    left: 120,
    borderRadius: Border.br_11xs,
    width: 135,
    backgroundColor: Color.othersWhite,
  },
  homeIndicatorLight: {
    top: 61,
  },
  explore: {
    color: Color.colorDimgray_100,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 28,
    fontWeight: "500",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  chatteardroptextIcon: {
    left: 12,
    top: 0,
    position: "absolute",
  },
  exploreParent: {
    left: 241,
    width: 49,
  },
  home: {
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 28,
    fontWeight: "500",
    textAlign: "center",
    left: 0,
    position: "absolute",
    color: Color.othersWhite,
  },
  houseIcon: {
    left: 17,
    top: 0,
    position: "absolute",
  },
  homeParent: {
    width: 59,
    left: 21,
    top: 10,
  },
  calendarParent: {
    left: 101,
    width: 48,
  },
  usersIcon: {
    left: 13,
    top: 0,
    position: "absolute",
  },
  myStandingParent: {
    left: 170,
    width: 50,
  },
  userIcon: {
    left: 11,
    top: 0,
    position: "absolute",
  },
  proParent: {
    left: 310,
    width: 45,
  },
  rectangleParent: {
    top: 837,
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
    width: 14,
    left: 8,
  },
  group: {
    top: 62,
    width: 30,
    height: 30,
    left: 21,
    position: "absolute",
  },
  oneLastStep: {
    top: 65,
    lineHeight: 24,
    left: 65,
    position: "absolute",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.othersWhite,
  },
  groupChild: {
    top: 21,
    width: 170,
    height: 2,
    backgroundColor: Color.othersWhite,
    left: 0,
    position: "absolute",
  },
  bulls: {
    left: 190,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  warriors: {
    left: 53,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  roadToProInner: {
    top: 199,
    left: 18,
  },
  roadToProChild: {
    left: 13,
  },
  roadToProItem: {
    left: 100,
  },
  magnifyingglassIcon: {
    top: 66,
    left: 334,
    height: 22,
  },
  groupItem: {
    left: 0,
    top: 0,
  },
  getThe: {
    top: 31,
    left: 139,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textTransform: "uppercase",
  },
  nextupPrime: {
    top: 51,
    left: 71,
    fontSize: FontSize.size_7xl,
    fontWeight: "800",
    fontFamily: FontFamily.robotoBlack,
  },
  createMultipleLineup: {
    textAlign: "left",
    fontSize: FontSize.normalTextBody1X_size,
    left: 17,
  },
  groupInner: {
    top: 1,
    width: 12,
    left: 0,
  },
  createMultipleLineupParent: {
    top: 156,
    width: 179,
  },
  roadToProChallengesParent: {
    top: 189,
    width: 183,
  },
  asignedMultipleChallengesParent: {
    top: 222,
    width: 220,
  },
  seeGameAdvanceStatisticsParent: {
    top: 255,
    width: 223,
  },
  seePlayerAdvanceStatisticsParent: {
    top: 288,
    width: 226,
  },
  searchResultsForPremiumF: {
    top: 13,
    width: 38,
    height: 38,
    left: 8,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 335,
    left: 102,
    fontSize: FontSize.size_18xl,
    color: Color.colorOrange,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    position: "absolute",
  },
  monthly: {
    left: "0%",
  },
  yearly: {
    left: "76.19%",
  },
  rectangleView: {
    backgroundColor: "#444856",
    width: 52,
    height: 30,
    top: 0,
    left: 0,
  },
  groupChild4: {
    top: 3,
    left: 3,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 24,
    width: 24,
    backgroundColor: Color.othersWhite,
  },
  rectangleContainer: {
    left: 65,
    position: "absolute",
  },
  monthlyParent: {
    height: "6.82%",
    width: "48.98%",
    top: "87.05%",
    right: "25.66%",
    bottom: "6.14%",
    left: "25.36%",
    position: "absolute",
  },
  groupParent: {
    top: 243,
    left: 16,
  },
  rectangleCopy3: {
    backgroundColor: Color.nextupBlue,
    height: 48,
    width: 311,
  },
  continue: {
    left: 83,
  },
  rectangleCopy3Parent: {
    top: 715,
    left: 32,
    width: 311,
    position: "absolute",
  },
  rectangleCopy31: {
    width: 312,
    height: 49,
    borderWidth: 1,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
  },
  continue1: {
    left: 87,
  },
  rectangleCopy3Group: {
    top: 775,
    left: 32,
    width: 311,
    position: "absolute",
  },
  roadToPro: {
    flex: 1,
    width: "100%",
    height: 918,
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
  },
});

export default RoadToPro;
