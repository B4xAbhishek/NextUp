import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import VariantRoundSizeMedium from "./VariantRoundSizeMedium";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VariantRoundSizeMediumCo = ({
  variantRoundSizeMediumCoPosition,
  variantRoundSizeMediumCoTop,
  variantRoundSizeMediumCoLeft,
  unstyledFABBackgroundColor,
}) => {
  const variantRoundSizeMediumCoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", variantRoundSizeMediumCoPosition),
      ...getStyleValue("top", variantRoundSizeMediumCoTop),
      ...getStyleValue("left", variantRoundSizeMediumCoLeft),
    };
  }, [
    variantRoundSizeMediumCoPosition,
    variantRoundSizeMediumCoTop,
    variantRoundSizeMediumCoLeft,
  ]);

  const variantRoundSizeMediumStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", unstyledFABBackgroundColor),
    };
  }, [unstyledFABBackgroundColor]);

  return (
    <View
      style={[styles.variantroundSizemediumCo, variantRoundSizeMediumCoStyle]}
    >
      <VariantRoundSizeMedium
        add={require("../assets/add1.png")}
        variantRoundSizeMediumPosition="unset"
        variantRoundSizeMediumBackgroundColor="#9155fd"
        variantRoundSizeMediumElevation={5}
        variantRoundSizeMediumOverflow="hidden"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  variantroundSizemediumCo: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default VariantRoundSizeMediumCo;
