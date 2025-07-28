import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/Auth/SplashScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import Header from '../Components/Header'; // Adjust path
import SignupScreen from '../Screens/Auth/Signup';
import LoginScreen from '../Screens/Auth/Login';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
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
            headerShown: true,
            header: () => (
              <Header
                showLogin={true}
                showRegister={true}
                backgroundColor="#FFFFFF" // White background
                onTitlePress={() => alert('Logo pressed!')}
              />
            ),
          }}
        />
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
    </NavigationContainer>
  );
};

export default Navigation;