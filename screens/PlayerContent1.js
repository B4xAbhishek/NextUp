import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import SectionCard1 from "../components/SectionCard1";
import VariantRoundSizeMediumCo from "../components/VariantRoundSizeMediumCo";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Stats from "./Stats";

const Tab = createMaterialTopTabNavigator();

const PlayerContent1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.playerContent}>
        <Image
          style={[styles.image19Icon, styles.image19IconPosition]}
          contentFit="cover"
          source={require("../assets/image-19.png")}
        />
        <Image
          style={[styles.playerContentChild, styles.playerContentPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-24000.png")}
        />
        <Image
          style={[styles.playerContentItem, styles.playerContentPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-24001.png")}
        />
        <Image
          style={[styles.playerContentInner, styles.image19IconPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-24002.png")}
        />
        <View style={styles.parent}>
          <Text style={styles.text}>6</Text>
          <Text style={styles.rank}>RANK</Text>
        </View>
        <View style={styles.lebronJamesParent}>
          <Text style={styles.lebronJames}>Lebron James</Text>
          <Text style={styles.powerForward}>
            Power Forward | Los Angeles Lakers
          </Text>
        </View>
        <View style={[styles.rectangleView, styles.playerContentPosition]} />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-1000003010.png")}
        />
        <Image
          style={[styles.playerContentChild1, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-1000003011.png")}
        />
        <BarsStatusBarIPhoneD
          wifi={require("../assets/wifi1.png")}
          barsStatusBarIPhoneDPosition="absolute"
          barsStatusBarIPhoneDBackgroundColor="unset"
          barsStatusBarIPhoneDTop={0}
          barsStatusBarIPhoneDLeft={0}
          barsStatusBarIPhoneDWidth={376}
          timeFontFamily="RobotoSerif-SemiBold"
        />
        <SectionCard1
          inboxIcon="Inbox"
          iconText={require("../assets/users.png")}
          iconCode={require("../assets/user.png")}
          propTop={863}
          propLeft={250}
          propWidth={30}
          propLeft1={3}
        />
        <View style={styles.lineView} />
        <View style={styles.playerContentChild2} />
        <Text style={[styles.bulls, styles.bullsTypo]}
          onPress={() => navigation.navigate("PlayerDashboardSomeoneElse")}>Stats</Text>
        <Text style={[styles.warriors, styles.bullsTypo]}
          onPress={() => navigation.navigate("PlayerRoadToPro")}>Road to Pro</Text>
        <Text style={styles.warriors1} onPress={() => navigation.navigate("PlayerContent1")}>Content-oN</Text>
        
        <Image
          style={styles.playerContentChild3}
          contentFit="cover"
          source={require("../assets/group-1000003061.png")}
        />

        <VariantRoundSizeMediumCo
          variantRoundSizeMediumCoPosition="absolute"
          variantRoundSizeMediumCoTop={804}
          variantRoundSizeMediumCoLeft={309}
          unstyledFABBackgroundColor="#1862fb"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image19IconPosition: {
    left: 0,
    position: "absolute",
  },
  playerContentPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupIconLayout: {
    height: 156,
    width: 338,
    left: 18,
    position: "absolute",
  },
  bullsTypo: {
    color: Color.colorDarkgray_100,
    top: 468,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  image19Icon: {
    width: 438,
    height: 626,
    top: 0,
    left: 0,
  },
  playerContentChild: {
    top: 328,
    height: 146,
  },
  playerContentItem: {
    top: 348,
    height: 126,
  },
  playerContentInner: {
    top: 367,
    width: 376,
    height: 124,
  },
  text: {
    left: 6,
    fontSize: FontSize.size_21xl,
    lineHeight: 40,
    color: Color.colorGoldenrod_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  rank: {
    top: 39,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.othersWhite,
    lineHeight: 14,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  parent: {
    top: 391,
    left: 24,
    width: 35,
    height: 53,
    position: "absolute",
  },
  lebronJames: {
    fontSize: FontSize.size_5xl,
    lineHeight: 24,
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  powerForward: {
    top: 29,
    color: Color.colorGray_400,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    lineHeight: 14,
    left: 0,
    position: "absolute",
  },
  lebronJamesParent: {
    top: 396,
    left: 86,
    width: 226,
    height: 43,
    position: "absolute",
  },
  rectangleView: {
    top: 491,
    backgroundColor: Color.lighterDark,
    height: 453,
  },
  groupIcon: {
    top: 509,
  },
  playerContentChild1: {
    top: 680,
  },
  lineView: {
    top: 397,
    left: 72,
    borderStyle: "solid",
    borderColor: Color.othersWhite,
    borderRightWidth: 1,
    width: 1,
    height: 27,
    opacity: 0.2,
    position: "absolute",
  },
  playerContentChild2: {
    top: 489,
    left: 280,
    backgroundColor: Color.othersWhite,
    width: 75,
    height: 2,
    position: "absolute",
  },
  bulls: {
    left: 53,
  },
  warriors: {
    left: 158,
  },
  warriors1: {
    left: 290,
    fontWeight: "600",
    top: 468,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.othersWhite,
    lineHeight: 14,
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  playerContentChild3: {
    top: 333,
    left: 258,
    width: 98,
    height: 45,
    position: "absolute",
  },
  playerContent: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 944,
    overflow: "hidden",
  },
});

export default PlayerContent1;
