import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Stats = () => {
  return (
    <View style={styles.stats}>
      <View style={styles.barsStatusBarIphoneD}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
          <View style={[styles.bounds, styles.boundsLayout]} />
          <View style={[styles.homeIndicator, styles.capIconLayout]} />
        </View>
        <View style={[styles.exploreParent, styles.parentLayout2]}>
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
        <View style={[styles.myStandingParent, styles.parentLayout2]}>
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
      <View style={[styles.statsChild, styles.bulls6Position]} />
      <Text style={[styles.bulls, styles.bullsTypo9]}>About</Text>
      <Text style={[styles.warriors, styles.bullsTypo9]}>Roster</Text>
      <Text style={[styles.warriors1, styles.bullsTypo9]}>Stats</Text>
      <Text style={[styles.bulls1, styles.textTypo1]}>2021-22 Team Stats</Text>
      <View style={[styles.groupParent, styles.parentLayout1]}>
        <View style={[styles.ppgParent, styles.parentLayout1]}>
          <Text style={[styles.ppg, styles.textPosition1]}>PPG</Text>
          <Text style={[styles.text, styles.textTypo1]}>111.0</Text>
        </View>
        <View style={[styles.rpgParent, styles.parentLayout]}>
          <Text style={[styles.rpg, styles.ppgTypo]}>RPG</Text>
          <Text style={[styles.text, styles.textTypo1]}>45.5</Text>
        </View>
        <View style={[styles.apgParent, styles.parentLayout]}>
          <Text style={[styles.apg, styles.ppgTypo]}>APG</Text>
          <Text style={[styles.text, styles.textTypo1]}>27.1</Text>
        </View>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <View style={styles.statsItem} />
      <View style={styles.statsItem} />
      <View style={[styles.rectangleView, styles.statsChildLayout]} />
      <Text style={[styles.bulls2, styles.textPosition]}>Seasson</Text>
      <Text style={[styles.bulls3, styles.textTypo]}>G</Text>
      <Text style={[styles.bulls4, styles.textTypo]}>FG</Text>
      <Text style={[styles.bulls5, styles.textTypo]}>3PT</Text>
      <Text style={[styles.bulls6, styles.textTypo]}>OFF</Text>
      <Text style={[styles.bulls7, styles.textTypo]}>DEF</Text>
      <Text style={[styles.bulls8, styles.textTypo]}>PF</Text>
      <View style={[styles.statsChild1, styles.statsChildLayout]} />
      <Text style={[styles.bulls9, styles.bullsTypo8]}>85</Text>
      <Text style={[styles.bulls10, styles.bullsTypo8]}>45.0</Text>
      <Text style={[styles.bulls11, styles.bullsTypo8]}>36.3</Text>
      <Text style={[styles.bulls12, styles.bullsTypo8]}>8.3</Text>
      <Text style={[styles.bulls13, styles.bullsTypo8]}>33.5</Text>
      <Text style={[styles.bulls14, styles.bullsTypo8]}>12.2</Text>
      <Text style={[styles.text3, styles.textTypo]}>2021</Text>
      <View style={[styles.statsChild2, styles.statsChildLayout]} />
      <Text style={[styles.bulls15, styles.bullsTypo7]}>86</Text>
      <Text style={[styles.bulls16, styles.bullsTypo7]}>45.2</Text>
      <Text style={[styles.bulls17, styles.bullsTypo7]}>35.2</Text>
      <Text style={[styles.bulls18, styles.bullsTypo7]}>11.6</Text>
      <Text style={[styles.bulls19, styles.bullsTypo7]}>32.1</Text>
      <Text style={[styles.bulls20, styles.bullsTypo7]}>13.2</Text>
      <Text style={[styles.text4, styles.textTypo]}>2016</Text>
      <View style={[styles.statsChild3, styles.statsChildLayout]} />
      <Text style={[styles.bulls21, styles.bullsTypo6]}>54</Text>
      <Text style={[styles.bulls22, styles.bullsTypo6]}>44.3</Text>
      <Text style={[styles.bulls23, styles.bullsTypo6]}>28.9</Text>
      <Text style={[styles.bulls24, styles.bullsTypo6]}>6.2</Text>
      <Text style={[styles.bulls25, styles.bullsTypo6]}>33.2</Text>
      <Text style={[styles.bulls26, styles.bullsTypo6]}>19.2</Text>
      <Text style={[styles.text5, styles.textTypo]}>2020</Text>
      <View style={[styles.statsChild4, styles.statsChildLayout]} />
      <Text style={[styles.bulls27, styles.bullsTypo5]}>36</Text>
      <Text style={[styles.bulls28, styles.bullsTypo5]}>45.0</Text>
      <Text style={[styles.bulls29, styles.bullsTypo5]}>32.1</Text>
      <Text style={[styles.bulls30, styles.bullsTypo5]}>11.5</Text>
      <Text style={[styles.bulls31, styles.bullsTypo5]}>35.2</Text>
      <Text style={[styles.bulls32, styles.bullsTypo5]}>14.5</Text>
      <Text style={[styles.text6, styles.textTypo]}>2015</Text>
      <View style={[styles.statsChild5, styles.statsChildLayout]} />
      <Text style={[styles.bulls33, styles.bullsTypo4]}>65</Text>
      <Text style={[styles.bulls34, styles.bullsTypo4]}>42.1</Text>
      <Text style={[styles.bulls35, styles.bullsTypo4]}>45.2</Text>
      <Text style={[styles.bulls36, styles.bullsTypo4]}>10.2</Text>
      <Text style={[styles.bulls37, styles.bullsTypo4]}>33.5</Text>
      <Text style={[styles.bulls38, styles.bullsTypo4]}>18.2</Text>
      <Text style={[styles.text7, styles.textTypo]}>2019</Text>
      <View style={[styles.statsChild6, styles.statsChildLayout]} />
      <Text style={[styles.bulls39, styles.bullsTypo3]}>85</Text>
      <Text style={[styles.bulls40, styles.bullsTypo3]}>42.0</Text>
      <Text style={[styles.bulls41, styles.bullsTypo3]}>33.2</Text>
      <Text style={[styles.bulls42, styles.bullsTypo3]}>11.4</Text>
      <Text style={[styles.bulls43, styles.bullsTypo3]}>32.2</Text>
      <Text style={[styles.bulls44, styles.bullsTypo3]}>15.2</Text>
      <Text style={[styles.text8, styles.textTypo]}>2014</Text>
      <View style={[styles.statsChild7, styles.statsChildLayout]} />
      <Text style={[styles.bulls45, styles.bullsTypo2]}>42</Text>
      <Text style={[styles.bulls46, styles.bullsTypo2]}>52.2</Text>
      <Text style={[styles.bulls47, styles.bullsTypo2]}>30.0</Text>
      <Text style={[styles.bulls48, styles.bullsTypo2]}>11.3</Text>
      <Text style={[styles.bulls49, styles.bullsTypo2]}>36.2</Text>
      <Text style={[styles.bulls50, styles.bullsTypo2]}>19.2</Text>
      <Text style={[styles.text9, styles.textTypo]}>2018</Text>
      <View style={[styles.statsChild8, styles.statsChildLayout]} />
      <Text style={[styles.bulls51, styles.bullsTypo1]}>82</Text>
      <Text style={[styles.bulls52, styles.bullsTypo1]}>40.0</Text>
      <Text style={[styles.bulls53, styles.bullsTypo1]}>32.1</Text>
      <Text style={[styles.bulls54, styles.bullsTypo1]}>11.6</Text>
      <Text style={[styles.bulls55, styles.bullsTypo1]}>30.1</Text>
      <Text style={[styles.bulls56, styles.bullsTypo1]}>12.2</Text>
      <Text style={[styles.text10, styles.textTypo]}>2013</Text>
      <View style={[styles.statsChild9, styles.statsChildLayout]} />
      <Text style={[styles.bulls57, styles.bullsTypo]}>41</Text>
      <Text style={[styles.bulls58, styles.bullsTypo]}>48.2</Text>
      <Text style={[styles.bulls59, styles.bullsTypo]}>31.2</Text>
      <Text style={[styles.bulls60, styles.bullsTypo]}>11.8</Text>
      <Text style={[styles.bulls61, styles.bullsTypo]}>35.2</Text>
      <Text style={[styles.bulls62, styles.bullsTypo]}>12.5</Text>
      <Text style={[styles.text11, styles.textTypo]}>2017</Text>
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
  capIconLayout: {
    height: 4,
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
  parentLayout2: {
    width: 50,
    top: 10,
    height: 44,
    position: "absolute",
  },
  exploreTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
    top: 28,
    fontSize: FontSize.size_xs,
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
  bulls6Position: {
    left: 245,
    position: "absolute",
  },
  bullsTypo9: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  textTypo1: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  parentLayout1: {
    height: 56,
    position: "absolute",
  },
  textPosition1: {
    left: 20,
    color: Color.othersWhite,
    position: "absolute",
  },
  parentLayout: {
    width: 61,
    height: 56,
    top: 0,
    position: "absolute",
  },
  ppgTypo: {
    top: 38,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  groupLayout: {
    opacity: 0.2,
    height: 25,
    borderRightWidth: 1,
    top: 15,
    width: 1,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  statsChildLayout: {
    height: 28,
    width: 362,
    left: 7,
    position: "absolute",
  },
  textPosition: {
    left: 18,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  bullsTypo8: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    color: Color.othersWhite,
  },
  bullsTypo7: {
    top: 585,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  bullsTypo6: {
    top: 473,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  bullsTypo5: {
    top: 613,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  bullsTypo4: {
    top: 501,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  bullsTypo3: {
    top: 641,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  bullsTypo2: {
    top: 529,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  bullsTypo1: {
    top: 669,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  bullsTypo: {
    top: 557,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
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
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    opacity: 0.4,
    width: 1,
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
    fontFamily: FontFamily.robotoSerifRegular,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    color: Color.othersWhite,
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
    top: 755,
  },
  statsChild: {
    top: 274,
    width: 113,
    height: 2,
    backgroundColor: Color.othersWhite,
  },
  bulls: {
    left: 53,
    color: Color.colorDarkgray_100,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
    textAlign: "left",
    position: "absolute",
  },
  warriors: {
    left: 163,
    color: Color.colorDarkgray_100,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
    textAlign: "left",
    position: "absolute",
  },
  warriors1: {
    left: 283,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 253,
    textAlign: "left",
    position: "absolute",
    color: Color.othersWhite,
  },
  bulls1: {
    top: 300,
    fontSize: FontSize.size_mid,
    left: 19,
    lineHeight: 14,
  },
  ppg: {
    top: 38,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  text: {
    fontSize: FontSize.size_13xl,
    left: 0,
    top: 0,
  },
  ppgParent: {
    width: 79,
    left: 0,
    top: 0,
  },
  rpg: {
    left: 19,
    color: Color.othersWhite,
    position: "absolute",
  },
  rpgParent: {
    left: 138,
  },
  apg: {
    left: 14,
    color: Color.othersWhite,
    position: "absolute",
  },
  apgParent: {
    left: 275,
  },
  groupChild: {
    left: 104,
  },
  groupItem: {
    left: 241,
  },
  groupParent: {
    top: 329,
    width: 336,
    left: 21,
  },
  statsItem: {
    borderRadius: Border.br_xs,
    height: 168,
    width: 362,
    left: 7,
    backgroundColor: Color.colorGray_700,
    top: 410,
    position: "absolute",
  },
  rectangleView: {
    borderTopLeftRadius: Border.br_2xs,
    borderTopRightRadius: Border.br_2xs,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
    top: 410,
  },
  bulls2: {
    color: Color.nextupBlue,
    top: 417,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  bulls3: {
    left: 122,
    top: 417,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    color: Color.othersWhite,
    position: "absolute",
  },
  bulls4: {
    left: 160,
    top: 417,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    color: Color.othersWhite,
    position: "absolute",
  },
  bulls5: {
    left: 203,
    top: 417,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    color: Color.othersWhite,
    position: "absolute",
  },
  bulls6: {
    top: 417,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    left: 245,
    position: "absolute",
    color: Color.othersWhite,
  },
  bulls7: {
    left: 291,
    top: 417,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    color: Color.othersWhite,
    position: "absolute",
  },
  bulls8: {
    left: 335,
    top: 417,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    color: Color.othersWhite,
    position: "absolute",
  },
  statsChild1: {
    top: 438,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  bulls9: {
    left: 121,
    top: 445,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  bulls10: {
    left: 158,
    top: 445,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  bulls11: {
    left: 204,
    top: 445,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  bulls12: {
    left: 253,
    top: 445,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  bulls13: {
    left: 293,
    top: 445,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  bulls14: {
    left: 332,
    top: 445,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text3: {
    top: 446,
    left: 18,
    position: "absolute",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
  },
  statsChild2: {
    top: 578,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
  },
  bulls15: {
    left: 121,
  },
  bulls16: {
    left: 158,
  },
  bulls17: {
    left: 204,
  },
  bulls18: {
    left: 250,
  },
  bulls19: {
    left: 293,
  },
  bulls20: {
    left: 332,
  },
  text4: {
    top: 586,
    left: 18,
    position: "absolute",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
  },
  statsChild3: {
    top: 466,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
  },
  bulls21: {
    left: 121,
  },
  bulls22: {
    left: 158,
  },
  bulls23: {
    left: 204,
  },
  bulls24: {
    left: 253,
  },
  bulls25: {
    left: 293,
  },
  bulls26: {
    left: 332,
  },
  text5: {
    top: 474,
    left: 20,
    color: Color.othersWhite,
    position: "absolute",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  statsChild4: {
    top: 606,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  bulls27: {
    left: 121,
  },
  bulls28: {
    left: 158,
  },
  bulls29: {
    left: 204,
  },
  bulls30: {
    left: 250,
  },
  bulls31: {
    left: 293,
  },
  bulls32: {
    left: 332,
  },
  text6: {
    top: 614,
    left: 20,
    color: Color.othersWhite,
    position: "absolute",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  statsChild5: {
    top: 494,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  bulls33: {
    left: 121,
  },
  bulls34: {
    left: 158,
  },
  bulls35: {
    left: 204,
  },
  bulls36: {
    left: 250,
  },
  bulls37: {
    left: 293,
  },
  bulls38: {
    left: 332,
  },
  text7: {
    top: 502,
    left: 19,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    position: "absolute",
  },
  statsChild6: {
    top: 634,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
  },
  bulls39: {
    left: 121,
  },
  bulls40: {
    left: 158,
  },
  bulls41: {
    left: 204,
  },
  bulls42: {
    left: 250,
  },
  bulls43: {
    left: 293,
  },
  bulls44: {
    left: 332,
  },
  text8: {
    top: 642,
    left: 19,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    position: "absolute",
  },
  statsChild7: {
    top: 522,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
  },
  bulls45: {
    left: 121,
  },
  bulls46: {
    left: 158,
  },
  bulls47: {
    left: 204,
  },
  bulls48: {
    left: 250,
  },
  bulls49: {
    left: 293,
  },
  bulls50: {
    left: 332,
  },
  text9: {
    top: 530,
    left: 19,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    position: "absolute",
  },
  statsChild8: {
    top: 662,
    borderBottomRightRadius: Border.br_2xs,
    borderBottomLeftRadius: Border.br_2xs,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  bulls51: {
    left: 121,
  },
  bulls52: {
    left: 158,
  },
  bulls53: {
    left: 204,
  },
  bulls54: {
    left: 250,
  },
  bulls55: {
    left: 293,
  },
  bulls56: {
    left: 332,
  },
  text10: {
    top: 670,
    left: 19,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    position: "absolute",
  },
  statsChild9: {
    top: 550,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  bulls57: {
    left: 121,
  },
  bulls58: {
    left: 158,
  },
  bulls59: {
    left: 204,
  },
  bulls60: {
    left: 250,
  },
  bulls61: {
    left: 293,
  },
  bulls62: {
    left: 332,
  },
  text11: {
    top: 558,
    left: 19,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    position: "absolute",
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
    textAlign: "left",
    color: Color.colorDarkgray_100,
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
  frameParent: {
    top: 84,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  stats: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 836,
    overflow: "hidden",
  },
});

export default Stats;
