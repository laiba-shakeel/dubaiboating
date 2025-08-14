import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, AuthContext } from './app/Contexts/AuthContext';
import AppNavigation from './app/Navigations/AppNavigation'; // Drawer navigation

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { loading } = React.useContext(AuthContext);

  if (loading) return null; // Loader ya splash screen dikhana ho to yahan lagao

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainApp" component={AppNavigation} />
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
