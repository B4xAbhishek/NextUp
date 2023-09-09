import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const CalendarPlayer = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
    <View style={styles.calendarPlayer}>
      <View style={styles.rectangleCopy} />
      <View style={styles.barsStatusBarIphoneD}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityLayout]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.textTypo2]}>9:41</Text>
        </View>
      </View>
      <Text style={styles.calendar}>Calendar A</Text>
      <Text style={[styles.upcomingGames, styles.myPracticeTypo]}>
        Upcoming Games
      </Text>
      <View style={[styles.seeAllParent, styles.parentLayout]}>
        <Text style={[styles.seeAll, styles.textTypo1]}>See All Calendar</Text>
        <Image
          style={[styles.chevronDownIcon, styles.chevronLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown.png")}
        />
      </View>
      <View style={[styles.rectangleCopy5Parent, styles.rectangleLayout2]}>
        <View style={styles.rectangleShadowBox} />
        <Image
          style={[styles.subtractIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/subtract.png")}
        />
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1000002621.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-689.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-689.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-690.png")}
        />
        <Image
          style={[styles.groupChild1, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-690.png")}
        />
        <Text style={styles.text}>{`Tues
8/13`}</Text>
        <Image
          style={styles.chicagoBullsLogoIcon}
          contentFit="cover"
          source={require("../assets/chicago-bulls-logo.png")}
        />
        <Image
          style={styles.losAngelesLakersLogoIcon}
          contentFit="cover"
          source={require("../assets/los-angeles-lakers-logo.png")}
        />
      </View>
      <View style={[styles.rectangleCopy5Group, styles.rectangleLayout2]}>
        <View style={styles.rectangleShadowBox} />
        <Image
          style={[styles.subtractIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/subtract.png")}
        />
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1000002621.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-689.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-689.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-690.png")}
        />
        <Image
          style={[styles.groupChild1, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-690.png")}
        />
        <Text style={styles.text}>{`Fri
8/16`}</Text>
        <Image
          style={styles.chicagoBullsLogoIcon}
          contentFit="cover"
          source={require("../assets/chicago-bulls-logo.png")}
        />
        <Image
          style={styles.losAngelesLakersLogoIcon}
          contentFit="cover"
          source={require("../assets/los-angeles-lakers-logo.png")}
        />
      </View>
      <Text style={[styles.myChallenges, styles.myPracticeTypo]}>
        My Challenges
      </Text>
      <Text style={[styles.myPractice, styles.myPracticeTypo]}>
        My Practice
      </Text>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.chevronDownWrapper, styles.chevronLayout]}>
          <View style={[styles.chevronDown, styles.chevronLayout]} />
        </View>
        <Text style={[styles.seeAll, styles.textTypo1]} onPress={() => navigation.navigate("AssignVideoChallenge")}>See All</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <LinearGradient
        style={[styles.calendarPlayerChild, styles.calendarBg]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <LinearGradient
        style={[styles.calendarPlayerItem, styles.iconPosition1]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <Image
        style={[styles.calendarPlayerInner, styles.calendarPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-18890.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/rectangle-18896.png")}
      />
      <Image
        style={styles.calendarPosition}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.iconPosition1}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <LinearGradient
        style={[styles.calendarPlayerChild, styles.calendarBg]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <LinearGradient
        style={[styles.calendarPlayerItem, styles.iconPosition1]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <Text style={[styles.shootingChallenge, styles.shootingTypo]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.shootingChallenge1, styles.shootingTypo]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.daysLeft, styles.daysTypo]}> 3 Days left</Text>
      <Text style={[styles.completed2Days, styles.daysTypo]}>
        Completed 2 days ago
      </Text>
      <View style={[styles.vaibhavChibbarWrapper, styles.vaibhavLayout]}>
        <Text style={[styles.vaibhavChibbar, styles.textTypo]}>
          Submit Video
        </Text>
      </View>
      <View style={[styles.vaibhavChibbarContainer, styles.vaibhavLayout]}>
        <Text style={[styles.vaibhavChibbar, styles.textTypo]}>
          Stat Challenge
        </Text>
      </View>
      <View style={[styles.rectangleView, styles.calendarChildLayout]} />
      <View style={[styles.calendarPlayerChild2, styles.calendarChildLayout]} />
      <View style={[styles.calendarPlayerChild3, styles.calendarChildLayout]} />
      <View style={styles.calendarPlayerChild4} />
      <View style={[styles.calendarPlayerChild5, styles.calendarChildLayout]} />
      <View style={[styles.calendarPlayerChild6, styles.calendarChildLayout]} />
      <View style={[styles.calendarPlayerChild7, styles.calendarChildLayout]} />
      <View style={[styles.wrapper, styles.frameWrapperLayout]}>
        <Text style={[styles.text2, styles.text2Position]}>4</Text>
      </View>
      <View style={[styles.container, styles.frameWrapperLayout]}>
        <Text style={[styles.text2, styles.text2Position]}>5</Text>
      </View>
      <View style={[styles.frame, styles.frameWrapperLayout]}>
        <Text style={[styles.text2, styles.text2Position]}>6</Text>
      </View>
      <View style={[styles.frameView, styles.frameWrapperLayout]}>
        <Text style={[styles.text5, styles.textPosition]}>7</Text>
      </View>
      <View style={[styles.wrapper1, styles.frameWrapperLayout]}>
        <Text style={[styles.text6, styles.textPosition]}>8</Text>
      </View>
      <View style={[styles.wrapper2, styles.frameWrapperLayout]}>
        <Text style={[styles.text6, styles.textPosition]}>9</Text>
      </View>
      <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
        <Text style={[styles.text8, styles.text8Position]}>10</Text>
      </View>
      <Text style={[styles.sun, styles.sunTypo]}>Sun</Text>
      <Text style={[styles.mon, styles.sunTypo]}>Mon</Text>
      <Text style={[styles.tues, styles.sunTypo]}>Tues</Text>
      <Text style={[styles.thu, styles.sunTypo]}>Thu</Text>
      <Text style={[styles.fri, styles.sunTypo]}>Fri</Text>
      <Text style={[styles.sat, styles.sunTypo]}>Sat</Text>
      <Text style={[styles.wed, styles.sunTypo]}>Wed</Text>
      <Image
        style={[styles.calendarPlayerChild8, styles.capacityLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-753.png")}
      />
      <Text style={[styles.text9, styles.textTypo1]}>5</Text>
      <Image
        style={[styles.calendarPlayerChild9, styles.calendarChildPosition]}
        contentFit="cover"
        source={require("../assets/group-17295.png")}
      />
      <Image
        style={[styles.calendarPlayerChild10, styles.calendarChildPosition]}
        contentFit="cover"
        source={require("../assets/group-17294.png")}
      />
      <Image
        style={[styles.calendarPlayerChild11, styles.calendarChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Text style={styles.december}>December</Text>
      <Text style={styles.text10}>2020</Text>
      <Image
        style={[styles.ovalCopyIcon, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy.png")}
      />
      <Text style={[styles.challenge, styles.matchTypo]}>My Practice</Text>
      <Image
        style={[styles.ovalCopyIcon1, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy1.png")}
      />
      <Text style={[styles.match, styles.matchTypo]}>Game</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
        <Image
          style={[styles.rectangleIcon1, styles.rectangleLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
          <View style={[styles.bounds, styles.boundsLayout]} />
          <View style={[styles.homeIndicator, styles.text2Position]} />
        </View>
        <View style={[styles.exploreParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Message</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/chatteardroptext.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/house.png")}
          />
        </View>
        <View style={[styles.calendarParent, styles.parentPosition]}>
          <Text style={[styles.calendar1, styles.exploreTypo]}>Calendar</Text>
          <Image
            style={[styles.calendarblankIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/calendarblank.png")}
          />
        </View>
        <View style={[styles.myStandingParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>My Team</Text>
          <Image
            style={[styles.usersIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/users.png")}
          />
        </View>
        <View style={[styles.proParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Account</Text>
          <Image
            style={[styles.userIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleCopyParent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy1, styles.rectangleLayout]} />
        <Image
          style={[styles.rectangleCopyIcon, styles.text8Position]}
          contentFit="cover"
          source={require("../assets/rectangle-copy.png")}
        />
        <Text style={[styles.vineet, styles.vineetTypo]}>August 21, 2022</Text>
        <Text style={[styles.vineet1, styles.vineetTypo]}>3-4:00 PM</Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  capacityLayout: {
    width: 18,
    position: "absolute",
  },
  textTypo2: {
    fontWeight: "600",
    textAlign: "center",
  },
  myPracticeTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_3xl,
    left: 18,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    fontWeight: "600",
    position: "absolute",
  },
  parentLayout: {
    height: 16,
    width: 60,
    left: 297,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  chevronLayout: {
    height: 14,
    width: 14,
    top: 0,
    position: "absolute",
  },
  rectangleLayout2: {
    height: 94,
    width: 180,
    top: 352,
    position: "absolute",
  },
  groupChildLayout: {
    height: 52,
    width: 180,
  },
  groupLayout: {
    height: 50,
    top: 25,
    width: 50,
    position: "absolute",
  },
  ellipseIconLayout: {
    width: 40,
    top: 30,
    height: 40,
    position: "absolute",
  },
  calendarBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_mini,
  },
  iconPosition1: {
    top: 644,
    height: 113,
    width: 339,
    left: 18,
    position: "absolute",
  },
  calendarPosition: {
    height: 113,
    width: 339,
    top: 514,
    left: 18,
    position: "absolute",
  },
  shootingTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_mid,
    left: 33,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.colorWhite,
    position: "absolute",
  },
  daysTypo: {
    color: Color.colorGray_300,
    lineHeight: 12,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  vaibhavLayout: {
    height: 13,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
  },
  calendarChildLayout: {
    height: 61,
    width: 47,
    borderColor: Color.colorDarkslategray,
    borderRadius: Border.br_smi,
    top: 206,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  frameWrapperLayout: {
    height: 30,
    width: 30,
    borderRadius: 83,
    top: 230,
    position: "absolute",
  },
  text2Position: {
    top: 8,
    position: "absolute",
  },
  textPosition: {
    left: 11,
    top: 8,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  text8Position: {
    left: 8,
    top: 8,
    position: "absolute",
  },
  sunTypo: {
    fontSize: FontSize.size_2xs,
    top: 217,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  calendarChildPosition: {
    height: 3,
    top: 272,
    position: "absolute",
  },
  ovalIconLayout: {
    left: "76.27%",
    right: "22.13%",
    width: "1.6%",
    height: "0.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  matchTypo: {
    left: "78.93%",
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorWhite,
    top: "50%",
    position: "absolute",
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
  exploreTypo: {
    lineHeight: 16,
    top: 28,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    bottom: "45.45%",
    top: "0%",
    height: "54.55%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 168,
    width: 338,
    position: "absolute",
  },
  vineetTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_base,
    left: 13,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleCopy: {
    height: "8.77%",
    top: "16.82%",
    right: "0%",
    bottom: "74.42%",
    left: "0%",
    backgroundColor: Color.colorGray_200,
    position: "absolute",
    width: "100%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorWhite,
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
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
    height: 7,
    backgroundColor: Color.colorWhite,
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
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
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoSerifSemiBold,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    top: "50%",
    fontWeight: "600",
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
  calendar: {
    top: 64,
    left: 24,
    fontSize: 32,
    lineHeight: 40,
    display: "flex",
    alignItems: "center",
    width: 327,
    height: 40,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.colorWhite,
    letterSpacing: 0,
    position: "absolute",
  },
  upcomingGames: {
    top: 319,
  },
  seeAll: {
    color: Color.colorRoyalblue,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  chevronDownIcon: {
    left: 46,
    width: 14,
    overflow: "hidden",
  },
  seeAllParent: {
    top: 787,
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_5xs,
    height: 94,
    width: 180,
    left: 0,
    top: 0,
    position: "absolute",
  },
  subtractIcon: {
    borderRadius: Border.br_9xs,
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    left: 20,
  },
  groupInner: {
    left: 110,
  },
  ellipseIcon: {
    left: 25,
  },
  groupChild1: {
    left: 115,
  },
  text: {
    top: 62,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 79,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  chicagoBullsLogoIcon: {
    top: 39,
    width: 26,
    height: 26,
    left: 32,
    position: "absolute",
  },
  losAngelesLakersLogoIcon: {
    top: 38,
    left: 116,
    width: 38,
    height: 23,
    position: "absolute",
  },
  rectangleCopy5Parent: {
    left: 18,
  },
  rectangleCopy5Group: {
    left: 207,
  },
  myChallenges: {
    top: 479,
  },
  myPractice: {
    top: 783,
  },
  chevronDown: {
    left: 0,
    overflow: "hidden",
  },
  chevronDownWrapper: {
    left: 46,
    width: 14,
  },
  vectorIcon: {
    height: "53.13%",
    width: "8.33%",
    top: "14.06%",
    right: "6.25%",
    bottom: "32.81%",
    left: "85.42%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    top: 483,
  },
  calendarPlayerChild: {
    height: 113,
    width: 339,
    top: 514,
    left: 18,
    position: "absolute",
  },
  calendarPlayerItem: {
    backgroundColor: "transparent",
    borderRadius: Border.br_mini,
  },
  calendarPlayerInner: {
    borderRadius: Border.br_mini,
  },
  rectangleIcon: {
    borderRadius: Border.br_mini,
  },
  shootingChallenge: {
    top: 536,
  },
  shootingChallenge1: {
    top: 666,
  },
  daysLeft: {
    top: 559,
    left: 32,
  },
  completed2Days: {
    top: 689,
    left: 33,
  },
  vaibhavChibbar: {
    lineHeight: 13,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vaibhavChibbarWrapper: {
    top: 588,
    width: 79,
    left: 32,
  },
  vaibhavChibbarContainer: {
    top: 718,
    width: 86,
    left: 33,
  },
  rectangleView: {
    left: 18,
  },
  calendarPlayerChild2: {
    left: 71,
  },
  calendarPlayerChild3: {
    left: 124,
  },
  calendarPlayerChild4: {
    left: 177,
    backgroundColor: Color.colorRoyalblue,
    width: 46,
    height: 60,
    borderRadius: Border.br_smi,
    top: 206,
    position: "absolute",
  },
  calendarPlayerChild5: {
    left: 230,
  },
  calendarPlayerChild6: {
    left: 283,
  },
  calendarPlayerChild7: {
    left: 336,
  },
  text2: {
    left: 9,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    textAlign: "center",
    fontWeight: "600",
  },
  wrapper: {
    left: 27,
  },
  container: {
    left: 79,
    width: 30,
    borderRadius: 83,
    top: 230,
  },
  frame: {
    left: 132,
  },
  text5: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameView: {
    left: 185,
  },
  text6: {
    fontFamily: FontFamily.robotoBold,
    left: 11,
    fontWeight: "600",
  },
  wrapper1: {
    left: 238,
  },
  wrapper2: {
    left: 291,
  },
  text8: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    textAlign: "center",
    fontWeight: "600",
  },
  wrapper3: {
    left: 344,
  },
  sun: {
    fontFamily: FontFamily.robotoRegular,
    top: 217,
    left: 32,
  },
  mon: {
    left: 82,
    fontFamily: FontFamily.robotoRegular,
    top: 217,
  },
  tues: {
    left: 135,
    fontFamily: FontFamily.robotoRegular,
    top: 217,
  },
  thu: {
    left: 244,
    fontFamily: FontFamily.robotoRegular,
    top: 217,
  },
  fri: {
    left: 299,
    fontFamily: FontFamily.robotoRegular,
    top: 217,
  },
  sat: {
    left: 351,
    fontFamily: FontFamily.robotoRegular,
    top: 217,
  },
  wed: {
    left: 188,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  calendarPlayerChild8: {
    top: 257,
    left: 191,
    height: 18,
  },
  text9: {
    top: 262,
    left: 197,
    fontSize: 10,
    lineHeight: 10,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  calendarPlayerChild9: {
    left: 299,
    width: 15,
  },
  calendarPlayerChild10: {
    left: 144,
    width: 7,
  },
  calendarPlayerChild11: {
    left: 93,
    width: 3,
  },
  december: {
    marginTop: -407,
    fontSize: 28,
    lineHeight: 28,
    left: "5.33%",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.colorWhite,
    top: "50%",
    position: "absolute",
  },
  text10: {
    marginTop: -429,
    lineHeight: 14,
    left: "5.33%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
    top: "50%",
    position: "absolute",
  },
  ovalCopyIcon: {
    top: "15.03%",
    bottom: "84.44%",
  },
  challenge: {
    marginTop: -395,
  },
  ovalCopyIcon1: {
    top: "13.42%",
    bottom: "86.05%",
  },
  match: {
    marginTop: -413,
  },
  rectangleIcon1: {
    top: 0,
  },
  bounds: {
    top: 0,
  },
  homeIndicator: {
    left: 120,
    borderRadius: 2,
    width: 135,
    backgroundColor: Color.colorWhite,
    height: 4,
  },
  homeIndicatorLight: {
    top: 61,
  },
  explore: {
    color: Color.colorDimgray,
  },
  chatteardroptextIcon: {
    width: "48.98%",
    right: "26.53%",
    left: "24.49%",
  },
  exploreParent: {
    left: 241,
    width: 49,
  },
  houseIcon: {
    width: "40.68%",
    right: "30.51%",
    left: "28.81%",
  },
  homeParent: {
    width: 59,
    left: 21,
    top: 10,
  },
  calendar1: {
    color: Color.colorWhite,
  },
  calendarblankIcon: {
    width: "50%",
    right: "25%",
    left: "25%",
  },
  calendarParent: {
    left: 101,
    width: 48,
  },
  usersIcon: {
    width: "48%",
    right: "26%",
    left: "26%",
  },
  myStandingParent: {
    left: 170,
    width: 50,
    top: 10,
  },
  userIcon: {
    width: "53.33%",
    right: "22.22%",
    left: "24.44%",
  },
  proParent: {
    left: 310,
    width: 45,
  },
  rectangleParent: {
    top: 1037,
  },
  rectangleCopy1: {
    borderRadius: 16,
    left: 0,
    top: 0,
    backgroundColor: Color.colorGray_200,
  },
  rectangleCopyIcon: {
    borderRadius: 12,
    width: 322,
    height: 99,
  },
  vineet: {
    top: 123,
    width: 121,
  },
  vineet1: {
    top: 145,
    width: 201,
  },
  rectangleCopyParent: {
    top: 818,
    left: 18,
  },
  calendarPlayer: {
    backgroundColor: "#181a20",
    flex: 1,
    height: 1118,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalendarPlayer;
