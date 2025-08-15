import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BookingServiceCard = ({ title, price, image, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={onPress}
    >
      {/* Round Image */}
      <Image
        source={
          image
            ? typeof image === 'string' && image.trim() !== ''
              ? { uri: image }
              : image
            : require('../../Assets/b1.jpeg')
        }
        style={styles.cardImage}
        resizeMode="cover"
        onError={error =>
          console.log('Image load error for', title, ':', error.nativeEvent)
        }
      />
      {/* Title & Price Below */}
      <View style={styles.infoContainer}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 10,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#003478',
  },
  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes the image circular
    borderWidth: 3,
    borderColor: '#003478',
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  price: {
    color: '#555',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
});

export default BookingServiceCard;
