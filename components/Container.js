import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Container = () => {
  return (
    <View style={styles.mainParent}>
      <View style={styles.main}>
        <View style={[styles.reply, styles.replyFlexBox]} />
        <View style={[styles.separator, styles.replyFlexBox]} />
        <View style={[styles.inbubble, styles.replyPosition]}>
          <Text style={styles.text}>Hi!</Text>
        </View>
      </View>
      <Text style={[styles.time, styles.timeTypo]}>12:56 pm</Text>
      <Text style={[styles.time1, styles.timeTypo]}>12:56 pm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  replyFlexBox: {
    display: "none",
    alignSelf: "stretch",
  },
  replyPosition: {
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_5xs,
  },
  timeTypo: {
    color: Color.colorGray_500,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  reply: {
    backgroundColor: Color.colorWhitesmoke_200,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_5xs,
  },
  separator: {
    backgroundColor: Color.colorGray_400,
    height: 1,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.normalTextBody1X_size,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    letterSpacing: 0,
  },
  inbubble: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.colorRoyalblue,
    shadowColor: "rgba(35, 35, 35, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    elevation: 5,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_700,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    overflow: "hidden",
  },
  main: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  time: {
    top: 26,
    left: 59,
  },
  time1: {
    top: 306,
    left: 238,
  },
  mainParent: {
    top: 259,
    left: 17,
    width: 287,
    height: 320,
    position: "absolute",
  },
});

export default Container;
