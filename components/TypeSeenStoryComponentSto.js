import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeSeenStoryComponentSto = ({
  avatar,
  name1,
  showName,
  typeSeenStoryComponentStoPosition,
  nameColor,
}) => {
  const typeSeenStoryComponentStoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeSeenStoryComponentStoPosition),
    };
  }, [typeSeenStoryComponentStoPosition]);

  const nameStyle = useMemo(() => {
    return {
      ...getStyleValue("color", nameColor),
    };
  }, [nameColor]);

  return (
    <View
      style={[styles.typeseenStoryComponentsto, typeSeenStoryComponentStoStyle]}
    >
      <Image style={styles.avatarIcon} contentFit="cover" source={avatar} />
      {showName && <Text style={[styles.name, nameStyle]}>{name1}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarIcon: {
    width: 80,
    height: 80,
  },
  name: {
    alignSelf: "stretch",
    fontSize: FontSize.bodyMediumSemibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.bodyMediumSemibold,
    color: Color.greyscale600,
    textAlign: "center",
    marginTop: 4,
  },
  typeseenStoryComponentsto: {
    alignItems: "center",
  },
});

export default TypeSeenStoryComponentSto;
