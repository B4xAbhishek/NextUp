import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SubmitChallengesByVideo = () => {
  return (
    <View style={styles.submitChallengesByVideo}>
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
        <View style={[styles.timeStyle, styles.timeStyleLayout]}>
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
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={[styles.oneLastStep, styles.selectFileTypo]}>
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
      <View
        style={[styles.submitChallengesByVideoItem, styles.submitPosition]}
      />
      <Image
        style={styles.featheruploadCloudIcon}
        contentFit="cover"
        source={require("../assets/featheruploadcloud2.png")}
      />
      <Text style={[styles.selectAVideo, styles.addNotesTypo]}>
        Select a video
      </Text>
      <Text style={styles.mp4FileSize}>MP4 file size no more than 10MB</Text>
      <View style={styles.button}>
        <Text style={[styles.selectFile, styles.selectFileTypo]}>
          Select file
        </Text>
      </View>
      <View style={[styles.addNotesParent, styles.submitPosition]}>
        <Text style={[styles.addNotes, styles.addNotesTypo]}>Add Notes</Text>
        <View style={styles.rectangleCopy7} />
        <Text style={[styles.text, styles.homeTypo]}>0/260</Text>
      </View>
      <View
        style={[styles.submitChallengesByVideoInner, styles.groupChildLayout]}
      >
        <View style={[styles.ellipseParent, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-688.png")}
          />
          <View style={[styles.coachParent, styles.capIconPosition]}>
            <Text style={[styles.coach, styles.coachTypo]}>Coach</Text>
            <Text style={[styles.vaibhavChibbar, styles.addNotesTypo]}>
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
      <Image
        style={[styles.submitChallengesByVideoChild1, styles.submitPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-24044.png")}
      />
      <Image
        style={[styles.vuesaxlinearminusCirlceIcon, styles.timeStyleLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlinearminuscirlce.png")}
      />
      <Text style={[styles.shootingChallenge, styles.coachTypo]}>
        Total Point
      </Text>
      <Text style={[styles.shootingChallenge1, styles.addNotesTypo]}>2250</Text>
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
  timeStyleLayout: {
    height: 21,
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
  selectFileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  loremIpsumIsPosition: {
    width: 327,
    left: 24,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  submitPosition: {
    left: 18,
    position: "absolute",
  },
  addNotesTypo: {
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
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
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 311,
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
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
    borderColor: Color.othersWhite,
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
    color: Color.othersWhite,
    fontWeight: "600",
    letterSpacing: 0,
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    top: 7,
    width: 54,
    height: 21,
    left: 21,
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
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 28,
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
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 28,
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
    fontSize: FontSize.normalTextBody1X_size,
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
  submitChallengesByVideoItem: {
    top: 370,
    borderRadius: Border.br_3xs,
    borderStyle: "dashed",
    borderColor: Color.colorGray_200,
    width: 340,
    height: 135,
    borderWidth: 1,
    backgroundColor: Color.colorGray_200,
  },
  featheruploadCloudIcon: {
    top: 381,
    left: 171,
    width: 34,
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  selectAVideo: {
    top: 422,
    left: 143,
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  mp4FileSize: {
    top: 439,
    left: 94,
    color: Color.colorGray_300,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  selectFile: {
    fontSize: FontSize.size_3xs,
    textTransform: "uppercase",
    color: Color.colorDimgray_100,
  },
  button: {
    top: 460,
    left: 136,
    borderRadius: Border.br_8xs,
    borderColor: Color.colorDimgray_100,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorGray_200,
  },
  addNotes: {
    lineHeight: 22,
    fontSize: FontSize.normalTextBody1X_size,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    left: 0,
    top: 0,
  },
  rectangleCopy7: {
    borderRadius: Border.br_9xs,
    width: 339,
    height: 88,
    opacity: 0.24,
    top: 28,
    borderWidth: 1,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorGray_200,
  },
  text: {
    top: 90,
    left: 166,
    textAlign: "right",
    width: 164,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
    position: "absolute",
  },
  addNotesParent: {
    top: 595,
    width: 338,
    height: 115,
  },
  groupChild: {
    width: 36,
    left: 0,
    top: 0,
  },
  coach: {
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  vaibhavChibbar: {
    top: 15,
    lineHeight: 13,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    left: 0,
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
  submitChallengesByVideoInner: {
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
    fontSize: FontSize.bodyMediumSemibold_size,
    display: "flex",
    justifyContent: "center",
    height: 16,
    width: 311,
    alignItems: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "center",
    color: Color.othersWhite,
    left: 0,
    position: "absolute",
  },
  frameView: {
    top: 735,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    left: 0,
    position: "absolute",
  },
  submitChallengesByVideoChild1: {
    top: 530,
    borderRadius: Border.br_4xs,
    height: 49,
    width: 49,
  },
  vuesaxlinearminusCirlceIcon: {
    top: 523,
    left: 53,
    width: 21,
  },
  shootingChallenge: {
    top: 300,
    fontSize: FontSize.size_mid,
    left: 143,
    lineHeight: 20,
  },
  shootingChallenge1: {
    top: 324,
    left: 140,
    fontSize: FontSize.size_18xl,
    lineHeight: 37,
    fontWeight: "700",
  },
  submitChallengesByVideo: {
    flex: 1,
    width: "100%",
    height: 880,
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
  },
});

export default SubmitChallengesByVideo;
