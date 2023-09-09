import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from "react-native";
import TypeSeenStoryComponentSto from "./TypeSeenStoryComponentSto";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ContainerCard = () => {
  return (
    <View style={[styles.autoLayoutHorizontalParent, styles.parentFlexBox]}>
      <View style={styles.autoLayoutHorizontal}>
        <Image
          style={styles.crownsimpleIcon}
          contentFit="cover"
          source={require("../assets/crownsimple.png")}
        />
        <TypeSeenStoryComponentSto
          avatar={require("../assets/frame.png")}
          name1="Aubrey"
          showName={false}
          typeSeenStoryComponentStoPosition="unset"
          typeSeenStoryComponentStoMarginLeft={40}
          typeSeenStoryComponentStoWidth={84}
          typeSeenStoryComponentStoHeight={80}
          nameColor="#fff"
        />
        <TypeSeenStoryComponentSto
          avatar={require("../assets/frame1.png")}
          name1="Darrell"
          showName={false}
          typeSeenStoryComponentStoPosition="unset"
          typeSeenStoryComponentStoMarginLeft={40}
          typeSeenStoryComponentStoWidth="unset"
          typeSeenStoryComponentStoHeight="unset"
          nameColor="#e0e0e0"
        />
      </View>
      <View style={styles.parentFlexBox}>
        <Text style={[styles.highSchoolTeam, styles.highTypo]}>Road2Pro</Text>
        <Text style={styles.aauTeam}>Rotary AAU 17</Text>
        <Text style={[styles.highSchoolTeam1, styles.highTypo]}>O’Dea HS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: 327,
    flexDirection: "row",
  },
  highTypo: {
    justifyContent: "center",
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    display: "flex",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    alignItems: "center",
  },
  crownsimpleIcon: {
    width: 84,
    height: 80,
  },
  autoLayoutHorizontal: {
    width: 337,
    flexDirection: "row",
  },
  highSchoolTeam: {
    width: 77,
  },
  aauTeam: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 99,
    display: "flex",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    alignItems: "center",
  },
  highSchoolTeam1: {
    width: 71,
  },
  autoLayoutHorizontalParent: {
    position: "absolute",
    top: 63,
    left: 24,
  },
});

export default ContainerCard;
