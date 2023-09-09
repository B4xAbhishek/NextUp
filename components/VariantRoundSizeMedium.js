import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VariantRoundSizeMedium = ({
  add,
  variantRoundSizeMediumPosition,
  variantRoundSizeMediumBackgroundColor,
  variantRoundSizeMediumElevation,
  variantRoundSizeMediumOverflow,
}) => {
  const variantRoundSizeMediumStyle = useMemo(() => {
    return {
      ...getStyleValue("position", variantRoundSizeMediumPosition),
      ...getStyleValue(
        "backgroundColor",
        variantRoundSizeMediumBackgroundColor
      ),
      ...getStyleValue("elevation", variantRoundSizeMediumElevation),
      ...getStyleValue("overflow", variantRoundSizeMediumOverflow),
    };
  }, [
    variantRoundSizeMediumPosition,
    variantRoundSizeMediumBackgroundColor,
    variantRoundSizeMediumElevation,
    variantRoundSizeMediumOverflow,
  ]);

  return (
    <View style={[styles.variantroundSizemedium, variantRoundSizeMediumStyle]}>
      <Image style={styles.addIcon} contentFit="cover" source={add} />
    </View>
  );
};

const styles = StyleSheet.create({
  addIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  variantroundSizemedium: {
    borderRadius: Border.br_5xl,
    flexDirection: "row",
    padding: Padding.p_xs,
    alignItems: "center",
  },
});

export default VariantRoundSizeMedium;
