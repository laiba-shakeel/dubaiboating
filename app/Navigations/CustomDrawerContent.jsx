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
  const currentRoute = navigation.getState()?.routes[navigation.getState().index]?.name || '';
  const { filterOptions, setCity, setCategory, setPrice, setSellerType, setWarranty, setAdsPosted } = useFilter();
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
        {(currentRoute === 'BuySell' && isFilterActive) ? (
          <>
            {filterOptions.map((filter, index) => (
              <View key={index} style={styles.filterItem}>
                <Text style={styles.filterLabel}>{filter.label}</Text>
                {filter.options.map((option, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={[
                      styles.button,
                      selectedOptions[filter.label] === option && styles.selectedButton,
                    ]}
                    onPress={() => handleOptionSelect(filter.label, option)}
                  >
                    <Icon
                      name={
                        filter.label === 'City' ? 'location' :
                        filter.label === 'Category' ? 'boat' :
                        filter.label === 'Price (AED)' ? 'cash' :
                        filter.label === 'Seller Type' ? 'person' :
                        filter.label === 'Warranty' ? 'shield' :
                        'clock' // Ads Posted
                      }
                      size={20}
                      color={selectedOptions[filter.label] === option ? '#FFF' : '#000'}
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
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  menuContainer: {
    paddingTop: 60,
  },
  closeIconWrapper: {
    paddingTop: 40,
    alignItems: 'flex-end',
  },
  menuItem: {
    marginBottom: 25,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003478',
  },
  bottomButtons: {
    paddingBottom: 30,
  },
  bottomButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#003478',
    marginVertical: 8,
  }, // Fixed: Added missing closing brace
  filterItem: {
    marginBottom: 15,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003478',
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
  applyButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  applyText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;