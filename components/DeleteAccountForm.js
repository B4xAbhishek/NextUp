import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DeleteAccountForm = ({ propTop, propLeft, propTop1, propLeft1 }) => {
  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const vuesaxboldarrowDownIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("left", propLeft1),
    };
  }, [propTop1, propLeft1]);

  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Image
        style={[styles.groupItem, groupIconStyle]}
        contentFit="cover"
        source={require("../assets/group-1000002785.png")}
      />
      <Text style={styles.title}>Delete Account</Text>
      <Image
        style={[styles.vuesaxboldarrowDownIcon, vuesaxboldarrowDownIconStyle]}
        contentFit="cover"
        source={require("../assets/vuesaxboldarrowdown1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 50,
    width: 338,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lighterDark,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
  },
  groupItem: {
    top: 12,
    left: 298,
    width: 30,
    height: 26,
    position: "absolute",
  },
  title: {
    top: 17,
    left: 56,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.neutral0,
    textAlign: "left",
    position: "absolute",
  },
  vuesaxboldarrowDownIcon: {
    top: 15,
    left: 308,
    width: 20,
    height: 20,
    position: "absolute",
  },
  rectangleParent: {
    top: 805,
    left: 18,
  },
});

export default DeleteAccountForm;
