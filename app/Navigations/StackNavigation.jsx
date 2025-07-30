// import React from 'react';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from '../Screens/Auth/SplashScreen';
// import HomeScreen from '../Screens/Home/HomeScreen';
// import Header from '../Components/Header';
// import SignupScreen from '../Screens/Auth/Signup';
// import LoginScreen from '../Screens/Auth/Login';

// const Stack = createStackNavigator();
// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen">
//         <Stack.Screen
//           name="SplashScreen"
//           component={SplashScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{
//             headerShown: true,
//             header: () => (
//               <Header
//                 showLogin={true}
//                 showRegister={true}
//                 backgroundColor="#FFFFFF"
//               />
//             ),
//           }}
//         />

//         <Stack.Screen
//           name="LoginScreen"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="SignupScreen"
//           component={SignupScreen}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;



import React from 'react';
import SplashScreen from '../Screens/Auth/SplashScreen';
import HomeScreen from '../Screens/Home/HomeScreen';
import SignupScreen from '../Screens/Auth/Signup';
import LoginScreen from '../Screens/Auth/Login';
import Header from '../Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
          header: () => (
            <Header
              showLogin
              showRegister
              backgroundColor="#fff"
            />
          ),
        }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
