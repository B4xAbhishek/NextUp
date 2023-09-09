import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import SectionCard1 from "../components/SectionCard1";
import { useNavigation } from "@react-navigation/native";
import PlayerCardForm from "../components/PlayerCardForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const Search1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.search}>
      <SectionCard1
        inboxIcon="Message"
        iconText={require("../assets/users.png")}
        iconCode={require("../assets/user.png")}
        propTop={730}
        propLeft={241}
        propWidth={49}
        propLeft1={12}
      />
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={styles.oneLastStep}>Search</Text>
      <Pressable
        style={styles.rectangleCopy8Parent}
        onPress={() => navigation.navigate("Search")}
      >
        <View style={[styles.rectangleCopy8, styles.groupChildPosition]} />
        <Text style={styles.search1}>Search</Text>
        <Image
          style={styles.magnifyingglassIcon}
          contentFit="cover"
          source={require("../assets/magnifyingglass.png")}
        />
      </Pressable>
      <PlayerCardForm />
      <Text style={[styles.recentGames, styles.recentTypo]}>Team</Text>
      <Text style={[styles.defence, styles.gamesTypo]}>Player B</Text>
      <Image
        style={[styles.ovalCopyIcon, styles.ovalLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy1.png")}
      />
      <Image
        style={[styles.x0Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/960x0.png")}
      />
      <Text style={[styles.games, styles.gamesTypo]}>Player A</Text>
      <Image
        style={[styles.ovalCopy11, styles.ovalLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy1.png")}
      />
      <Image
        style={[styles.copy5Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/3000-copy-5.png")}
      />
      <Text style={[styles.dribbling, styles.gamesTypo]}>Player C</Text>
      <Image
        style={[styles.ovalCopy9, styles.ovalLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy1.png")}
      />
      <Image
        style={[styles.copy2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/3000-copy-2.png")}
      />
      <Text style={[styles.recentGames1, styles.recentTypo]}>Coach</Text>
      <Text style={[styles.recentGames2, styles.recentTypo]}>Challenges</Text>
      <View style={[styles.gamesParent, styles.gamesPosition1]}>
        <Text style={[styles.games1, styles.gamesPosition]}>Chicago Bulls</Text>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-689.png")}
        />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/ellipse-690.png")}
        />
        <Image
          style={styles.chicagoBullsLogoIcon}
          contentFit="cover"
          source={require("../assets/chicago-bulls-logo.png")}
        />
      </View>
      <View style={[styles.gamesGroup, styles.gamesPosition1]}>
        <Text style={[styles.games2, styles.gamesPosition]}>LAL</Text>
        <Image
          style={[styles.groupChild, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-689.png")}
        />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/ellipse-690.png")}
        />
        <Image
          style={styles.losAngelesLakersLogoIcon}
          contentFit="cover"
          source={require("../assets/los-angeles-lakers-logo2.png")}
        />
      </View>
      <LinearGradient
        style={[styles.searchChild, styles.searchLayout]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <Image
        style={styles.searchLayout}
        contentFit="cover"
        source={require("../assets/rectangle-18896.png")}
      />
      <LinearGradient
        style={[styles.searchChild, styles.searchLayout]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <Text style={[styles.shootingChallenge, styles.expiryDatePosition]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.expiryDate, styles.expiryDatePosition]}>
        Expiry Date - 17 Dec 2020
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  recentTypo: {
    left: 18,
    alignItems: "center",
    display: "flex",
    width: 327,
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.bodyLargeBold_size,
    position: "absolute",
  },
  gamesTypo: {
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    top: "50%",
    width: "19.2%",
    marginTop: 160,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    color: Color.othersWhite,
    position: "absolute",
  },
  ovalLayout: {
    opacity: 0.12,
    bottom: "31.74%",
    top: "59.65%",
    width: "19.73%",
    height: "8.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    bottom: "32.33%",
    top: "60.23%",
    width: "17.07%",
    height: "7.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gamesPosition1: {
    height: 86,
    width: "18.13%",
    marginTop: -68,
    top: "50%",
    position: "absolute",
  },
  gamesPosition: {
    marginTop: 31,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    top: "50%",
    color: Color.othersWhite,
    position: "absolute",
  },
  searchLayout: {
    height: 63,
    width: 339,
    borderRadius: Border.br_mini,
    top: 656,
    left: 18,
    position: "absolute",
  },
  expiryDatePosition: {
    left: 33,
    textAlign: "left",
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
    borderStyle: "solid",
    position: "absolute",
  },
  path2Icon: {
    top: 9,
    left: 8,
    width: 14,
    height: 12,
    position: "absolute",
  },
  group: {
    top: 62,
    left: 21,
    width: 30,
    height: 30,
    position: "absolute",
  },
  oneLastStep: {
    top: 65,
    left: 65,
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.bodyLargeBold_size,
    position: "absolute",
  },
  rectangleCopy8: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    width: 328,
    height: 49,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_200,
    top: 0,
  },
  search1: {
    top: 16,
    lineHeight: 16,
    fontWeight: "600",
    color: Color.colorGray_100,
    width: 148,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  magnifyingglassIcon: {
    height: "45.83%",
    width: "6.73%",
    top: "27.08%",
    right: "3.67%",
    bottom: "27.08%",
    left: "89.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleCopy8Parent: {
    top: 113,
    left: 24,
    height: 48,
    width: 327,
    position: "absolute",
  },
  recentGames: {
    top: 332,
  },
  defence: {
    left: "28.27%",
  },
  ovalCopyIcon: {
    right: "52.27%",
    left: "28%",
  },
  x0Icon: {
    right: "53.6%",
    left: "29.33%",
  },
  games: {
    left: "5.87%",
  },
  ovalCopy11: {
    right: "74.67%",
    left: "5.6%",
  },
  copy5Icon: {
    right: "76%",
    left: "6.93%",
  },
  dribbling: {
    left: "50.67%",
  },
  ovalCopy9: {
    right: "29.87%",
    left: "50.4%",
  },
  copy2Icon: {
    right: "31.2%",
    left: "51.73%",
  },
  recentGames1: {
    top: 479,
  },
  recentGames2: {
    top: 626,
  },
  games1: {
    left: "5.88%",
  },
  groupChild: {
    width: 68,
    height: 68,
  },
  groupItem: {
    top: 7,
    left: 7,
    width: 54,
    height: 54,
    position: "absolute",
  },
  chicagoBullsLogoIcon: {
    top: 19,
    width: 35,
    height: 35,
    left: 16,
    position: "absolute",
  },
  gamesParent: {
    right: "77.07%",
    left: "4.8%",
  },
  games2: {
    left: "36.76%",
  },
  losAngelesLakersLogoIcon: {
    top: 23,
    left: 13,
    width: 41,
    height: 25,
    position: "absolute",
  },
  gamesGroup: {
    right: "54.67%",
    left: "27.2%",
  },
  searchChild: {
    backgroundColor: "transparent",
  },
  shootingChallenge: {
    top: 669,
    fontSize: FontSize.size_mid,
    lineHeight: 20,
    fontWeight: "700",
    left: 33,
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
  },
  expiryDate: {
    top: 690,
    color: Color.colorGray_400,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    left: 33,
    fontSize: FontSize.size_xs,
  },
  search: {
    flex: 1,
    width: "100%",
    height: 860,
    overflow: "hidden",
    backgroundColor: Color.colorGray_200,
  },
});

export default Search1;
