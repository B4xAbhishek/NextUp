import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const navigation = useNavigation();

const BottomNavigationBar = () => {
    return (
        <View style={styles.bottomNav}>

            <Text style={styles.bottomNavItem}>Dashboard</Text>
            <Text
                style={styles.bottomNavItem}
                onPress={() => navigation.navigate("MyTeam1")}
            >
                My Team
            </Text>
            <Text style={styles.bottomNavItem}>Calendar</Text>

            <Text style={styles.bottomNavItem}>Message</Text>
            <Text style={styles.bottomNavItem}>Account</Text>
            <Image
                style={styles.bottomNavIcon}
                source={require("../assets/chatteardroptext1.png")}
            />
            <Image
                style={styles.bottomNavIcon}
                source={require("../assets/house.png")}
            />
            <Image
                style={styles.bottomNavIcon}
                source={require("../assets/calendarblank.png")}
            />
            <Image
                style={styles.bottomNavIcon}
                source={require("../assets/users.png")}
            />
            <Image
                style={styles.bottomNavIcon}
                source={require("../assets/user2.png")}
            />
        </View>
    );
};

const styles = {
    // Your existing styles

    // Styles for the bottom navigation bar
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white", 
        paddingHorizontal: 16, 
        borderTopWidth: 1, 
        borderColor: "#ccc", 
    },
    bottomNavItem: {
        textAlign: "center",
        fontFamily: FontFamily.robotoMedium,
        fontWeight: "500",
        fontSize: FontSize.size_xs,
        color: Color.colorDimgray_100,
    },
    bottomNavIcon: {
        width: 24,
        height: 24,
    },
};

export default BottomNavigationBar;