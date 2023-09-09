import * as React from "react";
import { StyleSheet, View } from "react-native";
import StatCollectionSection from "./StatCollectionSection";
import { Border, Color } from "../GlobalStyles";

const SaveForm2 = () => {
  return (
    <View style={[styles.groupParent, styles.groupParentPosition]}>
      <View
        style={[styles.homeIndicatorLightWrapper, styles.groupParentPosition]}
      >
        <View style={[styles.homeIndicatorLight, styles.frameWrapperPosition]}>
          <View
            style={[styles.homeIndicatorLight, styles.frameWrapperPosition]}
          />
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
        <StatCollectionSection
          buttonText="Save"
          propTop={0}
          propFontWeight="700"
          propFontFamily="Roboto-Bold"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  frameWrapperPosition: {
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  homeIndicatorLight: {
    height: 20,
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
    height: 20,
  },
  frameWrapper: {
    height: 48,
  },
  groupParent: {
    top: 736,
    height: 122,
  },
});

export default SaveForm2;
