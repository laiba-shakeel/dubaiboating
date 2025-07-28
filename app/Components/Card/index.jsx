import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Card = ({ title, location, price, image }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground source={image} style={styles.cardImage}>
        <View style={styles.overlay}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>{location}</Text>
          </View>
          <Text style={styles.price}>{price}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%', // Two cards per row with small gap
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },

  cardImage: {
    width: '100%',
    height: 300, // Adjusted to match your screenshot's card height
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-end',
    padding: 10,
  },
  cardTitle: {
    fontSize: 18, // Reduced for better fit
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  locationText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Card;
