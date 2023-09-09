import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MyTeam = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.myTeam}>
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
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
          <View style={[styles.bounds, styles.boundsLayout]} />
          <View style={[styles.homeIndicator, styles.capacityBg]} />
        </View>
        <View style={[styles.exploreParent, styles.parentPosition1]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Message</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chatteardroptext2.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.parentPosition1]}>
          <Text style={[styles.explore, styles.exploreTypo]} 
          onPress={() => navigation.navigate("PlayerContent1")} >Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/house1.png")}
          />
        </View>
        <View style={[styles.calendarParent, styles.parentPosition1]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Calendar</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/calendarblank.png")}
          />
        </View>
        <View style={[styles.myStandingParent, styles.parentPosition1]}>
          <Text style={[styles.myStanding, styles.exploreTypo]} 
          onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
          <Image
            style={[styles.usersIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/users2.png")}
          />
        </View>
        <View style={[styles.proParent, styles.parentPosition1]}>
          <Text style={[styles.explore, styles.exploreTypo]}          
           onPress={() => navigation.navigate("AccountSetting")}>Account</Text>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user11.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleCopy} />
      <Text style={[styles.powerForward, styles.warriorsFlexBox]}>
        Power Forward
      </Text>
      <View style={[styles.aMccoyParent, styles.parentLayout]}>
        <Text style={[styles.aMccoy, styles.mccoyTypo]}>A. McCoy</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-756.png")}
        />
      </View>
      <View style={[styles.cooperParent, styles.parentLayout]}>
        <Text style={[styles.cooper, styles.mccoyTypo]}>Cooper</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7561.png")}
        />
      </View>
      <View style={[styles.rFoxParent, styles.parentLayout]}>
        <Text style={[styles.rFox, styles.foxTypo]}>R. Fox</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-757.png")}
        />
      </View>
      <View style={[styles.cHenryParent, styles.parentLayout]}>
        <Text style={[styles.cHenry, styles.mccoyTypo]}>C. Henry</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7571.png")}
        />
      </View>
      <View style={[styles.cHenryGroup, styles.parentLayout]}>
        <Text style={[styles.cHenry, styles.mccoyTypo]}>C. Henry</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7571.png")}
        />
      </View>
      <View style={[styles.rectangleCopy1, styles.rectangleLayout]} />
      <View style={[styles.rectangleCopy2, styles.rectangleLayout]} />
      <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
      <View style={[styles.rectangleCopy4, styles.rectangleLayout]} />
      <View style={[styles.rectangleCopy5, styles.rectangleLayout]} />
      <View style={[styles.rectangleCopy1, styles.rectangleLayout]} />
      <View style={[styles.rectangleCopy2, styles.rectangleLayout]} />
      <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
      <View style={[styles.rectangleCopy4, styles.rectangleLayout]} />
      <View style={[styles.rectangleCopy5, styles.rectangleLayout]} />
      <Text style={[styles.center, styles.guardTypo]}>Center</Text>
      <Text style={[styles.pointGuard, styles.guardTypo]}>Point Guard</Text>
      <Text style={[styles.shootingGuard, styles.guardTypo]}>
        Shooting Guard
      </Text>
      <Text style={[styles.smallForwardGuard, styles.guardTypo]}>
        Small Forward Guard
      </Text>
      <Text style={[styles.coach, styles.guardTypo]}>Coach</Text>
      <View style={[styles.aMccoyGroup, styles.groupPosition]}>
        <Text style={[styles.aMccoy, styles.mccoyTypo]}>A. McCoy</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-756.png")}
        />
      </View>
      <View style={[styles.aMccoyContainer, styles.mccoyParentPosition]}>
        <Text style={[styles.aMccoy2, styles.mccoyTypo]}>A. McCoy</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-756.png")}
        />
      </View>
      <View style={[styles.groupView, styles.mccoyParentPosition]}>
        <Text style={[styles.aMccoy2, styles.mccoyTypo]}>A. McCoy</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-756.png")}
        />
      </View>
      <View style={[styles.aMccoyParent1, styles.mccoyParentPosition]}>
        <Text style={[styles.aMccoy, styles.mccoyTypo]}>A. McCoy</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-756.png")}
        />
      </View>
      <View style={[styles.aMccoyParent2, styles.mccoyParentPosition]}>
        <Text style={[styles.aMccoy, styles.mccoyTypo]}>A. McCoy</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-756.png")}
        />
      </View>
      <View style={[styles.rFoxGroup, styles.groupPosition]}>
        <Text style={[styles.rFox, styles.foxTypo]}>R. Fox</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7572.png")}
        />
      </View>
      <View style={[styles.rFoxContainer, styles.foxParentPosition]}>
        <Text style={[styles.rFox2, styles.foxTypo]}>R. Fox</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7572.png")}
        />
      </View>
      <View style={[styles.rFoxParent1, styles.foxParentPosition]}>
        <Text style={[styles.rFox2, styles.foxTypo]}>R. Fox</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7572.png")}
        />
      </View>
      <View style={[styles.rFoxParent2, styles.foxParentPosition]}>
        <Text style={[styles.rFox, styles.foxTypo]}>R. Fox</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-7572.png")}
        />
      </View>
      <View style={[styles.rectangle, styles.borderBorder]} />
      <Image
        style={styles.group7Copy4}
        contentFit="cover"
        source={require("../assets/group-41.png")}
      />
      <View style={styles.rectangleGroup}>
        <View style={[styles.rectangleView, styles.capacityBg]} />
        <Text style={[styles.bulls, styles.bullsTypo]} 
        onPress={navigation.navigate('MyTeam1')}>Games-m</Text>
        <Text style={[styles.warriors, styles.bullsLayout]}>Roster 01</Text>
        <Pressable
          style={styles.warriors1}
          onPress={() => navigation.navigate("MyTeam")}
        >
          <Text style={[styles.stats, styles.bullsTypo]}>Stats</Text>
        </Pressable>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.typenotSeenStoryComponentParent}>
          <View style={styles.typenotSeenStoryComponent}>
            {/* <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/group-41.png")}
            /> */}
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
  borderBorder: {
    borderColor: Color.othersWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.othersWhite,
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
  parentPosition1: {
    top: 10,
    height: 44,
    position: "absolute",
  },
  exploreTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 28,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  warriorsFlexBox: {
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  parentLayout: {
    height: 67,
    position: "absolute",
  },
  mccoyTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  groupLayout: {
    height: 50,
    width: 50,
    top: 0,
    position: "absolute",
  },
  foxTypo: {
    left: 7,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 11,
    top: 56,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  rectangleLayout: {
    left: 19,
    height: 42,
    width: 338,
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  guardTypo: {
    left: 33,
    textAlign: "left",
    fontSize: FontSize.normalTextBody1X_size,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.othersWhite,
    position: "absolute",
  },
  groupPosition: {
    top: 505,
    height: 67,
    position: "absolute",
  },
  mccoyParentPosition: {
    left: 24,
    height: 67,
    width: 52,
    position: "absolute",
  },
  foxParentPosition: {
    left: 104,
    height: 67,
    width: 50,
    position: "absolute",
  },
  bullsTypo: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  bullsLayout: {
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
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
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
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
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
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
  },
  calendarParent: {
    left: 101,
    width: 48,
  },
  myStanding: {
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
    top: 1178,
  },
  rectangleCopy: {
    top: 294,
    left: 18,
    height: 42,
    width: 338,
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  powerForward: {
    top: 307,
    left: 32,
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  aMccoy: {
    lineHeight: 11,
    top: 56,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
    color: Color.othersWhite,
    left: 0,
  },
  groupChild: {
    left: 1,
  },
  aMccoyParent: {
    width: 52,
    left: 23,
    top: 353,
    height: 67,
  },
  cooper: {
    left: 6,
    color: Color.colorGray_900,
    lineHeight: 11,
    top: 56,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
  },
  groupItem: {
    left: 0,
  },
  cooperParent: {
    left: 159,
    top: 353,
    height: 67,
    width: 50,
  },
  rFox: {
    color: Color.colorGray_900,
  },
  rFoxParent: {
    left: 93,
    top: 353,
    height: 67,
    width: 50,
  },
  cHenry: {
    color: Color.colorGray_900,
    left: 1,
    lineHeight: 11,
    top: 56,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
  },
  cHenryParent: {
    left: 226,
    top: 353,
    height: 67,
    width: 50,
  },
  cHenryGroup: {
    left: 177,
    top: 799,
    width: 50,
  },
  rectangleCopy1: {
    top: 446,
  },
  rectangleCopy2: {
    top: 593,
  },
  rectangleCopy3: {
    top: 740,
  },
  rectangleCopy4: {
    top: 887,
  },
  rectangleCopy5: {
    top: 1030,
  },
  center: {
    top: 459,
  },
  pointGuard: {
    top: 606,
  },
  shootingGuard: {
    top: 753,
  },
  smallForwardGuard: {
    top: 900,
  },
  coach: {
    top: 1043,
  },
  aMccoyGroup: {
    width: 52,
    left: 23,
  },
  aMccoy2: {
    color: Color.colorGray_900,
    lineHeight: 11,
    top: 56,
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
    left: 0,
  },
  aMccoyContainer: {
    top: 652,
  },
  groupView: {
    top: 799,
  },
  aMccoyParent1: {
    top: 946,
  },
  aMccoyParent2: {
    top: 1089,
  },
  rFoxGroup: {
    left: 103,
    width: 50,
  },
  rFox2: {
    color: Color.othersWhite,
  },
  rFoxContainer: {
    top: 652,
  },
  rFoxParent1: {
    top: 799,
  },
  rFoxParent2: {
    top: 946,
  },
  rectangle: {
    top: 502,
    borderRadius: Border.br_13xl,
    borderWidth: 2,
    width: 56,
    height: 56,
    opacity: 0.12,
    left: 21,
  },
  group7Copy4: {
    top: 501,
    left: 60,
    width: 16,
    height: 16,
    position: "absolute",
  },
  rectangleView: {
    top: 21,
    left: 77,
    width: 113,
    height: 2,
  },
  bulls: {
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  warriors: {
    left: 110,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
    top: 0,
  },
  stats: {
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
  },
  warriors1: {
    left: 234,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 253,
    left: 53,
    width: 267,
    height: 23,
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
  frameParent: {
    top: 81,
    left: 15,
    flexDirection: "row",
    position: "absolute",
  },
  myTeam: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 1259,
    overflow: "hidden",
  },
});

export default MyTeam;
