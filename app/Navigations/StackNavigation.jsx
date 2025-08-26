import React from 'react';
import SplashScreen from '../Screens/Auth/SplashScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import SignupScreen from '../Screens/Auth/Signup';
import LoginScreen from '../Screens/Auth/Login';
import Header from '../Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuySellScreen from '../Screens/BuySellScreen';
import MarinasScreen from '../Screens/MarinasScreen';
import FishingScreen from '../Screens/FishingScreen';
import WaterSportsScreen from '../Screens/WaterSportsScreen';
import ScubaScreen from '../Screens/ScubaScreen';
import RentBoatScreen from '../Screens/RentBoatScreen';
import RentalBoatsScreen from '../Screens/RentalBoats';
import ProfileScreen from '../Screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          // header: () => (
          //   <Header
          //     showLogin
          //     showRegister
          //     backgroundColor="#fff"
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="BuySell"
        component={BuySellScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="RentBoat"
        component={RentBoatScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="RentalBoats"
        component={RentalBoatsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Marinas"
        component={MarinasScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fishing"
        component={FishingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WaterSports"
        component={WaterSportsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Scuba"
        component={ScubaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
