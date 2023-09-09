import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PlayerStatsContainer1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.data}
      onPress={() => navigation.navigate("PlayerProfileSomeoneElse")}
    >
      <View style={[styles.vamRondaCopy12Parent, styles.vamParentPosition]}>
        <Text style={[styles.vamRondaCopy, styles.vamTypo1]}>PTS</Text>
        <Text style={[styles.vamRondaCopy1, styles.vamTypo]}>14.7</Text>
        <Text style={[styles.vamRondaCopy2, styles.vamTypo1]}>12.7</Text>
        <View style={[styles.groupChild, styles.groupPosition1]} />
        <View style={[styles.groupItem, styles.groupPosition1]} />
      </View>
      <View style={[styles.vamRondaCopy13Parent, styles.vamParentPosition]}>
        <Text style={[styles.vamRondaCopy3, styles.vamTypo1]}>AST</Text>
        <Text style={[styles.vamRondaCopy4, styles.vamTypo]}>11.5</Text>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.vamRondaCopy2, styles.vamTypo1]}>12.7</Text>
        <View style={[styles.groupItem, styles.groupPosition1]} />
      </View>
      <View style={[styles.vamRondaCopy14Parent, styles.groupParentLayout]}>
        <Text style={[styles.vamRondaCopy, styles.vamTypo1]}>RPG</Text>
        <Text style={[styles.vamRondaCopy7, styles.vamTypo]}>10.2</Text>
        <View style={[styles.groupChild1, styles.groupPosition]} />
        <Text style={[styles.vamRondaCopy2, styles.vamTypo1]}>12.7</Text>
        <View style={[styles.groupItem, styles.groupPosition1]} />
      </View>
      <View style={[styles.vamRondaCopy15Parent, styles.groupParentLayout]}>
        <Text style={[styles.vamRondaCopy, styles.vamTypo1]}>BPG</Text>
        <Text style={[styles.vamRondaCopy7, styles.vamTypo]}>10.2</Text>
        <View style={[styles.groupChild1, styles.groupPosition]} />
        <Text style={[styles.vamRondaCopy2, styles.vamTypo1]}>12.7</Text>
        <View style={[styles.groupItem, styles.groupPosition1]} />
      </View>
      <View style={[styles.vamRondaCopy16Parent, styles.groupParentLayout]}>
        <Text style={[styles.vamRondaCopy, styles.vamTypo1]}>STL</Text>
        <Text style={[styles.vamRondaCopy7, styles.vamTypo]}>10.2</Text>
        <View style={[styles.groupChild1, styles.groupPosition]} />
        <Text style={[styles.vamRondaCopy2, styles.vamTypo1]}>12.7</Text>
        <View style={[styles.groupItem, styles.groupPosition1]} />
      </View>
      <View style={[styles.vamRondaCopy16Group, styles.groupParentLayout]}>
        <Text style={[styles.vamRondaCopy, styles.vamTypo1]}>FG%</Text>
        <Text style={[styles.vamRondaCopy7, styles.vamTypo]}>10.2</Text>
        <View style={[styles.groupChild1, styles.groupPosition]} />
        <Text style={[styles.vamRondaCopy2, styles.vamTypo1]}>12.7</Text>
        <View style={[styles.groupItem, styles.groupPosition1]} />
      </View>
      <View style={[styles.vamRondaCopy16Container, styles.groupParentLayout]}>
        <Text style={[styles.vamRondaCopy, styles.vamTypo1]}>2PT%</Text>
        <Text style={[styles.vamRondaCopy7, styles.vamTypo]}>10.2</Text>
        <View style={[styles.groupChild1, styles.groupPosition]} />
        <Text style={[styles.vamRondaCopy2, styles.vamTypo1]}>12.7</Text>
        <View style={[styles.groupItem, styles.groupPosition1]} />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Text style={[styles.vamRondaCopy, styles.vamTypo1]}>3PT%</Text>
        <Text style={[styles.vamRondaCopy7, styles.vamTypo]}>10.2</Text>
        <View style={[styles.groupChild1, styles.groupPosition]} />
        <Text style={[styles.vamRondaCopy2, styles.vamTypo1]}>12.7</Text>
        <View style={[styles.groupItem, styles.groupPosition1]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vamParentPosition: {
    height: 23,
    left: 0,
    position: "absolute",
  },
  vamTypo1: {
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.metrophobicRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  vamTypo: {
    color: Color.colorGoldenrod_200,
    textAlign: "left",
    fontFamily: FontFamily.metrophobicRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    top: 0,
    position: "absolute",
  },
  groupPosition1: {
    height: 6,
    left: 91,
    position: "absolute",
  },
  groupPosition: {
    top: 3,
    height: 6,
    backgroundColor: Color.colorGoldenrod_200,
    left: 91,
    position: "absolute",
  },
  groupParentLayout: {
    width: 269,
    height: 23,
    left: 0,
    position: "absolute",
  },
  vamRondaCopy: {
    top: 8,
    width: 84,
    left: 0,
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.metrophobicRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
  },
  vamRondaCopy1: {
    left: 265,
  },
  vamRondaCopy2: {
    top: 11,
    left: 225,
  },
  groupChild: {
    top: 2,
    width: 164,
    backgroundColor: Color.colorGoldenrod_200,
    height: 6,
    left: 91,
  },
  groupItem: {
    top: 14,
    backgroundColor: Color.colorDimgray_200,
    width: 124,
    height: 6,
    left: 91,
  },
  vamRondaCopy12Parent: {
    width: 281,
    top: 0,
    height: 23,
  },
  vamRondaCopy3: {
    top: 10,
    width: 84,
    left: 0,
    textAlign: "left",
    color: Color.othersWhite,
    fontFamily: FontFamily.metrophobicRegular,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
  },
  vamRondaCopy4: {
    left: 205,
    width: 84,
  },
  groupInner: {
    width: 104,
  },
  vamRondaCopy13Parent: {
    top: 41,
    width: 289,
  },
  vamRondaCopy7: {
    left: 185,
    width: 84,
  },
  groupChild1: {
    width: 84,
  },
  vamRondaCopy14Parent: {
    top: 82,
  },
  vamRondaCopy15Parent: {
    top: 123,
  },
  vamRondaCopy16Parent: {
    top: 164,
  },
  vamRondaCopy16Group: {
    top: 205,
  },
  vamRondaCopy16Container: {
    top: 246,
  },
  groupView: {
    top: 287,
  },
  data: {
    top: 529,
    left: 43,
    height: 310,
    width: 289,
    position: "absolute",
  },
});

export default PlayerStatsContainer1;
