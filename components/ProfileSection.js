import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ProfileSection = ({ pageTitle, iconImageUrl, propTop }) => {

  const navigation = useNavigation();
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
      <View
        style={[
          styles.rectangleParent,
          styles.groupChildLayout,
          groupView1Style,
        ]}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-1000002785.png")}
        />
        <Text style={styles.title}>{pageTitle}</Text>
        <Image
          style={styles.vuesaxboldarrowDownIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxboldarrowdown1.png")}
        />
        <Image
          style={styles.userIcon}
          resizeMode="cover"
          source={iconImageUrl}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 50,
    width: 338,
    position: "absolute",
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
    width: 30,
    height: 26,
    position: "absolute",
  },
  title: {
    top: 17,
    left: 56,
    fontSize: FontSize.bodyMediumSemibold_size,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.neutral0,
    textAlign: "left",
    position: "absolute",
  },
  vuesaxboldarrowDownIcon: {
    top: 15,
    left: 308,
    width: 20,
    height: 20,
    position: "absolute",
  },
  userIcon: {
    height: "52%",
    width: "7.69%",
    top: "24%",
    right: "86.98%",
    bottom: "24%",
    left: "5.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    top: 293,
    left: 18,
  },
});

export default ProfileSection;
