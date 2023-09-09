import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardContainer1 = ({ levelDescription, dimensionCode, propLeft }) => {
  const groupView3Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View
      style={[
        styles.rectangleCopy4Parent,
        styles.level1Position,
        groupView3Style,
      ]}
    >
      <View style={styles.rectangleCopy4} />
      <Text style={[styles.level1, styles.level1Position]}>
        {levelDescription}
      </Text>
      <Image
        style={styles.crownsimpleIcon}
        contentFit="cover"
        source={dimensionCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  level1Position: {
    width: 84,
    left: 0,
    position: "absolute",
  },
  rectangleCopy4: {
    top: -1,
    left: -1,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.othersWhite,
    borderWidth: 2,
    width: 86,
    height: 110,
    opacity: 0.12,
    position: "absolute",
  },
  level1: {
    top: 84,
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    textAlign: "center",
  },
  crownsimpleIcon: {
    top: 22,
    left: 20,
    width: 45,
    height: 45,
    position: "absolute",
  },
  rectangleCopy4Parent: {
    top: 0,
    height: 108,
  },
});

export default CardContainer1;
