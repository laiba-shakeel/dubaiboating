import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFilter } from '../Contexts/FilterContext';

const CustomDrawerContent = props => {
  const { navigation } = props;
  const currentRoute =
    navigation.getState()?.routes[navigation.getState().index]?.name || '';
  const {
    filterOptions,
    setCity,
    setCategory,
    setPrice,
    setSellerType,
    setWarranty,
    setAdsPosted,
  } = useFilter();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isFilterActive, setIsFilterActive] = useState(false); // New state to toggle filter view

  const menuItems = [
    { name: 'Home', route: 'Home' },
    { name: 'Buy & Sell Boats', route: 'BuySell' },
    { name: 'Marinas', route: 'Marinas' },
    { name: 'Fishing', route: 'Fishing' },
    { name: 'Water Sports', route: 'WaterSports' },
    { name: 'Scuba', route: 'Scuba' },
  ];

  const handleClose = () => {
    if (currentRoute === 'BuySell') {
      setIsFilterActive(false); // Toggle off filter view on BuySell
    } else {
      navigation.closeDrawer();
    }
  };

  const handleOptionSelect = (label, option) => {
    const setter = filterOptions.find(f => f.label === label).setter;
    setter(option);
    setSelectedOptions(prev => ({ ...prev, [label]: option }));
  };

  const applyFilters = () => {
    setIsFilterActive(false); // Turn off filter view after applying
    navigation.closeDrawer();
  };

  const openFilters = () => {
    if (currentRoute !== 'BuySell') {
      navigation.navigate('BuySell'); // Navigate to BuySell first
    }
    setIsFilterActive(true); // Turn on filter view
  };

  console.log('Current Route:', currentRoute); // Debug log

  return (
    <View style={styles.container}>
      <View style={styles.closeIconWrapper}>
        <TouchableOpacity onPress={handleClose}>
          <Icon name="close" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.menuContainer}>
        {currentRoute === 'BuySell' && isFilterActive ? (
          <>
            {filterOptions.map((filter, index) => (
              <View key={index} style={styles.filterItem}>
                <Text style={styles.filterLabel}>{filter.label}</Text>
                {filter.options.map((option, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={[
                      styles.button,
                      selectedOptions[filter.label] === option &&
                        styles.selectedButton,
                    ]}
                    onPress={() => handleOptionSelect(filter.label, option)}
                  >
                    <Icon
                      name={
                        filter.label === 'City'
                          ? 'location'
                          : filter.label === 'Category'
                          ? 'boat'
                          : filter.label === 'Price (AED)'
                          ? 'cash'
                          : filter.label === 'Seller Type'
                          ? 'person'
                          : filter.label === 'Warranty'
                          ? 'shield'
                          : 'clock' // Ads Posted
                      }
                      size={20}
                      color={
                        selectedOptions[filter.label] === option
                          ? '#FFF'
                          : '#000'
                      }
                    />
                    <Text style={styles.buttonText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
            <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
              <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  if (item.route === 'BuySell') {
                    openFilters(); // Open filters when BuySell is selected
                  } else {
                    navigation.navigate(item.route);
                  }
                }}
                style={styles.menuItem}
              >
                <Text style={styles.menuText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}
      </ScrollView>

      <View style={styles.bottomButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.bottomButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.bottomButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15, // Slightly increased for better padding
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5', // Light background for contrast
  },
  menuContainer: {
    paddingTop: 50, // Adjusted for better alignment
  },
  closeIconWrapper: {
    paddingTop: 30, // Reduced slightly for balance
    alignItems: 'flex-end',
    paddingRight: 10, // Added padding for better positioning
  },
  menuItem: {
    marginBottom: 20, // Increased for better spacing between items
    width: '65%', // Slightly increased for better readability
  },
  menuText: {
    fontSize: 17, // Slightly larger for better readability
    fontWeight: '600',
    color: '#003478',
    borderBottomWidth: 1.5, // Thicker border for emphasis
    borderColor: '#003478',
    paddingVertical: 8, // Added padding for better touch area
  },
  bottomButtons: {
    paddingBottom: 25, // Adjusted for consistency
    paddingHorizontal: 10, // Added horizontal padding
  },
  bottomButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#003478',
    marginVertical: 10, // Increased for better spacing
    paddingVertical: 8, // Added padding for touch area
    borderBottomWidth: 1, // Added subtle underline
    borderColor: '#003478',
  },
  filterItem: {
    marginBottom: 18, // Adjusted for consistency
  },
  filterLabel: {
    fontSize: 17, // Increased for better visibility
    fontWeight: '600',
    color: '#003478',
    marginBottom: 8, // Increased for better spacing
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12, // Increased padding for better touch area
    marginVertical: 6, // Adjusted for spacing
    backgroundColor: '#E8ECEF', // Softer gray for better look
    borderRadius: 8, // Increased radius for rounded corners
    borderWidth: 1, // Added subtle border
    borderColor: '#D3D8DE', // Light border color
  },
  selectedButton: {
    backgroundColor: '#007AFF',
    borderColor: '#005BB5', // Darker border for selected state
  },
  buttonText: {
    marginLeft: 12, // Increased for better icon-text spacing
    fontSize: 15, // Slightly larger text
    color: '#000',
  },
  applyButton: {
    padding: 12, // Increased padding
    backgroundColor: '#007AFF',
    borderRadius: 8, // Increased radius
    marginTop: 25, // Adjusted for spacing
    alignItems: 'center',
    elevation: 2, // Added shadow for depth (Android)
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  applyText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
