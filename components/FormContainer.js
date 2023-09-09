import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const FormContainer = ({ imageDimensions, imageDimensionsText }) => {
  return (
    <View style={styles.augustPhliegerCreqtqgbfcuUnParent}>
      <Image
        style={styles.augustPhliegerCreqtqgbfcuUnIcon}
        contentFit="cover"
        source={imageDimensions}
      />
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={imageDimensionsText}
      />
      <Text style={styles.player}>PLAYER</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  augustPhliegerCreqtqgbfcuUnIcon: {
    bottom: -1,
    left: -1,
    borderRadius: Border.br_xs,
    width: 164,
    height: 223,
    position: "absolute",
  },
  groupChild: {
    top: 13,
    left: 137,
    width: 15,
    height: 15,
    position: "absolute",
  },
  player: {
    top: 16,
    left: 11,
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 95,
    height: 11,
    position: "absolute",
  },
  augustPhliegerCreqtqgbfcuUnParent: {
    bottom: 361,
    left: 19,
    width: 162,
    height: 221,
    position: "absolute",
  },
});

export default FormContainer;
