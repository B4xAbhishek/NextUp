import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AccountSection = ({ propTop }) => {
  const groupView3Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <ScrollView>
    <View
      style={[styles.rectangleParent, styles.rectangleLayout, groupView3Style]}
    >
      <Image
        style={[styles.rectangleIcon, styles.rectangleLayout]}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
        <View style={[styles.bounds, styles.boundsLayout]} />
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.exploreParent, styles.parentPosition]}>
        <Text style={[styles.explore, styles.homeTypo]}>Inbox</Text>
        <Image
          style={[styles.chatteardroptextIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/chatteardroptext.png")}
        />
      </View>
      <View style={[styles.homeParent, styles.parentPosition]}>
        <Text style={[styles.home, styles.homeTypo]}>Dashboard</Text>
        <Image
          style={[styles.houseIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/house.png")}
        />
      </View>
      <View style={[styles.calendarParent, styles.parentPosition]}>
        <Text style={[styles.explore, styles.homeTypo]}>Calendar</Text>
        <Image
          style={[styles.calendarblankIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/calendarblank.png")}
        />
      </View>
      <View style={[styles.myStandingParent, styles.parentPosition]}>
        <Text style={[styles.explore, styles.homeTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
        <Image
          style={[styles.usersIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/users1.png")}
        />
      </View>
      <View style={[styles.proParent, styles.parentPosition]}>
        <Text style={[styles.explore, styles.homeTypo]}>Account</Text>
        <Image
          style={[styles.userIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/user1.png")}
        />
      </View>
    </View>
    </ScrollView>
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
  parentPosition: {
    height: 44,
    top: 10,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 28,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "45.45%",
    top: "0%",
    height: "54.55%",
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
    backgroundColor: Color.othersWhite,
    width: 135,
    height: 4,
    position: "absolute",
  },
  homeIndicatorLight: {
    top: 61,
  },
  explore: {
    color: Color.colorDimgray_100,
  },
  chatteardroptextIcon: {
    width: "80%",
    right: "10%",
    left: "10%",
  },
  exploreParent: {
    left: 250,
    width: 30,
  },
  home: {
    color: Color.othersWhite,
  },
  houseIcon: {
    width: "40.68%",
    right: "30.51%",
    left: "28.81%",
  },
  homeParent: {
    left: 21,
    width: 59,
  },
  calendarblankIcon: {
    width: "50%",
    right: "25%",
    left: "25%",
  },
  calendarParent: {
    left: 101,
    width: 48,
  },
  usersIcon: {
    width: "48%",
    right: "26%",
    left: "26%",
  },
  myStandingParent: {
    left: 170,
    width: 50,
  },
  userIcon: {
    width: "53.33%",
    right: "22.22%",
    left: "24.44%",
  },
  proParent: {
    left: 310,
    width: 45,
  },
  rectangleParent: {
    top: 1577,
  },
});

export default AccountSection;
