import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './app/Navigations/StackNavigation';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
    </GestureHandlerRootView>
  );
};

export default App;