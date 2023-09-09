import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

import { useNavigation } from "@react-navigation/native";


const AccountDetailsSection = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.rectangleParent, styles.rectangleLayout]}>
      <Image
        style={[styles.rectangleIcon, styles.rectangleLayout]}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
        <View style={[styles.bounds, styles.boundsLayout]} />
      </View>
      <Text style={[styles.myStanding, styles.proTypo]} onPress={() => navigation.navigate("MyTeam1")}
        onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
      <Text style={[styles.calendar, styles.proTypo]}>Calendar</Text>
      <Text style={[styles.home, styles.proTypo]}>Dashboard</Text>
      <Text style={[styles.explore, styles.proTypo]}>Message</Text>
      <Text style={[styles.pro, styles.proTypo]}>Account</Text>
      <Image
        style={[styles.chatteardroptextIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/chatteardroptext1.png")}
      />
      <Image
        style={[styles.houseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/house.png")}
      />
      <Image
        style={[styles.calendarblankIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/calendarblank.png")}
      />
      <Image
        style={[styles.usersIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/users.png")}
      />
      <Image
        style={[styles.userIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/user2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  proTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 38,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 10,
    position: "absolute",
  },
  rectangleIcon: {
    top: 0,
  },
  bounds: {
    top: 0,
  },
  homeIndicatorLight: {
    top: 61,
  },
  myStanding: {
    left: 239,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 38,
  },
  calendar: {
    left: 170,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 38,
  },
  home: {
    left: 21,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 38,
  },
  explore: {
    left: 101,
    color: Color.neutral0,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 38,
  },
  pro: {
    left: 310,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 38,
  },
  chatteardroptextIcon: {
    left: 113,
  },
  houseIcon: {
    left: 38,
  },
  calendarblankIcon: {
    left: 182,
  },
  usersIcon: {
    left: 252,
  },
  userIcon: {
    left: 321,
  },
  rectangleParent: {
    top: 731,
  },
});

export default AccountDetailsSection;
