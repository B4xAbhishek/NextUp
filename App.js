const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import GetStarted from "./screens/GetStarted";
import Frame from "./screens/Frame";
import PhotoIDNotAdded from "./screens/PhotoIDNotAdded";
import PhotoIDNotAdded1 from "./screens/PhotoIDNotAdded1";
import PhotoIDNotAdded2 from "./screens/PhotoIDNotAdded2";
import PhotoIDNotAdded3 from "./screens/PhotoIDNotAdded3";
import UploadPhotoAdded from "./screens/UploadPhotoAdded";
import UploadPhotoAdded1 from "./screens/UploadPhotoAdded1";
import UploadPhotoNotAdded from "./screens/UploadPhotoNotAdded";
import UploadPhotoNotAdded1 from "./screens/UploadPhotoNotAdded1";
import TellUsMoreFilled from "./screens/TellUsMoreFilled";
import SelectPlayStyle from "./screens/SelectPlayStyle";
import TellUsMoreFilledGirl from "./screens/TellUsMoreFilledGirl";
import TellUsMoreFilledBoy from "./screens/TellUsMoreFilledBoy";
import TellUsMoreFilledGirl1 from "./screens/TellUsMoreFilledGirl1";
import TellUsMoreFilledBoy1 from "./screens/TellUsMoreFilledBoy1";
import TellUsMoreFilledGirl2 from "./screens/TellUsMoreFilledGirl2";
import TellUsMoreFilledBoy2 from "./screens/TellUsMoreFilledBoy2";
import Text2 from "./components/Text2";
import MyTeam from "./screens/MyTeam";
import MyTeam1 from "./screens/MyTeam1";
import Frame1 from "./screens/Frame1";
import ChatScreen from "./screens/ChatScreen";
import AccountSetting from "./screens/AccountSetting";
import SplashScreen from "./screens/SplashScreen";
import GetStarted1 from "./screens/GetStarted1";
import EnterProfileCreateNewPass from "./screens/EditProfileCreateNewPass";
import EditProfileEnterOldPassw from "./screens/EditProfileEnterOldPassw";
import NonTeamPlayerProfileCoach from "./screens/NonTeamPlayerProfileCoach";
import PlayerContent from "./screens/PlayerContent";
import PlayerContent1 from "./screens/PlayerContent1";
import PlayerRoadToPro from "./screens/PlayerRoadToPro";
import PlayerStat from "./screens/PlayerStat";
import PlayerDashboardSomeoneElse from "./screens/PlayerDashboardSomeoneElse";
import PlayerProfileOnCoachsTeam from "./screens/PlayerProfileOnCoachsTeam";
import PlayerProfileSomeoneElse from "./screens/PlayerProfileSomeoneElse";
import PlayerDashboard from "./screens/PlayerDashboard";
import PlayerDashboard1 from "./screens/PlayerDashboard1";
import Search from "./screens/Search";
import EditProfileCreateNewPass from "./screens/EditProfileCreateNewPass";
import EditProfileVerification from "./screens/EditProfileVerification";
import CalendarPlayer from "./screens/CalendarPlayer";
import AssignVideoChallenge from "./screens/AssignVideoChallenge"
import GameDetailsScreenOverview from "./screens/GameDetailsScreenOverview";
import GameDetailsScreenOverview1 from "./screens/GameDetailsScreenOverview1";
import GameDetailsScreenOverview2 from "./screens/GameDetailsScreenOverview2";
import Search1 from "./screens/Search1";
import Frame11 from "./screens/Frame1";
import Frame2 from "./screens/Frame";
import Logout from "./screens/Logout";
import GameDetailsScreenLineup from './screens/GameDetailsScreenLineup'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'expo-dev-client'

const App = () => {

  const Tab = createBottomTabNavigator()
  const MyTabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={PlayerContent} />
      <Tab.Screen name="Profile" component={PlayerContent1} />
    </Tab.Navigator>
  );

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "RobotoSerif-SemiBold": require("./assets/fonts/RobotoSerif-SemiBold.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MyTeam"
                component={MyTeam}
                options={{ headerShown: false }}
              />
               <Stack.Screen
                name="GameDetailsScreenLineup"
                component={GameDetailsScreenLineup}
                options={{ headerShown: false }}
              />
               <Stack.Screen
                name="EditProfileCreateNewPass"
                component={EditProfileCreateNewPass}
                options={{ headerShown: false }}
              />
                <Stack.Screen
                name="AssignVideoChallenge"
                component={AssignVideoChallenge}
                options={{ headerShown: false }}
              />
               <Stack.Screen
                name="EditProfileVerification"
                component={EditProfileVerification}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MyTeam1"
                component={MyTeam1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame"
                component={Frame}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Logout"
                component={Logout}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalendarPlayer"
                component={CalendarPlayer}
                options={{ headerShown: false }}
              />
               <Stack.Screen
                name="GameDetailsScreenOverview"
                component={GameDetailsScreenOverview}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GameDetailsScreenOverview1"
                component={GameDetailsScreenOverview1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GameDetailsScreenOverview2"
                component={GameDetailsScreenOverview2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AccountSetting"
                component={AccountSetting}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhotoIDNotAdded"
                component={PhotoIDNotAdded}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhotoIDNotAdded1"
                component={PhotoIDNotAdded1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhotoIDNotAdded2"
                component={PhotoIDNotAdded2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhotoIDNotAdded3"
                component={PhotoIDNotAdded3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UploadPhotoAdded"
                component={UploadPhotoAdded}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UploadPhotoAdded1"
                component={UploadPhotoAdded1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UploadPhotoNotAdded"
                component={UploadPhotoNotAdded}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UploadPhotoNotAdded1"
                component={UploadPhotoNotAdded1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TellUsMoreFilled"
                component={TellUsMoreFilled}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SelectPlayStyle"
                component={SelectPlayStyle}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TellUsMoreFilledGirl"
                component={TellUsMoreFilledGirl}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TellUsMoreFilledBoy"
                component={TellUsMoreFilledBoy}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TellUsMoreFilledGirl1"
                component={TellUsMoreFilledGirl1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TellUsMoreFilledBoy1"
                component={TellUsMoreFilledBoy1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TellUsMoreFilledGirl2"
                component={TellUsMoreFilledGirl2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TellUsMoreFilledBoy2"
                component={TellUsMoreFilledBoy2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame1"
                component={Frame1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NonTeamPlayerProfileCoach"
                component={NonTeamPlayerProfileCoach}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlayerContent"
                component={PlayerContent}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlayerContent1"
                component={PlayerContent1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlayerRoadToPro"
                component={PlayerRoadToPro}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlayerStat"
                component={PlayerStat}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlayerDashboardSomeoneElse"
                component={PlayerDashboardSomeoneElse}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlayerProfileOnCoachsTeam"
                component={PlayerProfileOnCoachsTeam}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlayerProfileSomeoneElse"
                component={PlayerProfileSomeoneElse}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlayerDashboard"
                component={PlayerDashboard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PlayerDashboard1"
                component={PlayerDashboard1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Search1"
                component={Search1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GetStarted1"
                component={GetStarted1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame11"
                component={Frame11}
                options={{ headerShown: false }}
              />
             <Stack.Screen
                name="EnterProfileCreateNewPass"
                component={EnterProfileCreateNewPass}
                options={{ headerShown: false }}
              />
               <Stack.Screen
                name="EditProfileEnterOldPassw"
                component={EditProfileEnterOldPassw}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame2"
                component={Frame2}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </>
        ) : <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />}
      </NavigationContainer>
    </>
  );
};
export default App;
