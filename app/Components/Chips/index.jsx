import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Chips = ({label, onSelect, isSelected}) => {
  const handlePress = () => {
    onSelect(!isSelected); // Toggle selection state
  };

  return (
    <TouchableOpacity
      style={[styles.chip, isSelected && styles.selectedChip]}
      onPress={handlePress}>
      <Text style={[styles.chipText, isSelected && styles.selectedChipText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#eeeeee91',

    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 5,
    marginVertical: 4,
    minHeight: 36, // ✅ Force visibility
    justifyContent: 'center', // ✅ Ensure text centers
  },

  selectedChip: {
    backgroundColor: '#FF4F6F', // Darker pink when selected
    borderWidth: 1,
    borderColor: '#fff',
  },
  chipText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedChipText: {
    fontWeight: '600',
  },
});

export default Chips;
