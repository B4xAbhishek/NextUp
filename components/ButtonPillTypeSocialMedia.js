import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonPillTypeSocialMedia = ({
  frame,
  continueWithFacebook,
  showTextButton = true,
  buttonPillTypeSocialMediaPosition,
  buttonPillTypeSocialMediaAlignSelf,
  buttonPillTypeSocialMediaMarginTop,
}) => {
  const buttonPillTypeSocialMediaStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPillTypeSocialMediaPosition),
      ...getStyleValue("alignSelf", buttonPillTypeSocialMediaAlignSelf),
      ...getStyleValue("marginTop", buttonPillTypeSocialMediaMarginTop),
    };
  }, [
    buttonPillTypeSocialMediaPosition,
    buttonPillTypeSocialMediaAlignSelf,
    buttonPillTypeSocialMediaMarginTop,
  ]);

  return (
    <View
      style={[
        styles.buttonpillTypesocialMedia,
        styles.autoLayoutHorizontalFlexBox,
        buttonPillTypeSocialMediaStyle,
      ]}
    >
      <View
        style={[
          styles.autoLayoutHorizontal,
          styles.autoLayoutHorizontalFlexBox,
        ]}
      >
        <Image style={styles.frameIcon} contentFit="cover" source={frame} />
        {showTextButton && (
          <Text style={styles.continueWithFacebook}>
            {continueWithFacebook}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  autoLayoutHorizontalFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  continueWithFacebook: {
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: 0,
    lineHeight: 26,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeBold,
    color: Color.greyscale900,
    textAlign: "left",
    marginLeft: 16,
  },
  autoLayoutHorizontal: {
    flexDirection: "row",
  },
  buttonpillTypesocialMedia: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.othersWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
});

export default ButtonPillTypeSocialMedia;
