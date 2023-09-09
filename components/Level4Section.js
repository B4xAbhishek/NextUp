import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import CardContainer from "./CardContainer";
import { Border, Color } from "../GlobalStyles";

const Level4Section = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.rectangle} />
      <Image
        style={[styles.ovalIcon, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval1.png")}
      />
      <Image
        style={[styles.ovalCopyIcon, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval1.png")}
      />
      <Image
        style={[styles.ovalCopy2, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval1.png")}
      />
      <Image
        style={[styles.ovalCopy3, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval1.png")}
      />
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape.png")}
      />
      <Image
        style={styles.shapeIcon}
        contentFit="cover"
        source={require("../assets/shape1.png")}
      />
      <Image
        style={styles.shapeIcon2}
        contentFit="cover"
        source={require("../assets/shape2.png")}
      />
      <Image
        style={styles.shapeIcon2}
        contentFit="cover"
        source={require("../assets/shape2.png")}
      />
      <CardContainer
        levelDescription="Level 1"
        dimensionCode={require("../assets/crownsimple.png")}
      />
      <CardContainer
        levelDescription="Level 2"
        dimensionCode={require("../assets/crown.png")}
        propLeft={100}
      />
      <CardContainer
        levelDescription="Level 3"
        dimensionCode={require("../assets/medal.png")}
        propLeft={200}
      />
      <CardContainer
        levelDescription="Level 4"
        dimensionCode={require("../assets/trophy.png")}
        propLeft={300}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ovalIconLayout: {
    height: 28,
    width: 28,
    top: 118,
    position: "absolute",
  },
  rectangle: {
    top: 128,
    left: 0,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 361,
    height: 8,
    opacity: 0.12,
    position: "absolute",
  },
  ovalIcon: {
    left: 28,
  },
  ovalCopyIcon: {
    left: 128,
  },
  ovalCopy2: {
    left: 228,
  },
  ovalCopy3: {
    left: 328,
  },
  shapeIcon: {
    width: 16,
    height: 16,
  },
  shapeIcon2: {
    width: 12,
    height: 16,
  },
  rectangleParent: {
    top: 506,
    left: 18,
    width: 384,
    height: 144,
    position: "absolute",
  },
});

export default Level4Section;
