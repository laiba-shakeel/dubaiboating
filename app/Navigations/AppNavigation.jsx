import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import HomeScreen from '../Screens/Home/HomeScreen';
import BuySellScreen from '../Screens/BuySellScreen';
import MarinasScreen from '../Screens/MarinasScreen';
import FishingScreen from '../Screens/FishingScreen';
import WaterSportsScreen from '../Screens/WaterSportsScreen';
import ScubaScreen from '../Screens/ScubaScreen';
import LoginScreen from '../Screens/Auth/Login';
import SignupScreen from '../Screens/Auth/Signup';
import StackNavigation from './StackNavigation';
import { FilterProvider } from '../Contexts/FilterContext';
import { AuthContext } from '../Contexts/AuthContext';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <FilterProvider>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: { width: '60%' },
          headerShown: false,
        }}
      >
        <Drawer.Screen name="MainStack" component={StackNavigation} />
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="BuySell" component={BuySellScreen} />
        <Drawer.Screen name="Marinas" component={MarinasScreen} />
        <Drawer.Screen name="Fishing" component={FishingScreen} />
        <Drawer.Screen name="WaterSports" component={WaterSportsScreen} />
        <Drawer.Screen name="Scuba" component={ScubaScreen} />
        {!user && (
          <>
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Drawer.Navigator>
    </FilterProvider>
  );
};

export default AppNavigation;
