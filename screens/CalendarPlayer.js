import * as React from "react";
import { StyleSheet, View, Text, Scrollable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import UpcomingGamesContainer from "../components/UpcomingGamesContainer";
import FormContainer3 from "../components/FormContainer3";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const CalendarPlayer = () => {
  return (
    <Scrollable>
    <View style={styles.calendarPlayer}>
      <View style={styles.rectangleCopy} />
      <Text style={[styles.calendar, styles.calendarTypo]}>Calendar</Text>
      <Text style={[styles.upcomingGames, styles.myPracticeTypo]}>
        Upcoming Games
      </Text>
      <View style={[styles.seeAllParent, styles.parentLayout]}>
        <Text style={[styles.seeAll, styles.textTypo1]}>See All</Text>
        <Image
          style={[styles.chevronDownIcon, styles.chevronLayout]}
          contentFit="cover"
          source={require("../assets/chevrondown3.png")}
        />
      </View>
      <UpcomingGamesContainer />
      <FormContainer3 />
      <Text style={[styles.myChallenges, styles.myPracticeTypo]}>
        My Challenges
      </Text>
      <Text style={[styles.myPractice, styles.myPracticeTypo]}>
        My Practice
      </Text>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.chevronDownWrapper, styles.chevronLayout]}>
          <View style={[styles.chevronDown, styles.chevronLayout]} />
        </View>
        <Text style={[styles.seeAll, styles.textTypo1]}>See All</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <LinearGradient
        style={[styles.calendarPlayerChild, styles.calendarBg]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <LinearGradient
        style={[styles.calendarPlayerItem, styles.iconPosition1]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <Image
        style={[styles.calendarPlayerInner, styles.calendarPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-18890.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/rectangle-18896.png")}
      />
      <Image
        style={styles.calendarPosition}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.iconPosition1}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <LinearGradient
        style={[styles.calendarPlayerChild, styles.calendarBg]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <LinearGradient
        style={[styles.calendarPlayerItem, styles.iconPosition1]}
        locations={[0, 1]}
        colors={["#23262f", "rgba(35, 38, 47, 0)"]}
      />
      <Text style={[styles.shootingChallenge, styles.shootingTypo]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.shootingChallenge1, styles.shootingTypo]}>
        Dribble Challenge
      </Text>
      <Text style={[styles.daysLeft, styles.daysTypo]}> 3 Days left</Text>
      <Text style={[styles.completed2Days, styles.daysTypo]}>
        Completed 2 days ago
      </Text>
      <View style={[styles.vaibhavChibbarWrapper, styles.vaibhavLayout]}>
        <Text style={[styles.vaibhavChibbar, styles.textTypo]}>
          Submit Video
        </Text>
      </View>
      <View style={[styles.vaibhavChibbarContainer, styles.vaibhavLayout]}>
        <Text style={[styles.vaibhavChibbar, styles.textTypo]}>
          Stat Challenge
        </Text>
      </View>
      <View style={[styles.rectangleView, styles.calendarChildLayout]} />
      <View style={[styles.calendarPlayerChild2, styles.calendarChildLayout]} />
      <View style={[styles.calendarPlayerChild3, styles.calendarChildLayout]} />
      <View style={styles.calendarPlayerChild4} />
      <View style={[styles.calendarPlayerChild5, styles.calendarChildLayout]} />
      <View style={[styles.calendarPlayerChild6, styles.calendarChildLayout]} />
      <View style={[styles.calendarPlayerChild7, styles.calendarChildLayout]} />
      <View style={[styles.wrapper, styles.frameWrapperLayout]}>
        <Text style={[styles.text, styles.textFlexBox]}>4</Text>
      </View>
      <View style={[styles.container, styles.frameWrapperLayout]}>
        <Text style={[styles.text, styles.textFlexBox]}>5</Text>
      </View>
      <View style={[styles.frame, styles.frameWrapperLayout]}>
        <Text style={[styles.text, styles.textFlexBox]}>6</Text>
      </View>
      <View style={[styles.frameView, styles.frameWrapperLayout]}>
        <Text style={[styles.text3, styles.textPosition]}>7</Text>
      </View>
      <View style={[styles.wrapper1, styles.frameWrapperLayout]}>
        <Text style={[styles.text4, styles.textPosition]}>8</Text>
      </View>
      <View style={[styles.wrapper2, styles.frameWrapperLayout]}>
        <Text style={[styles.text4, styles.textPosition]}>9</Text>
      </View>
      <View style={[styles.wrapper3, styles.frameWrapperLayout]}>
        <Text style={[styles.text6, styles.text6Position]}>10</Text>
      </View>
      <Text style={[styles.sun, styles.sunTypo]}>Sun</Text>
      <Text style={[styles.mon, styles.sunTypo]}>Mon</Text>
      <Text style={[styles.tues, styles.sunTypo]}>Tues</Text>
      <Text style={[styles.thu, styles.sunTypo]}>Thu</Text>
      <Text style={[styles.fri, styles.sunTypo]}>Fri</Text>
      <Text style={[styles.sat, styles.sunTypo]}>Sat</Text>
      <Text style={[styles.wed, styles.sunTypo]}>Wed</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-753.png")}
      />
      <Text style={[styles.text7, styles.textFlexBox]}>5</Text>
      <Image
        style={[styles.groupIcon, styles.calendarChildPosition]}
        contentFit="cover"
        source={require("../assets/group-17295.png")}
      />
      <Image
        style={[styles.calendarPlayerChild8, styles.calendarChildPosition]}
        contentFit="cover"
        source={require("../assets/group-17294.png")}
      />
      <Image
        style={[styles.calendarPlayerChild9, styles.calendarChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Text style={styles.december}>December</Text>
      <Text style={styles.text8}>2020</Text>
      <Image
        style={[styles.ovalCopyIcon, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy1.png")}
      />
      <Text style={[styles.challenge, styles.matchTypo]}>My Practice</Text>
      <Image
        style={[styles.ovalCopyIcon1, styles.ovalIconLayout]}
        contentFit="cover"
        source={require("../assets/oval-copy2.png")}
      />
      <Text style={[styles.match, styles.matchTypo]}>Game</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout1]}>
        <Image
          style={[styles.rectangleIcon1, styles.rectangleLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle.png")}
        />
        <View style={[styles.homeIndicatorLight, styles.boundsLayout]}>
          <View style={[styles.bounds, styles.boundsLayout]} />
          <View style={[styles.homeIndicator, styles.textPosition1]} />
        </View>
        <View style={[styles.exploreParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Message</Text>
          <Image
            style={[styles.chatteardroptextIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/chatteardroptext2.png")}
          />
        </View>
        <View style={[styles.homeParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Dashboard</Text>
          <Image
            style={[styles.houseIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/house1.png")}
          />
        </View>
        <View style={[styles.calendarParent, styles.parentPosition]}>
          <Text style={[styles.calendar1, styles.exploreTypo]}>Calendar</Text>
          <Image
            style={[styles.calendarblankIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/calendarblank1.png")}
          />
        </View>
        <View style={[styles.myStandingParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}onPress={() => navigation.navigate("MyTeam1")}>My Team</Text>
          <Image
            style={[styles.usersIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/users.png")}
          />
        </View>
        <View style={[styles.proParent, styles.parentPosition]}>
          <Text style={[styles.explore, styles.exploreTypo]}>Account</Text>
          <Image
            style={[styles.userIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/user2.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleCopyParent, styles.rectangleLayout]}>
        <View style={[styles.rectangleCopy1, styles.rectangleLayout]} />
        <Image
          style={[styles.rectangleCopyIcon, styles.text6Position]}
          contentFit="cover"
          source={require("../assets/rectangle-copy.png")}
        />
        <Text style={[styles.vineet, styles.vineetTypo]}>August 21, 2022</Text>
        <Text style={[styles.vineet1, styles.vineetTypo]}>3-4:00 PM</Text>
      </View>
    </View>
    </Scrollable>
  );
};



export default CalendarPlayer;
