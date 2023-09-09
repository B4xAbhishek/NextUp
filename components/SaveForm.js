import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SaveForm = ({ propTop, onGroupPressablePress }) => {
  const groupView4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View
      style={[styles.groupParent, styles.continuePosition, groupView4Style]}
    >
      <View style={[styles.homeIndicatorLightWrapper, styles.homeLayout]}>
        <View style={[styles.homeIndicatorLight, styles.wrapperPosition]}>
          <View style={[styles.homeIndicatorLight, styles.wrapperPosition]} />
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={[styles.frameWrapper, styles.wrapperPosition]}>
        <View style={[styles.groupWrapper, styles.wrapperPosition]}>
          <Pressable
            style={styles.rectangleCopy3Parent}
            onPress={onGroupPressablePress}
          >
            <View style={[styles.rectangleCopy3, styles.wrapperPosition]} />
            <Text style={[styles.continue, styles.continuePosition]}>Save</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continuePosition: {
    left: 0,
    position: "absolute",
  },
  homeLayout: {
    height: 20,
    width: 375,
  },
  wrapperPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  homeIndicatorLight: {
    height: 20,
    width: 375,
  },
  homeIndicator: {
    top: 8,
    left: 120,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 4,
    position: "absolute",
  },
  homeIndicatorLightWrapper: {
    top: 102,
    left: 0,
    position: "absolute",
  },
  rectangleCopy3: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorRoyalblue,
    width: 311,
    height: 48,
  },
  continue: {
    top: 16,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.neutral0,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 16,
    width: 311,
  },
  rectangleCopy3Parent: {
    width: 311,
    height: 48,
  },
  groupWrapper: {
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
  },
  frameWrapper: {
    height: 48,
    width: 375,
  },
  groupParent: {
    top: 690,
    height: 122,
    width: 375,
  },
});

export default SaveForm;
