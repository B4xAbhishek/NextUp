import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import CardContainer from "./CardContainer";
import HierarchySecondaryIconNo from "./HierarchySecondaryIconNo";
import { Border, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MessageWarningButtonAction = ({
  title,
  desciption,
  label,
  label1,
  messageWarningButtonActioPosition,
  messageWarningButtonActioTop,
  messageWarningButtonActioLeft,
  onButtonPress,
}) => {
  const messageWarningButtonActionStyle = useMemo(() => {
    return {
      ...getStyleValue("position", messageWarningButtonActioPosition),
      ...getStyleValue("top", messageWarningButtonActioTop),
      ...getStyleValue("left", messageWarningButtonActioLeft),
    };
  }, [
    messageWarningButtonActioPosition,
    messageWarningButtonActioTop,
    messageWarningButtonActioLeft,
  ]);

  return (
    <View
      style={[
        styles.messagewarningButtonaction,
        messageWarningButtonActionStyle,
      ]}
    >
      <CardContainer
        componentTitle="Title goes in maximum length of 02 lines"
        componentDescription="Describe the current situation and try not to repeat the title. Description in maximum length of 03 lines."
      />
      <View style={styles.button}>
        <HierarchySecondaryIconNo
          label="Action"
          hierarchySecondaryIconNoPosition="unset"
          hierarchySecondaryIconNoAlignSelf="stretch"
          hierarchySecondaryIconNoMarginTop="unset"
          hierarchySecondaryIconNoBackgroundColor="#f5b200"
          labelColor="#000"
        />
        <HierarchySecondaryIconNo
          label="Close"
          hierarchySecondaryIconNoPosition="unset"
          hierarchySecondaryIconNoAlignSelf="stretch"
          hierarchySecondaryIconNoMarginTop={8}
          hierarchySecondaryIconNoBackgroundColor="#332000"
          labelColor="#f5b200"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    marginTop: 40,
  },
  messagewarningButtonaction: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.neutral400,
    width: 343,
    overflow: "hidden",
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_21xl,
    paddingBottom: Padding.p_5xl,
  },
});

export default MessageWarningButtonAction;
