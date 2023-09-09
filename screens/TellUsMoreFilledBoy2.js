import React , { useState} from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import FormContainer from "../components/FormContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { Picker } from "@react-native-picker/picker";

const TellUsMoreFilledBoy2 = () => {
  const navigation = useNavigation();
  const [selectedYear, setSelectedYear] = useState("2019");
  const handleYearChange = (itemValue) => {
    setSelectedYear(itemValue); // Update the selected year
  };

  return (
    <View style={styles.tellUsMoreFilledBoy}>
      <Text style={[styles.signInWithContainer, styles.continueLayout]}>
        <Text style={styles.signInWithContainer1}>
          <Text style={styles.tellUs}>{`Tell us
`}</Text>
          <Text style={styles.more}>more</Text>
        </Text>
      </Text>
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
      <FormContainer
        imageDimensions={require("../assets/augustphliegercreqtqgbfcuunsplash-12.png")}
        imageDimensionsText={require("../assets/group-181811.png")}
      />
      <View
        style={[styles.augustPhliegerCreqtqgbfcuUnParent, styles.augustLayout]}
      >
        <Image
          style={[styles.augustPhliegerCreqtqgbfcuUnIcon, styles.augustLayout]}
          contentFit="cover"
          source={require("../assets/augustphliegercreqtqgbfcuunsplash-11.png")}
        />
        <Text style={[styles.player, styles.kumarTypo]}>COACH</Text>
      </View>
      <Text style={[styles.firstName, styles.nameLayout]}>GENDER</Text>
      <View style={[styles.path5Copy5Parent, styles.nameLayout]}>
        <Image
          style={[styles.path5Copy5, styles.path5Position]}
          contentFit="cover"
          source={require("../assets/path-5-copy-2.png")}
        />
        <Text style={[styles.lastName, styles.nameLayout]}>CLASS OF</Text>
        <Picker
          selectedValue={selectedYear}
          onValueChange={handleYearChange}
          style={[styles.kumar, styles.nameLayout]}
        >
          <Picker.Item label="2019" value="2019" />
          <Picker.Item label="2020" value="2020" />
          <Picker.Item label="2021" value="2021" />
        </Picker>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Pressable
        style={[styles.path5Copy4Parent, styles.path5Layout]}
        onPress={() => navigation.navigate("TellUsMoreFilledBoy1")}
      >
        <Image
          style={[styles.path5Copy4, styles.path5Layout]}
          contentFit="cover"
          source={require("../assets/path-5-copy-4.png")}
        />
        <Text style={[styles.lastName, styles.nameLayout]}>SCHOOL</Text>
        <Text style={[styles.kumar, styles.nameLayout]}>ABC SchooL</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={[styles.tellUsMoreFilledBoyChild, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-708.png")}
      />
      <Image
        style={styles.tellUsMoreFilledBoyItem}
        contentFit="cover"
        source={require("../assets/ellipse-709.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("TellUsMoreFilledGirl2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-707.png")}
        />
      </Pressable>
      <Text style={[styles.oneLastStep, styles.oneTypo]}>Male</Text>
      <Text style={[styles.oneLastStep1, styles.continueTypo]}>Female</Text>
      <View style={[styles.homeIndicatorLightWrapper, styles.homeLayout]}>
        <View style={[styles.homeIndicatorLight, styles.homeLayout]}>
          <View style={[styles.homeIndicatorLight, styles.homeLayout]} />
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={styles.tellUsMoreFilledBoyInner}>
        <View style={styles.rectangleLayout}>
          <View style={[styles.rectangleCopy3, styles.rectangleLayout]} />
          <Text  onPress={() => navigation.navigate("TellUsMoreFilledBoy1")} style={[styles.continue, styles.continueTypo]}>Confirm</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  continueLayout: {
    width: 311,
    alignItems: "center",
    display: "flex",
    color: Color.othersWhite,
  },
  rectanglePosition: {
    height: 7,
    top: 110,
    backgroundColor: Color.colorRoyalblue,
    left: 26,
    position: "absolute",
  },
  augustLayout: {
    height: 221,
    width: 162,
    position: "absolute",
  },
  kumarTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
  },
  nameLayout: {
    width: 148,
    position: "absolute",
  },
  path5Position: {
    height: 1,
    top: 54,
    left: 0,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  path5Layout: {
    width: 310,
    position: "absolute",
  },
  wrapperLayout: {
    height: 20,
    width: 20,
    top: 501,
    position: "absolute",
  },
  oneTypo: {
    top: 502,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
  },
  continueTypo: {
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  homeLayout: {
    width: 375,
    height: 20,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 311,
  },
  tellUs: {
    fontWeight: "100",
    fontFamily: FontFamily.robotoThin,
  },
  more: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  signInWithContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  signInWithContainer: {
    top: 135,
    fontSize: FontSize.size_13xl,
    lineHeight: 42,
    textAlign: "left",
    left: 26,
    alignItems: "center",
    display: "flex",
    color: Color.othersWhite,
    position: "absolute",
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
  rectangle1: {
    borderRadius: Border.br_13xl,
    width: 323,
    opacity: 0.08,
  },
  rectangleCopy: {
    borderRadius: Border.br_23xl,
    width: 77,
  },
  augustPhliegerCreqtqgbfcuUnIcon: {
    bottom: 0,
    borderRadius: Border.br_xs,
    left: 0,
  },
  player: {
    left: 11,
    width: 95,
    height: 11,
    opacity: 0.5,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    top: 16,
    position: "absolute",
  },
  augustPhliegerCreqtqgbfcuUnParent: {
    bottom: 361,
    left: 195,
  },
  firstName: {
    top: 479,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    width: 148,
    height: 12,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 32,
  },
  path5Copy5: {
    width: 148,
    position: "absolute",
  },
  lastName: {
    top: 0,
    color: Color.colorGray_100,
    fontSize: FontSize.size_xs,
    width: 148,
    height: 12,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
  },
  kumar: {
    top: 16,
    height: 18,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
  },
  vectorIcon: {
    height: "11.01%",
    width: "6.08%",
    top: "5.5%",
    bottom: "83.49%",
    left: "93.92%",
  },
  path5Copy5Parent: {
    top: 631,
    height: 55,
    left: 32,
  },
  path5Copy4: {
    height: 1,
    top: 54,
    left: 0,
  },
  vectorIcon1: {
    height: "10.91%",
    width: "2.9%",
    top: "5.45%",
    bottom: "83.64%",
    left: "97.1%",
  },
  path5Copy4Parent: {
    top: 548,
    left: 33,
    height: 55,
  },
  tellUsMoreFilledBoyChild: {
    left: 33,
  },
  tellUsMoreFilledBoyItem: {
    top: 506,
    left: 38,
    width: 10,
    height: 10,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 119,
  },
  oneLastStep: {
    left: 59,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.othersWhite,
    position: "absolute",
  },
  oneLastStep1: {
    left: 145,
    color: Color.colorGray_300,
    top: 502,
    lineHeight: 18,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
  },
  homeIndicatorLight: {
    top: 0,
  },
  homeIndicator: {
    top: 8,
    left: 120,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorDarkslategray,
    width: 135,
    height: 4,
    position: "absolute",
  },
  homeIndicatorLightWrapper: {
    top: 792,
  },
  rectangleCopy3: {
    borderRadius: Border.br_5xl,
    top: 0,
    left: 0,
    backgroundColor: Color.colorRoyalblue,
    height: 48,
    position: "absolute",
  },
  continue: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    textAlign: "center",
    justifyContent: "center",
    height: 16,
    top: 16,
    left: 0,
    width: 311,
    alignItems: "center",
    display: "flex",
    color: Color.othersWhite,
    fontFamily: FontFamily.robotoRegular,
  },
  tellUsMoreFilledBoyInner: {
    top: 716,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: 0,
    left: 0,
    position: "absolute",
  },
  tellUsMoreFilledBoy: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default TellUsMoreFilledBoy2;
