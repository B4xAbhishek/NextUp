import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import SectionCard1 from "../components/SectionCard1";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PlayerDashboardSomeoneElse = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.playerDashboardSomeoneElse}>
      <Image
        style={styles.image19Icon}
        contentFit="cover"
        source={require("../assets/image-19.png")}
      />
      <Image
        style={[styles.playerDashboardSomeoneElseChild, styles.playerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-24000.png")}
      />
      <Image
        style={[styles.playerDashboardSomeoneElseItem, styles.playerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-24001.png")}
      />
      <Image
        style={styles.playerDashboardSomeoneElseInner}
        contentFit="cover"
        source={require("../assets/rectangle-24002.png")}
      />
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo3]}>6</Text>
        <Text style={[styles.rank, styles.ptsTypo]}>RANK</Text>
      </View>
      <View style={styles.lebronJamesParent}>
        <Text style={[styles.lebronJames, styles.textTypo3]}>Lebron James</Text>
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
        propTop={1407}
        propLeft={250}
        propWidth={30}
        propLeft1={3}
      />
      <View style={styles.lineView} />
      <View style={styles.group}>
        <Text style={[styles.text1, styles.textTypo3]}>27</Text>
        <Text style={[styles.text2, styles.textTypo3]}>13</Text>
        <Text style={[styles.mpg, styles.mpgTypo]}>MPG</Text>
        <Text style={[styles.rbg, styles.mpgTypo]}>RBG</Text>
      </View>
      <View style={[styles.container, styles.containerLayout]}>
        <Text style={[styles.text3, styles.textTypo3]}>21</Text>
        <Text style={[styles.text2, styles.textTypo3]}>3.7</Text>
        <Text style={[styles.ppg, styles.ppgTypo]}>PPG</Text>
        <Text style={[styles.apg, styles.ppgTypo]}>APG</Text>
      </View>
      <View style={[styles.groupView, styles.containerLayout]}>
        <Text style={[styles.text3, styles.textTypo3]}>52</Text>
        <Text style={[styles.text2, styles.textTypo3]}>0.7</Text>
        <Text style={[styles.ppg, styles.ppgTypo]}>FG%</Text>
        <Text style={[styles.spg, styles.mpgTypo]}>{`SPG `}</Text>
      </View>
      <View
        style={[
          styles.playerDashboardSomeoneElseChild1,
          styles.playerChildLayout3,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild2,
          styles.playerChildLayout3,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild3,
          styles.playerChildLayout1,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild4,
          styles.playerChildLayout1,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild5,
          styles.playerChildLayout1,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild3,
          styles.playerChildLayout1,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild4,
          styles.playerChildLayout1,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild5,
          styles.playerChildLayout1,
        ]}
      />
      <Text style={[styles.bulls, styles.bullsTypo17]}>Career Stats</Text>
      <Text style={[styles.bulls1, styles.bullsTypo17]}>Playoff Stats</Text>
      <Text style={[styles.bulls2, styles.bullsTypo17]}>Play in Stats</Text>
      <View
        style={[
          styles.playerDashboardSomeoneElseChild9,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild10,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild11,
          styles.playerChildLayout,
        ]}
      />
      <Text style={[styles.bulls3, styles.bullsTypo16]}>Season</Text>
      <Text style={[styles.bulls4, styles.bullsTypo16]}>Season</Text>
      <Text style={[styles.bulls5, styles.bullsTypo16]}>Season</Text>
      <Text style={[styles.bulls6, styles.bullsTypo15]}>MPG</Text>
      <Text style={[styles.bulls7, styles.bullsTypo15]}>MPG</Text>
      <Text style={[styles.bulls8, styles.bullsTypo15]}>MPG</Text>
      <Text style={[styles.bulls9, styles.bullsTypo14]}>FG</Text>
      <Text style={[styles.bulls10, styles.bullsTypo14]}>FG</Text>
      <Text style={[styles.bulls11, styles.bullsTypo14]}>FG</Text>
      <Text style={[styles.bulls12, styles.bullsTypo13]}>3PT</Text>
      <Text style={[styles.bulls13, styles.bullsTypo13]}>3PT</Text>
      <Text style={[styles.bulls14, styles.bullsTypo13]}>3PT</Text>
      <Text style={[styles.bulls15, styles.bullsTypo12]}>APG</Text>
      <Text style={[styles.bulls16, styles.bullsTypo12]}>APG</Text>
      <Text style={[styles.bulls17, styles.bullsTypo12]}>APG</Text>
      <Text style={[styles.bulls18, styles.bullsTypo11]}>SPG</Text>
      <Text style={[styles.bulls19, styles.bullsTypo11]}>SPG</Text>
      <Text style={[styles.bulls20, styles.bullsTypo11]}>SPG</Text>
      <Text style={[styles.bulls21, styles.bullsTypo10]}>BPG</Text>
      <Text style={[styles.bulls22, styles.bullsTypo10]}>BPG</Text>
      <Text style={[styles.bulls23, styles.bullsTypo10]}>BPG</Text>
      <View
        style={[
          styles.playerDashboardSomeoneElseChild12,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild13,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild14,
          styles.playerChildLayout,
        ]}
      />
      <Text style={[styles.bulls24, styles.textTypo2]}>37.2</Text>
      <Text style={[styles.bulls25, styles.bullsTypo8]}>37.2</Text>
      <Text style={[styles.bulls26, styles.bullsTypo7]}>37.2</Text>
      <Text style={[styles.bulls27, styles.textTypo2]}>52.4</Text>
      <Text style={[styles.bulls28, styles.bullsTypo8]}>52.4</Text>
      <Text style={[styles.bulls29, styles.bullsTypo7]}>52.4</Text>
      <Text style={[styles.bulls30, styles.textTypo2]}>35.9</Text>
      <Text style={[styles.bulls31, styles.bullsTypo8]}>35.9</Text>
      <Text style={[styles.bulls32, styles.bullsTypo7]}>35.9</Text>
      <Text style={[styles.bulls33, styles.textTypo2]}>6.2</Text>
      <Text style={[styles.bulls34, styles.bullsTypo8]}>6.2</Text>
      <Text style={[styles.bulls35, styles.bullsTypo7]}>6.2</Text>
      <Text style={[styles.bulls36, styles.textTypo2]}>1.3</Text>
      <Text style={[styles.bulls37, styles.bullsTypo8]}>1.3</Text>
      <Text style={[styles.bulls38, styles.bullsTypo7]}>1.3</Text>
      <Text style={[styles.bulls39, styles.textTypo2]}>1.1</Text>
      <Text style={[styles.bulls40, styles.bullsTypo8]}>1.1</Text>
      <Text style={[styles.bulls41, styles.bullsTypo7]}>1.1</Text>
      <Text style={[styles.text7, styles.textTypo2]}>2021-22</Text>
      <Text style={[styles.text8, styles.textTypo2]}>2021-22</Text>
      <Text style={[styles.text9, styles.textTypo2]}>2021-22</Text>
      <View
        style={[
          styles.playerDashboardSomeoneElseChild15,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild16,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild17,
          styles.playerChildLayout,
        ]}
      />
      <Text style={[styles.bulls42, styles.bullsTypo6]}>33.4</Text>
      <Text style={[styles.bulls43, styles.bullsTypo5]}>33.4</Text>
      <Text style={[styles.bulls44, styles.bullsTypo4]}>33.4</Text>
      <Text style={[styles.bulls45, styles.bullsTypo6]}>34.4</Text>
      <Text style={[styles.bulls46, styles.bullsTypo5]}>34.4</Text>
      <Text style={[styles.bulls47, styles.bullsTypo4]}>34.4</Text>
      <Text style={[styles.bulls48, styles.bullsTypo6]}>36.9</Text>
      <Text style={[styles.bulls49, styles.bullsTypo5]}>36.9</Text>
      <Text style={[styles.bulls50, styles.bullsTypo4]}>36.9</Text>
      <Text style={[styles.bulls51, styles.bullsTypo6]}>7.8</Text>
      <Text style={[styles.bulls52, styles.bullsTypo5]}>7.8</Text>
      <Text style={[styles.bulls53, styles.bullsTypo4]}>7.8</Text>
      <Text style={[styles.bulls54, styles.bullsTypo6]}>1.1</Text>
      <Text style={[styles.bulls55, styles.bullsTypo5]}>1.1</Text>
      <Text style={[styles.bulls56, styles.bullsTypo4]}>1.1</Text>
      <Text style={[styles.bulls57, styles.bullsTypo6]}>0.6</Text>
      <Text style={[styles.bulls58, styles.bullsTypo5]}>0.6</Text>
      <Text style={[styles.bulls59, styles.bullsTypo4]}>0.6</Text>
      <Text style={[styles.text10, styles.textTypo1]}>2020-21</Text>
      <Text style={[styles.text11, styles.textTypo1]}>2020-21</Text>
      <Text style={[styles.text12, styles.textTypo1]}>2020-21</Text>
      <View
        style={[
          styles.playerDashboardSomeoneElseChild18,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild19,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild20,
          styles.playerChildLayout,
        ]}
      />
      <Text style={[styles.bulls60, styles.textTypo2]}>34.4</Text>
      <Text style={[styles.bulls61, styles.textTypo2]}>34.4</Text>
      <Text style={[styles.bulls62, styles.textTypo2]}>34.4</Text>
      <Text style={[styles.bulls63, styles.textTypo2]}>45.2</Text>
      <Text style={[styles.bulls64, styles.textTypo2]}>45.2</Text>
      <Text style={[styles.bulls65, styles.textTypo2]}>45.2</Text>
      <Text style={[styles.bulls66, styles.textTypo2]}>34.2</Text>
      <Text style={[styles.bulls67, styles.textTypo2]}>34.2</Text>
      <Text style={[styles.bulls68, styles.textTypo2]}>34.2</Text>
      <Text style={[styles.bulls69, styles.bullsTypo3]}>10.2</Text>
      <Text style={[styles.bulls70, styles.bullsTypo3]}>10.2</Text>
      <Text style={[styles.bulls71, styles.bullsTypo3]}>10.2</Text>
      <Text style={[styles.bulls72, styles.textTypo2]}>1.2</Text>
      <Text style={[styles.bulls73, styles.textTypo2]}>1.2</Text>
      <Text style={[styles.bulls74, styles.textTypo2]}>1.2</Text>
      <Text style={[styles.bulls75, styles.bullsTypo2]}>0.5</Text>
      <Text style={[styles.bulls76, styles.bullsTypo2]}>0.5</Text>
      <Text style={[styles.bulls77, styles.bullsTypo2]}>0.5</Text>
      <Text style={[styles.text13, styles.textTypo]}>2019-20</Text>
      <Text style={[styles.text14, styles.textTypo]}>2019-20</Text>
      <Text style={[styles.text15, styles.textTypo]}>2019-20</Text>
      <View
        style={[
          styles.playerDashboardSomeoneElseChild21,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild22,
          styles.playerChildLayout,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild23,
          styles.playerChildLayout,
        ]}
      />
      <Text style={[styles.bulls78, styles.textTypo2]}>35.5</Text>
      <Text style={[styles.bulls79, styles.textTypo2]}>35.5</Text>
      <Text style={[styles.bulls80, styles.textTypo2]}>35.5</Text>
      <Text style={[styles.bulls81, styles.textTypo2]}>36.2</Text>
      <Text style={[styles.bulls82, styles.textTypo2]}>36.2</Text>
      <Text style={[styles.bulls83, styles.textTypo2]}>36.2</Text>
      <Text style={[styles.bulls84, styles.textTypo2]}>36.3</Text>
      <Text style={[styles.bulls85, styles.textTypo2]}>36.3</Text>
      <Text style={[styles.bulls86, styles.textTypo2]}>36.3</Text>
      <Text style={[styles.bulls87, styles.textTypo2]}>8.3</Text>
      <Text style={[styles.bulls88, styles.textTypo2]}>8.3</Text>
      <Text style={[styles.bulls89, styles.textTypo2]}>8.3</Text>
      <Text style={[styles.bulls90, styles.bullsTypo1]}>1.3</Text>
      <Text style={[styles.bulls91, styles.bullsTypo1]}>1.3</Text>
      <Text style={[styles.bulls92, styles.bullsTypo1]}>1.3</Text>
      <Text style={[styles.bulls93, styles.bullsTypo2]}>0.6</Text>
      <Text style={[styles.bulls94, styles.bullsTypo2]}>0.6</Text>
      <Text style={[styles.bulls95, styles.bullsTypo2]}>0.6</Text>
      <Text style={[styles.text16, styles.textTypo]}>2018-19</Text>
      <Text style={[styles.text17, styles.textTypo]}>2018-19</Text>
      <Text style={[styles.text18, styles.textTypo]}>2018-19</Text>
      <View
        style={[
          styles.playerDashboardSomeoneElseChild24,
          styles.playerChildPosition,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild25,
          styles.playerChildPosition,
        ]}
      />
      <View
        style={[
          styles.playerDashboardSomeoneElseChild26,
          styles.playerChildPosition,
        ]}
      />
      <Text style={[styles.bulls96, styles.textTypo2]}>40.2</Text>
      <Text style={[styles.bulls97, styles.textTypo2]}>40.2</Text>
      <Text style={[styles.bulls98, styles.textTypo2]}>40.2</Text>
      <Text style={[styles.bulls99, styles.textTypo2]}>45.6</Text>
      <Text style={[styles.bulls100, styles.textTypo2]}>45.6</Text>
      <Text style={[styles.bulls101, styles.textTypo2]}>45.6</Text>
      <Text style={[styles.bulls102, styles.bullsTypo]}>30.9</Text>
      <Text style={[styles.bulls103, styles.bullsTypo]}>30.9</Text>
      <Text style={[styles.bulls104, styles.bullsTypo]}>30.9</Text>
      <Text style={[styles.bulls105, styles.textTypo2]}>9.1</Text>
      <Text style={[styles.bulls106, styles.textTypo2]}>9.1</Text>
      <Text style={[styles.bulls107, styles.textTypo2]}>9.1</Text>
      <Text style={[styles.bulls108, styles.bullsTypo1]}>1.4</Text>
      <Text style={[styles.bulls109, styles.bullsTypo1]}>1.4</Text>
      <Text style={[styles.bulls110, styles.bullsTypo1]}>1.4</Text>
      <Text style={[styles.bulls111, styles.textTypo2]}>0.9</Text>
      <Text style={[styles.bulls112, styles.textTypo2]}>0.9</Text>
      <Text style={[styles.bulls113, styles.textTypo2]}>0.9</Text>
      <Text style={[styles.text19, styles.textTypo]}>2017-18</Text>
      <Text style={[styles.text20, styles.textTypo]}>2017-18</Text>
      <Text style={[styles.text21, styles.textTypo]}>2017-18</Text>
      <View style={[styles.ptsParent, styles.ptsLayout]}>
        <Text style={[styles.pts, styles.textTypo2]}>LAL Team</Text>
        <Image
          style={[styles.chevronDownIcon, styles.ptsLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown1.png")}
        />
      </View>
      <View style={[styles.ptsGroup, styles.ptsLayout]}>
        <Text style={[styles.pts, styles.textTypo2]}>LAL Team</Text>
        <Image
          style={[styles.chevronDownIcon, styles.ptsLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown1.png")}
        />
      </View>
      <View style={[styles.ptsContainer, styles.ptsLayout]}>
        <Text style={[styles.pts, styles.textTypo2]}>LAL Team</Text>
        <Image
          style={[styles.chevronDownIcon, styles.ptsLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown1.png")}
        />
      </View>
      <View style={[styles.viewLessParent, styles.viewLessParentLayout]}>
        <Text style={[styles.viewLess, styles.mpgTypo]}>View Less</Text>
        <Image
          style={[styles.chevronDownIcon3, styles.viewLessParentLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown2.png")}
        />
      </View>
      <View style={styles.playerDashboardSomeoneElseChild27} />
      <Text style={[styles.bulls114, styles.bulls114Position]}>Stats</Text>
      <Pressable
        style={styles.warriors}
        onPress={() => navigation.navigate("PlayerRoadToPro")}
      >
        <Text style={[styles.roadToPro, styles.rankLayout]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
      </Pressable>
      <Pressable
        style={[styles.warriors1, styles.bulls114Position]}
        onPress={() => navigation.navigate("PlayerContent1")}
      >
        <Text style={[styles.roadToPro, styles.rankLayout]}>Highlights</Text>
      </Pressable>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-1000003061.png")}
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
  textTypo3: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  ptsTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
  },
  mpgTypo: {
    color: Color.colorGray_900,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    position: "absolute",
  },
  containerLayout: {
    width: 58,
    height: 155,
    top: 517,
    position: "absolute",
  },
  ppgTypo: {
    left: 15,
    color: Color.colorGray_900,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  playerChildLayout3: {
    height: 71,
    top: 560,
    opacity: 0.2,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.neutral0,
    borderStyle: "solid",
    position: "absolute",
  },
  playerChildLayout1: {
    height: 168,
    width: 362,
    borderRadius: Border.br_xs,
    left: 7,
    backgroundColor: Color.colorGray_700,
    position: "absolute",
  },
  bullsTypo17: {
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
  },
  playerChildLayout: {
    height: 28,
    width: 362,
    left: 7,
    position: "absolute",
  },
  bullsTypo16: {
    color: Color.colorRoyalblue,
    left: 18,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  bullsTypo15: {
    left: 104,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
    lineHeight: 14,
    position: "absolute",
  },
  bullsTypo14: {
    left: 157,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
    lineHeight: 14,
    position: "absolute",
  },
  bullsTypo13: {
    left: 194,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
    lineHeight: 14,
    position: "absolute",
  },
  bullsTypo12: {
    left: 235,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
    lineHeight: 14,
    position: "absolute",
  },
  bullsTypo11: {
    left: 281,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
    lineHeight: 14,
    position: "absolute",
  },
  bullsTypo10: {
    left: 327,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
    lineHeight: 14,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_xs,
    color: Color.neutral0,
    position: "absolute",
  },
  bullsTypo8: {
    top: 988,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.neutral0,
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  bullsTypo7: {
    top: 1207,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.neutral0,
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  bullsTypo6: {
    top: 798,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.neutral0,
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  bullsTypo5: {
    top: 1016,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.neutral0,
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  bullsTypo4: {
    top: 1235,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.neutral0,
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  textTypo1: {
    left: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  bullsTypo3: {
    left: 238,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.neutral0,
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  bullsTypo2: {
    left: 332,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.neutral0,
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  textTypo: {
    left: 19,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  bullsTypo1: {
    left: 287,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.neutral0,
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  playerChildPosition: {
    borderBottomLeftRadius: Border.br_2xs,
    borderBottomRightRadius: Border.br_2xs,
    height: 28,
    width: 362,
    backgroundColor: Color.colorGray_700,
    left: 7,
    position: "absolute",
  },
  bullsTypo: {
    left: 195,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    color: Color.neutral0,
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  ptsLayout: {
    height: 18,
    position: "absolute",
  },
  viewLessParentLayout: {
    height: 14,
    position: "absolute",
  },
  bulls114Position: {
    top: 468,
    position: "absolute",
  },
  rankLayout: {
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
  playerDashboardSomeoneElseChild: {
    top: 328,
    height: 146,
  },
  playerDashboardSomeoneElseItem: {
    top: 348,
    height: 126,
  },
  playerDashboardSomeoneElseInner: {
    top: 367,
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
  },
  rank: {
    top: 39,
    fontSize: FontSize.size_smi,
    color: Color.neutral0,
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
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
    color: Color.neutral0,
    left: 0,
    top: 0,
  },
  powerForward: {
    top: 29,
    textAlign: "left",
    left: 0,
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
    height: 204,
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
    color: Color.neutral0,
    textAlign: "center",
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  text2: {
    top: 101,
    color: Color.neutral0,
    textAlign: "center",
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
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
    top: 517,
    position: "absolute",
  },
  text3: {
    color: Color.neutral0,
    textAlign: "center",
    lineHeight: 40,
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
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
  playerDashboardSomeoneElseChild1: {
    left: 124,
  },
  playerDashboardSomeoneElseChild2: {
    left: 249,
  },
  playerDashboardSomeoneElseChild3: {
    top: 735,
  },
  playerDashboardSomeoneElseChild4: {
    top: 953,
  },
  playerDashboardSomeoneElseChild5: {
    top: 1172,
  },
  bulls: {
    top: 709,
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    left: 18,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  bulls1: {
    top: 927,
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    left: 18,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  bulls2: {
    top: 1146,
    fontSize: FontSize.size_mid,
    fontWeight: "600",
    left: 18,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  playerDashboardSomeoneElseChild9: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
    borderTopRightRadius: Border.br_2xs,
    borderTopLeftRadius: Border.br_2xs,
    top: 735,
  },
  playerDashboardSomeoneElseChild10: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
    borderTopRightRadius: Border.br_2xs,
    borderTopLeftRadius: Border.br_2xs,
    top: 953,
  },
  playerDashboardSomeoneElseChild11: {
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
    borderTopRightRadius: Border.br_2xs,
    borderTopLeftRadius: Border.br_2xs,
    top: 1172,
  },
  bulls3: {
    top: 742,
  },
  bulls4: {
    top: 960,
  },
  bulls5: {
    top: 1179,
  },
  bulls6: {
    top: 742,
  },
  bulls7: {
    top: 960,
  },
  bulls8: {
    top: 1179,
  },
  bulls9: {
    top: 742,
  },
  bulls10: {
    top: 960,
  },
  bulls11: {
    top: 1179,
  },
  bulls12: {
    top: 742,
  },
  bulls13: {
    top: 960,
  },
  bulls14: {
    top: 1179,
  },
  bulls15: {
    top: 742,
  },
  bulls16: {
    top: 960,
  },
  bulls17: {
    top: 1179,
  },
  bulls18: {
    top: 742,
  },
  bulls19: {
    top: 960,
  },
  bulls20: {
    top: 1179,
  },
  bulls21: {
    top: 742,
  },
  bulls22: {
    top: 960,
  },
  bulls23: {
    top: 1179,
  },
  playerDashboardSomeoneElseChild12: {
    top: 763,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  playerDashboardSomeoneElseChild13: {
    top: 981,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  playerDashboardSomeoneElseChild14: {
    top: 1200,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  bulls24: {
    left: 108,
    top: 770,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
  },
  bulls25: {
    left: 108,
  },
  bulls26: {
    left: 108,
  },
  bulls27: {
    left: 154,
    top: 770,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
  },
  bulls28: {
    left: 154,
  },
  bulls29: {
    left: 154,
  },
  bulls30: {
    left: 196,
    top: 770,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
  },
  bulls31: {
    left: 196,
  },
  bulls32: {
    left: 196,
  },
  bulls33: {
    left: 241,
    top: 770,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
  },
  bulls34: {
    left: 241,
  },
  bulls35: {
    left: 241,
  },
  bulls36: {
    left: 286,
    top: 770,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
  },
  bulls37: {
    left: 286,
  },
  bulls38: {
    left: 286,
  },
  bulls39: {
    left: 333,
    top: 770,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
  },
  bulls40: {
    left: 333,
  },
  bulls41: {
    left: 333,
  },
  text7: {
    top: 771,
    left: 18,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  text8: {
    top: 989,
    left: 18,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  text9: {
    top: 1208,
    left: 18,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  playerDashboardSomeoneElseChild15: {
    top: 791,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
  },
  playerDashboardSomeoneElseChild16: {
    top: 1009,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
  },
  playerDashboardSomeoneElseChild17: {
    top: 1228,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
  },
  bulls42: {
    left: 108,
  },
  bulls43: {
    left: 108,
  },
  bulls44: {
    left: 108,
  },
  bulls45: {
    left: 154,
  },
  bulls46: {
    left: 154,
  },
  bulls47: {
    left: 154,
  },
  bulls48: {
    left: 196,
  },
  bulls49: {
    left: 196,
  },
  bulls50: {
    left: 196,
  },
  bulls51: {
    left: 241,
  },
  bulls52: {
    left: 241,
  },
  bulls53: {
    left: 241,
  },
  bulls54: {
    left: 286,
  },
  bulls55: {
    left: 286,
  },
  bulls56: {
    left: 286,
  },
  bulls57: {
    left: 333,
  },
  bulls58: {
    left: 333,
  },
  bulls59: {
    left: 333,
  },
  text10: {
    top: 799,
  },
  text11: {
    top: 1017,
  },
  text12: {
    top: 1236,
  },
  playerDashboardSomeoneElseChild18: {
    top: 819,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  playerDashboardSomeoneElseChild19: {
    top: 1037,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  playerDashboardSomeoneElseChild20: {
    top: 1256,
    height: 28,
    backgroundColor: Color.colorGray_700,
  },
  bulls60: {
    top: 826,
    left: 108,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls61: {
    top: 1044,
    left: 108,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls62: {
    top: 1263,
    left: 108,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls63: {
    top: 826,
    left: 154,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls64: {
    top: 1044,
    left: 154,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls65: {
    top: 1263,
    left: 154,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls66: {
    top: 826,
    left: 196,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls67: {
    top: 1044,
    left: 196,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls68: {
    top: 1263,
    left: 196,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls69: {
    top: 826,
  },
  bulls70: {
    top: 1044,
  },
  bulls71: {
    top: 1263,
  },
  bulls72: {
    top: 826,
    left: 286,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls73: {
    top: 1044,
    left: 286,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls74: {
    top: 1263,
    left: 286,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls75: {
    top: 826,
  },
  bulls76: {
    top: 1044,
  },
  bulls77: {
    top: 1263,
  },
  text13: {
    top: 827,
  },
  text14: {
    top: 1045,
  },
  text15: {
    top: 1264,
  },
  playerDashboardSomeoneElseChild21: {
    top: 847,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
  },
  playerDashboardSomeoneElseChild22: {
    top: 1065,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
  },
  playerDashboardSomeoneElseChild23: {
    top: 1284,
    backgroundColor: Color.colorDarkslategray_100,
    height: 28,
  },
  bulls78: {
    top: 854,
    left: 108,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls79: {
    top: 1072,
    left: 108,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls80: {
    top: 1291,
    left: 108,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls81: {
    top: 854,
    left: 154,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls82: {
    top: 1072,
    left: 154,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls83: {
    top: 1291,
    left: 154,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls84: {
    top: 854,
    left: 196,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls85: {
    top: 1072,
    left: 196,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls86: {
    top: 1291,
    left: 196,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls87: {
    top: 854,
    left: 241,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls88: {
    top: 1072,
    left: 241,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls89: {
    top: 1291,
    left: 241,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls90: {
    top: 854,
  },
  bulls91: {
    top: 1072,
  },
  bulls92: {
    top: 1291,
  },
  bulls93: {
    top: 854,
  },
  bulls94: {
    top: 1072,
  },
  bulls95: {
    top: 1291,
  },
  text16: {
    top: 855,
  },
  text17: {
    top: 1073,
  },
  text18: {
    top: 1292,
  },
  playerDashboardSomeoneElseChild24: {
    top: 875,
  },
  playerDashboardSomeoneElseChild25: {
    top: 1093,
  },
  playerDashboardSomeoneElseChild26: {
    top: 1312,
  },
  bulls96: {
    top: 882,
    left: 108,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls97: {
    top: 1100,
    left: 108,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls98: {
    top: 1319,
    left: 108,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls99: {
    top: 882,
    left: 154,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls100: {
    top: 1100,
    left: 154,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls101: {
    top: 1319,
    left: 154,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls102: {
    top: 882,
  },
  bulls103: {
    top: 1100,
  },
  bulls104: {
    top: 1319,
  },
  bulls105: {
    top: 882,
    left: 241,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls106: {
    top: 1100,
    left: 241,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls107: {
    top: 1319,
    left: 241,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls108: {
    top: 882,
  },
  bulls109: {
    top: 1100,
  },
  bulls110: {
    top: 1319,
  },
  bulls111: {
    top: 882,
    left: 333,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls112: {
    top: 1100,
    left: 333,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  bulls113: {
    top: 1319,
    left: 333,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
  },
  text19: {
    top: 883,
  },
  text20: {
    top: 1101,
  },
  text21: {
    top: 1320,
  },
  pts: {
    top: 3,
    lineHeight: 12,
    textAlign: "right",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
  },
  chevronDownIcon: {
    left: 56,
    width: 18,
    top: 0,
    overflow: "hidden",
  },
  ptsParent: {
    top: 707,
    width: 74,
    left: 282,
    height: 18,
  },
  ptsGroup: {
    top: 925,
    width: 74,
    left: 282,
    height: 18,
  },
  ptsContainer: {
    top: 1144,
    width: 74,
    left: 282,
    height: 18,
  },
  viewLess: {
    textDecoration: "underline",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  chevronDownIcon3: {
    left: 71,
    width: 14,
    top: 0,
    overflow: "hidden",
  },
  viewLessParent: {
    top: 1365,
    left: 145,
    width: 85,
  },
  playerDashboardSomeoneElseChild27: {
    top: 489,
    backgroundColor: Color.neutral0,
    width: 103,
    height: 2,
    left: 18,
    position: "absolute",
  },
  bulls114: {
    left: 52,
    fontWeight: "600",
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
  },
  roadToPro: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  warriors: {
    left: 163,
    top: 467,
    position: "absolute",
  },
  warriors1: {
    left: 291,
  },
  groupIcon: {
    top: 333,
    left: 258,
    width: 98,
    height: 45,
    position: "absolute",
  },
  playerDashboardSomeoneElse: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 1488,
    overflow: "hidden",
  },
});

export default PlayerDashboardSomeoneElse;
