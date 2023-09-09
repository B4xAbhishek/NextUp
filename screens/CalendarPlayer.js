import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import UpcomingGamesContainer from "../components/UpcomingGamesContainer";
import FormContainer3 from "../components/FormContainer3";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CalendarPlayer = () => {
  return (
    <View style={styles.calendarPlayer}>
      <View style={styles.rectangleCopy} />
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
      <Text style={[styles.calendar, styles.calendarTypo]}>Calendar</Text>
      <Text style={[styles.upcomingGames, styles.myPracticeTypo]}>
        Upcoming Games
      </Text>
      <View style={[styles.seeAllParent, styles.parentLayout]}>
        <Text style={[styles.seeAll, styles.textTypo1]}>See All</Text>
        <Image
          style={[styles.chevronDownIcon, styles.chevronLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown3.png")}
        />
      </View>
      <UpcomingGamesContainer />
      <FormContainer3 />
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
        <Text style={[styles.seeAll, styles.textTypo1]}>See All</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
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
        <Text style={[styles.text, styles.textFlexBox]}>4</Text>
      </View>
      <View style={[styles.container, styles.frameWrapperLayout]}>
        <Text style={[styles.text, styles.textFlexBox]}>5</Text>
      </View>
      <View style={[styles.frame, styles.frameWrapperLayout]}>
        <Text style={[styles.text, styles.textFlexBox]}>6</Text>
      </View>
      <View style={[styles.frameView, styles.frameWrapperLayout]}>
        <Text style={[styles.text3, styles.textPosition]}>7</Text>
      </View>
      <View style={[styles.wrapper1, styles.frameWrapperLayout]}>
        <Text style={[styles.text4, styles.textPosition]}>8</Text>
      </View>
      <View style={[styles.wrapper2, styles.frameWrapperLayout]}>
        <Text style={[styles.text4, styles.textPosition]}>9</Text>
      </View>
      <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
        <Text style={[styles.text6, styles.text6Position]}>10</Text>
      </View>
      <Text style={[styles.sun, styles.sunTypo]}>Sun</Text>
      <Text style={[styles.mon, styles.sunTypo]}>Mon</Text>
      <Text style={[styles.tues, styles.sunTypo]}>Tues</Text>
      <Text style={[styles.thu, styles.sunTypo]}>Thu</Text>
      <Text style={[styles.fri, styles.sunTypo]}>Fri</Text>
      <Text style={[styles.sat, styles.sunTypo]}>Sat</Text>
      <Text style={[styles.wed, styles.sunTypo]}>Wed</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-753.png")}
      />
      <Text style={[styles.text7, styles.textFlexBox]}>5</Text>
      <Image
        style={[styles.groupIcon, styles.calendarChildPosition]}
        contentFit="cover"
        source={require("../assets/group-17295.png")}
      />
      <Image
        style={[styles.calendarPlayerChild8, styles.calendarChildPosition]}
        contentFit="cover"
        source={require("../assets/group-17294.png")}
      />
      <Image
        style={[styles.calendarPlayerChild9, styles.calendarChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Text style={styles.december}>December</Text>
      <Text style={styles.text8}>2020</Text>
      <Image
        style={[styles.ovalCopyIcon, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy1.png")}
      />
      <Text style={[styles.challenge, styles.matchTypo]}>My Practice</Text>
      <Image
        style={[styles.ovalCopyIcon1, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy2.png")}
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
          <View style={[styles.homeIndicator, styles.textPosition1]} />
        </View>
        <View style={[styles.exploreParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Message</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/chatteardroptext2.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/house1.png")}
          />
        </View>
        <View style={[styles.calendarParent, styles.parentPosition]}>
          <Text style={[styles.calendar1, styles.exploreTypo]}>Calendar</Text>
          <Image
            style={[styles.calendarblankIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/calendarblank1.png")}
          />
        </View>
        <View style={[styles.myStandingParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
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
            source={require("../assets/user2.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleCopyParent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy1, styles.rectangleLayout]} />
        <Image
          style={[styles.rectangleCopyIcon, styles.text6Position]}
          contentFit="cover"
          source={require("../assets/rectangle-copy.png")}
        />
        <Text style={[styles.vineet, styles.vineetTypo]}>August 21, 2022</Text>
        <Text style={[styles.vineet1, styles.vineetTypo]}>3-4:00 PM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarTypo: {
    textAlign: "left",
    fontWeight: "700",
    color: Color.neutral0,
    position: "absolute",
  },
  myPracticeTypo: {
    lineHeight: 22,
    fontSize: FontSize.headlineHeading5_size,
    fontWeight: "600",
    left: 18,
    textAlign: "left",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoBold,
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
    color: Color.neutral0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  daysTypo: {
    color: Color.colorGray_900,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
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
  },
  calendarChildLayout: {
    height: 61,
    width: 47,
    borderWidth: 1,
    borderColor: Color.colorDarkslategray_100,
    borderStyle: "solid",
    borderRadius: Border.br_smi,
    top: 206,
    backgroundColor: Color.colorGray_700,
    position: "absolute",
  },
  frameWrapperLayout: {
    height: 30,
    width: 30,
    borderRadius: 83,
    top: 230,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.neutral0,
  },
  textPosition: {
    left: 11,
    textAlign: "center",
    top: 8,
    fontSize: FontSize.size_smi,
    color: Color.neutral0,
    position: "absolute",
  },
  text6Position: {
    left: 8,
    top: 8,
    position: "absolute",
  },
  sunTypo: {
    fontSize: FontSize.size_2xs,
    top: 217,
    textAlign: "center",
    color: Color.neutral0,
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
    top: "50%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.neutral0,
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
  textPosition1: {
    top: 8,
    position: "absolute",
  },
  parentPosition: {
    height: 44,
    top: 10,
    position: "absolute",
  },
  exploreTypo: {
    lineHeight: 16,
    top: 28,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
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
    fontSize: FontSize.normalTextBody1X_size,
    left: 13,
    fontWeight: "600",
    textAlign: "left",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  rectangleCopy: {
    height: "8.77%",
    top: "16.82%",
    right: "0%",
    bottom: "74.42%",
    left: "0%",
    backgroundColor: Color.colorGray_700,
    position: "absolute",
    width: "100%",
  },
  calendar: {
    top: 64,
    left: 24,
    fontSize: FontSize.size_13xl,
    letterSpacing: 0,
    lineHeight: 40,
    display: "flex",
    alignItems: "center",
    width: 327,
    height: 40,
    fontFamily: FontFamily.robotoBold,
  },
  upcomingGames: {
    top: 319,
    fontWeight: "600",
  },
  seeAll: {
    color: Color.colorRoyalblue,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontWeight: "500",
    left: 0,
    top: 0,
    textAlign: "left",
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
  myChallenges: {
    top: 479,
    fontWeight: "600",
  },
  myPractice: {
    top: 783,
    fontWeight: "600",
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
    left: 0,
    top: 0,
    textAlign: "left",
    fontWeight: "700",
    color: Color.neutral0,
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
  text: {
    left: 9,
    top: 8,
    position: "absolute",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  wrapper: {
    left: 27,
  },
  container: {
    left: 79,
  },
  frame: {
    left: 132,
  },
  text3: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  frameView: {
    left: 185,
  },
  text4: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  wrapper1: {
    left: 238,
  },
  wrapper2: {
    left: 291,
  },
  text6: {
    textAlign: "center",
    color: Color.neutral0,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoBold,
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
  ellipseIcon: {
    top: 257,
    left: 191,
    width: 18,
    height: 18,
    position: "absolute",
  },
  text7: {
    top: 262,
    left: 197,
    fontSize: FontSize.size_3xs,
    lineHeight: 10,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupIcon: {
    width: 15,
    left: 299,
  },
  calendarPlayerChild8: {
    left: 144,
    width: 7,
  },
  calendarPlayerChild9: {
    left: 93,
    width: 3,
  },
  december: {
    marginTop: -407,
    fontSize: 28,
    lineHeight: 28,
    left: "5.33%",
    top: "50%",
    textAlign: "left",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  text8: {
    marginTop: -429,
    lineHeight: 14,
    left: "5.33%",
    top: "50%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
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
    borderRadius: Border.br_11xs,
    backgroundColor: Color.neutral0,
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
    left: 21,
    width: 59,
  },
  calendar1: {
    color: Color.neutral0,
    lineHeight: 16,
    top: 28,
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
    backgroundColor: Color.colorGray_700,
  },
  rectangleCopyIcon: {
    borderRadius: Border.br_xs,
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
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 1118,
    overflow: "hidden",
    width: "100%",
  },
});

export default CalendarPlayer;
