import React from 'react';
import SplashScreen from '../Screens/Auth/SplashScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import SignupScreen from '../Screens/Auth/Signup';
import LoginScreen from '../Screens/Auth/Login';
import Header from '../Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuySellScreen from '../Screens/BuySellScreen';
import MarinasScreen from '../Screens/MarinasScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen name="BuySell" component={BuySellScreen} />
      <Stack.Screen name="Marinas" component={MarinasScreen} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
