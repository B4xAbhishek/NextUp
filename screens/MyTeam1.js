import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MyTeam1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.myTeam}>
      <View style={styles.barsStatusBarIphoneD}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
          <View style={[styles.bounds, styles.boundsLayout]} />
          <View style={[styles.homeIndicator, styles.capacityBg]} />
        </View>
        <View style={[styles.exploreParent, styles.parentPosition1]}>
          <Text style={[styles.explore, styles.seeAllTypo]}>Message</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chatteardroptext2.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.parentPosition1]}>
          <Text style={[styles.explore, styles.seeAllTypo]}>Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/house1.png")}
          />
        </View>
        <View style={[styles.calendarParent, styles.parentPosition1]}>
          <Text style={[styles.explore, styles.seeAllTypo]}>Calendar</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/calendarblank.png")}
          />
        </View>
        <View style={[styles.myStandingParent, styles.parentPosition1]}>
          <Text style={[styles.myStanding, styles.seeAllTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
          <Image
            style={[styles.usersIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/users2.png")}
          />
        </View>
        <View style={[styles.proParent, styles.parentPosition1]}>
          <Text style={[styles.explore, styles.seeAllTypo]}>Account</Text>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user11.png")}
          />
        </View>
      </View>
      <View style={[styles.bullsParent, styles.bullsPosition3]}>
        <Text style={[styles.bulls, styles.bullsTypo10]}>Team History</Text>
        <View style={[styles.groupChild, styles.groupChildLayout1]} />
        <Text style={[styles.bulls1, styles.bullsTypo8]}>Year</Text>
        <Text style={[styles.bulls2, styles.bullsPosition2]}>W</Text>
        <Text style={[styles.bulls3, styles.bullsTypo8]}>L</Text>
        <Text style={[styles.bulls4, styles.bullsTypo8]}>PCT</Text>
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <Text style={[styles.bulls5, styles.bullsPosition2]}>39</Text>
        <Text style={[styles.bulls6, styles.bullsTypo7]}>33</Text>
        <Text style={[styles.bulls7, styles.bullsTypo6]}>.542</Text>
        <Text style={styles.text}>2020-21</Text>
        <View style={[styles.groupInner, styles.groupChildLayout1]} />
        <Text style={[styles.bulls8, styles.bullsPosition1]}>15</Text>
        <Text style={[styles.bulls9, styles.bullsPosition1]}>50</Text>
        <Text style={[styles.bulls10, styles.bullsPosition1]}>.231</Text>
        <Text style={styles.text1}>2019-20</Text>
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <Text style={[styles.bulls11, styles.bullsPosition]}>57</Text>
        <Text style={[styles.bulls12, styles.bullsPosition]}>25</Text>
        <Text style={[styles.bulls13, styles.bullsPosition]}>.695</Text>
        <Text style={[styles.text2, styles.text2Position]}>2018-19</Text>
      </View>
      <View style={[styles.bullsGroup, styles.bullsPosition3]}>
        <Text style={[styles.bulls, styles.bullsTypo10]}>
          2021-22 Pacific Standings
        </Text>
        <View style={[styles.groupChild1, styles.groupChildLayout1]} />
        <Text style={[styles.bulls15, styles.bullsTypo5]}>Team</Text>
        <Text style={[styles.bulls16, styles.bullsTypo5]}>W</Text>
        <Text style={[styles.bulls17, styles.bullsTypo5]}>L</Text>
        <Text style={[styles.bulls18, styles.bullsTypo5]}>PCT</Text>
        <Text style={[styles.bulls19, styles.bullsTypo5]}>GB</Text>
        <Text style={[styles.bulls20, styles.bullsTypo5]}>STRK</Text>
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <Text style={[styles.bulls21, styles.bullsTypo4]}>64</Text>
        <Text style={[styles.bulls22, styles.bullsTypo4]}>18</Text>
        <Text style={[styles.bulls23, styles.bullsTypo4]}>.780</Text>
        <Text style={[styles.bulls24, styles.bullsTypo4]}>-</Text>
        <Text style={[styles.bulls25, styles.bullsTypo4]}>L1</Text>
        <Text style={styles.phonenix}>Phonenix</Text>
        <View style={[styles.groupChild3, styles.groupChildLayout1]} />
        <View style={[styles.groupChild4, styles.groupChildLayout1]} />
        <Text style={[styles.bulls26, styles.bullsTypo3]}>53</Text>
        <Text style={[styles.bulls27, styles.bullsTypo2]}>33</Text>
        <Text style={[styles.bulls28, styles.bullsTypo3]}>29</Text>
        <Text style={[styles.bulls29, styles.bullsTypo2]}>49</Text>
        <Text style={[styles.bulls30, styles.bullsTypo3]}>.646</Text>
        <Text style={[styles.bulls31, styles.bullsTypo2]}>.402</Text>
        <Text style={[styles.bulls32, styles.bullsTypo3]}>.11</Text>
        <Text style={[styles.bulls33, styles.bullsTypo2]}>31</Text>
        <Text style={[styles.bulls34, styles.bullsTypo3]}>W5</Text>
        <Text style={[styles.bulls35, styles.bullsTypo2]}>W2</Text>
        <Text style={[styles.goldenState, styles.bullsPosition1]}>
          Golden State
        </Text>
        <Text style={styles.laLakers}>LA Lakers</Text>
        <View style={[styles.groupChild5, styles.groupChildLayout]} />
        <View style={[styles.groupChild6, styles.groupChildLayout]} />
        <Text style={[styles.bulls36, styles.bullsTypo1]}>42</Text>
        <Text style={[styles.bulls37, styles.bullsTypo]}>30</Text>
        <Text style={[styles.bulls38, styles.bullsTypo1]}>40</Text>
        <Text style={[styles.bulls39, styles.bullsTypo]}>52</Text>
        <Text style={[styles.bulls40, styles.bullsTypo1]}>.512</Text>
        <Text style={[styles.bulls41, styles.bullsTypo]}>.366</Text>
        <Text style={[styles.bulls42, styles.bullsTypo1]}>22</Text>
        <Text style={[styles.bulls43, styles.bullsTypo]}>34</Text>
        <Text style={[styles.bulls44, styles.bullsTypo1]}>W5</Text>
        <Text style={[styles.bulls45, styles.bullsTypo]}>W1</Text>
        <Text style={[styles.laClippers, styles.text2Position]}>
          LA Clippers
        </Text>
        <Text style={[styles.sacramento, styles.text2Position]}>
          Sacramento
        </Text>
      </View>
      <Text style={[styles.upcomingGames, styles.gamesTypo]}>
        Upcoming Games
      </Text>
      <View style={[styles.seeAllParent, styles.seeLayout]}>
        <Text style={[styles.seeAll, styles.tClr]}>See All</Text>
        <Image
          style={styles.chevronDownIcon}
          contentFit="cover"
          source={require("../assets/chevrondown3.png")}
        />
      </View>
      <Image
        style={[styles.myTeamChild, styles.teamLayout]}
        contentFit="cover"
        source={require("../assets/group-10000026221.png")}
      />
      <Image
        style={[styles.myTeamItem, styles.teamLayout]}
        contentFit="cover"
        source={require("../assets/group-10000026221.png")}
      />
      <Text style={[styles.recentGames, styles.gamesTypo]}>Recent Games</Text>
      <View style={[styles.seeAllGroup, styles.seeLayout]}>
        <Text style={[styles.seeAll, styles.tClr]}>See All</Text>
        <Image
          style={styles.chevronDownIcon}
          contentFit="cover"
          source={require("../assets/chevrondown3.png")}
        />
      </View>
      <View style={[styles.myTeamInner, styles.capacityBg]} />
      <View style={styles.bullsContainer}>
        <Text style={[styles.bulls46, styles.rosterFlexBox]}>Games</Text>
        <Pressable
          style={styles.warriors}
          onPress={() => navigation.navigate("MyTeam")}
        >
          <Text style={[styles.roster, styles.rosterTypo]}>Roster</Text>
        </Pressable>
        <Text style={[styles.warriors1, styles.rosterTypo]}
              onPress={() => navigation.navigate("MyTeam")}
      >Stats01</Text>
      </View>
      <View style={[styles.frameView, styles.text2Position]}>
        <View style={[styles.frameParent, styles.bullsPosition4]}>
          <View style={styles.headParent}>
            <View style={[styles.head, styles.headFlexBox]}>
              <Text onPress={() => navigation.navigate("MyTeam")} style={styles.team}>Team</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={styles.team}>1</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={styles.team}>2</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={styles.team}>3</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={styles.team}>4</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={[styles.t, styles.tClr]}>T</Text>
            </View>
          </View>
          <View style={styles.headGroup}>
            <View style={[styles.head, styles.headFlexBox]}>
              <Text style={styles.copperKings}>Copper Kings</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={styles.copperKings}>18</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={styles.copperKings}>18</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={styles.copperKings}>19</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={styles.copperKings}>16</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={styles.copperKings}>71</Text>
            </View>
          </View>
          <View style={styles.headGroup}>
            <View style={[styles.head, styles.headFlexBox]}>
              <Text style={styles.team}>Falcons</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={[styles.text12, styles.vsTypo]}>14</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={[styles.text12, styles.vsTypo]}>21</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={[styles.text12, styles.vsTypo]}>14</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={[styles.text12, styles.vsTypo]}>18</Text>
            </View>
            <View style={[styles.head1, styles.headFlexBox]}>
              <Text style={[styles.text12, styles.vsTypo]}>67</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.myTeamChild1, styles.kWrapperShadowBox]} />
      <View style={[styles.kWrapper, styles.wrapperLayout]}>
        <Text style={styles.k}>K</Text>
      </View>
      <View style={[styles.kalumetParent, styles.parentPosition]}>
        <Text style={[styles.kalumet, styles.kalumetTypo]}>Kalumet</Text>
        <Text style={[styles.copperKings1, styles.kalumetTypo]}>
          Copper Kings
        </Text>
      </View>
      <View style={[styles.divineChildParent, styles.parentPosition]}>
        <Text style={[styles.divineChild, styles.falcons1Typo]}>
          Divine Child
        </Text>
        <Text style={[styles.falcons1, styles.falcons1Typo]}>Falcons</Text>
      </View>
      <View style={[styles.dWrapper, styles.wrapperLayout]}>
        <Text style={styles.k}>D</Text>
      </View>
      <Text style={[styles.vs, styles.vsTypo]}>VS</Text>
      <View style={styles.frameGroup}>
        <View style={styles.typenotSeenStoryComponentParent}>
          <View style={styles.typenotSeenStoryComponent}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame2.png")}
            />
            <Text style={[styles.name, styles.nameTypo]}>Aubrey</Text>
          </View>
          <Text style={[styles.aauTeam, styles.teamSpaceBlock]}>
            Rotary AAU 17
          </Text>
        </View>
        <View style={styles.typeseenStoryComponentstoParent}>
          <View style={styles.typenotSeenStoryComponent}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
            <Text style={[styles.name1, styles.nameTypo]}>Darrell</Text>
          </View>
          <Text style={[styles.highSchoolTeam, styles.teamSpaceBlock]}>
            O’Dea HS
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  capacityBg: {
    backgroundColor: Color.othersWhite,
    position: "absolute",
  },
  rectangleLayout: {
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
  parentPosition1: {
    top: 10,
    height: 44,
    position: "absolute",
  },
  seeAllTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  bullsPosition3: {
    width: 340,
    left: 18,
    position: "absolute",
  },
  bullsTypo10: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  groupChildLayout1: {
    height: 28,
    backgroundColor: Color.colorDarkslategray_100,
    width: 340,
    left: 0,
    position: "absolute",
  },
  bullsTypo8: {
    fontSize: FontSize.bodyMediumSemibold_size,
    position: "absolute",
  },
  bullsPosition2: {
    left: 164,
    lineHeight: 14,
  },
  groupChildLayout: {
    backgroundColor: Color.colorGray_700,
    height: 28,
    width: 340,
    left: 0,
    position: "absolute",
  },
  bullsTypo7: {
    left: 234,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    textAlign: "center",
    fontWeight: "600",
  },
  bullsTypo6: {
    left: 303,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    textAlign: "center",
    fontWeight: "600",
  },
  bullsPosition1: {
    top: 89,
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
    position: "absolute",
  },
  bullsPosition: {
    top: 117,
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
  },
  text2Position: {
    left: 10,
    position: "absolute",
  },
  bullsTypo5: {
    top: 32,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    lineHeight: 14,
    color: Color.othersWhite,
    position: "absolute",
  },
  bullsTypo4: {
    top: 60,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    fontWeight: "600",
    position: "absolute",
  },
  bullsTypo3: {
    top: 88,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    fontWeight: "600",
    position: "absolute",
  },
  bullsTypo2: {
    top: 144,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    fontWeight: "600",
    position: "absolute",
  },
  bullsTypo1: {
    top: 116,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    fontWeight: "600",
    position: "absolute",
  },
  bullsTypo: {
    top: 172,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.othersWhite,
    fontWeight: "600",
    position: "absolute",
  },
  gamesTypo: {
    lineHeight: 22,
    fontSize: FontSize.headlineHeading5_size,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    left: 18,
    color: Color.othersWhite,
    fontWeight: "600",
    position: "absolute",
  },
  seeLayout: {
    height: 16,
    width: 60,
    left: 297,
    position: "absolute",
  },
  tClr: {
    color: Color.nextupBlue,
    textAlign: "left",
  },
  teamLayout: {
    height: 96,
    width: 180,
    top: 337,
    position: "absolute",
  },
  rosterFlexBox: {
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
  },
  rosterTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  bullsPosition4: {
    left: 0,
    top: 0,
  },
  headFlexBox: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_19xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  vsTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.othersWhite,
  },
  kWrapperShadowBox: {
    shadowOpacity: 1,
    elevation: 18,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
  },
  wrapperLayout: {
    height: 38,
    width: 38,
    borderRadius: Border.br_16xl,
    top: 511,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  parentPosition: {
    height: 31,
    top: 516,
    position: "absolute",
  },
  kalumetTypo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  falcons1Typo: {
    textAlign: "right",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  nameTypo: {
    marginTop: 4,
    display: "none",
    fontFamily: FontFamily.bodyMediumSemibold,
    lineHeight: 20,
    alignSelf: "stretch",
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  teamSpaceBlock: {
    marginTop: 9,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.othersWhite,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
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
  rectangleIcon: {
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
    position: "absolute",
  },
  chatteardroptextIcon: {
    left: 12,
  },
  exploreParent: {
    left: 241,
    width: 49,
  },
  houseIcon: {
    left: 17,
  },
  homeParent: {
    width: 59,
    left: 21,
    top: 10,
  },
  calendarParent: {
    left: 101,
    width: 48,
  },
  myStanding: {
    lineHeight: 16,
    top: 28,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
    color: Color.othersWhite,
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
    top: 1073,
  },
  bulls: {
    fontSize: FontSize.size_mid,
    textAlign: "left",
    lineHeight: 14,
    color: Color.othersWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 26,
    borderTopRightRadius: Border.br_2xs,
    borderTopLeftRadius: Border.br_2xs,
    height: 28,
  },
  bulls1: {
    fontFamily: FontFamily.robotoRegular,
    left: 9,
    top: 33,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.othersWhite,
    lineHeight: 14,
  },
  bulls2: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    position: "absolute",
    top: 33,
    textAlign: "left",
    color: Color.othersWhite,
  },
  bulls3: {
    left: 237,
    fontFamily: FontFamily.robotoRegular,
    top: 33,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.othersWhite,
    lineHeight: 14,
  },
  bulls4: {
    left: 301,
    fontFamily: FontFamily.robotoRegular,
    top: 33,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.othersWhite,
    lineHeight: 14,
  },
  groupItem: {
    top: 54,
  },
  bulls5: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: 61,
    textAlign: "center",
    color: Color.othersWhite,
    position: "absolute",
  },
  bulls6: {
    fontSize: FontSize.size_xs,
    top: 61,
    color: Color.othersWhite,
    position: "absolute",
  },
  bulls7: {
    fontSize: FontSize.size_xs,
    top: 61,
    color: Color.othersWhite,
    position: "absolute",
  },
  text: {
    top: 62,
    fontFamily: FontFamily.robotoRegular,
    left: 9,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
    position: "absolute",
  },
  groupInner: {
    top: 82,
  },
  bulls8: {
    left: 164,
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
  },
  bulls9: {
    left: 234,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    textAlign: "center",
    fontWeight: "600",
  },
  bulls10: {
    left: 303,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    textAlign: "center",
    fontWeight: "600",
  },
  text1: {
    top: 90,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: 11,
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
    position: "absolute",
  },
  rectangleView: {
    top: 110,
  },
  bulls11: {
    left: 164,
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  bulls12: {
    left: 234,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  bulls13: {
    left: 303,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  text2: {
    top: 118,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
  },
  bullsParent: {
    top: 686,
    height: 138,
  },
  groupChild1: {
    top: 25,
    borderTopRightRadius: Border.br_2xs,
    borderTopLeftRadius: Border.br_2xs,
    height: 28,
  },
  bulls15: {
    left: 9,
  },
  bulls16: {
    left: 126,
  },
  bulls17: {
    left: 168,
  },
  bulls18: {
    left: 206,
  },
  bulls19: {
    left: 257,
  },
  bulls20: {
    left: 296,
  },
  groupChild2: {
    top: 53,
  },
  bulls21: {
    left: 126,
  },
  bulls22: {
    left: 165,
  },
  bulls23: {
    left: 208,
  },
  bulls24: {
    left: 265,
  },
  bulls25: {
    left: 307,
  },
  phonenix: {
    fontFamily: FontFamily.robotoRegular,
    left: 9,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 61,
    color: Color.othersWhite,
    position: "absolute",
  },
  groupChild3: {
    top: 81,
  },
  groupChild4: {
    top: 137,
  },
  bulls26: {
    left: 126,
  },
  bulls27: {
    left: 126,
  },
  bulls28: {
    left: 165,
  },
  bulls29: {
    left: 165,
  },
  bulls30: {
    left: 208,
  },
  bulls31: {
    left: 208,
  },
  bulls32: {
    left: 258,
  },
  bulls33: {
    left: 260,
  },
  bulls34: {
    left: 305,
  },
  bulls35: {
    left: 305,
  },
  goldenState: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: 11,
  },
  laLakers: {
    top: 145,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    left: 11,
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
    position: "absolute",
  },
  groupChild5: {
    top: 109,
  },
  groupChild6: {
    top: 165,
  },
  bulls36: {
    left: 126,
  },
  bulls37: {
    left: 126,
  },
  bulls38: {
    left: 165,
  },
  bulls39: {
    left: 165,
  },
  bulls40: {
    left: 208,
  },
  bulls41: {
    left: 208,
  },
  bulls42: {
    left: 260,
  },
  bulls43: {
    left: 260,
  },
  bulls44: {
    left: 305,
  },
  bulls45: {
    left: 305,
  },
  laClippers: {
    top: 117,
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  sacramento: {
    top: 173,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
  },
  bullsGroup: {
    top: 850,
    height: 193,
  },
  upcomingGames: {
    top: 302,
  },
  seeAll: {
    fontSize: FontSize.bodyMediumSemibold_size,
    position: "absolute",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  chevronDownIcon: {
    left: 46,
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  seeAllParent: {
    top: 306,
  },
  myTeamChild: {
    left: 18,
  },
  myTeamItem: {
    left: 210,
  },
  recentGames: {
    top: 459,
  },
  seeAllGroup: {
    top: 463,
  },
  myTeamInner: {
    top: 274,
    width: 124,
    height: 2,
    left: 18,
  },
  bulls46: {
    width: 65,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    color: Color.othersWhite,
  },
  roster: {
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    width: 45,
  },
  warriors: {
    marginLeft: 74,
  },
  warriors1: {
    width: 36,
    marginLeft: 74,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
  },
  bullsContainer: {
    top: 252,
    left: 45,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  team: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.othersWhite,
  },
  head: {
    width: 97,
  },
  head1: {
    width: 44,
    marginLeft: 8,
  },
  t: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  headParent: {
    flexDirection: "row",
  },
  copperKings: {
    color: Color.blueTeam,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  headGroup: {
    marginTop: 8,
    flexDirection: "row",
  },
  text12: {
    fontSize: FontSize.size_xs,
  },
  frameParent: {
    position: "absolute",
  },
  frameView: {
    top: 574,
    width: 358,
    height: 82,
    overflow: "hidden",
  },
  myTeamChild1: {
    top: 497,
    borderRadius: Border.br_5xs,
    width: 357,
    height: 65,
    left: 10,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray_100,
    elevation: 18,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
  },
  k: {
    fontSize: FontSize.normalTextBody1X_size,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.othersWhite,
  },
  kWrapper: {
    left: 19,
    backgroundColor: Color.blueTeam,
    padding: Padding.p_5xs,
    shadowOpacity: 1,
    elevation: 18,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
  },
  kalumet: {
    color: Color.othersWhite,
    top: 0,
  },
  copperKings1: {
    top: 16,
    color: Color.blueTeam,
  },
  kalumetParent: {
    left: 64,
    width: 77,
  },
  divineChild: {
    color: Color.othersWhite,
    left: 0,
    top: 0,
  },
  falcons1: {
    left: 22,
    color: Color.redTeam,
    top: 16,
  },
  divineChildParent: {
    left: 245,
    width: 67,
  },
  dWrapper: {
    left: 320,
    backgroundColor: Color.redTeam,
    padding: Padding.p_9xs,
  },
  vs: {
    top: 523,
    left: 178,
    fontSize: FontSize.bodyMediumSemibold_size,
    position: "absolute",
  },
  frameIcon: {
    width: 80,
    height: 80,
  },
  name: {
    color: Color.othersWhite,
  },
  typenotSeenStoryComponent: {
    alignItems: "center",
  },
  aauTeam: {
    width: 99,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  typenotSeenStoryComponentParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  name1: {
    color: Color.greyscale300,
  },
  highSchoolTeam: {
    width: 71,
    justifyContent: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.othersWhite,
  },
  typeseenStoryComponentstoParent: {
    marginLeft: 31,
    justifyContent: "center",
    alignItems: "center",
  },
  frameGroup: {
    top: 76,
    left: 25,
    flexDirection: "row",
    position: "absolute",
  },
  myTeam: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 1154,
    overflow: "hidden",
  },
});

export default MyTeam1;
