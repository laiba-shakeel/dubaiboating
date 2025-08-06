import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const ServiceDetailContainer = ({
  title,
  location,
  rating,
  reviews,
  imageUrl,
}) => {
  return (
    <ImageBackground
      source={{
        uri:
          imageUrl ||
          'https://t4.ftcdn.net/jpg/03/88/98/93/360_F_388989392_ezhYm1UDnb7QCAlAV5AKanKSzu7fQSSv.jpg',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.fullOverlay}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Dubai Creative
            <View style={{ paddingLeft: 5 }}>
              <Icon name="star" size={14} color="#FFD700" />
            </View>
          </Text>
          <Text style={styles.location}>Dubai Marina, Dubai (UAE)</Text>
          <Text style={styles.price}>Ph: 000-2154785-52</Text>
          {/* <View style={styles.ratingContainer}>
            <Icon name='star' size={18} color="#FFD700" />
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.reviews}> ({reviews} reviews)</Text>
          </View> */}
        </View>
      </View>
    </ImageBackground>
  );
};

export default ServiceDetailContainer;
