import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './style';

const ServiceDetailContainer = ({
  imageUrl = require('../../Assets/b1.jpeg'),
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
            <View style={{ paddingLeft: 5 }}></View>
          </Text>
          <Text style={styles.location}>Dubai Marina, Dubai (UAE)</Text>
          <Text style={styles.price}>Ph: 000-2154785-52</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ServiceDetailContainer;
