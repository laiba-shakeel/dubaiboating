import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './style';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { RegisterUser } from '../../../API/Auth';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSignup = async () => {
    // Required field check
    if (!name || !email || !password) {
      Alert.alert('Error', 'Username, Email, and Password are required');
      return;
    }

    try {
      setLoading(true);
      const res = await RegisterUser({
        username: name,
        email,
        password,
      });

      console.log('Signup Success:', res);
      Alert.alert('Success', 'Account created successfully');
      navigation.navigate('HomeScreen');
    } catch (error) {
      let errorMessage = 'Something went wrong';

      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        // Object ke values ko join karo ek string me
        errorMessage = Object.values(errors)
          .map(errArr => errArr.join(', '))
          .join('\n');
      }

      Alert.alert('Signup Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={30} color="black" />
          </View>
          <Text style={styles.welcomeText}>Create Account</Text>
          <Text style={styles.subText}>Please sign up to your account</Text>
        </View>

        {/* Inputs */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View style={styles.checkboxContainer}>
            <CheckBox
              value={rememberMe}
              onValueChange={setRememberMe}
              tintColors={{ true: '#003478', false: '#000' }}
            />
            <Text style={styles.checkboxLabel}>
              I agree to terms and conditions
            </Text>
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleSignup}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.signInText}>Sign up</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.createAccountText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
