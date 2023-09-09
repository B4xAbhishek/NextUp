import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const PlayerProfileOnCoachsTeam = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.playerProfileOnCoachsTeam}>
      <Image
        style={styles.image19Icon}
        contentFit="cover"
        source={require("../assets/image-19.png")}
      />
      <Image
        style={[styles.playerProfileOnCoachsTeamChild, styles.playerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-24000.png")}
      />
      <Image
        style={[styles.playerProfileOnCoachsTeamItem, styles.playerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-24001.png")}
      />
      <Image
        style={styles.playerProfileOnCoachsTeamInner}
        contentFit="cover"
        source={require("../assets/rectangle-24002.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo]}>6</Text>
        <Text style={[styles.rank, styles.textClr]}>RANK</Text>
      </View>
      <View style={styles.lebronJamesParent}>
        <Text style={[styles.lebronJames, styles.viewMoreFlexBox]}>
          Lebron James
        </Text>
        <Text style={[styles.powerForward, styles.mpgTypo]}>
          Power Forward | Los Angeles Lakers
        </Text>
      </View>
      <View style={[styles.rectangleView, styles.playerPosition]} />
      <BarsStatusBarIPhoneD
        wifi={require("../assets/wifi1.png")}
        barsStatusBarIPhoneDPosition="absolute"
        barsStatusBarIPhoneDBackgroundColor="unset"
        barsStatusBarIPhoneDTop={0}
        barsStatusBarIPhoneDLeft={0}
        barsStatusBarIPhoneDWidth={376}
        timeFontFamily="RobotoSerif-SemiBold"
      />
      <View style={styles.lineView} />
      <View style={styles.group}>
        <Text style={[styles.text1, styles.textClr]}>27</Text>
        <Text style={[styles.text2, styles.textClr]}>13</Text>
        <Text style={[styles.mpg, styles.mpgTypo]}>MPG</Text>
        <Text style={[styles.rbg, styles.mpgTypo]}>RBG</Text>
      </View>
      <View style={[styles.container, styles.containerLayout]}>
        <Text style={[styles.text3, styles.textClr]}>21</Text>
        <Text style={[styles.text2, styles.textClr]}>3.7</Text>
        <Text style={[styles.ppg, styles.ppgTypo]}>PPG</Text>
        <Text style={[styles.apg, styles.ppgTypo]}>APG</Text>
      </View>
      <View style={[styles.groupView, styles.containerLayout]}>
        <Text style={[styles.text3, styles.textClr]}>52</Text>
        <Text style={[styles.text2, styles.textClr]}>0.7</Text>
        <Text style={[styles.ppg, styles.ppgTypo]}>FG%</Text>
        <Text style={[styles.spg, styles.mpgTypo]}>{`SPG `}</Text>
      </View>
      <View
        style={[
          styles.playerProfileOnCoachsTeamChild1,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerProfileOnCoachsTeamChild2,
          styles.playerChildLayout,
        ]}
      />
      <Pressable
        style={[styles.viewMoreParent, styles.viewMoreParentLayout]}
        onPress={() => navigation.navigate("PlayerDashboardSomeoneElse")}
      >
        <Text style={[styles.viewMore, styles.mpgTypo]}>View more</Text>
        <Image
          style={[styles.chevronDownIcon, styles.viewMoreParentLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown.png")}
        />
      </Pressable>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-1000003009.png")}
      />
      <View style={styles.playerProfileOnCoachsTeamChild3} />
      <Text style={[styles.bulls, styles.warriorsPosition]}>Stats</Text>
      <Pressable
        style={[styles.warriors, styles.warriorsPosition]}
        onPress={() => navigation.navigate("PlayerRoadToPro")}
      >
        <Text style={styles.roadToProTypo} 
        onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
      </Pressable>
      <Text style={[styles.warriors1, styles.roadToProTypo]}>Highlights</Text>
      <Image
        style={styles.playerProfileOnCoachsTeamChild4}
        contentFit="cover"
        source={require("../assets/group-10000030612.png")}
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
  textTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  textClr: {
    color: Color.othersWhite,
    position: "absolute",
  },
  viewMoreFlexBox: {
    textAlign: "left",
    left: 0,
  },
  mpgTypo: {
    color: Color.colorGray_400,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    position: "absolute",
  },
  containerLayout: {
    width: 58,
    height: 155,
    top: 564,
    position: "absolute",
  },
  ppgTypo: {
    left: 15,
    color: Color.colorGray_400,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  playerChildLayout: {
    height: 71,
    top: 607,
    opacity: 0.2,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  viewMoreParentLayout: {
    height: 14,
    position: "absolute",
  },
  warriorsPosition: {
    top: 511,
    position: "absolute",
  },
  roadToProTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    textAlign: "center",
  },
  image19Icon: {
    width: 438,
    height: 626,
    left: 0,
    top: 0,
    position: "absolute",
  },
  playerProfileOnCoachsTeamChild: {
    top: 371,
    height: 146,
  },
  playerProfileOnCoachsTeamItem: {
    top: 391,
    height: 126,
  },
  playerProfileOnCoachsTeamInner: {
    top: 410,
    width: 376,
    height: 124,
    left: 0,
    position: "absolute",
  },
  text: {
    color: Color.colorGoldenrod_100,
    textAlign: "center",
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    left: 6,
    top: 0,
    position: "absolute",
  },
  rank: {
    top: 39,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    lineHeight: 14,
    color: Color.othersWhite,
    textAlign: "center",
    left: 0,
  },
  parent: {
    top: 434,
    left: 24,
    width: 35,
    height: 53,
    position: "absolute",
  },
  lebronJames: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    color: Color.othersWhite,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
  },
  powerForward: {
    top: 29,
    textAlign: "left",
    left: 0,
  },
  lebronJamesParent: {
    top: 439,
    left: 86,
    width: 226,
    height: 43,
    position: "absolute",
  },
  rectangleView: {
    top: 534,
    backgroundColor: Color.lighterDark,
    height: 278,
  },
  lineView: {
    top: 440,
    left: 72,
    height: 27,
    opacity: 0.2,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  text1: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    left: 0,
    top: 0,
  },
  text2: {
    top: 101,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    left: 0,
  },
  mpg: {
    left: 8,
    top: 43,
    textAlign: "center",
  },
  rbg: {
    left: 10,
    top: 141,
    textAlign: "center",
  },
  group: {
    left: 37,
    width: 46,
    height: 155,
    top: 564,
    position: "absolute",
  },
  text3: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    left: 6,
    top: 0,
  },
  ppg: {
    top: 43,
  },
  apg: {
    top: 141,
  },
  container: {
    left: 158,
  },
  spg: {
    left: 16,
    top: 141,
    textAlign: "center",
  },
  groupView: {
    left: 284,
  },
  playerProfileOnCoachsTeamChild1: {
    left: 124,
  },
  playerProfileOnCoachsTeamChild2: {
    left: 249,
  },
  viewMore: {
    textDecoration: "underline",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  chevronDownIcon: {
    left: 73,
    width: 14,
    top: 0,
    overflow: "hidden",
  },
  viewMoreParent: {
    top: 751,
    left: 144,
    width: 87,
  },
  groupIcon: {
    top: 441,
    left: 257,
    width: 20,
    height: 20,
    position: "absolute",
  },
  playerProfileOnCoachsTeamChild3: {
    top: 532,
    left: 18,
    backgroundColor: Color.othersWhite,
    width: 103,
    height: 2,
    position: "absolute",
  },
  bulls: {
    left: 52,
    fontWeight: "600",
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 511,
    textAlign: "left",
    color: Color.othersWhite,
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
  },
  warriors: {
    left: 152,
  },
  warriors1: {
    top: 511,
    position: "absolute",
    left: 284,
  },
  playerProfileOnCoachsTeamChild4: {
    top: 376,
    left: 311,
    width: 45,
    height: 45,
    position: "absolute",
  },
  playerProfileOnCoachsTeam: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default PlayerProfileOnCoachsTeam;
