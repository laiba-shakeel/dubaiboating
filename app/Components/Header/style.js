import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10, // Space between buttons
  },
  logo: {
    width: "100%", // Adjust width as needed
    height: "100%", // Adjust height as needed
    transform: [{ rotate: '90deg' }], // Rotate 90 degrees clockwise
  },
});

export default styles;