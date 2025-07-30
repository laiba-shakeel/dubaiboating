import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SellingProductCard = ({
  image,
  title,
  condition,
  price,
  year,
  length,
  location,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.imageCountOverlay}>
          <Ionicons name="images-outline" size={14} color="#fff" />
          <Text style={styles.imageCountText}>1/7</Text>
        </View>
        <View style={styles.topRightIcons}>
          <Ionicons name="heart-outline" size={25} color="#fff" style={styles.iconSpacing} />
          <Ionicons name="share-social-outline" size={25} color="#fff" />
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.condition}>{condition}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.metaText}>Year: {year} | Length: {length}</Text>
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={14} color="#888" />
          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    width: '100%',
  },
  imageContainer: {
    position: 'relative',
    height: 180,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageCountOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#0008',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCountText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
  topRightIcons: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    gap: 5,
  },
  iconSpacing: {
    marginRight: 5,
  },
  details: {
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  condition: {
    color: '#666',
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginVertical: 6,
  },
  metaText: {
    fontSize: 12,
    color: '#888',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    color: '#888',
    marginLeft: 4,
    fontSize: 13,
  },
});

export default SellingProductCard;
