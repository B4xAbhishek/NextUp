import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from "react-native";
import TypeSeenStoryComponentSto from "./TypeSeenStoryComponentSto";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TeamCard = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.typenotSeenStoryComponentParent}>
        <TypeSeenStoryComponentSto
          avatar={require("../assets/frame.png")}
          name1="Aubrey"
          showName={false}
          typeSeenStoryComponentStoPosition="unset"
          nameColor="#fff"
        />
        <Text style={styles.aauTeam}>Rotary AAU 17</Text>
      </View>
      <View
        style={[
          styles.typeseenStoryComponentstoParent,
          styles.parentSpaceBlock,
        ]}
      >
        <TypeSeenStoryComponentSto
          avatar={require("../assets/frame1.png")}
          name1="Darrell"
          showName={false}
          typeSeenStoryComponentStoPosition="unset"
          nameColor="#e0e0e0"
        />
        <Text style={[styles.highSchoolTeam, styles.highTypo]}>O’Dea HS</Text>
      </View>
      <View style={[styles.crownsimpleParent, styles.parentSpaceBlock]}>
        <View>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <Text style={[styles.highSchoolTeam1, styles.highTypo]}>Road2Pro</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentSpaceBlock: {
    marginLeft: 31,
    alignItems: "center",
  },
  highTypo: {
    textAlign: "center",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    display: "flex",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    justifyContent: "center",
    alignItems: "center",
  },
  aauTeam: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    textAlign: "left",
    width: 99,
    marginTop: 9,
    display: "flex",
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    alignItems: "center",
  },
  typenotSeenStoryComponentParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  highSchoolTeam: {
    width: 71,
    marginTop: 9,
  },
  typeseenStoryComponentstoParent: {
    justifyContent: "center",
  },
  vectorIcon: {
    width: 84,
    height: 80,
    zIndex: 0,
  },
  vectorIcon1: {
    top: 12,
    left: 5,
    width: 73,
    height: 53,
    zIndex: 1,
    position: "absolute",
  },
  highSchoolTeam1: {
    width: 77,
  },
  crownsimpleParent: {
    height: 103,
    justifyContent: "space-between",
  },
  frameParent: {
    top: 186,
    left: 25,
    flexDirection: "row",
    position: "absolute",
  },
});

export default TeamCard;
