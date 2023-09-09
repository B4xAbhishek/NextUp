import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import BarsStatusBarIPhoneD from "../components/BarsStatusBarIPhoneD";
import { useNavigation } from "@react-navigation/native";
import ContainerCardForm from "../components/ContainerCardForm";
import FormContainer1 from "../components/FormContainer1";
import DynamicComponent1 from "../components/DynamicComponent1";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const GameDetailsScreenOverview1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gameDetailsScreenOverview}>
      <View
        style={[styles.gameDetailsScreenOverviewChild, styles.gameLayout]}
      />
      <View
        style={[
          styles.gameDetailsScreenOverviewItem,
          styles.rectangleGroupPosition,
        ]}
      />
      <View
        style={[
          styles.gameDetailsScreenOverviewInner,
          styles.rectangleViewLayout,
        ]}
      />
      <View style={[styles.rectangleView, styles.viewPosition]} />
      <View
        style={[styles.gameDetailsScreenOverviewChild, styles.gameLayout]}
      />
      <View
        style={[
          styles.gameDetailsScreenOverviewItem,
          styles.rectangleGroupPosition,
        ]}
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
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("GameDetailsScreenOverview2")}
      >
        <View style={styles.rectangle} />
        <Image
          style={styles.path2Icon}
          contentFit="cover"
          source={require("../assets/path-21.png")}
        />
      </Pressable>
      <Text style={styles.oneLastStep}>Live Games</Text>
      <Text style={[styles.text, styles.textTypo9]}>90</Text>
      <Text style={[styles.text1, styles.textTypo9]}>103</Text>
      <ContainerCardForm
        imageDimensions={require("../assets/group-1000002856.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-690.png")}
      />
      <Image
        style={[
          styles.gameDetailsScreenOverviewChild3,
          styles.ellipseIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-690.png")}
      />
      <Image
        style={styles.chicagoBullsLogoIcon}
        contentFit="cover"
        source={require("../assets/chicago-bulls-logo2.png")}
      />
      <FormContainer1
        imageDimensions={require("../assets/group-1000002857.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Text style={styles.mplDLeagueAug}>MPL D-League Aug 09, 13:03</Text>
      <DynamicComponent1 />
      <Text style={[styles.bulls, styles.bullsTypo]}>Chicago Bulls</Text>
      <Text style={[styles.bulls1, styles.bullsTypo]}>Los Angeles Lakers</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout5]}>
        <View style={[styles.groupChild, styles.groupChildLayout5]} />
        <Text style={[styles.bulls2, styles.bullsPosition]}>Starters</Text>
        <Text style={[styles.bulls3, styles.bullsPosition]}>Min</Text>
        <Text style={[styles.bulls4, styles.bullsPosition]}>FG</Text>
        <Text style={[styles.bulls5, styles.bullsPosition]}>3PT</Text>
        <Text style={[styles.bulls6, styles.bullsPosition]}>AST</Text>
        <Text style={[styles.bulls7, styles.bullsPosition]}>PF</Text>
        <Text style={[styles.bulls8, styles.bullsPosition]}>PTS</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupChildLayout5]}>
        <View style={[styles.groupChild, styles.groupChildLayout5]} />
        <Text style={[styles.bulls2, styles.bullsPosition]}>Starters</Text>
        <Text style={[styles.bulls3, styles.bullsPosition]}>Min</Text>
        <Text style={[styles.bulls4, styles.bullsPosition]}>FG</Text>
        <Text style={[styles.bulls5, styles.bullsPosition]}>3PT</Text>
        <Text style={[styles.bulls6, styles.bullsPosition]}>AST</Text>
        <Text style={[styles.bulls7, styles.bullsPosition]}>PF</Text>
        <Text style={[styles.bulls8, styles.bullsPosition]}>PTS</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupChildLayout5]}>
        <View style={[styles.groupChild, styles.groupChildLayout5]} />
        <Text style={[styles.bulls2, styles.bullsPosition]}>Bench</Text>
        <Text style={[styles.bulls3, styles.bullsPosition]}>Min</Text>
        <Text style={[styles.bulls4, styles.bullsPosition]}>FG</Text>
        <Text style={[styles.bulls5, styles.bullsPosition]}>3PT</Text>
        <Text style={[styles.bulls6, styles.bullsPosition]}>AST</Text>
        <Text style={[styles.bulls7, styles.bullsPosition]}>PF</Text>
        <Text style={[styles.bulls8, styles.bullsPosition]}>PTS</Text>
      </View>
      <View style={[styles.groupView, styles.groupChildLayout5]}>
        <View style={[styles.groupChild, styles.groupChildLayout5]} />
        <Text style={[styles.bulls2, styles.bullsPosition]}>Bench</Text>
        <Text style={[styles.bulls3, styles.bullsPosition]}>Min</Text>
        <Text style={[styles.bulls4, styles.bullsPosition]}>FG</Text>
        <Text style={[styles.bulls5, styles.bullsPosition]}>3PT</Text>
        <Text style={[styles.bulls6, styles.bullsPosition]}>AST</Text>
        <Text style={[styles.bulls7, styles.bullsPosition]}>PF</Text>
        <Text style={[styles.bulls8, styles.bullsPosition]}>PTS</Text>
      </View>
      <Text style={[styles.boxScore, styles.boxScoreTypo]}>Box Score</Text>
      <Text style={[styles.playerStats, styles.boxScoreTypo]}>
        Player stats
      </Text>
      <View style={[styles.rectangleCopyParent, styles.rectanglePosition]}>
        <View style={styles.rectangleCopy} />
        <View style={styles.lineView} />
        <Text style={[styles.q1, styles.textTypo8]}>Q1</Text>
        <Text style={[styles.text2, styles.textTypo7]}>27</Text>
        <Text style={[styles.text3, styles.textTypo7]}>22</Text>
        <Text style={[styles.q2, styles.textTypo8]}>Q2</Text>
        <Text style={[styles.text4, styles.textTypo6]}>27</Text>
        <Text style={[styles.text5, styles.textTypo6]}>17</Text>
        <Text style={[styles.q3, styles.textTypo8]}>Q3</Text>
        <Text style={[styles.text6, styles.textTypo5]}>22</Text>
        <Text style={[styles.text7, styles.textTypo5]}>27</Text>
        <Text style={[styles.q4, styles.textTypo8]}>Q4</Text>
        <Text style={[styles.text8, styles.textTypo4]}>27</Text>
        <Text style={[styles.text9, styles.textTypo4]}>24</Text>
        <Text style={[styles.total, styles.textTypo8]}>Total</Text>
        <Text style={[styles.text10, styles.textTypo8]}>103</Text>
        <Text style={[styles.text11, styles.textTypo8]}>90</Text>
        <Image
          style={[styles.chicagoBullsLogoIcon1, styles.ptsPosition]}
          contentFit="cover"
          source={require("../assets/chicago-bulls-logo1.png")}
        />
        <Image
          style={[styles.losAngelesLakersLogoIcon, styles.losIconLayout]}
          contentFit="cover"
          source={require("../assets/los-angeles-lakers-logo.png")}
        />
      </View>
      <View style={[styles.rectangleCopyGroup, styles.rectanglePosition]}>
        <View style={styles.rectangleCopy} />
        <Text style={[styles.rebounds, styles.reboundsTypo]}>Rebounds</Text>
        <Text style={[styles.turnovers, styles.reboundsTypo]}>Turnovers</Text>
        <View style={[styles.foulWrapper, styles.foulPosition]}>
          <Text style={[styles.foul, styles.textTypo9]}>Foul</Text>
        </View>
        <View style={[styles.foulContainer, styles.foulPosition]}>
          <Text style={[styles.foul, styles.textTypo9]}>Foul</Text>
        </View>
        <View style={[styles.ptsParent, styles.ptsParentLayout]}>
          <Text style={[styles.pts, styles.ptsPosition]}>2PTS</Text>
          <View style={[styles.parent, styles.groupChildLayout4]}>
            <Text style={[styles.text12, styles.textTypo3]}>0</Text>
            <Text style={[styles.text13, styles.textTypo3]}>0</Text>
            <Image
              style={[styles.groupChild2, styles.groupChildLayout4]}
              contentFit="cover"
              source={require("../assets/ellipse-767.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout4]}
              contentFit="cover"
              source={require("../assets/ellipse-768.png")}
            />
          </View>
        </View>
        <Text style={[styles.text14, styles.textTypo2]}>0</Text>
        <Text style={[styles.text15, styles.textTypo2]}>0</Text>
        <Text style={[styles.text16, styles.textTypo1]}>1</Text>
        <Text style={[styles.text17, styles.textTypo1]}>0</Text>
        <Text style={[styles.text18, styles.textTypo]}>0</Text>
        <Text style={[styles.text19, styles.textTypo]}>0</Text>
        <View style={[styles.ptsGroup, styles.ptsParentLayout]}>
          <Text style={[styles.pts, styles.ptsPosition]}>3PTS</Text>
          <View style={[styles.parent, styles.groupChildLayout4]}>
            <Text style={[styles.text12, styles.textTypo3]}>0</Text>
            <Text style={[styles.text13, styles.textTypo3]}>0</Text>
            <Image
              style={[styles.groupChild2, styles.groupChildLayout4]}
              contentFit="cover"
              source={require("../assets/ellipse-767.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout4]}
              contentFit="cover"
              source={require("../assets/ellipse-768.png")}
            />
          </View>
        </View>
        <View style={[styles.ftParent, styles.ptsParentLayout]}>
          <Text style={[styles.ft, styles.textTypo8]}>FT</Text>
          <View style={[styles.parent, styles.groupChildLayout4]}>
            <Text style={[styles.text12, styles.textTypo3]}>0</Text>
            <Text style={[styles.text13, styles.textTypo3]}>0</Text>
            <Image
              style={[styles.groupChild2, styles.groupChildLayout4]}
              contentFit="cover"
              source={require("../assets/ellipse-767.png")}
            />
            <Image
              style={[styles.groupChild3, styles.groupChildLayout4]}
              contentFit="cover"
              source={require("../assets/ellipse-768.png")}
            />
          </View>
        </View>
        <View style={[styles.groupChild8, styles.groupChildLayout1]} />
        <View style={[styles.groupChild9, styles.groupChildLayout]} />
        <View style={[styles.groupChild10, styles.groupChildLayout1]} />
        <View style={[styles.groupChild11, styles.groupChildLayout1]} />
        <View style={[styles.groupChild12, styles.groupChildLayout]} />
      </View>
      <View style={[styles.rectangleParent1, styles.groupChildLayout5]}>
        <View style={[styles.groupChild13, styles.groupChildLayout5]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>42</Text>
        <Text style={[styles.bulls31, styles.textTypo8]}>5-10</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>2-5</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>8</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>1</Text>
        <Text style={[styles.bulls35, styles.textTypo8]}>12</Text>
        <Text style={[styles.dGreen, styles.dGreenTypo]}>D. Green</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.groupChildLayout5]}>
        <View style={[styles.groupChild13, styles.groupChildLayout5]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>42</Text>
        <Text style={[styles.bulls31, styles.textTypo8]}>5-10</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>2-5</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>8</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>1</Text>
        <Text style={[styles.bulls35, styles.textTypo8]}>12</Text>
        <Text style={[styles.dGreen, styles.dGreenTypo]}>D. Green</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.groupChildLayout5]}>
        <View style={[styles.groupChild13, styles.groupChildLayout5]} />
        <Text style={[styles.bulls42, styles.textTypo8]}>1</Text>
        <Text style={[styles.bulls43, styles.textTypo8]}>0-0</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>0-0</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>0</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>0</Text>
        <Text style={[styles.bulls47, styles.textTypo8]}>0</Text>
        <Text style={[styles.dGreen, styles.dGreenTypo]}>A. Lguodala</Text>
      </View>
      <View style={[styles.rectangleParent4, styles.groupChildLayout5]}>
        <View style={[styles.groupChild13, styles.groupChildLayout5]} />
        <Text style={[styles.bulls42, styles.textTypo8]}>1</Text>
        <Text style={[styles.bulls43, styles.textTypo8]}>0-0</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>0-0</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>0</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>0</Text>
        <Text style={[styles.bulls47, styles.textTypo8]}>0</Text>
        <Text style={[styles.dGreen, styles.dGreenTypo]}>A. Lguodala</Text>
      </View>
      <View style={[styles.rectangleParent5, styles.groupChildLayout5]}>
        <View style={[styles.groupChild17, styles.groupChildLayout5]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>13</Text>
        <Text style={[styles.bulls43, styles.textTypo8]}>2-3</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>2-3</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>0</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>0</Text>
        <Text style={[styles.bulls47, styles.textTypo8]}>6</Text>
        <Text style={[styles.oPorter, styles.dGreenTypo]}>O. Porter</Text>
      </View>
      <View style={[styles.rectangleParent6, styles.groupChildLayout5]}>
        <View style={[styles.groupChild17, styles.groupChildLayout5]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>13</Text>
        <Text style={[styles.bulls43, styles.textTypo8]}>2-3</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>2-3</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>0</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>0</Text>
        <Text style={[styles.bulls47, styles.textTypo8]}>6</Text>
        <Text style={[styles.oPorter, styles.dGreenTypo]}>O. Porter</Text>
      </View>
      <View style={[styles.rectangleParent7, styles.groupChildLayout5]}>
        <View style={[styles.groupChild17, styles.groupChildLayout5]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>22</Text>
        <Text style={[styles.bulls43, styles.textTypo8]}>0-2</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>0-0</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>1</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>4</Text>
        <Text style={[styles.bulls47, styles.textTypo8]}>0</Text>
        <Text style={[styles.oPorter, styles.dGreenTypo]}>K. Looney</Text>
      </View>
      <View style={[styles.rectangleParent8, styles.groupChildLayout5]}>
        <View style={[styles.groupChild17, styles.groupChildLayout5]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>22</Text>
        <Text style={[styles.bulls43, styles.textTypo8]}>0-2</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>0-0</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>1</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>4</Text>
        <Text style={[styles.bulls47, styles.textTypo8]}>0</Text>
        <Text style={[styles.oPorter, styles.dGreenTypo]}>K. Looney</Text>
      </View>
      <View style={[styles.rectangleParent9, styles.groupChildLayout5]}>
        <View style={[styles.groupChild13, styles.groupChildLayout5]} />
        <Text style={[styles.bulls42, styles.textTypo8]}>4</Text>
        <Text style={[styles.bulls31, styles.textTypo8]}>7-18</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>4-9</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>5</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>0</Text>
        <Text style={[styles.bulls35, styles.textTypo8]}>18</Text>
        <Text style={[styles.aWiggins, styles.dGreenTypo]}>A. Wiggins</Text>
      </View>
      <View style={[styles.rectangleParent10, styles.groupChildLayout5]}>
        <View style={[styles.groupChild13, styles.groupChildLayout5]} />
        <Text style={[styles.bulls42, styles.textTypo8]}>4</Text>
        <Text style={[styles.bulls31, styles.textTypo8]}>7-18</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>4-9</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>5</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>0</Text>
        <Text style={[styles.bulls35, styles.textTypo8]}>18</Text>
        <Text style={[styles.aWiggins, styles.dGreenTypo]}>A. Wiggins</Text>
      </View>
      <View style={[styles.rectangleParent11, styles.groupChildLayout5]}>
        <View style={[styles.groupChild13, styles.groupChildLayout5]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>20</Text>
        <Text style={[styles.bulls43, styles.textTypo8]}>2-6</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>0-2</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>2</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>5</Text>
        <Text style={[styles.bulls47, styles.textTypo8]}>6</Text>
        <Text style={[styles.aWiggins, styles.dGreenTypo]}>G. Payton</Text>
      </View>
      <View style={[styles.rectangleParent12, styles.groupChildLayout5]}>
        <View style={[styles.groupChild13, styles.groupChildLayout5]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>20</Text>
        <Text style={[styles.bulls43, styles.textTypo8]}>2-6</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>0-2</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>2</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>5</Text>
        <Text style={[styles.bulls47, styles.textTypo8]}>6</Text>
        <Text style={[styles.aWiggins, styles.dGreenTypo]}>G. Payton</Text>
      </View>
      <View style={[styles.rectangleParent13, styles.groupChildLayout5]}>
        <View style={[styles.groupChild17, styles.groupChildLayout5]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>40</Text>
        <Text style={[styles.bulls103, styles.textTypo8]}>12-21</Text>
        <Text style={[styles.bulls104, styles.textTypo8]}>6-11</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>7</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>4</Text>
        <Text style={[styles.bulls35, styles.textTypo8]}>34</Text>
        <Text style={[styles.aWiggins, styles.dGreenTypo]}>S. Curry</Text>
      </View>
      <View style={[styles.rectangleParent14, styles.groupChildLayout5]}>
        <View style={[styles.groupChild17, styles.groupChildLayout5]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>40</Text>
        <Text style={[styles.bulls103, styles.textTypo8]}>12-21</Text>
        <Text style={[styles.bulls104, styles.textTypo8]}>6-11</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>7</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>4</Text>
        <Text style={[styles.bulls35, styles.textTypo8]}>34</Text>
        <Text style={[styles.aWiggins, styles.dGreenTypo]}>S. Curry</Text>
      </View>
      <View style={[styles.rectangleParent15, styles.groupChildLayout5]}>
        <View style={[styles.groupChild27, styles.groupChildPosition]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>18</Text>
        <Text style={[styles.bulls31, styles.textTypo8]}>5-12</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>3-8</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>2</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>3</Text>
        <Text style={[styles.bulls35, styles.textTypo8]}>15</Text>
        <Text style={[styles.aWiggins, styles.dGreenTypo]}>J. Poole</Text>
      </View>
      <View style={[styles.rectangleParent16, styles.groupChildLayout5]}>
        <View style={[styles.groupChild27, styles.groupChildPosition]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>18</Text>
        <Text style={[styles.bulls31, styles.textTypo8]}>5-12</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>3-8</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>2</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>3</Text>
        <Text style={[styles.bulls35, styles.textTypo8]}>15</Text>
        <Text style={[styles.aWiggins, styles.dGreenTypo]}>J. Poole</Text>
      </View>
      <View style={[styles.rectangleParent17, styles.groupChildLayout5]}>
        <View style={[styles.groupChild29, styles.groupChildPosition]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>41</Text>
        <Text style={[styles.bulls31, styles.textTypo8]}>5-20</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>2-8</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>2</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>3</Text>
        <Text style={[styles.bulls35, styles.textTypo8]}>12</Text>
        <Text style={[styles.aWiggins, styles.dGreenTypo]}>K. Thompson</Text>
      </View>
      <View style={[styles.rectangleParent18, styles.groupChildLayout5]}>
        <View style={[styles.groupChild29, styles.groupChildPosition]} />
        <Text style={[styles.bulls30, styles.textTypo8]}>41</Text>
        <Text style={[styles.bulls31, styles.textTypo8]}>5-20</Text>
        <Text style={[styles.bulls32, styles.textTypo8]}>2-8</Text>
        <Text style={[styles.bulls33, styles.textTypo8]}>2</Text>
        <Text style={[styles.bulls34, styles.textTypo8]}>3</Text>
        <Text style={[styles.bulls35, styles.textTypo8]}>12</Text>
        <Text style={[styles.aWiggins, styles.dGreenTypo]}>K. Thompson</Text>
      </View>
      <Image
        style={[styles.losAngelesLakersLogoIcon1, styles.losIconLayout]}
        contentFit="cover"
        source={require("../assets/los-angeles-lakers-logo2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gameLayout: {
    height: 168,
    width: 362,
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  rectangleGroupPosition: {
    top: 1462,
    left: 7,
  },
  rectangleViewLayout: {
    height: 140,
    width: 362,
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  viewPosition: {
    top: 1638,
    left: 7,
  },
  textTypo9: {
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  ellipseIconLayout: {
    height: 34,
    width: 34,
    left: 18,
    position: "absolute",
  },
  bullsTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
  },
  groupChildLayout5: {
    height: 28,
    width: 362,
    position: "absolute",
  },
  bullsPosition: {
    top: 7,
    position: "absolute",
  },
  boxScoreTypo: {
    fontSize: FontSize.headlineHeading5_size,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 22,
    left: 18,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  rectanglePosition: {
    left: "4.8%",
    right: "5.07%",
    width: "90.13%",
    position: "absolute",
  },
  textTypo8: {
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
  },
  textTypo7: {
    left: 79,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  textTypo6: {
    left: 131,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  textTypo5: {
    left: 185,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  textTypo4: {
    left: 240,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  ptsPosition: {
    left: 17,
    position: "absolute",
  },
  losIconLayout: {
    height: 16,
    width: 26,
    position: "absolute",
  },
  reboundsTypo: {
    opacity: 0.7,
    fontSize: FontSize.size_2xs,
    left: 145,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  foulPosition: {
    padding: Padding.p_10xs,
    flexDirection: "row",
    backgroundColor: Color.colorRed,
    borderRadius: Border.br_9xs,
    top: 103,
    position: "absolute",
  },
  ptsParentLayout: {
    height: 57,
    top: 14,
    width: 61,
    position: "absolute",
  },
  groupChildLayout4: {
    height: 37,
    position: "absolute",
  },
  textTypo3: {
    top: 12,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  textTypo2: {
    left: 53,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
    position: "absolute",
  },
  textTypo1: {
    left: 278,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorRed,
    top: 149,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 4,
    borderRadius: Border.br_3xs,
    top: 109,
    position: "absolute",
  },
  groupChildLayout: {
    top: 154,
    height: 4,
    width: 100,
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  dGreenTypo: {
    top: 8,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    color: Color.neutral0,
    position: "absolute",
  },
  groupChildPosition: {
    borderBottomLeftRadius: Border.br_2xs,
    borderBottomRightRadius: Border.br_2xs,
    left: 0,
    top: 0,
    height: 28,
    width: 362,
    position: "absolute",
  },
  gameDetailsScreenOverviewChild: {
    left: 7,
    top: 1082,
  },
  gameDetailsScreenOverviewItem: {
    height: 168,
    width: 362,
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  gameDetailsScreenOverviewInner: {
    top: 1258,
    left: 7,
  },
  rectangleView: {
    height: 140,
    width: 362,
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  rectangle: {
    top: -1,
    left: -1,
    borderRadius: Border.br_7xs,
    borderColor: Color.colorDarkslategray,
    borderWidth: 2,
    height: 32,
    width: 32,
    borderStyle: "solid",
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
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.neutral0,
    position: "absolute",
  },
  text: {
    left: 235,
    lineHeight: 32,
    fontSize: FontSize.size_13xl,
    top: 172,
    textAlign: "center",
    position: "absolute",
  },
  text1: {
    left: 98,
    lineHeight: 32,
    fontSize: FontSize.size_13xl,
    top: 172,
    textAlign: "center",
    position: "absolute",
  },
  ellipseIcon: {
    top: 1036,
  },
  gameDetailsScreenOverviewChild3: {
    top: 1420,
  },
  chicagoBullsLogoIcon: {
    top: 1044,
    left: 24,
    width: 22,
    height: 22,
    position: "absolute",
  },
  groupIcon: {
    top: 150,
    width: 31,
    height: 76,
    left: 172,
    position: "absolute",
  },
  mplDLeagueAug: {
    top: 105,
    left: 96,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_900,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
  },
  bulls: {
    top: 1046,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    left: 60,
    fontWeight: "600",
    color: Color.neutral0,
    position: "absolute",
  },
  bulls1: {
    top: 1430,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    left: 60,
    fontWeight: "600",
    color: Color.neutral0,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_2xs,
    borderTopRightRadius: Border.br_2xs,
    backgroundColor: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
  },
  bulls2: {
    fontWeight: "700",
    color: Color.colorRoyalblue,
    left: 11,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
  },
  bulls3: {
    left: 115,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
  },
  bulls4: {
    left: 158,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
  },
  bulls5: {
    left: 196,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
  },
  bulls6: {
    left: 241,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
  },
  bulls7: {
    left: 288,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
  },
  bulls8: {
    left: 324,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 14,
    fontSize: FontSize.bodyMediumSemibold_size,
    textAlign: "left",
    color: Color.neutral0,
  },
  rectangleParent: {
    left: 7,
    top: 1082,
  },
  rectangleGroup: {
    top: 1462,
    left: 7,
  },
  rectangleContainer: {
    top: 1258,
    left: 7,
  },
  groupView: {
    top: 1638,
    left: 7,
  },
  boxScore: {
    top: 638,
  },
  playerStats: {
    top: 1000,
  },
  rectangleCopy: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.colorGray_700,
    borderRadius: Border.br_xs,
    position: "absolute",
    width: "100%",
  },
  lineView: {
    top: 31,
    left: 74,
    borderColor: Color.neutral0,
    borderTopWidth: 1,
    width: 254,
    height: 1,
    opacity: 0.21,
    borderStyle: "solid",
    position: "absolute",
  },
  q1: {
    left: 78,
    top: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  text2: {
    color: Color.colorGoldenrod_100,
    top: 47,
  },
  text3: {
    top: 71,
    color: Color.neutral0,
  },
  q2: {
    left: 130,
    top: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  text4: {
    color: Color.colorGoldenrod_100,
    top: 47,
  },
  text5: {
    top: 71,
    color: Color.neutral0,
  },
  q3: {
    left: 184,
    top: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  text6: {
    top: 47,
    color: Color.neutral0,
  },
  text7: {
    color: Color.colorCrimson,
    top: 71,
  },
  q4: {
    left: 239,
    top: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  text8: {
    color: Color.colorGoldenrod_100,
    top: 47,
  },
  text9: {
    top: 71,
    color: Color.neutral0,
  },
  total: {
    left: 295,
    top: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  text10: {
    left: 298,
    top: 47,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    position: "absolute",
  },
  text11: {
    left: 301,
    top: 71,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    position: "absolute",
  },
  chicagoBullsLogoIcon1: {
    top: 44,
    width: 20,
    height: 20,
  },
  losAngelesLakersLogoIcon: {
    top: 70,
    left: 14,
  },
  rectangleCopyParent: {
    height: "5.53%",
    top: "37.04%",
    bottom: "57.44%",
  },
  rebounds: {
    top: 89,
  },
  turnovers: {
    top: 129,
  },
  foul: {
    fontSize: FontSize.size_3xs,
    lineHeight: 10,
  },
  foulWrapper: {
    left: 16,
  },
  foulContainer: {
    left: 295,
  },
  pts: {
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    textAlign: "center",
    color: Color.neutral0,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
  },
  text12: {
    color: Color.colorRoyalblue,
    left: 0,
  },
  text13: {
    left: 54,
    color: Color.colorGoldenrod_100,
  },
  groupChild2: {
    width: 37,
    left: 12,
    top: 0,
  },
  groupChild3: {
    left: 31,
    width: 19,
    top: 0,
  },
  parent: {
    top: 20,
    width: 61,
    height: 37,
    left: 0,
  },
  ptsParent: {
    left: 26,
  },
  text14: {
    top: 104,
  },
  text15: {
    top: 149,
  },
  text16: {
    top: 104,
  },
  text17: {
    top: 149,
  },
  text18: {
    left: 305,
  },
  text19: {
    left: 26,
  },
  ptsGroup: {
    left: 135,
  },
  ft: {
    left: 23,
    fontFamily: FontFamily.robotoRegular,
    top: 0,
    position: "absolute",
  },
  ftParent: {
    left: 247,
  },
  groupChild8: {
    width: 100,
    backgroundColor: Color.colorDimgray_100,
    height: 4,
    borderRadius: Border.br_3xs,
    top: 109,
    left: 66,
  },
  groupChild9: {
    left: 66,
  },
  groupChild10: {
    width: 100,
    backgroundColor: Color.colorDimgray_100,
    height: 4,
    borderRadius: Border.br_3xs,
    top: 109,
    left: 172,
  },
  groupChild11: {
    backgroundColor: Color.colorGoldenrod_100,
    height: 4,
    borderRadius: Border.br_3xs,
    top: 109,
    left: 240,
    width: 32,
  },
  groupChild12: {
    left: 172,
  },
  rectangleCopyGroup: {
    height: "9.84%",
    top: "43.28%",
    bottom: "46.88%",
  },
  groupChild13: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorGray_700,
  },
  bulls30: {
    left: 120,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  bulls31: {
    left: 156,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  bulls32: {
    left: 200,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  bulls33: {
    left: 252,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  bulls34: {
    left: 294,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  bulls35: {
    left: 330,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  dGreen: {
    left: 11,
  },
  rectangleParent1: {
    top: 1110,
    left: 7,
  },
  rectangleParent2: {
    top: 1490,
    left: 7,
  },
  bulls42: {
    left: 124,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  bulls43: {
    left: 159,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  bulls47: {
    left: 334,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  rectangleParent3: {
    top: 1286,
    left: 7,
  },
  rectangleParent4: {
    top: 1666,
    left: 7,
  },
  groupChild17: {
    backgroundColor: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
  },
  oPorter: {
    left: 13,
  },
  rectangleParent5: {
    top: 1138,
    left: 7,
  },
  rectangleParent6: {
    top: 1518,
    left: 7,
  },
  rectangleParent7: {
    top: 1314,
    left: 7,
  },
  rectangleParent8: {
    top: 1694,
    left: 7,
  },
  aWiggins: {
    left: 12,
  },
  rectangleParent9: {
    top: 1166,
    left: 7,
  },
  rectangleParent10: {
    top: 1546,
    left: 7,
  },
  rectangleParent11: {
    top: 1342,
    left: 7,
  },
  rectangleParent12: {
    top: 1722,
    left: 7,
  },
  bulls103: {
    left: 152,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  bulls104: {
    left: 197,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
  },
  rectangleParent13: {
    top: 1194,
    left: 7,
  },
  rectangleParent14: {
    top: 1574,
    left: 7,
  },
  groupChild27: {
    backgroundColor: Color.colorDarkslategray_100,
  },
  rectangleParent15: {
    top: 1370,
    left: 7,
  },
  rectangleParent16: {
    top: 1750,
    left: 7,
  },
  groupChild29: {
    backgroundColor: Color.colorGray_700,
  },
  rectangleParent17: {
    top: 1222,
    left: 7,
  },
  rectangleParent18: {
    top: 1602,
    left: 7,
  },
  losAngelesLakersLogoIcon1: {
    top: 1429,
    left: 22,
  },
  gameDetailsScreenOverview: {
    backgroundColor: Color.colorGray_200,
    flex: 1,
    height: 1809,
    overflow: "hidden",
    width: "100%",
  },
});

export default GameDetailsScreenOverview1;
