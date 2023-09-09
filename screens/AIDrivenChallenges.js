import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AIDrivenChallenges = () => {
  return (
    <View style={styles.aiDrivenChallenges}>
      <View style={styles.barsStatusBarIphoneD}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderLayout]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
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
          <Text style={[styles.time, styles.ptsFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
          <View style={[styles.bounds, styles.boundsLayout]} />
          <View style={[styles.homeIndicator, styles.capacityBg]} />
        </View>
        <View style={[styles.exploreParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.homeTypo]}>Message</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/chatteardroptext.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.parentPosition]}>
          <Text style={[styles.home, styles.homeTypo]}>Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/house.png")}
          />
        </View>
        <View style={[styles.calendarParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.homeTypo]}>Calendar</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/calendarblank.png")}
          />
        </View>
        <View style={[styles.myStandingParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.homeTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
          <Image
            style={[styles.usersIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/users1.png")}
          />
        </View>
        <View style={[styles.proParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.homeTypo]}>Account</Text>
          <Image
            style={[styles.userIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
        </View>
      </View>
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={styles.oneLastStep}>My Challenges</Text>
      <View
        style={[styles.aiDrivenChallengesInner, styles.rectangleGroupLayout]}
      >
        <View style={[styles.rectangleGroup, styles.rectangleGroupLayout]}>
          <View style={[styles.groupChild, styles.capacityBg]} />
          <Text style={[styles.bulls, styles.bullsTypo]}>
            AI Driven Challenges
          </Text>
          <Text style={[styles.warriors, styles.rebTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
        </View>
      </View>
      <Image
        style={[styles.aiDrivenChallengesChild, styles.drivenLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002680.png")}
      />
      <Image
        style={[styles.aiDrivenChallengesItem, styles.drivenLayout]}
        contentFit="cover"
        source={require("../assets/group-10000027192.png")}
      />
      <Image
        style={[styles.magnifyingglassIcon, styles.borderLayout]}
        contentFit="cover"
        source={require("../assets/magnifyingglass.png")}
      />
      <View style={[styles.rectangleContainer, styles.groupLayout1]}>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-18889.png")}
        />
        <LinearGradient
          style={[styles.groupInner, styles.groupInnerPosition]}
          locations={[0, 1]}
          colors={["#23262f", "rgba(35, 38, 47, 0)"]}
        />
        <View style={styles.groupParent}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={[styles.groupContainer, styles.groupLayout]}>
                <Text style={[styles.reb, styles.rebTypo]}>REB</Text>
                <Text style={[styles.pts, styles.rebTypo]}>PTS</Text>
                <Text style={[styles.text, styles.textTypo]}>6</Text>
                <Text style={[styles.text1, styles.textTypo]}>35</Text>
                <Text style={[styles.ast, styles.rebTypo]}>AST</Text>
                <Text style={[styles.text2, styles.textTypo]}>4</Text>
              </View>
            </View>
          </View>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.groupChild1, styles.lineViewLayout]} />
          <Image
            style={styles.losAngelesLakersLogoIcon}
            contentFit="cover"
            source={require("../assets/los-angeles-lakers-logo1.png")}
          />
        </View>
        <Text style={[styles.shootingChallenge, styles.shootingTypo]}>
          Dribble Challenge
        </Text>
        <Text style={[styles.daysLeft, styles.bullsTypo]}>08 days left</Text>
        <View style={[styles.groupFrame, styles.ellipseLayout]}>
          <View style={[styles.ellipseParent, styles.ellipseLayout]}>
            <Image
              style={[styles.ellipseIcon, styles.ellipseLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-688.png")}
            />
            <View style={styles.coachParent}>
              <Text style={[styles.coach, styles.rebTypo]}>Coach</Text>
              <Text style={[styles.vaibhavChibbar, styles.textTypo]}>
                Vaibhav Chibbar
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.viewLayout]}>
          <View style={[styles.rectangleView, styles.viewLayout]} />
          <View style={styles.activeParent}>
            <Text style={[styles.active, styles.bullsTypo]}>Active</Text>
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
        <Image
          style={[styles.groupChild2, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-188892.png")}
        />
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.rectangleLayout]}
          locations={[0, 1]}
          colors={["#23262f", "rgba(35, 38, 47, 0)"]}
        />
        <Text style={[styles.shootingChallenge1, styles.shootingTypo]}>
          Dribble Challenge
        </Text>
        <Text style={[styles.daysLeft, styles.bullsTypo]}>08 days left</Text>
      </View>
      <Image
        style={[styles.videoOctagonIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/videooctagon.png")}
      />
      <Image
        style={[styles.smallcapsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/smallcaps.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderLayout: {
    width: 22,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.othersWhite,
    position: "absolute",
  },
  ptsFlexBox: {
    textAlign: "center",
    color: Color.othersWhite,
  },
  rectangleLayout1: {
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
    lineHeight: 16,
    top: 28,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  rectangleGroupLayout: {
    height: 23,
    width: 292,
    position: "absolute",
  },
  bullsTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    position: "absolute",
  },
  rebTypo: {
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  drivenLayout: {
    height: 85,
    width: 83,
    top: 101,
    position: "absolute",
  },
  groupLayout1: {
    height: 167,
    width: 339,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  groupInnerPosition: {
    backgroundColor: "transparent",
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  groupLayout: {
    width: 191,
    height: 38,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    position: "absolute",
  },
  lineViewLayout: {
    height: 29,
    borderRightWidth: 1,
    borderColor: Color.colorGray_800,
    top: 5,
    width: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  shootingTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_mid,
    fontWeight: "700",
    left: 15,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  ellipseLayout: {
    height: 36,
    position: "absolute",
  },
  viewLayout: {
    width: 61,
    height: 23,
    position: "absolute",
  },
  rectangleLayout: {
    height: 70,
    width: 339,
    position: "absolute",
  },
  iconLayout: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.othersWhite,
    borderWidth: 1,
    opacity: 0.35,
    borderStyle: "solid",
    height: 11,
    top: 0,
  },
  capIcon: {
    top: 4,
    right: 0,
    opacity: 0.4,
    height: 4,
    width: 1,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
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
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.robotoSerifSemiBold,
    fontWeight: "600",
    textAlign: "center",
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    height: 21,
    width: 54,
    left: 21,
    top: 7,
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
    height: 4,
  },
  homeIndicatorLight: {
    top: 61,
  },
  explore: {
    color: Color.colorDimgray_100,
  },
  chatteardroptextIcon: {
    left: 12,
  },
  exploreParent: {
    left: 241,
    width: 49,
  },
  home: {
    color: Color.othersWhite,
  },
  houseIcon: {
    left: 17,
  },
  homeParent: {
    width: 59,
    left: 21,
  },
  calendarParent: {
    left: 101,
    width: 48,
  },
  usersIcon: {
    left: 13,
  },
  myStandingParent: {
    left: 170,
    width: 50,
  },
  userIcon: {
    left: 11,
  },
  proParent: {
    left: 310,
    width: 45,
  },
  rectangleParent: {
    top: 728,
  },
  rectangle: {
    top: -1,
    left: -1,
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
    borderRadius: Border.br_7xs,
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
  oneLastStep: {
    top: 65,
    left: 65,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.normalTextBody1X_size,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.othersWhite,
    position: "absolute",
  },
  groupChild: {
    top: 21,
    left: 122,
    width: 170,
    height: 2,
  },
  bulls: {
    left: 146,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 0,
    textAlign: "center",
    color: Color.othersWhite,
  },
  warriors: {
    color: Color.colorDarkgray_100,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 0,
    textAlign: "left",
    left: 0,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  aiDrivenChallengesInner: {
    top: 199,
    left: 66,
  },
  aiDrivenChallengesChild: {
    left: 13,
  },
  aiDrivenChallengesItem: {
    left: 100,
  },
  magnifyingglassIcon: {
    left: 334,
    height: 22,
    top: 66,
  },
  groupItem: {
    height: 167,
    width: 339,
    position: "absolute",
  },
  groupInner: {
    height: 167,
    width: 339,
    position: "absolute",
  },
  reb: {
    left: 84,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
    top: 0,
  },
  pts: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    left: 0,
    top: 0,
  },
  text: {
    left: 91,
    lineHeight: 18,
    top: 20,
    fontWeight: "700",
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "center",
  },
  text1: {
    left: 3,
    lineHeight: 18,
    top: 20,
    fontWeight: "700",
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "center",
  },
  ast: {
    left: 168,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    top: 0,
  },
  text2: {
    left: 174,
    lineHeight: 18,
    top: 20,
    fontWeight: "700",
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "center",
  },
  groupContainer: {
    left: 0,
  },
  groupWrapper: {
    left: 74,
  },
  lineView: {
    left: 124,
  },
  groupChild1: {
    left: 213,
  },
  losAngelesLakersLogoIcon: {
    width: 53,
    height: 27,
    top: 7,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    top: 112,
    width: 265,
    height: 38,
    left: 15,
    position: "absolute",
  },
  shootingChallenge: {
    top: 19,
  },
  daysLeft: {
    top: 40,
    lineHeight: 12,
    color: Color.colorOrange,
    left: 15,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  ellipseIcon: {
    width: 36,
    left: 0,
    top: 0,
  },
  coach: {
    color: Color.colorSilver,
    top: 14,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: 0,
  },
  vaibhavChibbar: {
    fontSize: FontSize.size_smi,
    lineHeight: 13,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  coachParent: {
    left: 42,
    width: 96,
    height: 28,
    top: 5,
    position: "absolute",
  },
  ellipseParent: {
    width: 138,
    height: 36,
    left: 0,
    top: 0,
  },
  groupFrame: {
    width: 138,
    height: 36,
    left: 15,
    top: 66,
  },
  rectangleView: {
    backgroundColor: Color.nextupBlue,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  active: {
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    left: 12,
    color: Color.othersWhite,
    top: 0,
  },
  groupIcon: {
    width: 10,
    height: 10,
    left: 0,
    top: 0,
    position: "absolute",
  },
  activeParent: {
    top: 6,
    left: 7,
    width: 43,
    height: 13,
    position: "absolute",
  },
  groupView: {
    left: 267,
    top: 14,
  },
  rectangleContainer: {
    top: 239,
    left: 18,
  },
  groupChild2: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  shootingChallenge1: {
    top: 18,
  },
  rectangleParent1: {
    top: 428,
    left: 18,
  },
  videoOctagonIcon: {
    top: 258,
    left: 184,
  },
  smallcapsIcon: {
    top: 446,
    left: 189,
  },
  aiDrivenChallenges: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 809,
    overflow: "hidden",
  },
});

export default AIDrivenChallenges;
