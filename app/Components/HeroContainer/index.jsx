import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg';
import styles from './style';
import Video from 'react-native-video';

const HeroContainer = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../../Assets/video/video-file.mp4')}
        style={styles.video}
        resizeMode="cover"
        repeat={true}
        muted={true}
      />
      <View style={styles.overlay} /> 
      <View style={styles.content}>
        <Text style={styles.title}>The best place to buy & sell boats and boating equipments.</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for boats and listings"
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeroContainer;