import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const RoadToPro1 = () => {
  return (
    <View style={styles.roadToPro}>
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
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
            style={[styles.chatteardroptextIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/chatteardroptext.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.parentPosition]}>
          <Text style={[styles.home, styles.homeTypo]}>Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/house.png")}
          />
        </View>
        <View style={styles.calendarParent}>
          <Text style={[styles.explore, styles.homeTypo]}>Calendar</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/calendarblank.png")}
          />
        </View>
        <View style={[styles.myStandingParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.homeTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
          <Image
            style={[styles.usersIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/users1.png")}
          />
        </View>
        <View style={styles.proParent}>
          <Text style={[styles.explore, styles.homeTypo]}>Account</Text>
          <Image
            style={[styles.userIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
        </View>
      </View>
      <View style={styles.group}>
        <View style={[styles.rectangle, styles.rectangleBorder]} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={[styles.oneLastStep, styles.homeTypo]}>My Challenges</Text>
      <View style={styles.rectangleGroup}>
        <View style={[styles.rectangle1, styles.rectanglePosition]} />
        <Image
          style={[styles.ovalIcon, styles.ovalIconLayout]}
          contentFit="cover"
          source={require("../assets/oval1.png")}
        />
        <Image
          style={[styles.ovalCopyIcon, styles.ovalIconLayout]}
          contentFit="cover"
          source={require("../assets/oval1.png")}
        />
        <Image
          style={[styles.ovalCopy2, styles.ovalIconLayout]}
          contentFit="cover"
          source={require("../assets/oval1.png")}
        />
        <Image
          style={[styles.ovalCopy3, styles.ovalIconLayout]}
          contentFit="cover"
          source={require("../assets/oval1.png")}
        />
        <Image
          style={styles.shapeIcon}
          contentFit="cover"
          source={require("../assets/shape.png")}
        />
        <Image
          style={styles.shapeIcon}
          contentFit="cover"
          source={require("../assets/shape1.png")}
        />
        <Image
          style={styles.shapeIcon2}
          contentFit="cover"
          source={require("../assets/shape2.png")}
        />
        <Image
          style={styles.shapeIcon2}
          contentFit="cover"
          source={require("../assets/shape2.png")}
        />
        <View style={[styles.rectangleCopy4Parent, styles.groupLayout]}>
          <View style={[styles.rectangleCopy4, styles.rectanglePosition]} />
          <Text style={styles.level1}>Level 1</Text>
          <Image
            style={styles.crownsimpleIcon}
            contentFit="cover"
            source={require("../assets/crownsimple1.png")}
          />
        </View>
        <View style={[styles.rectangleCopy4Group, styles.groupLayout]}>
          <View style={[styles.rectangleCopy4, styles.rectanglePosition]} />
          <Text style={styles.level1}>Level 2</Text>
          <Image
            style={styles.crownsimpleIcon}
            contentFit="cover"
            source={require("../assets/crown.png")}
          />
        </View>
        <View style={[styles.rectangleCopy4Container, styles.groupLayout]}>
          <View style={[styles.rectangleCopy4, styles.rectanglePosition]} />
          <Text style={styles.level1}>Level 3</Text>
          <Image
            style={styles.crownsimpleIcon}
            contentFit="cover"
            source={require("../assets/medal.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.rectangleCopy4, styles.rectanglePosition]} />
          <Text style={styles.level1}>Level 4</Text>
          <Image
            style={styles.crownsimpleIcon}
            contentFit="cover"
            source={require("../assets/trophy1.png")}
          />
        </View>
      </View>
      <View style={[styles.roadToProInner, styles.roadToProInnerLayout]}>
        <View style={[styles.rectangleContainer, styles.roadToProInnerLayout]}>
          <View style={[styles.groupChild, styles.capacityBg]} />
          <Text style={[styles.bulls, styles.bullsTypo]}>
            AI Driven Challenges
          </Text>
          <Text style={[styles.warriors, styles.activeTypo1]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
        </View>
      </View>
      <Image
        style={[styles.roadToProChild, styles.roadLayout]}
        contentFit="cover"
        source={require("../assets/group-1000002579.png")}
      />
      <Image
        style={[styles.roadToProItem, styles.roadLayout]}
        contentFit="cover"
        source={require("../assets/group-10000027192.png")}
      />
      <Image
        style={[styles.magnifyingglassIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/magnifyingglass.png")}
      />
      <Text style={styles.shootingChallenge}>Total Point</Text>
      <Text style={styles.shootingChallenge1}>2250</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.daysLeft, styles.daysTypo]}>08 days left</Text>
      <View style={[styles.roadToProChild1, styles.roadChildLayout1]} />
      <Text style={[styles.shootingChallenge2, styles.shootingTypo]}>
        Dribble Challenge
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-778.png")}
      />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.roadToProChild9Layout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.roadToProChild2, styles.roadChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.roadToProChild3, styles.roadChildPosition2]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.roadToProChild4, styles.roadChildPosition1]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.roadToProChild5, styles.roadChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1000003081.png")}
      />
      <View style={[styles.roadToProChild6, styles.roadChildPosition]} />
      <View style={[styles.roadToProChild7, styles.roadChildPosition]} />
      <Text style={[styles.shootingChallenge3, styles.shootingTypo]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.daysLeft1, styles.daysTypo]}>08 days left</Text>
      <Image
        style={[styles.roadToProChild8, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-778.png")}
      />
      <LinearGradient
        style={[styles.roadToProChild9, styles.roadToProChild9Layout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.roadToProChild10, styles.roadChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.roadToProChild11, styles.roadChildPosition2]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.roadToProChild12, styles.roadChildPosition1]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <LinearGradient
        style={[styles.roadToProChild13, styles.roadChildLayout]}
        locations={[0, 1]}
        colors={["rgba(221, 159, 22, 0)", "#dd9f16"]}
      />
      <Image
        style={[styles.roadToProChild14, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-1000003081.png")}
      />
      <View style={[styles.rectangleParent1, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <View style={styles.completedParent}>
          <Text style={[styles.completed, styles.activeTypo]}>Completed</Text>
          <Image
            style={[styles.groupInner, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/group-1000002633.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.groupChild1Layout]}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <View style={[styles.activeParent, styles.groupInnerLayout]}>
          <Text style={[styles.active, styles.activeTypo]}>Active</Text>
          <Image
            style={[styles.groupIcon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vuesaxboldactivityIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxboldactivity1.png")}
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
  capacityBg: {
    backgroundColor: Color.othersWhite,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.othersWhite,
  },
  rectangleLayout: {
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
  iconLayout2: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  rectangleBorder: {
    borderWidth: 2,
    left: -1,
    top: -1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
  },
  rectanglePosition: {
    opacity: 0.12,
    position: "absolute",
  },
  ovalIconLayout: {
    height: 28,
    width: 28,
    top: 118,
    position: "absolute",
  },
  groupLayout: {
    height: 108,
    width: 84,
    top: 0,
    position: "absolute",
  },
  roadToProInnerLayout: {
    height: 23,
    width: 319,
    position: "absolute",
  },
  bullsTypo: {
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    position: "absolute",
  },
  activeTypo1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    top: 0,
  },
  roadLayout: {
    height: 85,
    width: 83,
    top: 101,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewPosition: {
    width: 343,
    left: 16,
    top: 493,
    position: "absolute",
  },
  daysTypo: {
    color: Color.colorOrange,
    lineHeight: 12,
    left: 39,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    position: "absolute",
  },
  roadChildLayout1: {
    backgroundColor: Color.colorOrange,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    height: 45,
  },
  shootingTypo: {
    left: 39,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 48,
    left: 41,
    width: 48,
    position: "absolute",
  },
  roadToProChild9Layout: {
    backgroundColor: "transparent",
    opacity: 0.5,
    height: 18,
    width: 7,
    left: 60,
    position: "absolute",
  },
  roadChildLayout: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    backgroundColor: "transparent",
    opacity: 0.5,
    height: 18,
    width: 7,
    position: "absolute",
  },
  roadChildPosition2: {
    left: 26,
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    backgroundColor: "transparent",
    opacity: 0.5,
    height: 18,
    width: 7,
    position: "absolute",
  },
  roadChildPosition1: {
    left: 89,
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    backgroundColor: "transparent",
    opacity: 0.5,
    height: 18,
    width: 7,
    position: "absolute",
  },
  groupIconLayout: {
    left: "10.67%",
    right: "76.06%",
    width: "13.27%",
    height: "5.75%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  roadChildPosition: {
    top: 634,
    width: 343,
    left: 16,
    position: "absolute",
  },
  groupItemLayout: {
    width: 85,
    height: 23,
    position: "absolute",
  },
  activeTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 13,
    position: "absolute",
  },
  groupChild1Layout: {
    width: 61,
    height: 23,
    position: "absolute",
  },
  iconLayout: {
    left: "51.2%",
    right: "43.47%",
    width: "5.33%",
    height: "2.31%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderColor: Color.othersWhite,
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
    letterSpacing: 0,
    fontFamily: FontFamily.robotoSerifSemiBold,
    fontWeight: "600",
    textAlign: "center",
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
    height: 4,
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
  },
  homeParent: {
    width: 59,
    left: 21,
  },
  calendarParent: {
    width: 48,
    left: 101,
    top: 10,
    height: 44,
    position: "absolute",
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
    top: 10,
    height: 44,
    position: "absolute",
  },
  rectangleParent: {
    top: 784,
  },
  rectangle: {
    borderColor: Color.colorDarkslategray,
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
    width: 30,
    height: 30,
    left: 21,
    position: "absolute",
  },
  oneLastStep: {
    top: 65,
    left: 65,
    fontSize: FontSize.normalTextBody1X_size,
    lineHeight: 24,
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  rectangle1: {
    top: 128,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 361,
    height: 8,
    left: 0,
  },
  ovalIcon: {
    left: 28,
  },
  ovalCopyIcon: {
    left: 128,
  },
  ovalCopy2: {
    left: 228,
  },
  ovalCopy3: {
    left: 328,
  },
  shapeIcon: {
    width: 16,
    height: 16,
  },
  shapeIcon2: {
    width: 12,
    height: 16,
  },
  rectangleCopy4: {
    width: 86,
    height: 110,
    borderWidth: 2,
    left: -1,
    top: -1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.othersWhite,
    backgroundColor: Color.colorGray_200,
    opacity: 0.12,
  },
  level1: {
    top: 84,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    width: 84,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    left: 0,
    position: "absolute",
  },
  crownsimpleIcon: {
    top: 22,
    left: 20,
    height: 45,
    width: 45,
    position: "absolute",
  },
  rectangleCopy4Parent: {
    left: 0,
  },
  rectangleCopy4Group: {
    left: 100,
  },
  rectangleCopy4Container: {
    left: 200,
  },
  groupView: {
    left: 300,
  },
  rectangleGroup: {
    top: 236,
    width: 384,
    height: 144,
    left: 18,
    position: "absolute",
  },
  groupChild: {
    top: 21,
    width: 170,
    height: 2,
    left: 0,
  },
  bulls: {
    left: 190,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: 0,
  },
  warriors: {
    left: 53,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    position: "absolute",
    textAlign: "center",
    color: Color.othersWhite,
  },
  rectangleContainer: {
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
    height: "2.54%",
    width: "5.87%",
    top: "7.63%",
    right: "5.07%",
    bottom: "89.83%",
    left: "89.07%",
  },
  shootingChallenge: {
    top: 410,
    left: 143,
    color: Color.colorSilver,
    lineHeight: 20,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  shootingChallenge1: {
    top: 434,
    left: 140,
    fontSize: FontSize.size_18xl,
    lineHeight: 37,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  rectangleView: {
    height: 129,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_mini,
  },
  daysLeft: {
    top: 594,
  },
  roadToProChild1: {
    width: 343,
    left: 16,
    top: 493,
    position: "absolute",
  },
  shootingChallenge2: {
    top: 570,
  },
  ellipseIcon: {
    top: 514,
  },
  rectangleLineargradient: {
    top: 499,
  },
  roadToProChild2: {
    top: 512,
    left: 33,
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  roadToProChild3: {
    top: 536,
  },
  roadToProChild4: {
    top: 507,
  },
  roadToProChild5: {
    top: 529,
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    left: 101,
  },
  groupIcon: {
    top: "59.33%",
    bottom: "34.91%",
  },
  roadToProChild6: {
    height: 124,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_mini,
  },
  roadToProChild7: {
    backgroundColor: Color.colorOrange,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    height: 45,
  },
  shootingChallenge3: {
    top: 711,
  },
  daysLeft1: {
    top: 732,
  },
  roadToProChild8: {
    top: 655,
  },
  roadToProChild9: {
    top: 640,
  },
  roadToProChild10: {
    top: 653,
    left: 33,
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
  roadToProChild11: {
    top: 677,
  },
  roadToProChild12: {
    top: 648,
  },
  roadToProChild13: {
    top: 670,
    transform: [
      {
        rotate: "-45deg",
      },
    ],
    left: 101,
  },
  roadToProChild14: {
    top: "75.63%",
    bottom: "18.61%",
  },
  groupItem: {
    backgroundColor: Color.colorLimegreen,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  completed: {
    top: 1,
    left: 15,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  groupInner: {
    width: 13,
    left: 0,
    top: 0,
  },
  completedParent: {
    top: 5,
    left: 5,
    width: 69,
    height: 14,
    position: "absolute",
  },
  rectangleParent1: {
    top: 547,
    left: 266,
  },
  groupChild1: {
    backgroundColor: Color.nextupBlue,
    borderRadius: Border.br_7xs,
    left: 0,
    top: 0,
  },
  active: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    top: 0,
    left: 12,
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
  },
  rectangleParent2: {
    top: 688,
    left: 290,
  },
  vuesaxboldactivityIcon: {
    top: "65.9%",
    bottom: "31.79%",
  },
  smallcapsIcon: {
    top: "82.2%",
    bottom: "15.49%",
  },
  roadToPro: {
    flex: 1,
    width: "100%",
    height: 865,
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
  },
});

export default RoadToPro1;
