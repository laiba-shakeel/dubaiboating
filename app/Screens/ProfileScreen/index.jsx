import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../Contexts/AuthContext';
import styles from './style';
import { updateUserProfile, updateUserPassword } from '../../API/UserProfile';

const ProfileScreen = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.user_id, 'user id is here coming from auth context');
  const navigation = useNavigation('');
  // Profile states
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');

  // Password states
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Eye toggle states
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Save button disable logic
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (
      username !== user?.username ||
      email !== user?.email ||
      phone !== user?.phone
    ) {
      setIsChanged(true);
    } else {
      setIsChanged(false);
    }
  }, [username, email, phone, user]);

  // ================= Update Profile =================
  const handleSaveProfile = async () => {
    try {
      const res = await updateUserProfile({
        userId: user?.user_id,
        username,
        email,
        phone,
      });

      console.log('Profile Update Response:', res);
      Alert.alert('Success', 'Profile updated successfully');
      setIsChanged(false);
    } catch (err) {
      console.error('Profile Update Error:', err);
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  // ================= Change Password =================
  // ================= Change Password =================
  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirm password do not match');
      return;
    }

    try {
      const res = await updateUserPassword({
        userId: user?.user_id,
        oldPassword: currentPassword,
        newPassword: newPassword,
      });

      console.log('Password Update Response:', res);
      Alert.alert('Success', 'Password updated successfully');

      // Reset fields after success
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error('Password Update Error:', err);
      Alert.alert('Error', 'Failed to update password');
    }
  };

  if (!user) {
    // ========== Guest UI ==========
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={30} color="black" />
          </View>
          <Text style={styles.welcomeText}>Welcome Guest!</Text>
          <Text style={styles.subText}>Please login or create an account</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#003478',
              padding: 12,
              borderRadius: 8,
              marginBottom: 15,
            }}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#f0f0f0',
              padding: 12,
              borderRadius: 8,
            }}
            onPress={() => navigation.navigate('Register')}
          >
            <Text
              style={{ color: '#003478', fontSize: 16, textAlign: 'center' }}
            >
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 20,
        flexGrow: 1,
        marginBottom: 35,
        backgroundColor: '#f2f6fc',
      }}
    >
      {/* Profile Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="person" size={35} color="#fff" />
          <Text style={styles.cardTitle}>My Profile</Text>
          <Text style={styles.cardSubtitle}>Your account details</Text>
        </View>

        <View style={styles.cardBody}>
          {/* Username */}
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          {/* Phone */}
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />

          {/* Save Button */}
          <TouchableOpacity
            style={[
              styles.saveButton,
              { backgroundColor: isChanged ? '#003478' : '#ccc' },
            ]}
            disabled={!isChanged}
            onPress={handleSaveProfile}
          >
            <Text style={styles.saveText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Change Password Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="lock-closed" size={30} color="#fff" />
          <Text style={styles.cardTitle}>Change Password</Text>
        </View>

        <View style={styles.cardBody}>
          {/* Old Password */}
          <Text style={styles.label}>Old Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={currentPassword}
              onChangeText={setCurrentPassword}
              secureTextEntry={!showCurrent}
              placeholder="Enter old password"
            />
            <TouchableOpacity onPress={() => setShowCurrent(!showCurrent)}>
              <Ionicons
                name={showCurrent ? 'eye' : 'eye-off'}
                size={22}
                color="#333"
              />
            </TouchableOpacity>
          </View>

          {/* New Password */}
          <Text style={styles.label}>New Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={!showNew}
              placeholder="Enter new password"
            />
            <TouchableOpacity onPress={() => setShowNew(!showNew)}>
              <Ionicons
                name={showNew ? 'eye' : 'eye-off'}
                size={22}
                color="#333"
              />
            </TouchableOpacity>
          </View>

          {/* Confirm New Password */}
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirm}
              placeholder="Confirm new password"
            />
            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
              <Ionicons
                name={showConfirm ? 'eye' : 'eye-off'}
                size={22}
                color="#333"
              />
            </TouchableOpacity>
          </View>

          {/* Change Password Button */}
          <TouchableOpacity
            style={[styles.saveButton, { backgroundColor: '#003478' }]}
            onPress={handleChangePassword}
          >
            <Text style={styles.saveText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
