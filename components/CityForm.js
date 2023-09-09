import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CityForm = ({
  location1,
  carStateCarWeight,
  personHeight,
  cityName,
  propTop,
}) => {
  const groupView5Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.path5Copy6Parent, groupView5Style]}>
      <Image
        style={[styles.path5Copy6, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-6.png")}
      />
      <Image
        style={[styles.path5Copy7, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-6.png")}
      />
      <Text style={[styles.firstName, styles.nameTypo]}>{location1}</Text>
      <Text style={[styles.lastName, styles.nameTypo]}>
        {carStateCarWeight}
      </Text>
      <Text style={[styles.vineet, styles.kumarTypo]}>{personHeight}</Text>
      <Text style={[styles.kumar, styles.kumarTypo]}>{cityName}</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  path5Layout: {
    height: 1,
    width: 148,
    top: 54,
    position: "absolute",
  },
  nameTypo: {
    height: 12,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    top: 0,
    width: 148,
    position: "absolute",
  },
  kumarTypo: {
    height: 18,
    color: Color.othersWhite,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    top: 25,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    width: 148,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "83.64%",
    top: "5.45%",
    width: "2.89%",
    height: "10.91%",
    position: "absolute",
  },
  path5Copy6: {
    left: 0,
  },
  path5Copy7: {
    left: 163,
  },
  firstName: {
    left: 0,
  },
  lastName: {
    left: 163,
  },
  vineet: {
    left: 0,
  },
  kumar: {
    left: 163,
  },
  vectorIcon: {
    right: "0%",
    left: "97.11%",
  },
  vectorIcon1: {
    right: "52.41%",
    left: "44.69%",
  },
  path5Copy6Parent: {
    top: 351,
    left: 32,
    width: 311,
    height: 55,
    position: "absolute",
  },
});

export default CityForm;
