import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const PlayerCardForm = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.recent}
      onPress={() => navigation.navigate("PlayerDashboardSomeoneElse")}
    >
      <Text style={[styles.defence, styles.dribblingTypo]}>Player B</Text>
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
      <Text style={[styles.games, styles.dribblingTypo]}>Player A</Text>
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
      <Text style={[styles.dribbling, styles.dribblingTypo]}>Player C</Text>
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
      <Text style={[styles.shots, styles.dribblingTypo]}>Player D</Text>
      <Image
        style={[styles.ovalCopy3, styles.ovalLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy1.png")}
      />
      <Image
        style={[styles.usaToday141503650Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/usa-today-141503650.png")}
      />
      <Text style={styles.recentGames}>Player</Text>
      <View style={styles.group3Copy2}>
        <Text style={[styles.dribbling1, styles.dribbling1Position]}>
          Dribbling
        </Text>
        <Image
          style={[styles.ovalCopy91, styles.dribbling1Position]}
          contentFit="cover"
          source={require("../assets/oval-copy1.png")}
        />
        <Image
          style={styles.copy2Icon1}
          contentFit="cover"
          source={require("../assets/3000-copy-2.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dribblingTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    color: Color.othersWhite,
    top: "50%",
  },
  ovalLayout: {
    opacity: 0.12,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconLayout: {
    bottom: "16.26%",
    top: "31.71%",
    width: "15.53%",
    height: "52.03%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  dribbling1Position: {
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  defence: {
    left: "21.36%",
    width: "17.48%",
    marginTop: 49.5,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  ovalCopyIcon: {
    right: "60.92%",
    left: "21.12%",
    bottom: "12.2%",
    top: "27.64%",
    width: "17.96%",
    height: "60.16%",
    opacity: 0.12,
    position: "absolute",
  },
  x0Icon: {
    right: "62.14%",
    left: "22.33%",
  },
  games: {
    left: "0.97%",
    width: "17.48%",
    marginTop: 49.5,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  ovalCopy11: {
    right: "81.31%",
    left: "0.73%",
    bottom: "12.2%",
    top: "27.64%",
    width: "17.96%",
    height: "60.16%",
    opacity: 0.12,
    position: "absolute",
  },
  copy5Icon: {
    right: "82.52%",
    left: "1.94%",
  },
  dribbling: {
    left: "41.75%",
    width: "17.48%",
    marginTop: 49.5,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  ovalCopy9: {
    right: "40.53%",
    left: "41.5%",
    bottom: "12.2%",
    top: "27.64%",
    width: "17.96%",
    height: "60.16%",
    opacity: 0.12,
    position: "absolute",
  },
  copy2Icon: {
    right: "41.75%",
    left: "42.72%",
  },
  shots: {
    left: "62.14%",
    width: "17.48%",
    marginTop: 49.5,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  ovalCopy3: {
    right: "20.15%",
    left: "61.89%",
    bottom: "12.2%",
    top: "27.64%",
    width: "17.96%",
    height: "60.16%",
    opacity: 0.12,
    position: "absolute",
  },
  usaToday141503650Icon: {
    right: "21.36%",
    left: "63.11%",
  },
  recentGames: {
    top: 0,
    left: 0,
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 327,
    color: Color.othersWhite,
    position: "absolute",
  },
  dribbling1: {
    marginTop: 32,
    textAlign: "center",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    color: Color.othersWhite,
    top: "50%",
  },
  ovalCopy91: {
    height: "82.95%",
    top: "0%",
    right: "0%",
    bottom: "17.05%",
    opacity: 0.12,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  copy2Icon1: {
    height: "72.73%",
    width: "88.89%",
    top: "4.55%",
    right: "5.56%",
    bottom: "22.73%",
    left: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  group3Copy2: {
    top: 35,
    left: 340,
    width: 72,
    height: 88,
    overflow: "hidden",
    position: "absolute",
  },
  recent: {
    marginTop: -245,
    width: "109.87%",
    right: "-14.67%",
    left: "4.8%",
    height: 123,
    top: "50%",
    position: "absolute",
  },
});

export default PlayerCardForm;
