import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from "react-native";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import SectionCard1 from "../components/SectionCard1";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const PlayerStat = () => {
  return (
    <View style={styles.playerStat}>
      <Image
        style={styles.image19Icon}
        contentFit="cover"
        source={require("../assets/image-19.png")}
      />
      <Image
        style={[styles.playerStatChild, styles.playerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-24000.png")}
      />
      <Image
        style={[styles.playerStatItem, styles.playerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-24001.png")}
      />
      <Image
        style={styles.playerStatInner}
        contentFit="cover"
        source={require("../assets/rectangle-24002.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo2]}>6</Text>
        <Text style={[styles.rank, styles.rankPosition]}>RANK 1</Text>
      </View>
      <View style={styles.lebronJamesParent}>
        <Text style={[styles.lebronJames, styles.rankPosition]}>
          Lebron James
        </Text>
        <Text style={[styles.powerForward, styles.mpgTypo]}>
          Power Forward | Los Angeles Lakers
        </Text>
      </View>
      <View style={[styles.rectangleView, styles.playerPosition]} />
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
      <SectionCard1
        inboxIcon="Inbox"
        iconText={require("../assets/users.png")}
        iconCode={require("../assets/user2.png")}
        propTop={731}
        propLeft={250}
        propWidth={30}
        propLeft1={3}
      />
      <View style={styles.lineView} />
      <View style={styles.group}>
        <Text style={[styles.text1, styles.textTypo1]}>0</Text>
        <Text style={[styles.text2, styles.textTypo1]}>0</Text>
        <Text style={[styles.mpg, styles.mpgTypo]}>MPG</Text>
        <Text style={[styles.rbg, styles.rbgTypo]}>RBG</Text>
      </View>
      <View style={[styles.container, styles.containerLayout]}>
        <Text style={[styles.text3, styles.textTypo]}>0</Text>
        <Text style={[styles.text4, styles.textTypo]}>0</Text>
        <Text style={[styles.mpg, styles.mpgTypo]}>PPG</Text>
        <Text style={[styles.apg, styles.rbgTypo]}>APG</Text>
      </View>
      <View style={[styles.groupView, styles.containerLayout]}>
        <Text style={[styles.text3, styles.textTypo]}>0</Text>
        <Text style={[styles.text4, styles.textTypo]}>0</Text>
        <Text style={[styles.mpg, styles.mpgTypo]}>FG%</Text>
        <Text style={[styles.spg, styles.rbgTypo]}>SPG</Text>
      </View>
      <View style={[styles.playerStatChild1, styles.playerChildLayout]} />
      <View style={[styles.playerStatChild2, styles.playerChildLayout]} />
      <View style={styles.playerStatChild3} />
      <Text style={styles.bulls}>Stats</Text>
      <Text style={[styles.warriors, styles.warriorsTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
      <Text style={[styles.warriors1, styles.warriorsTypo]}>Content</Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-10000030611.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  playerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  textTypo2: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
  },
  rankPosition: {
    color: Color.neutral0,
    left: 0,
    position: "absolute",
  },
  mpgTypo: {
    color: Color.colorGray_900,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    left: 0,
    position: "absolute",
  },
  textTypo1: {
    left: 4,
    color: Color.neutral0,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    position: "absolute",
  },
  rbgTypo: {
    top: 141,
    color: Color.colorGray_900,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  containerLayout: {
    width: 28,
    height: 155,
    top: 519,
    position: "absolute",
  },
  textTypo: {
    left: 3,
    color: Color.neutral0,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    position: "absolute",
  },
  playerChildLayout: {
    height: 71,
    top: 562,
    opacity: 0.2,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.neutral0,
    borderStyle: "solid",
    position: "absolute",
  },
  warriorsTypo: {
    color: Color.colorDarkgray_100,
    top: 468,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  image19Icon: {
    width: 438,
    height: 626,
    left: 0,
    top: 0,
    position: "absolute",
  },
  playerStatChild: {
    top: 328,
    height: 146,
  },
  playerStatItem: {
    top: 348,
    height: 126,
  },
  playerStatInner: {
    top: 367,
    width: 376,
    height: 124,
    left: 0,
    position: "absolute",
  },
  text: {
    left: 6,
    color: Color.colorGoldenrod_100,
    textAlign: "center",
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  rank: {
    top: 39,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    lineHeight: 14,
    color: Color.neutral0,
    textAlign: "center",
  },
  parent: {
    top: 391,
    left: 24,
    width: 35,
    height: 53,
    position: "absolute",
  },
  lebronJames: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
  },
  powerForward: {
    top: 29,
    textAlign: "left",
  },
  lebronJamesParent: {
    top: 396,
    left: 86,
    width: 226,
    height: 43,
    position: "absolute",
  },
  rectangleView: {
    top: 491,
    backgroundColor: Color.lighterDark,
    height: 332,
  },
  lineView: {
    top: 397,
    left: 72,
    height: 27,
    opacity: 0.2,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.neutral0,
    borderStyle: "solid",
    position: "absolute",
  },
  text1: {
    top: 0,
  },
  text2: {
    top: 101,
  },
  mpg: {
    top: 40,
    textAlign: "center",
  },
  rbg: {
    left: 2,
  },
  group: {
    left: 45,
    width: 31,
    height: 155,
    top: 519,
    position: "absolute",
  },
  text3: {
    top: 0,
  },
  text4: {
    top: 101,
  },
  apg: {
    left: 0,
  },
  container: {
    left: 173,
  },
  spg: {
    left: 1,
  },
  groupView: {
    left: 299,
  },
  playerStatChild1: {
    left: 124,
  },
  playerStatChild2: {
    left: 249,
  },
  playerStatChild3: {
    top: 489,
    left: 18,
    backgroundColor: Color.neutral0,
    width: 103,
    height: 2,
    position: "absolute",
  },
  bulls: {
    left: 52,
    fontWeight: "600",
    top: 468,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  warriors: {
    left: 159,
  },
  warriors1: {
    left: 305,
  },
  groupIcon: {
    top: 333,
    left: 258,
    width: 98,
    height: 45,
    position: "absolute",
  },
  playerStat: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PlayerStat;
