import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AfterApprove = () => {
  return (
    <View style={[styles.afterApprove, styles.vectorIconLayout]}>
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle1.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
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
        <View style={[styles.timeStyle, styles.groupPosition1]}>
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
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
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={styles.oneLastStep}>Challenges submission</Text>
      <Text style={[styles.loremIpsumIs, styles.textLayout]}>
        Lorem Ipsum is simply dummy text of the ahhgdiijajah printing and
        typesetting industry. Lorem Ipsumaj isahh.
      </Text>
      <Text style={[styles.dribbleChallenge, styles.loremIpsumIsPosition]}>
        <Text style={styles.homeTypo}>Dribble</Text>
        <Text style={styles.challenge}> Challenge</Text>
      </Text>
      <View style={styles.afterApproveInner}>
        <View style={styles.rectangleCopy3Parent}>
          <View style={[styles.rectangleCopy3, styles.rectangleBg]} />
          <Text style={[styles.continue, styles.startTypo]}>Reply</Text>
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
          <View style={[styles.biplayCircleFillChild, styles.rectangleBg]} />
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
      <View style={[styles.afterApproveItem, styles.rectanglePosition]} />
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <View style={[styles.rectangleCopy3Group, styles.loremIpsumIsPosition]}>
        <View style={[styles.rectangleCopy31, styles.rectangleBg]} />
        <Text style={[styles.start, styles.startTypo]}>Submit</Text>
      </View>
      <Text style={[styles.addComments, styles.addCommentsPosition]}>
        Add comments
      </Text>
      <View style={[styles.rectangleCopy7, styles.addCommentsPosition]} />
      <Text style={[styles.text, styles.textLayout]}>0/260</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  rectanglePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
  },
  capIconPosition: {
    top: 4,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.othersWhite,
    position: "absolute",
  },
  groupPosition1: {
    left: 21,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.othersWhite,
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
  textLayout: {
    lineHeight: 20,
    position: "absolute",
  },
  loremIpsumIsPosition: {
    left: 24,
    width: 327,
  },
  rectangleBg: {
    backgroundColor: Color.nextupBlue,
    position: "absolute",
  },
  startTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 16,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 16,
    textAlign: "center",
    color: Color.othersWhite,
    left: 0,
    position: "absolute",
  },
  coachTypo: {
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  noteTypo1: {
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.othersWhite,
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
  addCommentsPosition: {
    left: 18,
    position: "absolute",
  },
  rectangleIcon: {
    height: 264,
    top: 0,
  },
  border: {
    right: 2,
    borderRadius: 3,
    width: 22,
    opacity: 0.35,
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
    fontFamily: FontFamily.robotoSerifSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
    fontSize: FontSize.size_mini,
    left: 0,
    width: 54,
  },
  timeStyle: {
    top: 7,
    height: 21,
    width: 54,
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
    width: 327,
    fontSize: FontSize.size_smi,
    left: 24,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.othersWhite,
  },
  challenge: {
    fontFamily: FontFamily.abhayaLibreBold,
    fontWeight: "700",
  },
  dribbleChallenge: {
    top: 132,
    fontSize: FontSize.size_13xl,
    lineHeight: 36,
    width: 327,
    textAlign: "center",
    color: Color.othersWhite,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleCopy3: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.nextupBlue,
    height: 48,
    left: 0,
    top: 0,
    width: 311,
  },
  continue: {
    height: 16,
    width: 311,
  },
  rectangleCopy3Parent: {
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
    fontWeight: "700",
    position: "absolute",
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
    textAlign: "left",
    color: Color.othersWhite,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
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
    fontWeight: "700",
    lineHeight: 20,
    position: "absolute",
    fontSize: FontSize.size_mini,
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
    left: 0,
    top: 0,
  },
  vaibhavChibbar: {
    lineHeight: 13,
    top: 15,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    left: 0,
    position: "absolute",
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
  afterApproveItem: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    top: 0,
    height: 932,
  },
  rectangleView: {
    top: 667,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 265,
    backgroundColor: Color.colorGray_200,
  },
  rectangleCopy31: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.nextupBlue,
    height: 48,
    left: 0,
    top: 0,
    width: 327,
  },
  start: {
    width: 327,
  },
  rectangleCopy3Group: {
    top: 852,
    height: 48,
    width: 327,
    position: "absolute",
  },
  addComments: {
    top: 697,
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.othersWhite,
    fontWeight: "600",
  },
  rectangleCopy7: {
    top: 725,
    borderRadius: Border.br_9xs,
    width: 339,
    opacity: 0.24,
    height: 90,
    borderWidth: 1,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
  },
  text: {
    top: 786,
    left: 184,
    textAlign: "right",
    width: 164,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
  },
  afterApprove: {
    flex: 1,
    overflow: "hidden",
    height: 932,
    backgroundColor: Color.colorGray_200,
  },
});

export default AfterApprove;
