import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const BookingServiceCard = ({ title, price, image, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={onPress}
    >
      <ImageBackground
        source={
          image
            ? typeof image === 'string' && image.trim() !== ''
              ? { uri: image }
              : image
            : require('../../Assets/b1.jpeg') // Ensure this path is correct
        }
        style={styles.cardImage}
        resizeMode="cover"
        onError={(error) => console.log('Image load error for', title, ':', error.nativeEvent)}
      >
        <View
          style={[
            styles.overlay,
            {
              backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)',
            },
          ]}
        >
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  selectedCard: {
    borderWidth: 5,
    borderColor: '#003478',
  },
  cardImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: 'transparent', // Remove red border for production
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  price: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BookingServiceCard;