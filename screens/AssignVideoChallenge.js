import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const AssignVideoChallenge = () => {
  return (
    <View style={[styles.assignVideoChallenge, styles.vectorIconLayout]}>
      <Image
        style={styles.assignVideoChallengeChild}
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
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Image
        style={styles.assignVideoChallengeChild}
        contentFit="cover"
        source={require("../assets/rectangle1.png")}
      />
      <Text style={[styles.loremIpsumIs, styles.startLayout]}>
        Lorem Ipsum is simply dummy text of the ahhgdiijajah printing and
        typesetting industry. Lorem Ipsumaj isahh.
      </Text>
      <Text style={[styles.dribbleChallenge, styles.startLayout]}>
        <Text style={styles.textTypo}>Dribble</Text>
        <Text style={styles.challenge}> Challenge</Text>
      </Text>
      <Text style={[styles.comments, styles.commentsPosition]}>Comments</Text>
      <View style={[styles.rectangleCopy7, styles.commentsPosition]} />
      <Text style={[styles.text, styles.textLayout]}>0/260</Text>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={styles.plcyRealIdLicenseDcParent}>
          <Image
            style={[styles.plcyRealIdLicenseDcIcon, styles.plcyIconLayout]}
            contentFit="cover"
            source={require("../assets/19-0927-plcy-realidlicensedc.png")}
          />
          <View style={[styles.biplayCircleFill, styles.biplayLayout]}>
            <View style={styles.biplayCircleFillChild} />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
        <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.noteParent, styles.noteParentLayout]}>
            <Text style={[styles.note, styles.noteTypo]}>Note</Text>
            <Text style={[styles.loremIpsumDolor, styles.loremIpsumDolorTypo]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
              consectetur eget id donec tortor faucibus. Maecenas id vestibulum
              pharetra, enim gravida ipsum. Elit consectetur eget id donec
              tortor faucibus. Maecenas id
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.commentParent, styles.commentParentLayout]}>
            <Text style={[styles.comment, styles.textLayout]}>Comment</Text>
            <Text
              style={[styles.yourUploadedViedeo, styles.commentParentLayout]}
            >
              Your uploaded viedeo is wrong please upload correct video.
            </Text>
          </View>
        </View>
        <View style={[styles.groupWrapper, styles.groupInnerLayout]}>
          <View style={[styles.ellipseParent, styles.groupInnerLayout]}>
            <Image
              style={[styles.groupInner, styles.groupInnerLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-688.png")}
            />
            <View style={[styles.coachParent, styles.capIconPosition]}>
              <Text style={[styles.coach, styles.coachTypo]}>Coach</Text>
              <Text style={[styles.vaibhavChibbar, styles.selectAVideoTypo]}>
                Vaibhav Chibbar
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.assignVideoChallengeInner, styles.groupContainerLayout]}
      >
        <View style={[styles.groupContainer, styles.groupContainerLayout]}>
          <View style={styles.plcyRealIdLicenseDcGroup}>
            <Image
              style={[styles.plcyRealIdLicenseDcIcon1, styles.plcyIconLayout]}
              contentFit="cover"
              source={require("../assets/19-0927-plcy-realidlicensedc.png")}
            />
            <Text style={[styles.coach, styles.coachTypo]}>
              12 Aug 2022 16:23
            </Text>
            <View style={[styles.biplayCircleFill1, styles.biplayLayout]}>
              <View style={styles.biplayCircleFillChild} />
              <Image
                style={[styles.vectorIcon, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout1]}>
            <View style={[styles.groupChild, styles.groupPosition]} />
            <View style={[styles.noteParent, styles.noteParentLayout]}>
              <Text style={[styles.note, styles.noteTypo]}>Note</Text>
              <Text
                style={[styles.loremIpsumDolor, styles.loremIpsumDolorTypo]}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
                consectetur eget id donec tortor faucibus. Maecenas id
                vestibulum pharetra, enim gravida ipsum. Elit consectetur eget
                id donec tortor faucibus. Maecenas id
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.assignVideoChallengeItem, styles.groupParentLayout]}
      />
      <View style={[styles.rectangleCopy3Parent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
        <Text style={[styles.start, styles.startLayout]}>Resubmit</Text>
      </View>
      <View style={styles.groupView}>
        <View style={[styles.groupChild1, styles.rectanglePosition]} />
        <Image
          style={styles.featheruploadCloudIcon}
          contentFit="cover"
          source={require("../assets/featheruploadcloud.png")}
        />
        <Text style={[styles.selectAVideo, styles.selectAVideoTypo]}>
          Select a video
        </Text>
        <Text style={styles.mp4FileSize}>MP4 file size no more than 10MB</Text>
        <View style={styles.button}>
          <Text style={[styles.selectFile, styles.textTypo]}>Select file</Text>
        </View>
      </View>
      <View
        style={[styles.assignVideoChallengeInner1, styles.groupInnerLayout]}
      >
        <View style={[styles.ellipseParent, styles.groupInnerLayout]}>
          <Image
            style={[styles.groupInner, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-688.png")}
          />
          <View style={[styles.coachParent, styles.capIconPosition]}>
            <Text style={[styles.coach, styles.coachTypo]}>Coach</Text>
            <Text style={[styles.vaibhavChibbar, styles.selectAVideoTypo]}>
              Vaibhav Chibbar
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.shootingChallenge, styles.coachTypo]}>
        Total Point
      </Text>
      <Text style={[styles.shootingChallenge1, styles.noteTypo1]}>2250</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  borderBorder: {
    borderColor: Color.othersWhite,
    borderStyle: "solid",
  },
  capIconPosition: {
    top: 4,
    position: "absolute",
  },
  rectanglePosition: {
    left: -1,
    top: -1,
    position: "absolute",
  },
  startLayout: {
    width: 327,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  commentsPosition: {
    left: 18,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 20,
    color: Color.othersWhite,
    position: "absolute",
  },
  groupParentLayout: {
    width: 344,
    position: "absolute",
  },
  plcyIconLayout: {
    borderRadius: Border.br_4xs,
    height: 195,
    width: 337,
    left: 0,
    position: "absolute",
  },
  biplayLayout: {
    height: 41,
    width: 41,
    left: 148,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout1: {
    height: 161,
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
  groupLayout: {
    height: 75,
    width: 303,
    position: "absolute",
  },
  commentParentLayout: {
    width: 283,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 36,
    position: "absolute",
  },
  coachTypo: {
    color: Color.colorSilver,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  selectAVideoTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    position: "absolute",
  },
  groupContainerLayout: {
    height: 395,
    width: 343,
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 327,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  noteTypo1: {
    color: Color.othersWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
  },
  assignVideoChallengeChild: {
    width: 375,
    height: 264,
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
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.othersWhite,
    width: 18,
    height: 7,
    position: "absolute",
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
    top: "50%",
    fontFamily: FontFamily.robotoSerifSemiBold,
    textAlign: "center",
    color: Color.othersWhite,
    fontWeight: "600",
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
  rectangle: {
    borderRadius: Border.br_7xs,
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
    borderStyle: "solid",
    left: -1,
    top: -1,
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
  loremIpsumIs: {
    top: 168,
    justifyContent: "center",
    display: "flex",
    lineHeight: 16,
    width: 327,
    alignItems: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 24,
    height: 32,
  },
  challenge: {
    fontFamily: FontFamily.abhayaLibreBold,
    fontWeight: "700",
  },
  dribbleChallenge: {
    top: 132,
    fontSize: FontSize.size_13xl,
    lineHeight: 36,
    left: 24,
    width: 327,
    letterSpacing: 0,
  },
  comments: {
    top: 506,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    lineHeight: 22,
    color: Color.othersWhite,
    fontWeight: "600",
  },
  rectangleCopy7: {
    top: 534,
    borderRadius: Border.br_9xs,
    width: 339,
    height: 90,
    opacity: 0.24,
    borderWidth: 1,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
  },
  text: {
    top: 595,
    left: 184,
    textAlign: "right",
    width: 164,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  plcyRealIdLicenseDcIcon: {
    top: 0,
  },
  biplayCircleFillChild: {
    height: "48.78%",
    width: "48.78%",
    top: "24.39%",
    right: "24.39%",
    bottom: "26.83%",
    left: "26.83%",
    backgroundColor: Color.nextupBlue,
    position: "absolute",
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
    top: 77,
  },
  plcyRealIdLicenseDcParent: {
    height: 195,
    width: 337,
    left: 3,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: 161,
    width: 343,
    position: "absolute",
  },
  note: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    color: Color.othersWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 24,
    width: 320,
    position: "absolute",
    lineHeight: 22,
  },
  noteParent: {
    height: 134,
    left: 13,
    top: 15,
  },
  rectangleParent: {
    top: 211,
    left: 0,
  },
  groupItem: {
    backgroundColor: Color.lighterDark,
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
  },
  comment: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    lineHeight: 20,
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
    top: 10,
    left: 13,
  },
  rectangleGroup: {
    top: 429,
    left: 41,
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
  groupWrapper: {
    top: 388,
    width: 138,
    height: 36,
    left: 3,
  },
  groupParent: {
    top: 1089,
    left: 15,
    height: 504,
  },
  plcyRealIdLicenseDcIcon1: {
    top: 23,
  },
  biplayCircleFill1: {
    top: 100,
  },
  plcyRealIdLicenseDcGroup: {
    height: 218,
    width: 337,
    left: 3,
    top: 0,
    position: "absolute",
  },
  rectangleContainer: {
    top: 234,
    left: 0,
  },
  groupContainer: {
    left: 0,
    top: 0,
  },
  assignVideoChallengeInner: {
    top: 656,
    left: 17,
  },
  assignVideoChallengeItem: {
    top: 1072,
    left: 16,
    borderTopWidth: 1,
    height: 1,
    opacity: 0.2,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
  },
  rectangleCopy3: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.nextupBlue,
    left: 0,
    top: 0,
  },
  start: {
    top: 16,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    justifyContent: "center",
    display: "flex",
    lineHeight: 16,
    width: 327,
    alignItems: "center",
    left: 0,
  },
  rectangleCopy3Parent: {
    top: 1620,
    left: 24,
  },
  groupChild1: {
    borderRadius: Border.br_3xs,
    borderStyle: "dashed",
    borderColor: Color.colorGray_200,
    width: 340,
    height: 135,
    borderWidth: 1,
    backgroundColor: Color.colorGray_200,
  },
  featheruploadCloudIcon: {
    left: 152,
    width: 34,
    height: 34,
    top: 10,
    position: "absolute",
    overflow: "hidden",
  },
  selectAVideo: {
    top: 51,
    left: 124,
    fontWeight: "600",
  },
  mp4FileSize: {
    top: 68,
    left: 75,
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
    textAlign: "left",
  },
  button: {
    top: 89,
    left: 117,
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
  groupView: {
    top: 347,
    left: 19,
    width: 338,
    height: 133,
    position: "absolute",
  },
  assignVideoChallengeInner1: {
    top: 216,
    left: 113,
    width: 138,
    height: 36,
  },
  shootingChallenge: {
    top: 269,
    left: 143,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
  },
  shootingChallenge1: {
    top: 293,
    left: 140,
    fontSize: FontSize.size_18xl,
    lineHeight: 37,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  assignVideoChallenge: {
    flex: 1,
    height: 1682,
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
  },
});

export default AssignVideoChallenge;
