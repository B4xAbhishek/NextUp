import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BarsStatusBarIPhoneD1 = ({
  wifi,
  cellularConnection,
  barsStatusBarIPhoneDPosition,
  barsStatusBarIPhoneDBackgroundColor,
  barsStatusBarIPhoneDTop,
  barsStatusBarIPhoneDLeft,
  barsStatusBarIPhoneDWidth,
  timeFontFamily,
}) => {
  const barsStatusBarIPhoneD1Style = useMemo(() => {
    return {
      ...getStyleValue("position", barsStatusBarIPhoneDPosition),
      ...getStyleValue("backgroundColor", barsStatusBarIPhoneDBackgroundColor),
      ...getStyleValue("top", barsStatusBarIPhoneDTop),
      ...getStyleValue("left", barsStatusBarIPhoneDLeft),
      ...getStyleValue("width", barsStatusBarIPhoneDWidth),
    };
  }, [
    barsStatusBarIPhoneDPosition,
    barsStatusBarIPhoneDBackgroundColor,
    barsStatusBarIPhoneDTop,
    barsStatusBarIPhoneDLeft,
    barsStatusBarIPhoneDWidth,
  ]);

  const time1Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", timeFontFamily),
    };
  }, [timeFontFamily]);

  return (
    <View style={[styles.barsStatusBarIphoneD, barsStatusBarIPhoneD1Style]}>
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image style={styles.wifiIcon} contentFit="cover" source={wifi} />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={cellularConnection}
      />
      <View style={[styles.timeStyle, styles.timeLayout]}>
        <Text style={[styles.time, styles.timeLayout, time1Style]}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.othersWhite,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
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
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.othersWhite,
    textAlign: "center",
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
  },
  barsStatusBarIphoneD: {
    backgroundColor: Color.colorBlack,
    width: 376,
    height: 44,
  },
});

export default BarsStatusBarIPhoneD1;
