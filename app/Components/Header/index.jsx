import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './style';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      {/* Logo (Drawer open button) */}
      <TouchableOpacity onPress={openDrawer} style={{ width: 100, height: 70 }}>
        <Image
          source={require('../../Assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Right side buttons/icons */}
      <View style={styles.buttonContainer}>
        {rightComponent}

        {/* Profile Icon */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={{ paddingHorizontal: 10 }}
        >
          <Ionicons name="person-circle-outline" size={34} color="#003478" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
