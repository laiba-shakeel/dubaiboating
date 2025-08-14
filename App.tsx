import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, AuthContext } from './app/Contexts/AuthContext';
import LoginScreen from './app/Screens/Auth/Login';
import SignupScreen from './app/Screens/Auth/Signup';
import AppNavigation from './app/Navigations/AppNavigation'; // Drawer navigation

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user, loading } = React.useContext(AuthContext);

  if (loading) return null; // Loader ya splash screen dikhana ho to yahan lagao

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        // User logged in → Drawer wale navigation pe bhejo
        <Stack.Screen name="MainApp" component={AppNavigation} />
      ) : (
        // User logged out → Sirf login/signup screens dikhana
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
