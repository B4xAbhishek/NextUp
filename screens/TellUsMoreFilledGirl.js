import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import CityForm from "../components/CityForm";
import ConfirmSection from "../components/ConfirmSection";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { Picker } from "@react-native-picker/picker";

const TellUsMoreFilledGirl = () => {
  const navigation = useNavigation();

  const [selectedCity, setSelectedCity] = useState("");
const [selectedState, setSelectedState] = useState("");
const [selectedHeight, setSelectedHeight] = useState("");
const [selectedWeight, setSelectedWeight] = useState("");


const handleCityChange = (itemValue) => {
  setSelectedCity(itemValue);
};

const handleStateChange = (itemValue) => {
  setSelectedState(itemValue);
};

const handleHeightChange = (itemValue) => {
  setSelectedHeight(itemValue);
};

const handleWeightChange = (itemValue) => {
  setSelectedWeight(itemValue);
};


  return (
    <View style={styles.tellUsMoreFilledGirl}>
      <View style={styles.group}>
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </View>
      <View style={styles.homeIndicatorLightWrapper}>
        <View style={styles.homeIndicatorLight}>
          <View style={styles.homeIndicatorLight} />
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={[styles.path5Copy2Parent, styles.path5Position]}>
        <Image
          style={[styles.path5Copy2, styles.path5Layout]}
          contentFit="cover"
          source={require("../assets/path-5-copy-2.png")}
        />
        <Image
          style={[styles.path5Copy3, styles.path5Layout]}
          contentFit="cover"
          source={require("../assets/path-5-copy-2.png")}
        />
        <Text style={[styles.firstName, styles.nameTypo]}>FIRST NAME</Text>
        <Text style={[styles.lastName, styles.nameTypo]}>LAST NAME</Text>
        <TextInput style={[styles.vineet, styles.vineetTypo]}>Vineet</TextInput>
        <TextInput style={[styles.kumar, styles.vineetTypo]}>Kumar</TextInput>
      </View>
      <View style={[styles.path5Copy2Group, styles.path5Position]}>
        <Image
          style={[styles.path5Copy21, styles.path5Layout]}
          contentFit="cover"
          source={require("../assets/path-5-copy-21.png")}
        />
        <Text style={[styles.firstName, styles.nameTypo]}>DATE OF BIRTH</Text>
        <Text style={[styles.vineet1, styles.vineetTypo]}>SELECT DATE</Text>
      </View>
      <Text style={styles.oneLastStep}>Enter Palyer Details</Text>
      <CityForm
        location1="CITY"
        carStateCarWeight="STATE"
        personHeight="Manhattan"
        cityName="New York"
      />
      <ConfirmSection
        propTop={716}
        onFramePressablePress={() => navigation.navigate("TellUsMoreFilled")}
      />
      <View style={[styles.rectangle1, styles.rectanglePosition]} />
      <View style={[styles.rectangleCopy, styles.rectanglePosition]} />
      <CityForm
        location1="HEIGHT"
        carStateCarWeight="WEIGHT"
        personHeight="5’10’’"
        cityName="50 KG"
        propTop={448}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  path5Position: {
    left: 32,
    width: 311,
    position: "absolute",
  },
  path5Layout: {
    height: 1,
    position: "absolute",
  },
  nameTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    width: 148,
    top: 0,
    height: 12,
    position: "absolute",
  },
  vineetTypo: {
    height: 18,
    fontWeight: "600",
    lineHeight: 18,
    top: 24,
    fontSize: FontSize.bodyLargeBold_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    width: 148,
    position: "absolute",
  },
  rectanglePosition: {
    height: 7,
    backgroundColor: Color.colorRoyalblue,
    left: 26,
    top: 110,
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
  homeIndicatorLight: {
    top: 0,
    height: 20,
    width: 375,
    left: 0,
    position: "absolute",
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
    height: 20,
    width: 375,
    left: 0,
    position: "absolute",
  },
  path5Copy2: {
    width: 148,
    top: 54,
    height: 1,
    left: 0,
  },
  path5Copy3: {
    left: 163,
    width: 148,
    top: 54,
    height: 1,
  },
  firstName: {
    left: 0,
  },
  lastName: {
    left: 163,
  },
  vineet: {
    color: Color.othersWhite,
    left: 0,
  },
  kumar: {
    color: Color.othersWhite,
    left: 163,
  },
  path5Copy2Parent: {
    top: 159,
    height: 55,
    width: 311,
  },
  path5Copy21: {
    top: 53,
    width: 311,
    left: 0,
  },
  vineet1: {
    color: Color.colorDimgray,
    left: 0,
  },
  path5Copy2Group: {
    top: 256,
    height: 54,
    width: 311,
  },
  oneLastStep: {
    top: 65,
    left: 65,
    lineHeight: 24,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    color: Color.othersWhite,
    fontSize: FontSize.bodyLargeBold_size,
    textAlign: "left",
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
  tellUsMoreFilledGirl: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default TellUsMoreFilledGirl;
