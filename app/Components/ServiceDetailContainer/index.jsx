import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './style';

const ServiceDetailContainer = ({
  imageUrl = require('../../Assets/b2.jpeg'),
  username = 'Unknown User',
  location = 'Dubai UAE',
  email = 'No Email',
}) => {
  return (
    <ImageBackground
      source={{
        uri:
          imageUrl ||
          'https://editorial.pxcrush.net/boatsales/general/editorial/quintrex-481-hornet_8053.jpg?pxc_width=900&pxc_height=600&pxc_method=crop&pxc_format=auto',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.fullOverlay}>
        <View style={styles.content}>
          <Text style={styles.title}>
            {username}
            <View style={{ paddingLeft: 5 }}></View>
          </Text>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.price}>{email}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ServiceDetailContainer;