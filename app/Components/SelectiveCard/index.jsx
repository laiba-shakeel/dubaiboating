import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SelectiveCard = ({
  image,
  title,
  description,
  location,
  extraInfo,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <View style={styles.contentRow}>
          <View style={styles.contentCol}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <TouchableOpacity style={styles.selectButton} onPress={() => console.log('Select pressed')}>
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contentRow}>
          <View style={styles.contentCol}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <TouchableOpacity style={styles.selectButton} onPress={() => console.log('Select pressed')}>
            <Text style={styles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 10,
    overflow: 'hidden',
  },
  image: {
    width: 140,
    height: "100%",
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
    borderWidth: 1,
    width: '100%',
    borderColor: '#ddd', // Subtle border for clarity
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 0, // Removed border for cleaner look
  },
  contentCol: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '70%', // Set to 50% width
  },
  selectButton: {
    backgroundColor: '#000',
    borderRadius: 20, // Rounded button
    paddingVertical: 8,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectButtonText: {
    color: '#fff', // White text
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
    textDecorationLine:"underline"
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  extraInfo: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
});

export default SelectiveCard;