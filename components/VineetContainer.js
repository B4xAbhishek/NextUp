import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VineetContainer = ({ propTop }) => {
  const groupView5Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.path5Copy2Parent, groupView5Style]}>
      <Image
        style={[styles.path5Copy2, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-2.png")}
      />
      <Image
        style={[styles.path5Copy3, styles.path5Layout]}
        contentFit="cover"
        source={require("../assets/path-5-copy-2.png")}
      />
      <Text style={[styles.firstName, styles.nameTypo]}>FIRST NAME</Text>
      <Text style={[styles.lastName, styles.nameTypo]}>LAST NAME</Text>
      <Text style={[styles.vineet, styles.kumarTypo]}>Vineet</Text>
      <Text style={[styles.kumar, styles.kumarTypo]}>Kumar</Text>
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
    color: Color.neutral0,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.normalTextBody1X_size,
    top: 24,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    width: 148,
    position: "absolute",
  },
  path5Copy2: {
    left: 0,
  },
  path5Copy3: {
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
  path5Copy2Parent: {
    top: 280,
    left: 32,
    width: 311,
    height: 55,
    position: "absolute",
  },
});

export default VineetContainer;
