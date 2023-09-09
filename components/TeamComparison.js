import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import AccountCard from "../components/AccountCard";
import ProfileSection from "../components/ProfileSection";
import RateUsSection from "../components/RateUsSection";
import DeleteAccountForm from "../components/DeleteAccountForm";
import AccountSection from "../components/AccountSection";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const TeamComparison = () => {
  return (
    <View style={styles.teamComparison}>
      <BarsStatusBarIPhoneD
        wifi={require("../assets/wifi3.png")}
        cellularConnection={require("../assets/cellular-connection.png")}
        barsStatusBarIPhoneDPosition="absolute"
        barsStatusBarIPhoneDBackgroundColor="unset"
        barsStatusBarIPhoneDWidth={375}
        barsStatusBarIPhoneDTop={0}
        barsStatusBarIPhoneDLeft={0}
        timeFontWeight="unset"
        timeFontFamily="RobotoSerif-Regular"
      />
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={[styles.oneLastStep, styles.titleFlexBox]}>Account</Text>
      <AccountCard />
      <Image
        style={styles.teamComparisonChild}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowdown.png")}
      />
      <Image
        style={styles.teamComparisonChild}
        contentFit="cover"
        source={require("../assets/vuesaxboldarrowdown1.png")}
      />
      <ProfileSection
        pageTitle="My Profile"
        iconImageUrl={require("../assets/user1.png")}
        propTop={293}
      />
      <ProfileSection
        pageTitle="Terms and Condition"
        iconImageUrl={require("../assets/clipboardtext.png")}
        propTop={549}
      />
      <ProfileSection
        pageTitle="Privacy Policy"
        iconImageUrl={require("../assets/shieldcheck.png")}
        propTop={485}
      />
      <ProfileSection
        pageTitle="Help and Support"
        iconImageUrl={require("../assets/headset.png")}
        propTop={421}
      />
      <ProfileSection
        pageTitle="Subscription"
        iconImageUrl={require("../assets/ticket.png")}
        propTop={357}
      />
      <ProfileSection
        pageTitle="Share Application"
        iconImageUrl={require("../assets/sharenetwork.png")}
        propTop={613}
      />
      <RateUsSection />
      <ProfileSection
        pageTitle="Logout"
        iconImageUrl={require("../assets/signout.png")}
        propTop={741}
      />
      <DeleteAccountForm
        propTop={817}
        propLeft={316}
        propTop1={840}
        propLeft1={326}
      />
      <Text style={[styles.title, styles.titleFlexBox]}>Logout</Text>
      <Image
        style={[styles.trashIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/trash.png")}
      />
      <Image
        style={[styles.bellsimpleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bellsimple1.png")}
      />
      <AccountSection chatTeardropTextIconTop={731} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "6.93%",
    height: "3.2%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    top: -1,
    left: -1,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    width: 32,
    height: 32,
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
    fontSize: FontSize.normalTextBody1X_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  teamComparisonChild: {
    top: 692,
    left: 326,
    width: 20,
    height: 20,
    position: "absolute",
  },
  title: {
    top: 17,
    left: 56,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  trashIcon: {
    top: "100.62%",
    right: "83.47%",
    bottom: "-3.82%",
    left: "9.6%",
  },
  bellsimpleIcon: {
    top: "7.88%",
    right: "5.07%",
    bottom: "88.92%",
    left: "88%",
  },
  teamComparison: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default TeamComparison;
