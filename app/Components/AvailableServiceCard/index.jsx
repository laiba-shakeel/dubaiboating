import React from 'react';
import styles from './style';
import {Text, TouchableOpacity, View} from 'react-native';
const AvailableServiceCard = ({
  title,
  price,
  duration,
  onPress,
  isSelected,
}) => {
  // Split the title at "Trim"
  let firstLine = title;
  let secondLine = '';

  if (title.includes('Trim')) {
    const parts = title.split('Trim');
    firstLine = `${parts[0].trim()} Trim`;
    secondLine = parts[1]?.trim();
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, isSelected && styles.selectedCard]}>
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{firstLine}</Text>
          {secondLine ? <Text style={styles.title}>{secondLine}</Text> : null}
        </View>
        <Text style={styles.price}>AED {price}</Text>
      </View>
      <Text style={styles.duration}>⏰ {duration} min</Text>
    </TouchableOpacity>
  );
};

export default AvailableServiceCard;
