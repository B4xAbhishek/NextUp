import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ConfirmSection = ({ propTop, onFramePressablePress }) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <Pressable
      style={[
        styles.tellUsMoreFilledInner,
        styles.rectangleCopy3Position,
        framePressableStyle,
      ]}
      onPress={onFramePressablePress}
    >
      <View style={styles.rectangleLayout}>
        <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
        <Text style={styles.continue}>Confirm</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangleCopy3Position: {
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 311,
  },
  rectangleCopy3: {
    top: 0,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorRoyalblue,
    left: 0,
    position: "absolute",
  },
  continue: {
    top: 16,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 16,
    fontFamily: FontFamily.robotoRegular,
    color: Color.othersWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 16,
    width: 311,
    left: 0,
    position: "absolute",
  },
  tellUsMoreFilledInner: {
    top: 705,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
  },
});

export default ConfirmSection;
