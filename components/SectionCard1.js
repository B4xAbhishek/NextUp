import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; 

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard1 = ({
  inboxIcon,
  iconText,
  iconCode,
  propTop,
  propLeft,
  propWidth,
  propLeft1,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const navigation = useNavigation();
  
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
    };
  }, [propLeft, propWidth]);

  const chatTeardropTextIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View
      style={[styles.rectangleParent, styles.rectangleLayout, groupViewStyle]}
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
      <View
        style={[styles.exploreParent, styles.parentPosition, groupView1Style]}
      >
        <Text style={[styles.explore, styles.homeTypo]} onPress={() => navigation.navigate("ChatScreen")} >{inboxIcon}</Text>
        <Image
          style={[
            styles.chatteardroptextIcon,
            styles.iconLayout,
            chatTeardropTextIconStyle,
          ]}
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
        <Text style={[styles.explore, styles.homeTypo]} 
        onPress={() => navigation.navigate("CalendarPlayer")}>Calendar fix</Text>
        <Image
          style={[styles.calendarblankIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/calendarblank.png")}
        />
      </View>
      <View style={[styles.myStandingParent, styles.parentPosition]}>
        <Text style={[styles.explore, styles.homeTypo]}
        onPress={() => navigation.navigate("MyTeam")}>My Team</Text>
        <Image
          style={[styles.usersIcon, styles.iconLayout]}
          contentFit="cover"
          source={iconText}
        />
      </View>
      <View style={[styles.proParent, styles.parentPosition]}>
        <Text style={[styles.explore, styles.homeTypo]}
         onPress={() => navigation.navigate("AccountSetting")} >Account</Text>
        <Image
          style={[styles.userIcon, styles.iconLayout]}
          contentFit="cover"
          source={iconCode}
        />
      </View>
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
    height: 24,
    width: 24,
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
    // backgroundColor: Color.othersWhite,
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
    left: 3,
  },
  exploreParent: {
    left: 250,
    width: 30,
  },
  home: {
    color: Color.othersWhite,
  },
  houseIcon: {
    left: 17,
  },
  homeParent: {
    left: 21,
    width: 59,
  },
  calendarblankIcon: {
    left: 12,
  },
  calendarParent: {
    left: 101,
    width: 48,
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
    top: 863,
  },
});

export default SectionCard1;
