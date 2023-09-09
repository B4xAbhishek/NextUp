import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Gmaes = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gmaes}>
      <View style={styles.barsStatusBarIphoneD}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
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
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={styles.oneLastStep}>My Teams</Text>
      <View style={styles.gmaesChild} />
      <Text style={[styles.bulls, styles.warriorsClr]}>About</Text>
      <Text style={[styles.warriors, styles.warriorsClr]}>Roster</Text>
      <Text style={[styles.warriors1, styles.warriorsLayout]}>Games</Text>
      <Pressable
        style={styles.warriors2}
        onPress={() => navigation.navigate("Lineup")}
      >
        <Text style={[styles.lineup, styles.warriorsClr]}>Lineup</Text>
      </Pressable>
      <Text style={[styles.warriors3, styles.warriors3Position]}>Stats</Text>
      <View style={[styles.statisticalOverviewParent, styles.parentLayout1]}>
        <Text style={[styles.statisticalOverview, styles.tuesday29thSepTypo]}>
          Statistical Overview
        </Text>
        <View style={[styles.groupParent, styles.parentLayout1]}>
          <View style={styles.groupContainer}>
            <View style={styles.groupView}>
              <View style={styles.parent}>
                <Text style={styles.text}>0</Text>
                <Text style={styles.totalGame}>{`Total
Game`}</Text>
              </View>
              <Image
                style={[styles.groupChild, styles.groupPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-700.png")}
              />
              <Image
                style={[styles.groupItem, styles.groupPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-698.png")}
              />
            </View>
            <View style={[styles.groupParent1, styles.groupParentLayout]}>
              <View style={[styles.astParent, styles.astPosition]}>
                <Text style={styles.ast}>W/L Streak</Text>
                <Text style={[styles.text1, styles.textTypo]}>-</Text>
              </View>
              <View style={[styles.astGroup, styles.astPosition]}>
                <Text style={styles.ast}>Last 10</Text>
                <Text style={[styles.text2, styles.textTypo]}>-</Text>
              </View>
              <View style={[styles.groupParent2, styles.groupParentLayout]}>
                <View style={[styles.lineParent, styles.linePosition]}>
                  <View style={[styles.groupInner, styles.lineViewPosition]} />
                  <Text style={[styles.pts, styles.ptsTypo]}>0 Losses</Text>
                </View>
                <View style={[styles.lineGroup, styles.linePosition]}>
                  <View style={[styles.lineView, styles.lineViewPosition]} />
                  <Text style={[styles.pts1, styles.fClr]}>0 Wins</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={[styles.container, styles.containerLayout]}>
              <Text style={styles.text3}>0-0</Text>
              <Text style={styles.homeRecord}>Home Record</Text>
            </View>
            <View style={[styles.frameView, styles.containerLayout]}>
              <Text style={styles.text3}>0-0</Text>
              <Text style={styles.homeRecord}>Away Record</Text>
            </View>
            <View style={[styles.frameChild, styles.capIconLayout]} />
          </View>
        </View>
      </View>
      <View style={[styles.headParent, styles.gmaesItemPosition]}>
        <View style={[styles.head, styles.headFlexBox1]}>
          <Text style={styles.team}>Team</Text>
        </View>
        <View style={[styles.head1, styles.headLayout]}>
          <Text style={[styles.q1, styles.fTypo]}>Q1</Text>
        </View>
        <View style={[styles.head2, styles.headPosition4]}>
          <Text style={[styles.q1, styles.fTypo]}>Q2</Text>
        </View>
        <View style={[styles.head3, styles.headPosition3]}>
          <Text style={[styles.q1, styles.fTypo]}>Q3</Text>
        </View>
        <View style={[styles.head4, styles.headPosition2]}>
          <Text style={[styles.q1, styles.fTypo]}>Q4</Text>
        </View>
        <View style={[styles.head5, styles.headPosition1]}>
          <Text style={[styles.f, styles.fTypo]}>F</Text>
        </View>
        <View style={[styles.head6, styles.headPosition]}>
          <Text style={[styles.copperKings, styles.copperClr]}>
            Copper Kings
          </Text>
        </View>
        <View style={[styles.head7, styles.headPosition]}>
          <Text style={[styles.text5, styles.copperClr]}>18</Text>
        </View>
        <View style={[styles.head8, styles.headPosition]}>
          <Text style={[styles.text5, styles.copperClr]}>18</Text>
        </View>
        <View style={[styles.head9, styles.headPosition]}>
          <Text style={[styles.text5, styles.copperClr]}>19</Text>
        </View>
        <View style={[styles.head10, styles.headPosition]}>
          <Text style={[styles.text5, styles.copperClr]}>16</Text>
        </View>
        <View style={[styles.head11, styles.headPosition]}>
          <Text style={[styles.text5, styles.copperClr]}>71</Text>
        </View>
        <View style={[styles.head12, styles.headFlexBox]}>
          <Text style={styles.team}>Falcons</Text>
        </View>
        <View style={[styles.head13, styles.headFlexBox]}>
          <Text style={styles.text10}>14</Text>
        </View>
        <View style={[styles.head14, styles.headFlexBox]}>
          <Text style={styles.text10}>21</Text>
        </View>
        <View style={[styles.head15, styles.headFlexBox]}>
          <Text style={styles.text10}>14</Text>
        </View>
        <View style={[styles.head16, styles.headFlexBox]}>
          <Text style={styles.text10}>18</Text>
        </View>
        <View style={[styles.head17, styles.headFlexBox]}>
          <Text style={styles.text10}>67</Text>
        </View>
      </View>
      <Text style={[styles.tuesday29thSep, styles.tuesday29thSepTypo]}>
        Tuesday, 29th Sep 52995
      </Text>
      <View style={[styles.gmaesItem, styles.gmaesItemPosition]} />
      <View style={[styles.kWrapper, styles.wrapperLayout]}>
        <Text style={styles.k}>K</Text>
      </View>
      <Text style={[styles.copperKings1, styles.falcons1Typo]}>
        Copper Kings
      </Text>
      <Text style={[styles.falcons1, styles.falcons1Typo]}>Falcons</Text>
      <View style={[styles.dWrapper, styles.wrapperLayout]}>
        <Text style={styles.k}>D</Text>
      </View>
      <Text style={styles.vs}>VS</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
          <View style={[styles.bounds, styles.boundsLayout]} />
          <View style={[styles.homeIndicator, styles.warriors3Position]} />
        </View>
        <View style={[styles.exploreParent, styles.parentLayout]}>
          <Text style={[styles.explore, styles.headPosition]}>Message</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chatteardroptext2.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.headPosition]}>Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/house1.png")}
          />
        </View>
        <View style={[styles.calendarParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.headPosition]}>Calendar</Text>
          <Image
            style={[styles.calendarblankIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/calendarblank.png")}
          />
        </View>
        <View style={[styles.myStandingParent, styles.parentLayout]}>
          <Text style={[styles.myStanding, styles.headPosition]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/users2.png")}
          />
        </View>
        <View style={[styles.proParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.headPosition]}>Account</Text>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user11.png")}
          />
        </View>
      </View>
      <View style={styles.frameGroup}>
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
  borderBorder: {
    borderColor: Color.othersWhite,
    borderStyle: "solid",
  },
  capIconLayout: {
    width: 1,
    position: "absolute",
  },
  warriorsClr: {
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  warriorsLayout: {
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  warriors3Position: {
    left: 120,
    position: "absolute",
  },
  parentLayout1: {
    width: 338,
    position: "absolute",
  },
  tuesday29thSepTypo: {
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    position: "absolute",
  },
  groupPosition: {
    height: 131,
    left: 26,
    top: 26,
    position: "absolute",
  },
  groupParentLayout: {
    height: 36,
    position: "absolute",
  },
  astPosition: {
    height: 35,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 18,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.normalTextBody1X_size,
    color: Color.othersWhite,
    top: 17,
    position: "absolute",
  },
  linePosition: {
    height: 16,
    left: 0,
    position: "absolute",
  },
  lineViewPosition: {
    borderTopWidth: 2,
    backgroundColor: Color.colorGoldenrod_100,
    height: 2,
    left: -1,
    width: 30,
    borderStyle: "solid",
    position: "absolute",
  },
  ptsTypo: {
    lineHeight: 16,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  fClr: {
    color: Color.nextupBlue,
    textAlign: "left",
  },
  containerLayout: {
    width: 175,
    justifyContent: "center",
    alignItems: "center",
    height: 76,
    top: 0,
    position: "absolute",
  },
  gmaesItemPosition: {
    left: 10,
    position: "absolute",
  },
  headFlexBox1: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  headLayout: {
    width: 44,
    left: 105,
  },
  fTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  headPosition4: {
    left: 157,
    width: 44,
  },
  headPosition3: {
    left: 209,
    width: 44,
  },
  headPosition2: {
    left: 261,
    width: 44,
  },
  headPosition1: {
    left: 313,
    width: 44,
  },
  headPosition: {
    top: 28,
    position: "absolute",
  },
  copperClr: {
    color: Color.blueTeam,
    textAlign: "left",
  },
  headFlexBox: {
    top: 56,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  wrapperLayout: {
    height: 38,
    width: 38,
    borderRadius: Border.br_16xl,
    top: 714,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  falcons1Typo: {
    fontSize: FontSize.size_smi,
    top: 727,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
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
  parentLayout: {
    width: 50,
    top: 10,
    height: 44,
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
  nameTypo: {
    display: "none",
    fontFamily: FontFamily.bodyMediumSemibold,
    lineHeight: 20,
    alignSelf: "stretch",
    marginTop: 4,
    fontWeight: "600",
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  teamSpaceBlock: {
    marginTop: 9,
    display: "flex",
    alignItems: "center",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    opacity: 0.4,
    height: 4,
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
    right: 15,
    height: 11,
    width: 24,
    top: 17,
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
  rectangle: {
    top: -1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
    left: -1,
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
    height: 30,
    width: 30,
    left: 21,
    position: "absolute",
  },
  oneLastStep: {
    top: 65,
    left: 65,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.normalTextBody1X_size,
    color: Color.othersWhite,
    position: "absolute",
  },
  gmaesChild: {
    top: 274,
    left: 175,
    width: 113,
    height: 2,
    backgroundColor: Color.othersWhite,
    position: "absolute",
  },
  bulls: {
    left: -93,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  warriors: {
    fontFamily: FontFamily.robotoRegular,
    left: 17,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
    position: "absolute",
  },
  warriors1: {
    left: 208,
    fontWeight: "600",
    top: 253,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    position: "absolute",
  },
  lineup: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  warriors2: {
    left: 309,
    top: 253,
    position: "absolute",
  },
  warriors3: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
  },
  statisticalOverview: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  text: {
    left: 7,
    fontSize: 26,
    lineHeight: 26,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    textAlign: "center",
    color: Color.othersWhite,
    top: 0,
    position: "absolute",
  },
  totalGame: {
    fontSize: 11,
    lineHeight: 13,
    top: 26,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.othersWhite,
    left: 0,
    position: "absolute",
  },
  parent: {
    top: 66,
    left: 77,
    width: 29,
    height: 53,
    position: "absolute",
  },
  groupChild: {
    width: 131,
  },
  groupItem: {
    width: 104,
  },
  groupView: {
    left: 48,
    width: 183,
    height: 183,
    top: 0,
    position: "absolute",
  },
  ast: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    left: 28,
  },
  astParent: {
    width: 60,
    left: 0,
  },
  text2: {
    left: 18,
  },
  astGroup: {
    left: 95,
    width: 40,
  },
  groupInner: {
    borderColor: Color.colorCrimson,
    top: 8,
  },
  pts: {
    color: Color.colorCrimson,
    left: 40,
    lineHeight: 16,
    fontSize: FontSize.normalTextBody1X_size,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  lineParent: {
    top: 20,
    width: 105,
  },
  lineView: {
    borderColor: Color.nextupBlue,
    top: 7,
    backgroundColor: Color.colorGoldenrod_100,
  },
  pts1: {
    lineHeight: 16,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 40,
    fontSize: FontSize.normalTextBody1X_size,
    top: 0,
    position: "absolute",
  },
  lineGroup: {
    width: 89,
    top: 0,
  },
  groupParent2: {
    left: 176,
    width: 105,
    top: 0,
  },
  groupParent1: {
    top: 182,
    width: 281,
    left: 0,
  },
  groupContainer: {
    top: 76,
    left: 30,
    height: 218,
    width: 281,
    position: "absolute",
  },
  text3: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.othersWhite,
  },
  homeRecord: {
    marginTop: 4,
    opacity: 0.5,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.othersWhite,
  },
  container: {
    left: -9,
    justifyContent: "center",
    alignItems: "center",
  },
  frameView: {
    left: 174,
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    left: 169,
    borderRightWidth: 1,
    height: 61,
    opacity: 0.05,
    top: 8,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
  },
  frameParent: {
    backgroundColor: Color.lighterDark,
    height: 76,
    shadowOpacity: 1,
    elevation: 18,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: Border.br_5xs,
    width: 338,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    top: 37,
    height: 294,
    left: 0,
  },
  statisticalOverviewParent: {
    top: 302,
    height: 331,
    left: 18,
  },
  team: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.othersWhite,
  },
  head: {
    width: 97,
    left: 0,
    top: 0,
    position: "absolute",
  },
  q1: {
    textAlign: "center",
    color: Color.othersWhite,
  },
  head1: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  head2: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  head3: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  head4: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  f: {
    color: Color.nextupBlue,
    textAlign: "left",
  },
  head5: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  copperKings: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  head6: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 97,
    left: 0,
  },
  text5: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  head7: {
    width: 44,
    left: 105,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  head8: {
    left: 157,
    width: 44,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  head9: {
    left: 209,
    width: 44,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  head10: {
    left: 261,
    width: 44,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  head11: {
    left: 313,
    width: 44,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  head12: {
    width: 97,
    left: 0,
  },
  text10: {
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
  },
  head13: {
    width: 44,
    left: 105,
  },
  head14: {
    left: 157,
    width: 44,
  },
  head15: {
    left: 209,
    width: 44,
  },
  head16: {
    left: 261,
    width: 44,
  },
  head17: {
    left: 313,
    width: 44,
  },
  headParent: {
    top: 771,
    width: 358,
    height: 82,
    overflow: "hidden",
  },
  tuesday29thSep: {
    top: 672,
    left: 19,
    fontWeight: "700",
    fontSize: FontSize.normalTextBody1X_size,
  },
  gmaesItem: {
    top: 700,
    width: 357,
    height: 65,
    shadowOpacity: 1,
    elevation: 18,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: Border.br_5xs,
    left: 10,
    backgroundColor: Color.colorGray_200,
  },
  k: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    fontSize: FontSize.normalTextBody1X_size,
    color: Color.othersWhite,
  },
  kWrapper: {
    backgroundColor: Color.blueTeam,
    padding: Padding.p_5xs,
    left: 19,
    shadowOpacity: 1,
    elevation: 18,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
  },
  copperKings1: {
    left: 64,
    color: Color.blueTeam,
    textAlign: "left",
  },
  falcons1: {
    left: 266,
    color: Color.redTeam,
    textAlign: "right",
  },
  dWrapper: {
    left: 320,
    backgroundColor: Color.redTeam,
    padding: Padding.p_9xs,
  },
  vs: {
    top: 726,
    left: 178,
    opacity: 0.5,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  rectangleIcon: {
    top: 0,
  },
  bounds: {
    top: 0,
  },
  homeIndicator: {
    borderRadius: Border.br_11xs,
    width: 135,
    top: 8,
    backgroundColor: Color.othersWhite,
    height: 4,
  },
  homeIndicatorLight: {
    top: 61,
  },
  explore: {
    color: Color.colorDimgray_100,
    lineHeight: 16,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: 0,
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
    top: 10,
  },
  calendarblankIcon: {
    left: 12,
  },
  calendarParent: {
    left: 101,
    width: 49,
  },
  myStanding: {
    lineHeight: 16,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    left: 0,
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
    top: 870,
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
    textAlign: "center",
    color: Color.othersWhite,
  },
  typeseenStoryComponentstoParent: {
    marginLeft: 31,
    justifyContent: "center",
    alignItems: "center",
  },
  frameGroup: {
    top: 107,
    left: 19,
    flexDirection: "row",
    position: "absolute",
  },
  gmaes: {
    flex: 1,
    width: "100%",
    height: 951,
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
  },
});

export default Gmaes;
