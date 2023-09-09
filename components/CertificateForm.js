import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CertificateForm = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={[styles.groupChild, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-51.png")}
      />
      <Image
        style={[styles.group5Copy, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/group-5-copy.png")}
      />
      <Text style={[styles.photoId, styles.photoIdLayout]}>{`PHOTO
ID`}</Text>
      <Text
        style={[styles.coachingCertificate, styles.photoIdLayout]}
      >{`COACHING
CERTIFICATE`}</Text>
      <Image
        style={styles.path5Icon}
        contentFit="cover"
        source={require("../assets/path-5.png")}
      />
      <Image
        style={[styles.groupItem, styles.photoIdLayout]}
        contentFit="cover"
        source={require("../assets/group-62.png")}
      />
      <Image
        style={[styles.plcyRealIdLicenseDcIcon, styles.plcyIconLayout]}
        contentFit="cover"
        source={require("../assets/19-0927-plcy-realidlicensedc.png")}
      />
      <Image
        style={[styles.plcyRealIdLicenseDcIcon1, styles.plcyIconLayout]}
        contentFit="cover"
        source={require("../assets/19-0927-plcy-realidlicensedc.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 148,
    width: 207,
    left: 52,
    position: "absolute",
  },
  photoIdLayout: {
    height: 36,
    position: "absolute",
  },
  plcyIconLayout: {
    height: 116,
    width: 175,
    left: 68,
    position: "absolute",
  },
  groupChild: {
    top: 0,
  },
  group5Copy: {
    top: 224,
  },
  photoId: {
    top: 56,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorSlategray,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    lineHeight: 18,
    fontSize: FontSize.bodyMediumSemibold_size,
    height: 36,
    width: 207,
    left: 52,
  },
  coachingCertificate: {
    top: 280,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorSlategray,
    fontFamily: FontFamily.robotoBlack,
    fontWeight: "800",
    lineHeight: 18,
    fontSize: FontSize.bodyMediumSemibold_size,
    height: 36,
    width: 207,
    left: 52,
  },
  path5Icon: {
    top: 66,
    left: 18,
    width: 1,
    height: 232,
    position: "absolute",
  },
  groupItem: {
    top: 48,
    left: 0,
    width: 36,
  },
  plcyRealIdLicenseDcIcon: {
    top: 16,
  },
  plcyRealIdLicenseDcIcon1: {
    top: 241,
  },
  groupParent: {
    top: 204,
    left: 58,
    width: 259,
    height: 372,
    position: "absolute",
  },
});

export default CertificateForm;
