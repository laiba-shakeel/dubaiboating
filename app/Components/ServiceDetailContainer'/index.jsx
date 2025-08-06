import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const ServiceDetailContainer = ({ title, location, rating, reviews, imageUrl }) => {
  return (
    <ImageBackground source={{ uri: imageUrl || "https://thumbs.dreamstime.com/b/motor-boat-impressive-navigation-37924770.jpg"}} style={styles.backgroundImage}>
      <View style={styles.fullOverlay}>
        <View style={styles.content}>
          <Text style={styles.title}>PERSHING 50 (2004)</Text>
          <Text style={styles.location}>Dubai Marina, Dubai (UAE)</Text>
          <Text style={styles.price}>AED 995,000</Text>
          <View style={styles.ratingContainer}>
            <Icon name='star' size={18} color="#FFD700" />
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.reviews}> ({reviews} reviews)</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ServiceDetailContainer;
