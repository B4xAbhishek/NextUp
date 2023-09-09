import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook

const Frame = () => {
  const navigation = useNavigation(); // Initialize the navigation object

    setTimeout(() => {
      // Navigate to the "PhotoIDNotAdded" screen after 1 second
      navigation.navigate("TellUsMoreFilledBoy2");
    }, 1000); // 1000 milliseconds = 1 second
  

  return (
    <View style={styles.playerOnboardingParent}>
      <TouchableOpacity>
        <Text style={styles.playerOnboarding}>PLAYER ONBOARDING</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  playerOnboarding: {
    fontSize: 32, // Adjust the font size to your preference
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    color: "white",
    textAlign: "center",
  },
  playerOnboardingParent: {
    backgroundColor: "royalblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 31,
    paddingVertical: 19,
  },
});

export default Frame;
