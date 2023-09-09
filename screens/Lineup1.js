import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Lineup1 = () => {
  return (
    <View style={styles.lineup1}>
      <View style={styles.barsStatusBarIphoneD}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.group, styles.groupLayout]}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={[styles.oneLastStep, styles.view2Typo]}>My Teams</Text>
      <View style={[styles.lineup1Child, styles.capacityBg]} />
      <Text style={styles.bulls}>About</Text>
      <Text style={[styles.warriors, styles.warriorsTypo]}>Players</Text>
      <Text style={[styles.warriors1, styles.warriorsTypo]}>Games</Text>
      <Text style={[styles.warriors2, styles.warriors2Typo]}>Lineup</Text>
      <Text style={[styles.warriors3, styles.warriorsTypo]}>Stats</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout2]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout2]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
          <View style={[styles.bounds, styles.boundsLayout]} />
          <View style={[styles.homeIndicator, styles.capacityBg]} />
        </View>
        <View style={[styles.exploreParent, styles.parentLayout]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Message</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chatteardroptext2.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/house1.png")}
          />
        </View>
        <View style={[styles.calendarParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Calendar</Text>
          <Image
            style={[styles.calendarblankIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/calendarblank.png")}
          />
        </View>
        <View style={[styles.myStandingParent, styles.parentLayout]}>
          <Text style={[styles.myStanding, styles.exploreTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/users2.png")}
          />
        </View>
        <View style={[styles.proParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Account</Text>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user11.png")}
          />
        </View>
      </View>
      <Text style={[styles.coachLineup, styles.lineupTypo]}>Coach Lineup</Text>
      <Text style={[styles.aiBaseLineup, styles.lineupTypo]}>
        AI Base Lineup
      </Text>
      <View style={styles.rectangleCopyParent}>
        <View style={[styles.rectangleCopy, styles.rectangleLayout1]} />
        <Text style={[styles.vineet, styles.vineetTypo]}>ABC School</Text>
        <Text style={[styles.view, styles.viewTypo]}>View</Text>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-6881.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-689.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-690.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-691.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-692.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>+5</Text>
      </View>
      <View style={[styles.rectangleCopy1, styles.rectangleLayout1]} />
      <Text style={[styles.vineet1, styles.vineetTypo]}>ABC School</Text>
      <Text style={[styles.view1, styles.viewTypo]}>View</Text>
      <View style={[styles.ellipseParent, styles.ellipseLayout]}>
        <Image
          style={[styles.groupChild2, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/ellipse-6881.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildPosition1]}
          contentFit="cover"
          source={require("../assets/ellipse-689.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildPosition1]}
          contentFit="cover"
          source={require("../assets/ellipse-690.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildPosition1]}
          contentFit="cover"
          source={require("../assets/ellipse-691.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupChildPosition1]}
          contentFit="cover"
          source={require("../assets/ellipse-692.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>+5</Text>
      </View>
      <View style={[styles.rectangleCopyGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy2, styles.rectangleLayout]} />
        <Text style={[styles.vineet, styles.vineetTypo]}>ABC School-3</Text>
        <Text style={[styles.view2, styles.view2Typo]}>View</Text>
        <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
          <Image
            style={[styles.groupChild2, styles.rectanglePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-6882.png")}
          />
          <Image
            style={[styles.groupChild3, styles.groupChildPosition1]}
            contentFit="cover"
            source={require("../assets/ellipse-6891.png")}
          />
          <Image
            style={[styles.groupChild4, styles.groupChildPosition1]}
            contentFit="cover"
            source={require("../assets/ellipse-6901.png")}
          />
          <Image
            style={[styles.groupChild5, styles.groupChildPosition1]}
            contentFit="cover"
            source={require("../assets/ellipse-6911.png")}
          />
          <Image
            style={[styles.groupChild6, styles.groupChildPosition1]}
            contentFit="cover"
            source={require("../assets/ellipse-6921.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>+5</Text>
        </View>
      </View>
      <Image
        style={styles.circlewavycheckIcon}
        contentFit="cover"
        source={require("../assets/circlewavycheck.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.typenotSeenStoryComponentParent}>
          <View style={styles.typenotSeenStoryComponent}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame2.png")}
            />
            <Text style={[styles.name, styles.nameTypo]}>Aubrey</Text>
          </View>
          <Text style={[styles.aauTeam, styles.teamSpaceBlock]}>
            Rotary AAU 17
          </Text>
        </View>
        <View style={styles.typeseenStoryComponentstoParent}>
          <View style={styles.typenotSeenStoryComponent}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
            <Text style={[styles.name1, styles.nameTypo]}>Darrell</Text>
          </View>
          <Text style={[styles.highSchoolTeam, styles.teamSpaceBlock]}>
            O’Dea HS
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  capacityBg: {
    backgroundColor: Color.othersWhite,
    position: "absolute",
  },
  groupLayout: {
    height: 30,
    width: 30,
  },
  rectanglePosition: {
    left: -1,
    top: -1,
    position: "absolute",
  },
  view2Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  warriorsTypo: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  warriors2Typo: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
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
  parentLayout: {
    width: 50,
    top: 10,
    height: 44,
    position: "absolute",
  },
  exploreTypo: {
    lineHeight: 16,
    top: 28,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    top: 10,
    height: 44,
    position: "absolute",
  },
  lineupTypo: {
    lineHeight: 22,
    fontSize: FontSize.headlineHeading5_size,
    left: 19,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    position: "absolute",
  },
  rectangleLayout1: {
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xs,
    height: 82,
    width: 338,
    position: "absolute",
  },
  vineetTypo: {
    height: 18,
    width: 148,
    display: "flex",
    lineHeight: 18,
    fontSize: FontSize.size_lg,
    alignItems: "center",
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    position: "absolute",
  },
  viewTypo: {
    color: Color.nextupBlue,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.normalTextBody1X_size,
    position: "absolute",
  },
  groupChildPosition: {
    top: 39,
    height: 30,
    width: 30,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    position: "absolute",
  },
  ellipseLayout: {
    height: 28,
    width: 118,
    position: "absolute",
  },
  groupChildPosition1: {
    top: -1,
    height: 30,
    width: 30,
    position: "absolute",
  },
  rectangleLayout: {
    height: 84,
    width: 338,
    position: "absolute",
  },
  nameTypo: {
    marginTop: 4,
    display: "none",
    fontFamily: FontFamily.bodyMediumSemibold,
    lineHeight: 20,
    alignSelf: "stretch",
    fontWeight: "600",
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  teamSpaceBlock: {
    marginTop: 9,
    alignItems: "center",
    display: "flex",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.othersWhite,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    opacity: 0.4,
    height: 4,
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
    fontFamily: FontFamily.robotoSerifRegular,
    textAlign: "center",
    color: Color.othersWhite,
    letterSpacing: 0,
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
  rectangle: {
    borderRadius: Border.br_7xs,
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
    borderStyle: "solid",
  },
  path2Icon: {
    left: 8,
    width: 14,
    height: 12,
    top: 9,
    position: "absolute",
  },
  group: {
    top: 62,
    left: 21,
    position: "absolute",
  },
  oneLastStep: {
    top: 65,
    left: 65,
    lineHeight: 24,
    textAlign: "left",
  },
  lineup1Child: {
    top: 274,
    left: 262,
    width: 113,
    height: 2,
  },
  bulls: {
    left: -93,
    color: Color.colorDarkgray_100,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  warriors: {
    left: -21,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
    position: "absolute",
  },
  warriors1: {
    left: 170,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
    position: "absolute",
  },
  warriors2: {
    left: 295,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
    position: "absolute",
    textAlign: "left",
  },
  warriors3: {
    left: 82,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
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
    left: 13,
  },
  exploreParent: {
    left: 240,
  },
  houseIcon: {
    left: 17,
  },
  homeParent: {
    width: 59,
    left: 21,
  },
  calendarblankIcon: {
    left: 12,
  },
  calendarParent: {
    left: 101,
    width: 49,
  },
  myStanding: {
    color: Color.othersWhite,
  },
  myStandingParent: {
    left: 170,
  },
  userIcon: {
    left: 11,
  },
  proParent: {
    left: 310,
    width: 45,
  },
  rectangleParent: {
    top: 731,
  },
  coachLineup: {
    top: 296,
  },
  aiBaseLineup: {
    top: 536,
  },
  rectangleCopy: {
    left: 0,
    backgroundColor: Color.colorGray_700,
    top: 0,
  },
  vineet: {
    top: 18,
    left: 18,
  },
  view: {
    top: 52,
    left: 283,
  },
  groupChild: {
    left: 17,
  },
  groupItem: {
    left: 40,
  },
  groupInner: {
    left: 62,
  },
  ellipseIcon: {
    left: 85,
  },
  groupChild1: {
    left: 107,
  },
  text: {
    top: 49,
    left: 115,
  },
  rectangleCopyParent: {
    top: 332,
    height: 82,
    width: 338,
    left: 19,
    position: "absolute",
  },
  rectangleCopy1: {
    top: 428,
    left: 19,
  },
  vineet1: {
    top: 446,
    left: 37,
  },
  view1: {
    top: 480,
    left: 302,
  },
  groupChild2: {
    height: 30,
    width: 30,
  },
  groupChild3: {
    left: 22,
  },
  groupChild4: {
    left: 44,
  },
  groupChild5: {
    left: 67,
  },
  groupChild6: {
    left: 89,
  },
  text1: {
    left: 97,
    top: 9,
  },
  ellipseParent: {
    top: 468,
    left: 37,
  },
  rectangleCopy2: {
    backgroundColor: Color.nextupBlue,
    borderRadius: Border.br_xs,
    height: 84,
    left: 0,
    top: 0,
  },
  view2: {
    top: 56,
    left: 285,
    textAlign: "left",
  },
  ellipseGroup: {
    top: 44,
    left: 18,
  },
  rectangleCopyGroup: {
    top: 570,
    left: 19,
  },
  circlewavycheckIcon: {
    height: "3.2%",
    width: "6.93%",
    top: "41.87%",
    right: "6.4%",
    bottom: "54.93%",
    left: "86.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    width: 80,
    height: 80,
  },
  name: {
    color: Color.othersWhite,
  },
  typenotSeenStoryComponent: {
    alignItems: "center",
  },
  aauTeam: {
    width: 99,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  typenotSeenStoryComponentParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  name1: {
    color: Color.greyscale300,
  },
  highSchoolTeam: {
    width: 71,
    justifyContent: "center",
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    textAlign: "center",
  },
  typeseenStoryComponentstoParent: {
    marginLeft: 31,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    top: 110,
    flexDirection: "row",
    left: 21,
    position: "absolute",
  },
  lineup1: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Lineup1;
