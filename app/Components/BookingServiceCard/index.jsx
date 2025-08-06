import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BookingServiceCard = ({ title, onPress, isSelected, desc, rating }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, isSelected && styles.selectedCard]}>
      <View style={styles.imageContainer}>
        <Icon name="person-outline" size={18} color="#000" />
      </View>

      <View style={styles.col}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
        {/* {rating && (
          <View style={styles.ratingContainer}>
            <Icon name="star" size={14} color="#FFD700" />
            <Text style={styles.rating}>{rating}</Text>
          </View>
        )} */}
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 150, // Fixed width for horizontal layout
    marginVertical: 5,
  },
  selectedCard: {
    backgroundColor: '#e6f0fa',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  desc: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  imageContainer: {
    borderWidth: 1, // Circular border
    borderColor: '#ddd',
    borderRadius: 35, // Makes it circular
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  rating: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default BookingServiceCard;