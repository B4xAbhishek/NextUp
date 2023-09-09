import * as React from "react";
import { StyleSheet, View, Text, Pressable, TouchableWithoutFeedback } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import AccountSection from "../components/AccountSection";
import AccountCard from "../components/AccountCard";
import ProfileSection from "../components/ProfileSection";
import RateUsSection from "../components/RateUsSection";
import { useNavigation } from "@react-navigation/native";
import DeleteAccountForm from "../components/DeleteAccountForm";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AccountSetting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.accountSetting}>
      <AccountSection chatTeardropTextIconTop={869} />
      <View style={[styles.group, styles.groupLayout]}>
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <Text style={[styles.oneLastStep, styles.titleFlexBox]}>Account</Text>
      <AccountCard onPress={navigation.navigate("EditProfileCreateNewPass")}/>
      <Image
        style={[styles.accountSettingChild, styles.accountSettingChildLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowdown.png")}
      />
      <Image
        style={[styles.accountSettingChild, styles.accountSettingChildLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxboldarrowdown1.png")}
      />
      
      <ProfileSection
        pageTitle="My Profile test"
        iconImageUrl={require("../assets/user1.png")}
        propTop={293}
      />

      <ProfileSection
        onP={() => navigation.navigate("Logout")}
        pageTitle="Terms and Condition"
        iconImageUrl={require("../assets/clipboardtext.png")}
        propTop={549}
      />
      <ProfileSection
        onPress={() => navigation.navigate("Logout")}
        pageTitle="Privacy Policy"
        iconImageUrl={require("../assets/shieldcheck.png")}
        propTop={485}
      />
      <ProfileSection
        onPress={() => navigation.navigate("Logout")}
        pageTitle="Help and Support"
        iconImageUrl={require("../assets/headset.png")}
        propTop={421}
      />
      <ProfileSection
        onPress={() => navigation.navigate("Logout")}
        pageTitle="Subscription"
        iconImageUrl={require("../assets/ticket.png")}
        propTop={357}
      />
      <ProfileSection
        onPress={() => navigation.navigate("Logout")}
        pageTitle="Share Application"
        iconImageUrl={require("../assets/sharenetwork.png")}
        propTop={613}
      />
      <RateUsSection />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Logout")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-1000002785.png")}
        />
        <Text style={[styles.title, styles.titleFlexBox]}>Logout</Text>
        <Image
          style={[
            styles.vuesaxboldarrowDownIcon1,
            styles.accountSettingChildLayout,
          ]}
          contentFit="cover"
          source={require("../assets/vuesaxboldarrowdown1.png")}
        />
        <Image
          style={styles.signoutIcon}
          contentFit="cover"
          source={require("../assets/signout.png")}
        />
      </Pressable>
      <DeleteAccountForm
        propTop={12}
        propLeft={298}
        propTop1={15}
        propLeft1={308}
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
        source={require("../assets/bellsimple.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 30,
    position: "absolute",
  },
  titleFlexBox: {
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  accountSettingChildLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  groupChildLayout: {
    height: 50,
    width: 338,
    position: "absolute",
  },
  iconLayout: {
    width: "6.93%",
    height: "2.74%",
    maxHeight: "100%",
    maxWidth: "100%",
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
    height: 30,
  },
  oneLastStep: {
    top: 65,
    left: 65,
    fontSize: FontSize.normalTextBody1X_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  accountSettingChild: {
    top: 692,
    left: 326,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lighterDark,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    elevation: 16,
    shadowOpacity: 1,
  },
  groupItem: {
    top: 12,
    left: 298,
    height: 26,
  },
  title: {
    top: 17,
    left: 56,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
  },
  vuesaxboldarrowDownIcon1: {
    top: 15,
    left: 308,
  },
  signoutIcon: {
    height: "52%",
    width: "7.69%",
    top: "24%",
    right: "86.98%",
    bottom: "24%",
    left: "5.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 741,
    left: 18,
  },
  trashIcon: {
    top: "86%",
    right: "83.47%",
    bottom: "11.26%",
    left: "9.6%",
  },
  bellsimpleIcon: {
    top: "6.74%",
    right: "5.07%",
    bottom: "90.53%",
    left: "88%",
  },
  accountSetting: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 950,
    overflow: "hidden",
  },
});

export default AccountSetting;
