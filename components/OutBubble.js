import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const OutBubble = ({
  time,
  text,
  fileIcon,
  outBubblePosition,
  outBubbleAlignSelf,
  outBubbleMarginTop,
  timeFontFamily,
  timeColor,
  outBubbleBackgroundColor,
  outBubbleBorderBottomRightRadius,
  textFontSize,
  textLetterSpacing,
  textFontFamily,
  textColor,
  attachmentBubbleBorderBottomRightRadius,
}) => {
  const outBubbleStyle = useMemo(() => {
    return {
      ...getStyleValue("position", outBubblePosition),
      ...getStyleValue("alignSelf", outBubbleAlignSelf),
      ...getStyleValue("marginTop", outBubbleMarginTop),
    };
  }, [outBubblePosition, outBubbleAlignSelf, outBubbleMarginTop]);

  const time1Style = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", timeFontFamily),
      ...getStyleValue("color", timeColor),
    };
  }, [timeFontFamily, timeColor]);

  const outBubble1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", outBubbleBackgroundColor),
      ...getStyleValue(
        "borderBottomRightRadius",
        outBubbleBorderBottomRightRadius
      ),
    };
  }, [outBubbleBackgroundColor, outBubbleBorderBottomRightRadius]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("letterSpacing", textLetterSpacing),
      ...getStyleValue("fontFamily", textFontFamily),
      ...getStyleValue("color", textColor),
    };
  }, [textFontSize, textLetterSpacing, textFontFamily, textColor]);

  const attachmentBubbleStyle = useMemo(() => {
    return {
      ...getStyleValue(
        "borderBottomRightRadius",
        attachmentBubbleBorderBottomRightRadius
      ),
    };
  }, [attachmentBubbleBorderBottomRightRadius]);

  return (
    <View style={[styles.outbubble, outBubbleStyle]}>
      <Text style={[styles.time, time1Style]}>{time}</Text>
      <View style={styles.main}>
        <View style={[styles.reply, styles.replySpaceBlock]}>
          <Text style={[styles.text, styles.textTypo]}>Yeap!</Text>
        </View>
        <View style={styles.separator} />
        <View
          style={[styles.outbubble1, styles.outbubble1Border, outBubble1Style]}
        >
          <Text style={[styles.text1, styles.infoTypo, textStyle]}>{text}</Text>
        </View>
        <View
          style={[
            styles.attachmentBubble,
            styles.outbubble1Border,
            attachmentBubbleStyle,
          ]}
        >
          <Image style={styles.fileIcon} contentFit="cover" source={fileIcon} />
          <View style={styles.fileInfo}>
            <Text style={[styles.info, styles.infoTypo]}>File.pdf</Text>
            <Text style={[styles.title, styles.textTypo]}>1,5 MB</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  replySpaceBlock: {
    display: "none",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.colorGainsboro_100,
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.metropolis,
    fontWeight: "500",
  },
  outbubble1Border: {
    borderWidth: 1,
    borderColor: Color.colorGray_700,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(35, 35, 35, 0.05)",
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_xl,
    overflow: "hidden",
    flexDirection: "row",
  },
  infoTypo: {
    fontSize: FontSize.normalTextBody1X_size,
    textAlign: "left",
    fontFamily: FontFamily.metropolis,
    fontWeight: "500",
    letterSpacing: 0,
  },
  time: {
    fontSize: FontSize.size_smi,
    color: "rgba(35, 35, 35, 0.3)",
    textAlign: "right",
    fontFamily: FontFamily.metropolis,
    fontWeight: "500",
    letterSpacing: 0,
  },
  text: {
    fontStyle: "italic",
  },
  reply: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_xl,
    alignSelf: "stretch",
    display: "none",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.colorGainsboro_100,
    flexDirection: "row",
  },
  separator: {
    backgroundColor: Color.colorLightslategray,
    height: 1,
    overflow: "hidden",
    display: "none",
    alignSelf: "stretch",
  },
  text1: {
    color: "#232323",
  },
  outbubble1: {
    backgroundColor: "#cfd7f2",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
  },
  fileIcon: {
    borderRadius: Border.br_81xl,
    width: 40,
    height: 40,
  },
  info: {
    color: Color.accent,
  },
  title: {
    letterSpacing: 0,
    textAlign: "left",
    color: Color.colorGray_600,
    fontSize: FontSize.size_xs,
  },
  fileInfo: {
    marginLeft: 10,
  },
  attachmentBubble: {
    alignItems: "center",
    display: "none",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.colorGainsboro_100,
  },
  main: {
    marginLeft: 7,
    alignItems: "flex-end",
  },
  outbubble: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default OutBubble;
