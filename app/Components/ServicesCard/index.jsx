import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const ServiceCard = ({ title, items, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={image} style={styles.cardImage}>
        <View style={styles.overlay}>
          <Text style={styles.cardTitle}>{title}</Text>
          {items.map((item, index) => (
            <Text key={index} style={styles.cardItem}>
              - {item}
            </Text>
          ))}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300, // Reduced width for smaller cards
    marginHorizontal: 10, // Spacing between cards
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200, // Reduced height for smaller cards
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dimmed effect
    justifyContent: 'center',
    padding: 8, // Slightly reduced padding
  },
  cardTitle: {
    fontSize: 22, // Slightly smaller font size
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  cardItem: {
    fontSize: 16, // Smaller font size for items
    color: '#fff',
  },
});

export default ServiceCard;