import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import AccountDetailsSection from "../components/AccountDetailsSection";
import ContainerCard from "../components/ContainerCard";
import { FontFamily, Padding, Color, FontSize, Border } from "../GlobalStyles";

const Inbox = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inbox}>
      <Pressable
        style={styles.inboxChild}
        onPress={() => navigation.navigate("ChatScreen")}
      />
      <BarsStatusBarIPhoneD
        wifi={require("../assets/wifi2.png")}
        cellularConnection={require("../assets/cellular-connection1.png")}
        barsStatusBarIPhoneDPosition="absolute"
        barsStatusBarIPhoneDBackgroundColor="unset"
        barsStatusBarIPhoneDWidth={376}
        barsStatusBarIPhoneDTop={0}
        barsStatusBarIPhoneDLeft={0}
        timeFontWeight="600"
        timeFontFamily="RobotoSerif-SemiBold"
      />
      <AccountDetailsSection />
      <View style={styles.rectangleCopy8Parent}>
        <View style={[styles.rectangleCopy8, styles.framePosition]} />
        <Text style={[styles.search, styles.bullsTypo]}>
          Search Players and Coach
        </Text>
        <Image
          style={[styles.magnifyingglassIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/magnifyingglass.png")}
        />
      </View>
      <View style={[styles.leftSection, styles.leftPosition]}>
        <View style={[styles.avatarWithOnlineBadge, styles.avatarLayout]}>
          <View style={[styles.frame, styles.avatarLayout]}>
            <Image
              style={styles.avatarLayout}
              contentFit="cover"
              source={require("../assets/substract.png")}
            />
            <Text style={[styles.letter, styles.searchClr]}>G</Text>
          </View>
          <Image
            style={styles.onlineDotIcon}
            contentFit="cover"
            source={require("../assets/online-dot.png")}
          />
        </View>
        <Image
          style={[styles.avatarWithoutOnlineBadge, styles.avatarLayout]}
          contentFit="cover"
          source={require("../assets/avatar-without-online-badge1.png")}
        />
      </View>
      <View style={[styles.leftSection1, styles.leftPosition]}>
        <View style={[styles.avatarWithOnlineBadge, styles.avatarLayout]}>
          <View style={[styles.frame, styles.avatarLayout]}>
            <Image
              style={styles.avatarLayout}
              contentFit="cover"
              source={require("../assets/substract.png")}
            />
            <Text style={[styles.letter, styles.searchClr]}>G</Text>
          </View>
          <Image
            style={styles.onlineDotIcon}
            contentFit="cover"
            source={require("../assets/online-dot.png")}
          />
        </View>
        <Image
          style={[styles.avatarWithoutOnlineBadge, styles.avatarLayout]}
          contentFit="cover"
          source={require("../assets/avatar-without-online-badge2.png")}
        />
      </View>
      <View style={[styles.leftSection2, styles.leftPosition]}>
        <View style={[styles.avatarWithOnlineBadge, styles.avatarLayout]}>
          <View style={[styles.frame, styles.avatarLayout]}>
            <Image
              style={styles.avatarLayout}
              contentFit="cover"
              source={require("../assets/substract.png")}
            />
            <Text style={[styles.letter, styles.searchClr]}>G</Text>
          </View>
          <Image
            style={styles.onlineDotIcon}
            contentFit="cover"
            source={require("../assets/online-dot.png")}
          />
        </View>
        <Image
          style={[styles.avatarWithoutOnlineBadge, styles.avatarLayout]}
          contentFit="cover"
          source={require("../assets/avatar-without-online-badge3.png")}
        />
      </View>
      <View style={[styles.leftSection3, styles.leftPosition]}>
        <View style={[styles.avatarWithOnlineBadge, styles.avatarLayout]}>
          <View style={[styles.frame, styles.avatarLayout]}>
            <Image
              style={styles.avatarLayout}
              contentFit="cover"
              source={require("../assets/substract.png")}
            />
            <Text style={[styles.letter, styles.searchClr]}>G</Text>
          </View>
          <Image
            style={styles.onlineDotIcon}
            contentFit="cover"
            source={require("../assets/online-dot.png")}
          />
        </View>
        <Image
          style={[styles.avatarWithoutOnlineBadge, styles.avatarLayout]}
          contentFit="cover"
          source={require("../assets/avatar-without-online-badge4.png")}
        />
      </View>
      <View style={[styles.centerSection, styles.centerPosition]}>
        <View style={styles.nameWithVeifiedBadge}>
          <Text style={styles.name}>Everyone</Text>
          <View style={styles.verifiedBadge} />
        </View>
        <Text style={styles.messageTypo}>
          <Text style={styles.you}>You:</Text>
          <Text style={styles.okayIllTell}> Okay, I'll tell him</Text>
        </Text>
      </View>
      <Pressable
        style={[styles.centerSection1, styles.centerPosition]}
        onPress={() => navigation.navigate("ChatScreen")}
      >
        <View style={styles.nameWithVeifiedBadge}>
          <Text style={styles.name}>Kervin</Text>
          <View style={styles.verifiedBadge} />
        </View>
        <Text style={[styles.message1, styles.messageTypo]}>Audio</Text>
      </Pressable>
      <View style={[styles.centerSection2, styles.centerPosition]}>
        <View style={styles.nameWithVeifiedBadge}>
          <Text style={styles.name}>Jamel</Text>
          <View style={styles.verifiedBadge} />
        </View>
        <Text style={styles.message2}>I don't know what you're ...</Text>
      </View>
      <View style={[styles.centerSection3, styles.centerPosition]}>
        <View style={styles.nameWithVeifiedBadge}>
          <Text style={styles.name}>Geoffrey</Text>
          <View style={styles.verifiedBadge} />
        </View>
        <Text style={[styles.message1, styles.messageTypo]}>Audio</Text>
      </View>
      <Text style={[styles.friday, styles.fridayTypo]}>Friday</Text>
      <Text style={[styles.friday1, styles.fridayTypo]}>Friday</Text>
      <Text style={[styles.friday2, styles.fridayTypo]}>Friday</Text>
      <Text style={[styles.friday3, styles.fridayTypo]}>Friday</Text>
      <View style={[styles.separator, styles.separatorLayout]} />
      <View style={[styles.separator1, styles.separatorLayout]} />
      <View style={[styles.separator2, styles.separatorLayout]} />
      <View style={[styles.separator3, styles.separatorLayout]} />
      <View style={[styles.unreadCounter, styles.unreadLayout]}>
        <View style={[styles.unreadCounterChild, styles.unreadLayout]} />
        <Text style={[styles.text, styles.textClr]}>3</Text>
      </View>
      <ContainerCard />
      <View style={[styles.inboxItem, styles.itemLayout]} />
      <View style={styles.bellsimpleWrapper}>
        <View style={styles.bellsimplePosition}>
          <View style={styles.bellsimplePosition}>
            <Image
              style={[styles.groupChild, styles.bellsimplePosition]}
              contentFit="cover"
              source={require("../assets/ellipse-712.png")}
            />
            <Text style={[styles.text1, styles.textClr]}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupItem, styles.itemLayout]} />
        <Text style={[styles.bulls, styles.bullsPosition]}>Team</Text>
        <Text style={[styles.warriors, styles.bullsPosition]}>Coaches</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    top: 0,
    left: 0,
  },
  bullsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  leftPosition: {
    paddingRight: Padding.p_mini,
    paddingLeft: Padding.p_mid,
    height: 60,
    flexDirection: "row",
    left: 2,
    position: "absolute",
    overflow: "hidden",
  },
  avatarLayout: {
    width: 60,
    height: 60,
  },
  searchClr: {
    color: Color.colorGray_100,
    fontWeight: "600",
    position: "absolute",
  },
  centerPosition: {
    justifyContent: "center",
    left: 94,
    position: "absolute",
    overflow: "hidden",
  },
  messageTypo: {
    marginTop: 2,
    fontSize: FontSize.normalTextBody1X_size,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  fridayTypo: {
    textAlign: "right",
    color: Color.colorGray_500,
    fontSize: FontSize.size_smi,
    left: 323,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  separatorLayout: {
    height: 1,
    width: 340,
    backgroundColor: Color.colorGray_300,
    left: 19,
    position: "absolute",
  },
  unreadLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  textClr: {
    color: Color.neutral0,
    fontWeight: "600",
  },
  itemLayout: {
    height: 2,
    backgroundColor: Color.neutral0,
    position: "absolute",
  },
  bellsimplePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  bullsPosition: {
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    top: 0,
    position: "absolute",
  },
  inboxChild: {
    top: 292,
    borderRadius: 18,
    backgroundColor: Color.lighterDark,
    width: 375,
    height: 77,
    left: 2,
    position: "absolute",
  },
  rectangleCopy8: {
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorGray_400,
    borderWidth: 1,
    width: 328,
    height: 49,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorGray_200,
    top: 0,
  },
  search: {
    top: 16,
    left: 16,
    lineHeight: 16,
    color: Color.colorGray_100,
    fontWeight: "600",
    position: "absolute",
    fontSize: FontSize.size_xs,
  },
  magnifyingglassIcon: {
    height: "45.83%",
    width: "6.73%",
    top: "27.08%",
    right: "3.67%",
    bottom: "27.08%",
    left: "89.6%",
    position: "absolute",
  },
  rectangleCopy8Parent: {
    top: 187,
    left: 24,
    width: 327,
    height: 48,
    position: "absolute",
  },
  letter: {
    top: 17,
    left: 21,
    fontSize: FontSize.size_7xl,
    lineHeight: 27,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
  },
  frame: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  onlineDotIcon: {
    top: 48,
    left: 48,
    width: 10,
    height: 10,
    position: "absolute",
  },
  avatarWithOnlineBadge: {
    display: "none",
  },
  avatarWithoutOnlineBadge: {
    marginLeft: 10,
  },
  leftSection: {
    top: 301,
  },
  leftSection1: {
    top: 378,
  },
  leftSection2: {
    top: 455,
  },
  leftSection3: {
    top: 532,
  },
  name: {
    fontSize: FontSize.size_xl,
    color: Color.white,
    textTransform: "capitalize",
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  verifiedBadge: {
    width: 15,
    height: 15,
    marginLeft: 5,
    display: "none",
    overflow: "hidden",
  },
  nameWithVeifiedBadge: {
    alignItems: "center",
    flexDirection: "row",
  },
  you: {
    color: Color.white,
  },
  okayIllTell: {
    color: Color.colorGray_200,
  },
  centerSection: {
    top: 310,
  },
  message1: {
    color: Color.colorRoyalblue,
    textTransform: "capitalize",
  },
  centerSection1: {
    top: 387,
  },
  message2: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorGray_200,
    marginTop: 2,
    fontSize: FontSize.normalTextBody1X_size,
    textTransform: "capitalize",
    lineHeight: 20,
    textAlign: "left",
  },
  centerSection2: {
    top: 464,
  },
  centerSection3: {
    top: 541,
  },
  friday: {
    top: 335,
  },
  friday1: {
    top: 390,
  },
  friday2: {
    top: 467,
  },
  friday3: {
    top: 555,
  },
  separator: {
    top: 369,
  },
  separator1: {
    top: 446,
  },
  separator2: {
    top: 523,
  },
  separator3: {
    top: 600,
  },
  unreadCounterChild: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorRoyalblue,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  text: {
    top: 3,
    left: 8,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    position: "absolute",
  },
  unreadCounter: {
    left: 334,
    top: 301,
  },
  inboxItem: {
    top: 180,
    left: 281,
    width: 71,
  },
  groupChild: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text1: {
    height: "60%",
    width: "60%",
    top: "10%",
    left: "20%",
    letterSpacing: 0,
    fontFamily: FontFamily.plusJakartaSansSemiBold,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  bellsimpleWrapper: {
    height: "2.46%",
    width: "5.33%",
    top: "90.02%",
    right: "61.33%",
    bottom: "7.51%",
    left: "33.33%",
    position: "absolute",
  },
  groupItem: {
    top: 19,
    width: 113,
    left: 0,
  },
  bulls: {
    left: 37,
    color: Color.neutral0,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
  },
  warriors: {
    left: 142,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkgray_100,
    textAlign: "center",
  },
  rectangleParent: {
    top: 252,
    left: 87,
    width: 197,
    height: 21,
    position: "absolute",
  },
  inbox: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_200,
  },
});

export default Inbox;
