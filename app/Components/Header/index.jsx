import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './style';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';

const Header = ({
  showLogin = true,
  showRegister = true,
  backgroundColor = '#FFFFFF',
  rightComponent,
}) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer(); 
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity onPress={openDrawer} style={{ width: 100, height: 70 }}>
        <Image
          source={require('../../Assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>
{/* 
      <View style={styles.buttonContainer}>
        {rightComponent}
        {showLogin && (
          <CustomButton
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
        )}
        {showRegister && (
          <CustomButton
            title="Register"
            onPress={() => navigation.navigate('Signup')}
          />
        )}
      </View> */}
    </View>
  );
};

export default Header;
