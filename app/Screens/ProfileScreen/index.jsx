import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { AuthContext } from '../../Contexts/AuthContext';

const ProfileScreen = () => {
  const { user } = useContext(AuthContext); // user info from context

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={30} color="black" />
        </View>
        <Text style={styles.welcomeText}>My Profile</Text>
        <Text style={styles.subText}>Your account details</Text>
      </View>

      {/* User Details */}
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 16, color: '#003478', marginBottom: 8 }}>
          Name
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>
          {user?.username || 'Guest User'}
        </Text>

        <Text style={{ fontSize: 16, color: '#003478', marginBottom: 8 }}>
          Email
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {user?.email || 'No email available'}
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
