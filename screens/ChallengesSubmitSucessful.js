import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ChallengesSubmitSucessful = () => {
  return (
    <View style={styles.challengesSubmitSucessful}>
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconPosition]}
          contentFit="cover"
          source={require("../assets/rectangle1.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconPosition]}
          contentFit="cover"
          source={require("../assets/group-33.png")}
        />
        <View style={styles.barsStatusBarIphoneD}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.borderBorder]} />
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
          <View style={[styles.timeStyle, styles.groupPosition]}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout1]}>
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
              style={[styles.chatteardroptextIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/chatteardroptext2.png")}
            />
          </View>
          <View style={[styles.homeParent, styles.parentPosition]}>
            <Text style={[styles.home, styles.homeTypo]}>Dashboard</Text>
            <Image
              style={[styles.houseIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/house2.png")}
            />
          </View>
          <View style={[styles.calendarParent, styles.calendarParentLayout]}>
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
              source={require("../assets/users.png")}
            />
          </View>
          <View style={[styles.proParent, styles.parentPosition]}>
            <Text style={[styles.explore, styles.homeTypo]}>Account</Text>
            <Image
              style={[styles.userIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/user2.png")}
            />
          </View>
        </View>
        <View style={[styles.group, styles.groupPosition]}>
          <View style={[styles.rectangle, styles.buttonBorder]} />
          <Image
            style={styles.path2Icon}
            contentFit="cover"
            source={require("../assets/path-21.png")}
          />
        </View>
        <Text style={[styles.oneLastStep, styles.addNotesTypo]}>
          Challenges submission
        </Text>
        <Text style={[styles.loremIpsumIs, styles.loremIpsumIsPosition]}>
          Lorem Ipsum is simply dummy text of the ahhgdiijajah printing and
          typesetting industry. Lorem Ipsumaj isahh.
        </Text>
        <Text style={[styles.dribbleChallenge, styles.loremIpsumIsPosition]}>
          <Text style={styles.homeTypo}>Dribble</Text>
          <Text style={styles.challenge}> Challenge</Text>
        </Text>
        <View style={[styles.groupItem, styles.addNotesPosition]} />
        <Image
          style={[styles.featheruploadCloudIcon, styles.calendarParentLayout]}
          contentFit="cover"
          source={require("../assets/featheruploadcloud1.png")}
        />
        <Text style={[styles.selectAVideo, styles.addNotesTypo1]}>
          Select a video
        </Text>
        <Text style={[styles.mp4FileSize, styles.homeTypo1]}>
          MP4 file size no more than 10MB
        </Text>
        <View style={[styles.button, styles.buttonBorder]}>
          <Text style={[styles.selectFile, styles.homeTypo]}>Select file</Text>
        </View>
        <Text style={[styles.addNotes, styles.addNotesPosition]}>
          Add Notes
        </Text>
        <View style={[styles.rectangleCopy7, styles.addNotesPosition]} />
        <Text style={[styles.text, styles.textTypo]}>0/260</Text>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.ellipseParent, styles.groupLayout]}>
            <Image
              style={[styles.groupInner, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-688.png")}
            />
            <View style={styles.coachParent}>
              <Text style={[styles.coach, styles.homeTypo1]}>Coach</Text>
              <Text style={styles.vaibhavChibbar}>Vaibhav Chibbar</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.rectangleCopy3Parent}>
            <View style={[styles.rectangleCopy3, styles.rectanglePosition]} />
            <Text style={[styles.continue, styles.continueTypo]}>Submit</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.challengesSubmitSucessfulChild,
          styles.rectangleIconPosition,
        ]}
      />
      <View style={styles.challengesSubmitSucessfulItem} />
      <Text style={[styles.ohhNoo, styles.timeTypo]}>Ohh Noo!!!</Text>
      <Text
        style={[styles.badLuckHey, styles.continueTypo]}
      >{`Bad luck!! Hey your submited answer was
wrong Please try again.`}</Text>
      <View
        style={[styles.challengesSubmitSucessfulInner, styles.rectangleLayout]}
      >
        <View style={[styles.rectangleCopy3Group, styles.rectangleLayout]}>
          <View style={[styles.rectangleCopy31, styles.rectangleLayout]} />
          <Text style={[styles.continue1, styles.continueTypo]}>Retry</Text>
        </View>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <Image
        style={[styles.closeCircleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/closecircle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIconPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  borderBorder: {
    borderColor: Color.othersWhite,
    borderWidth: 1,
    borderStyle: "solid",
  },
  capacityBg: {
    backgroundColor: Color.othersWhite,
    position: "absolute",
  },
  groupPosition: {
    left: 21,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    color: Color.othersWhite,
    fontWeight: "600",
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
  },
  homeTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  calendarParentLayout: {
    width: 48,
    position: "absolute",
  },
  buttonBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  addNotesTypo: {
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "left",
    color: Color.othersWhite,
  },
  loremIpsumIsPosition: {
    width: 327,
    left: 24,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  addNotesPosition: {
    left: 18,
    position: "absolute",
  },
  addNotesTypo1: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  homeTypo1: {
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 20,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  groupLayout: {
    height: 36,
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.nextupBlue,
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  continueTypo: {
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  rectangleLayout: {
    height: 40,
    width: 223,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    height: 264,
  },
  border: {
    right: 2,
    borderRadius: 3,
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
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
    fontFamily: FontFamily.robotoSerifSemiBold,
    letterSpacing: 0,
    width: 54,
    left: 0,
  },
  timeStyle: {
    top: 7,
    height: 21,
    width: 54,
  },
  barsStatusBarIphoneD: {
    height: 44,
    width: 376,
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
    fontSize: FontSize.size_xs,
    position: "absolute",
    top: 28,
    fontWeight: "500",
    textAlign: "center",
    left: 0,
  },
  chatteardroptextIcon: {
    left: 12,
  },
  exploreParent: {
    left: 241,
    width: 49,
    position: "absolute",
  },
  home: {
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
    top: 28,
    fontWeight: "500",
    textAlign: "center",
    left: 0,
    color: Color.othersWhite,
  },
  houseIcon: {
    left: 17,
  },
  homeParent: {
    width: 59,
    left: 21,
    position: "absolute",
  },
  calendarParent: {
    left: 101,
    top: 10,
    height: 44,
  },
  usersIcon: {
    left: 13,
  },
  myStandingParent: {
    left: 170,
    width: 50,
    position: "absolute",
  },
  userIcon: {
    left: 11,
  },
  proParent: {
    left: 310,
    width: 45,
    position: "absolute",
  },
  rectangleGroup: {
    top: 799,
  },
  rectangle: {
    top: -1,
    left: -1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
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
  },
  oneLastStep: {
    top: 65,
    left: 65,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  loremIpsumIs: {
    top: 204,
    lineHeight: 20,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  challenge: {
    fontFamily: FontFamily.abhayaLibreBold,
    fontWeight: "700",
  },
  dribbleChallenge: {
    top: 161,
    fontSize: FontSize.size_13xl,
    lineHeight: 36,
    letterSpacing: 0,
  },
  groupItem: {
    top: 345,
    borderRadius: Border.br_3xs,
    borderStyle: "dashed",
    borderColor: Color.colorGray_200,
    width: 340,
    height: 189,
    borderWidth: 1,
    backgroundColor: Color.colorGray_200,
  },
  featheruploadCloudIcon: {
    top: 373,
    left: 164,
    height: 48,
    overflow: "hidden",
  },
  selectAVideo: {
    top: 430,
    left: 143,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  mp4FileSize: {
    top: 448,
    left: 94,
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  selectFile: {
    fontSize: FontSize.size_3xs,
    textTransform: "uppercase",
    color: Color.nextupBlue,
    textAlign: "left",
  },
  button: {
    top: 476,
    left: 136,
    borderRadius: Border.br_8xs,
    borderColor: Color.nextupBlue,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: Color.colorGray_200,
  },
  addNotes: {
    top: 553,
    lineHeight: 22,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    fontSize: FontSize.normalTextBody1X_size,
    color: Color.othersWhite,
    fontWeight: "600",
  },
  rectangleCopy7: {
    top: 581,
    borderRadius: Border.br_9xs,
    width: 339,
    height: 109,
    opacity: 0.24,
    borderWidth: 1,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
  },
  text: {
    top: 666,
    left: 184,
    textAlign: "right",
    width: 164,
    fontSize: FontSize.size_xs,
    position: "absolute",
    color: Color.othersWhite,
  },
  groupInner: {
    width: 36,
    left: 0,
    top: 0,
  },
  coach: {
    top: 14,
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: 0,
  },
  vaibhavChibbar: {
    lineHeight: 13,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.othersWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  coachParent: {
    top: 5,
    left: 42,
    width: 96,
    height: 28,
    position: "absolute",
  },
  ellipseParent: {
    width: 138,
    height: 36,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 280,
    left: 113,
    width: 138,
    height: 36,
  },
  rectangleCopy3: {
    width: 311,
    height: 48,
    position: "absolute",
  },
  continue: {
    top: 16,
    display: "flex",
    justifyContent: "center",
    height: 16,
    width: 311,
    alignItems: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
    left: 0,
  },
  rectangleCopy3Parent: {
    width: 311,
    height: 48,
  },
  groupContainer: {
    top: 716,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    width: 376,
    left: 0,
    top: 0,
    position: "absolute",
    height: 880,
  },
  challengesSubmitSucessfulChild: {
    backgroundColor: Color.neutral500,
    opacity: 0.6,
    height: 880,
  },
  challengesSubmitSucessfulItem: {
    top: 289,
    left: 32,
    backgroundColor: Color.lighterDark,
    width: 312,
    height: 302,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  ohhNoo: {
    top: 434,
    left: 141,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
  },
  badLuckHey: {
    top: 464,
    left: 59,
    lineHeight: 18,
    fontFamily: FontFamily.robotoRegular,
  },
  rectangleCopy31: {
    backgroundColor: Color.nextupBlue,
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  continue1: {
    top: 12,
    left: 95,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
  },
  rectangleCopy3Group: {
    left: 0,
    top: 0,
  },
  challengesSubmitSucessfulInner: {
    top: 522,
    left: 77,
  },
  groupIcon: {
    height: "6.55%",
    width: "12.42%",
    top: "37.79%",
    right: "40.41%",
    bottom: "55.66%",
    left: "47.18%",
  },
  closeCircleIcon: {
    height: "9.55%",
    width: "22.4%",
    top: "37.05%",
    right: "38.67%",
    bottom: "53.41%",
    left: "38.93%",
  },
  challengesSubmitSucessful: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 880,
    backgroundColor: Color.colorGray_200,
  },
});

export default ChallengesSubmitSucessful;
