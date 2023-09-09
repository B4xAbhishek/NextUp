import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerCardFormFilter = ({
  dimensionCode,
  imageCode,
  propTop,
  propLeft,
}) => {
  const groupView3Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.groupParent, groupView3Style]}>
      <View style={[styles.groupContainer, styles.groupLayout1]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={dimensionCode}
        />
        <Text style={styles.text}>80%</Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout1]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={imageCode}
        />
        <Text style={styles.text}>20%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    width: 41,
    top: 0,
    height: 65,
    position: "absolute",
  },
  groupLayout: {
    height: 36,
    width: 36,
    top: 29,
    position: "absolute",
  },
  groupChild: {
    left: 3,
  },
  text: {
    fontSize: FontSize.headlineHeading5_size,
    lineHeight: 22,
    fontFamily: FontFamily.robotoRegular,
    color: Color.neutral0,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    left: 0,
  },
  groupItem: {
    left: 2,
  },
  groupView: {
    left: 129,
  },
  groupParent: {
    top: 248,
    left: 85,
    width: 170,
    height: 65,
    position: "absolute",
  },
});

export default ContainerCardFormFilter;
