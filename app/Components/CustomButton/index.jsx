import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({title, onPress}) => {
  const isRegister = title === 'Register';
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isRegister ? styles.registerButton : styles.loginButton,
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: '#003478',
    color:"000"
  },
  loginButton: {
    backgroundColor: '#000000',
    color: 'white', // Light gray as a placeholder; adjust to match image
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default CustomButton;
