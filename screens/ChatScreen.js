import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import OutBubble from "../components/OutBubble";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.chatScreen}>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("Inbox")}
      >
        <View style={[styles.rectangle, styles.rectangleBorder]} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </Pressable>
      <View
        style={[styles.avatarWithoutOnlineBadgeParent, styles.avatarLayout]}
      >
        <Image
          style={[styles.avatarWithoutOnlineBadge, styles.avatarLayout]}
          contentFit="cover"
          source={require("../assets/avatar-without-online-badge.png")}
        />
        <View style={[styles.text, styles.textPosition]}>
          <Text style={[styles.name, styles.nameFlexBox]}>Kervin</Text>
          <Text style={[styles.status, styles.text1Typo]}>online</Text>
        </View>
      </View>
      <View style={[styles.chatScreenChild, styles.rectangleBorder]} />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={styles.december182020Parent}>
          <Text style={styles.december182020}>December 18, 2020</Text>
          <Text style={styles.rayHasAccepted}>
            Ray has accepted your request and preparing your challenge.
          </Text>
        </View>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1000002987.png")}
        />
      </View>
      <View style={styles.timeParent}>
        <Text style={styles.time}>11:59 am</Text>
        <View style={[styles.main, styles.textPosition]}>
          <View style={[styles.reply, styles.replyBg]} />
          <View style={styles.separator} />
          <View style={[styles.outbubble, styles.outbubbleBorder]}>
            <Text style={[styles.text1, styles.text1Typo]}>Hi!</Text>
          </View>
          <View style={[styles.attachmentBubble, styles.outbubbleBorder]} />
        </View>
      </View>
      <Container />
      <View style={styles.groupMessages1}>
        <OutBubble
          time="11:30 pm"
          text="We can meet? I am free"
          fileIcon={require("../assets/file-icon1.png")}
          outBubblePosition="unset"
          outBubbleAlignSelf="stretch"
          outBubbleMarginTop="unset"
          timeFontFamily="Roboto-Medium"
          timeColor="rgba(21, 21, 21, 0.64)"
          outBubbleBackgroundColor="#23262f"
          outBubbleBorderBottomRightRadius={8}
          textFontSize={16}
          textLetterSpacing={-1}
          textFontFamily="Roboto-Medium"
          textColor="#fafafa"
          attachmentBubbleBorderBottomRightRadius={8}
        />
        <OutBubble
          time="11:30 pm"
          text={`Can you write the time and
place of the meeting?`}
          fileIcon={require("../assets/file-icon1.png")}
          outBubblePosition="unset"
          outBubbleAlignSelf="stretch"
          outBubbleMarginTop={4}
          timeFontFamily="Roboto-Medium"
          timeColor="rgba(21, 21, 21, 0.64)"
          outBubbleBackgroundColor="#23262f"
          outBubbleBorderBottomRightRadius={20}
          textFontSize={17}
          textLetterSpacing={-1}
          textFontFamily="Roboto-Medium"
          textColor="#fafafa"
          attachmentBubbleBorderBottomRightRadius={20}
        />
      </View>
      <Image
        style={styles.chatScreenItem}
        contentFit="cover"
        source={require("../assets/group-61.png")}
      />
      <Image
        style={[styles.icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/1.png")}
      />
      <Image
        style={[styles.icon1, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/2.png")}
      />
      <Image
        style={[styles.icon2, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/3.png")}
      />
      <Text style={styles.time1}>12:56 pm</Text>
      <View style={[styles.rectangleCopy8Parent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy8, styles.rectangleLayout]} />
        <Text style={styles.typeAMessage}>Type a message</Text>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
        <Image
          style={[styles.groupIcon, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
      </View>
      <Image
        style={styles.chatScreenInner}
        contentFit="cover"
        source={require("../assets/group-1000002994.png")}
      />
      <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
        <View style={[styles.bounds, styles.boundsLayout]} />
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={[styles.paperclipIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/paperclip.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  avatarLayout: {
    height: 45,
    position: "absolute",
  },
  textPosition: {
    left: 60,
    position: "absolute",
  },
  nameFlexBox: {
    textAlign: "left",
    color: Color.white,
    letterSpacing: 0,
  },
  text1Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  groupLayout: {
    height: 46,
    position: "absolute",
  },
  replyBg: {
    backgroundColor: Color.colorGainsboro_100,
    display: "none",
  },
  outbubbleBorder: {
    borderWidth: 1,
    borderColor: Color.colorGray_700,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "rgba(35, 35, 35, 0.05)",
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderStyle: "solid",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    left: "61.87%",
    right: "4.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "33.33%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 48,
    width: 327,
    position: "absolute",
  },
  groupPosition: {
    height: 20,
    top: 14,
    opacity: 0.37,
    position: "absolute",
  },
  boundsLayout: {
    width: 375,
    height: 20,
    left: 0,
    position: "absolute",
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
    height: 12,
    width: 14,
    position: "absolute",
  },
  group: {
    top: 62,
    left: 21,
    width: 30,
    height: 30,
    position: "absolute",
  },
  avatarWithoutOnlineBadge: {
    width: 45,
    left: 0,
    top: 0,
  },
  name: {
    marginLeft: -36,
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  status: {
    marginLeft: -34,
    top: 23,
    fontSize: FontSize.bodyMediumSemibold_size,
    letterSpacing: -1,
    color: Color.colorRoyalblue,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 3,
    width: 72,
    height: 40,
  },
  avatarWithoutOnlineBadgeParent: {
    top: 54,
    left: 122,
    width: 132,
  },
  chatScreenChild: {
    top: 119,
    borderColor: "#333",
    borderTopWidth: 1,
    width: 376,
    height: 1,
    left: 0,
  },
  december182020: {
    fontSize: FontSize.size_3xs,
    lineHeight: 10,
    color: Color.colorDarkgray_100,
    display: "flex",
    height: 16,
    alignItems: "center",
    fontFamily: FontFamily.robotoRegular,
    width: 275,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  rayHasAccepted: {
    top: 16,
    lineHeight: 15,
    width: 273,
    color: Color.neutral0,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  december182020Parent: {
    left: 53,
    width: 275,
    height: 46,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    width: 46,
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 136,
    width: 328,
    left: 24,
  },
  time: {
    top: 25,
    textAlign: "right",
    color: Color.colorGray_500,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  reply: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_xl,
    display: "none",
    alignSelf: "stretch",
  },
  separator: {
    backgroundColor: Color.colorLightslategray,
    display: "none",
    alignSelf: "stretch",
    height: 1,
    overflow: "hidden",
  },
  text1: {
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "left",
    color: Color.white,
    letterSpacing: 0,
  },
  outbubble: {
    backgroundColor: Color.lighterDark,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
  attachmentBubble: {
    display: "none",
    backgroundColor: Color.colorGainsboro_100,
    alignItems: "center",
  },
  main: {
    alignItems: "flex-end",
    top: 0,
  },
  timeParent: {
    top: 209,
    left: 245,
    width: 112,
    height: 43,
    position: "absolute",
  },
  groupMessages1: {
    top: 326,
    left: -24,
    width: 380,
    position: "absolute",
  },
  chatScreenItem: {
    top: 465,
    left: 18,
    width: 231,
    height: 112,
    position: "absolute",
  },
  icon: {
    height: "19.14%",
    top: "61.72%",
    right: "38.13%",
    left: "28.53%",
    borderTopLeftRadius: Border.br_sm,
    borderBottomLeftRadius: Border.br_sm,
    bottom: "19.14%",
    width: "33.33%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  icon1: {
    height: "9.52%",
    top: "61.82%",
    bottom: "28.66%",
    borderTopRightRadius: Border.br_sm,
  },
  icon2: {
    height: "9.42%",
    top: "71.44%",
    bottom: "19.14%",
  },
  time1: {
    top: 863,
    left: 50,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleCopy8: {
    borderRadius: 26,
    backgroundColor: "#272930",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 327,
    left: 0,
    top: 0,
  },
  typeAMessage: {
    top: 17,
    left: 44,
    lineHeight: 14,
    width: 120,
    opacity: 0.37,
    fontSize: FontSize.size_xs,
    color: Color.neutral0,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    left: 16,
    width: 20,
  },
  groupInner: {
    left: 263,
    width: 24,
  },
  groupIcon: {
    left: 297,
    width: 14,
  },
  rectangleCopy8Parent: {
    top: 914,
    left: 24,
  },
  chatScreenInner: {
    top: 819,
    left: 107,
    width: 250,
    height: 58,
    position: "absolute",
  },
  bounds: {
    top: 0,
  },
  homeIndicator: {
    top: 8,
    left: 120,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.neutral0,
    width: 135,
    height: 4,
    position: "absolute",
  },
  homeIndicatorLight: {
    top: 978,
  },
  paperclipIcon: {
    height: "2.61%",
    width: "6.93%",
    top: "92.69%",
    right: "25.07%",
    bottom: "4.71%",
    left: "68%",
  },
  chatScreen: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 998,
    overflow: "hidden",
  },
});

export default ChatScreen;
