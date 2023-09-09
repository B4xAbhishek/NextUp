import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer2 = ({
  teamAbbreviation,
  teamAbbreviationOpponent,
  propTop,
  propLeft,
  propLeft1,
}) => {
  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const gSWStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View
      style={[styles.ellipseParent, styles.groupChildLayout, groupView2Style]}
    >
      <Image
        style={[styles.groupChild, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-754.png")}
      />
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/ellipse-755.png")}
      />
      <Text style={[styles.gsw, styles.gswTypo, gSWStyle]}>
        {teamAbbreviation}
      </Text>
      <Text style={[styles.bos, styles.gswTypo]}>
        {teamAbbreviationOpponent}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 141,
    width: 141,
    position: "absolute",
  },
  gswTypo: {
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 15,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 63,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  groupItem: {
    top: 71,
    left: 71,
    width: 71,
    height: 71,
    position: "absolute",
  },
  gsw: {
    left: 33,
  },
  bos: {
    left: 80,
    opacity: 0.4,
  },
  ellipseParent: {
    top: 86,
    left: 99,
  },
});

export default FormContainer2;
