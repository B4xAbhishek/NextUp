import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SubmitChallengesByQuestion = () => {
  return (
    <View style={styles.submitChallengesByQuestion}>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle1.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/group-33.png")}
      />
      <View style={styles.barsStatusBarIphoneD}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
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
      <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
        <Image
          style={[styles.rectangleIcon1, styles.rectangleLayout1]}
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
      <Text style={styles.oneLastStep}>Challenges submission</Text>
      <Text style={[styles.loremIpsumIs, styles.loremIpsumIsPosition]}>
        Lorem Ipsum is simply dummy text of the ahhgdiijajah printing and
        typesetting industry. Lorem Ipsumaj isahh.
      </Text>
      <Text style={[styles.dribbleChallenge, styles.loremIpsumIsPosition]}>
        <Text style={styles.homeTypo}>Dribble</Text>
        <Text style={styles.challenge}> Challenge</Text>
      </Text>
      <View
        style={[
          styles.submitChallengesByQuestionInner,
          styles.groupChildLayout,
        ]}
      >
        <View style={[styles.ellipseParent, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-688.png")}
          />
          <View style={[styles.coachParent, styles.capIconPosition]}>
            <Text style={[styles.coach, styles.coachTypo]}>Coach</Text>
            <Text style={[styles.vaibhavChibbar, styles.vaibhavChibbarTypo]}>
              Vaibhav Chibbar
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.rectangleLayout}>
          <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
          <Text style={styles.continue}>Submit</Text>
        </View>
      </View>
      <Text style={styles.idDuisNon}>Id duis non eget arcu dolor fames?</Text>
      <Text style={[styles.idDuisNon1, styles.duisTypo]}>Id duis non</Text>
      <Text style={[styles.idDuisNon2, styles.duisTypo]}>Id duis non</Text>
      <Text style={[styles.idDuisNon3, styles.duisTypo]}>Id duis non</Text>
      <Text style={[styles.idDuisNon4, styles.duisTypo]}>Id duis non</Text>
      <Image
        style={[
          styles.submitChallengesByQuestionItem,
          styles.submitChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-787.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.submitChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-787.png")}
      />
      <Image
        style={[
          styles.submitChallengesByQuestionChild1,
          styles.submitChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-789.png")}
      />
      <Image
        style={[
          styles.submitChallengesByQuestionChild2,
          styles.path2IconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-791.png")}
      />
      <Image
        style={[
          styles.submitChallengesByQuestionChild3,
          styles.submitChildLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-787.png")}
      />
      <View style={styles.shootingChallengeParent}>
        <Text style={[styles.shootingChallenge, styles.coachTypo]}>
          Total Point
        </Text>
        <Text style={[styles.shootingChallenge1, styles.vaibhavChibbarTypo]}>
          2250
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  capIconPosition: {
    top: 4,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.othersWhite,
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
  homeTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  path2IconLayout: {
    height: 12,
    position: "absolute",
  },
  loremIpsumIsPosition: {
    width: 327,
    left: 24,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  groupChildLayout: {
    height: 36,
    position: "absolute",
  },
  coachTypo: {
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  vaibhavChibbarTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.othersWhite,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 311,
  },
  duisTypo: {
    left: 46,
    width: 284,
    lineHeight: 22,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  submitChildLayout: {
    height: 22,
    left: 18,
    width: 22,
    position: "absolute",
  },
  rectangleIcon: {
    height: 264,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.othersWhite,
    borderWidth: 1,
    opacity: 0.35,
    width: 22,
    borderStyle: "solid",
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    right: 0,
    width: 1,
    opacity: 0.4,
    height: 4,
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
    fontFamily: FontFamily.robotoSerifSemiBold,
    textAlign: "center",
    fontWeight: "600",
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
  rectangleIcon1: {
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
    top: 28,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
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
    top: 28,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
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
    top: 731,
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
    left: 8,
    width: 14,
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
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.othersWhite,
    position: "absolute",
  },
  loremIpsumIs: {
    top: 175,
    lineHeight: 20,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  challenge: {
    fontFamily: FontFamily.abhayaLibreBold,
    fontWeight: "700",
  },
  dribbleChallenge: {
    top: 132,
    fontSize: FontSize.size_13xl,
    lineHeight: 36,
    letterSpacing: 0,
    width: 327,
    left: 24,
  },
  groupChild: {
    width: 36,
    left: 0,
    top: 0,
  },
  coach: {
    fontSize: FontSize.size_xs,
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
  },
  vaibhavChibbar: {
    top: 15,
    lineHeight: 13,
    fontSize: FontSize.size_smi,
  },
  coachParent: {
    left: 42,
    width: 96,
    height: 28,
  },
  ellipseParent: {
    width: 138,
    height: 36,
    left: 0,
    top: 0,
  },
  submitChallengesByQuestionInner: {
    top: 247,
    left: 113,
    width: 138,
    height: 36,
  },
  rectangleCopy3: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.nextupBlue,
    left: 0,
    top: 0,
    position: "absolute",
  },
  continue: {
    top: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 16,
    fontSize: FontSize.bodyMediumSemibold_size,
    width: 311,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "center",
    color: Color.othersWhite,
    left: 0,
    position: "absolute",
  },
  frameView: {
    top: 641,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    left: 0,
    position: "absolute",
  },
  idDuisNon: {
    top: 378,
    left: 19,
    width: 284,
    lineHeight: 22,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.othersWhite,
    fontWeight: "600",
    position: "absolute",
  },
  idDuisNon1: {
    top: 406,
  },
  idDuisNon2: {
    top: 436,
  },
  idDuisNon3: {
    top: 466,
  },
  idDuisNon4: {
    top: 496,
  },
  submitChallengesByQuestionItem: {
    top: 406,
  },
  ellipseIcon: {
    top: 436,
  },
  submitChallengesByQuestionChild1: {
    top: 466,
  },
  submitChallengesByQuestionChild2: {
    top: 471,
    left: 23,
    width: 12,
  },
  submitChallengesByQuestionChild3: {
    top: 496,
  },
  shootingChallenge: {
    left: 3,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
  },
  shootingChallenge1: {
    top: 24,
    fontSize: FontSize.size_18xl,
    lineHeight: 37,
  },
  shootingChallengeParent: {
    top: 300,
    left: 140,
    width: 85,
    height: 61,
    position: "absolute",
  },
  submitChallengesByQuestion: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SubmitChallengesByQuestion;
