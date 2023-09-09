import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const AfterApprove1 = () => {
  return (
    <View style={[styles.afterApprove, styles.vectorIconLayout]}>
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
          <View style={[styles.border, styles.borderBorder]} />
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
        <View style={styles.exploreParent}>
          <Text style={[styles.explore, styles.homeTypo]}>Message</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chatteardroptext2.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.groupPosition1]}>
          <Text style={[styles.home, styles.homeTypo]}>Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/house2.png")}
          />
        </View>
        <View style={styles.calendarParent}>
          <Text style={[styles.explore, styles.homeTypo]}>Calendar</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/calendarblank.png")}
          />
        </View>
        <View style={styles.myStandingParent}>
          <Text style={[styles.explore, styles.homeTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
          <Image
            style={[styles.usersIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/users1.png")}
          />
        </View>
        <View style={styles.proParent}>
          <Text style={[styles.explore, styles.homeTypo]}>Account</Text>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user11.png")}
          />
        </View>
      </View>
      <View style={[styles.group, styles.groupPosition1]}>
        <View style={[styles.rectangle, styles.borderBorder]} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={[styles.oneLastStep, styles.homeTypo]}>
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
      <View style={styles.afterApproveInner}>
        <View style={styles.rectangleLayout}>
          <View style={[styles.rectangleCopy3, styles.rectangleCopy3Bg]} />
          <Text style={[styles.continue, styles.noteTypo1]}>Reply</Text>
        </View>
      </View>
      <Text style={[styles.shootingChallenge, styles.coachTypo]}>
        Total Point
      </Text>
      <Text style={[styles.shootingChallenge1, styles.noteTypo1]}>2250</Text>
      <View style={[styles.plcyRealIdLicenseDcParent, styles.plcyLayout]}>
        <Image
          style={[styles.plcyRealIdLicenseDcIcon, styles.plcyLayout]}
          contentFit="cover"
          source={require("../assets/19-0927-plcy-realidlicensedc1.png")}
        />
        <View style={styles.biplayCircleFill}>
          <View
            style={[styles.biplayCircleFillChild, styles.rectangleCopy3Bg]}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.noteParent, styles.noteParentLayout]}>
          <Text style={[styles.note, styles.noteTypo]}>Note</Text>
          <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorTypo]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
            consectetur eget id donec tortor faucibus. Maecenas id vestibulum
            pharetra.
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <View style={[styles.commentParent, styles.commentParentLayout]}>
          <Text style={[styles.comment, styles.noteTypo1]}>Comment</Text>
          <Text style={[styles.yourUploadedViedeo, styles.commentParentLayout]}>
            Your uploaded viedeo is wrong please upload correct video.
          </Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.ellipseParent, styles.groupLayout]}>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-688.png")}
          />
          <View style={[styles.coachParent, styles.capIconPosition]}>
            <Text style={[styles.coach, styles.coachTypo]}>Coach</Text>
            <Text style={[styles.vaibhavChibbar, styles.noteTypo1]}>
              Vaibhav Chibbar
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
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
  groupPosition1: {
    left: 21,
    position: "absolute",
  },
  loremIpsumIsPosition: {
    width: 327,
    left: 24,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  rectangleCopy3Bg: {
    backgroundColor: Color.nextupBlue,
    position: "absolute",
  },
  noteTypo1: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.othersWhite,
    position: "absolute",
  },
  coachTypo: {
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  plcyLayout: {
    height: 144,
    width: 337,
    position: "absolute",
  },
  groupLayout1: {
    height: 117,
    width: 343,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.lighterDark,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  noteParentLayout: {
    width: 320,
    position: "absolute",
  },
  noteTypo: {
    fontSize: FontSize.size_mid,
    lineHeight: 20,
  },
  loremIpsumDolorTypo: {
    color: Color.colorGray_900,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: 0,
  },
  groupItemLayout: {
    height: 75,
    width: 303,
    position: "absolute",
  },
  commentParentLayout: {
    width: 283,
    position: "absolute",
  },
  groupLayout: {
    height: 36,
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
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
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
    fontWeight: "600",
    fontFamily: FontFamily.robotoSerifSemiBold,
    textAlign: "center",
    color: Color.othersWhite,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
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
    top: 10,
    height: 44,
    position: "absolute",
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
    top: 10,
    height: 44,
  },
  calendarParent: {
    left: 101,
    width: 48,
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
    top: 10,
    height: 44,
    position: "absolute",
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
    top: 851,
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
    fontSize: FontSize.normalTextBody1X_size,
    lineHeight: 24,
    textAlign: "left",
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
  rectangleCopy3: {
    borderRadius: Border.br_5xl,
    height: 48,
    width: 311,
    left: 0,
    top: 0,
  },
  continue: {
    top: 16,
    fontSize: FontSize.bodyMediumSemibold_size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 16,
    width: 311,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 16,
    textAlign: "center",
    left: 0,
  },
  rectangleLayout: {
    height: 48,
    width: 311,
  },
  afterApproveInner: {
    top: 783,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    left: 0,
    position: "absolute",
  },
  shootingChallenge: {
    top: 256,
    left: 143,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
  },
  shootingChallenge1: {
    top: 280,
    left: 140,
    fontSize: FontSize.size_18xl,
    lineHeight: 37,
    textAlign: "left",
  },
  plcyRealIdLicenseDcIcon: {
    borderRadius: Border.br_4xs,
    left: 0,
    top: 0,
  },
  biplayCircleFillChild: {
    height: "48.78%",
    width: "48.78%",
    top: "24.39%",
    right: "24.39%",
    bottom: "26.83%",
    left: "26.83%",
  },
  vectorIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  biplayCircleFill: {
    top: 52,
    left: 148,
    width: 41,
    height: 41,
    position: "absolute",
    overflow: "hidden",
  },
  plcyRealIdLicenseDcParent: {
    top: 340,
    left: 20,
  },
  groupChild: {
    height: 117,
    width: 343,
    position: "absolute",
  },
  note: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.othersWhite,
    position: "absolute",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  loremIpsumDolor: {
    top: 24,
    lineHeight: 22,
    width: 320,
    position: "absolute",
  },
  noteParent: {
    height: 90,
    top: 15,
    left: 13,
  },
  rectangleGroup: {
    top: 507,
    left: 17,
  },
  groupItem: {
    backgroundColor: Color.lighterDark,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  comment: {
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
    left: 0,
    top: 0,
  },
  yourUploadedViedeo: {
    top: 20,
    lineHeight: 18,
    color: Color.colorGray_900,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: 0,
  },
  commentParent: {
    height: 56,
    left: 13,
    top: 10,
  },
  rectangleContainer: {
    top: 685,
    left: 55,
  },
  groupInner: {
    width: 36,
    left: 0,
    top: 0,
  },
  coach: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    top: 0,
  },
  vaibhavChibbar: {
    lineHeight: 13,
    top: 15,
    fontSize: FontSize.size_smi,
    textAlign: "left",
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
  groupView: {
    top: 644,
    width: 138,
    height: 36,
    left: 17,
  },
  afterApprove: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default AfterApprove1;
