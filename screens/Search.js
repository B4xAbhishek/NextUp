import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import SectionCard1 from "../components/SectionCard1";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const Search = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.search}>
      <SectionCard1
        inboxIcon="Message"
        iconText={require("../assets/users.png")}
        iconCode={require("../assets/user.png")}
        propTop={779}
        propLeft={241}
        propWidth={49}
        propLeft1={12}
      />
      <View style={styles.group}>
        <View style={[styles.rectangle, styles.rectangleBorder]} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={styles.oneLastStep}>Search</Text>
      <View style={styles.rectangleCopy8Parent}>
        <View style={[styles.rectangleCopy8, styles.groupChildPosition]} />
        <Text style={[styles.search1, styles.search1Typo]}>Lebron</Text>
        <Image
          style={styles.magnifyingglassIcon}
          contentFit="cover"
          source={require("../assets/magnifyingglass.png")}
        />
      </View>
      <Pressable
        style={[styles.ellipseParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("PlayerProfileSomeoneElse")}
      >
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-774.png")}
        />
        <View style={styles.recentGamesParent}>
          <Text style={[styles.recentGames, styles.search1Typo]}>
            Lebron james
          </Text>
          <Text style={[styles.recentGames1, styles.recentTypo]}>Player</Text>
        </View>
      </Pressable>
      <View style={[styles.ellipseGroup, styles.groupParentLayout]}>
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-775.png")}
        />
        <View style={[styles.recentGamesGroup, styles.recentPosition]}>
          <Text style={[styles.recentGames, styles.search1Typo]}>
            Lebron Watson
          </Text>
          <Text style={[styles.recentGames3, styles.recentTypo]}>Coach</Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.recentGamesContainer, styles.recentPosition]}>
          <Text style={[styles.recentGames, styles.search1Typo]}>
            Los Angeles Lakers
          </Text>
          <Text style={[styles.recentGames3, styles.recentTypo]}>Team</Text>
        </View>
        <Image
          style={[styles.groupChild, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/group-1000003017.png")}
        />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  search1Typo: {
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    color: Color.othersWhite,
    position: "absolute",
  },
  groupParentLayout: {
    height: 59,
    position: "absolute",
  },
  recentTypo: {
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 15,
    fontSize: FontSize.size_mini,
    left: 0,
    textAlign: "left",
    position: "absolute",
  },
  recentPosition: {
    height: 43,
    top: 8,
    left: 74,
    position: "absolute",
  },
  rectangle: {
    top: -1,
    left: -1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
  },
  path2Icon: {
    left: 8,
    width: 14,
    height: 12,
    top: 9,
    position: "absolute",
  },
  group: {
    top: 62,
    width: 30,
    height: 30,
    left: 21,
    position: "absolute",
  },
  oneLastStep: {
    top: 65,
    left: 65,
    fontSize: FontSize.bodyLargeBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    color: Color.othersWhite,
    lineHeight: 24,
    position: "absolute",
  },
  rectangleCopy8: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    width: 328,
    height: 49,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorGray_200,
  },
  search1: {
    top: 16,
    left: 16,
    lineHeight: 16,
    fontWeight: "600",
    width: 148,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.robotoBold,
  },
  magnifyingglassIcon: {
    height: "45.83%",
    width: "6.73%",
    top: "27.08%",
    right: "3.67%",
    bottom: "27.08%",
    left: "89.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleCopy8Parent: {
    top: 113,
    left: 24,
    width: 327,
    height: 48,
    position: "absolute",
  },
  groupChild: {
    width: 59,
    left: 0,
    top: 0,
  },
  recentGames: {
    fontSize: FontSize.size_3xl,
    fontWeight: "700",
    left: 0,
    top: 0,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 24,
  },
  recentGames1: {
    top: 27,
  },
  recentGamesParent: {
    width: 134,
    height: 42,
    left: 74,
    top: 9,
    position: "absolute",
  },
  ellipseParent: {
    top: 190,
    width: 208,
    left: 21,
  },
  recentGames3: {
    top: 28,
  },
  recentGamesGroup: {
    width: 149,
  },
  ellipseGroup: {
    top: 267,
    width: 223,
    left: 21,
  },
  recentGamesContainer: {
    width: 194,
  },
  groupParent: {
    top: 344,
    width: 268,
    left: 21,
  },
  search: {
    flex: 1,
    width: "100%",
    height: 860,
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
  },
});

export default Search;
