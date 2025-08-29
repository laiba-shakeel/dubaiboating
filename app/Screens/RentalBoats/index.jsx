import React, { useEffect, useState, useMemo } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';
import styles from './style';
import RentalBoatCard from '../../Components/RentalBoatCard';
import { getRentalBoats } from '../../API/RentalBoats';
import SearchFilter from '../../Components/SearchFilter';

const RentalBoatsScreen = () => {
  const [rentalBoats, setRentalBoats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const data = await getRentalBoats();
        console.log('API Rental Boats Response:', data);
        setRentalBoats(data || []);
      } catch (error) {
        console.error('Failed to fetch rental boats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBoats();
  }, []);

  const getImageUrl = boat => {
    if (boat.images && boat.images.length > 0) {
      return `https://api.dubaiboating.com/storage/app/public/${boat.images[0].image_url}`;
    }
    return 'https://via.placeholder.com/300x200.png?text=No+Image';
  };

  // filter logic
  const filteredBoats = useMemo(() => {
    if (!search) return rentalBoats;

    const lower = search.toLowerCase();

    if (!activeFilter) {
      return rentalBoats.filter(boat =>
        boat.title?.toLowerCase().includes(lower),
      );
    }
    return rentalBoats.filter(boat => {
      switch (activeFilter) {
        case 'Length':
          return boat.length?.toString().toLowerCase().includes(lower);
        case 'Type':
          return boat.type?.toLowerCase().includes(lower);
        case 'Location':
          return boat.location?.toLowerCase().includes(lower);
        case 'Condition':
          return boat.boat_condition?.toLowerCase().includes(lower);
        default:
          return true;
      }
    });
  }, [search, activeFilter, rentalBoats]);

  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header showLogin={true} showRegister={true} backgroundColor="#fff" />
      <Text style={styles.heading}>Rental Boats</Text>
      <View style={styles.horizontal}>
        <SearchFilter
          search={search}
          setSearch={setSearch}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </View>
      <FlatList
        data={filteredBoats}
        renderItem={({ item }) => (
          <RentalBoatCard
            image={getImageUrl(item)}
            title={item.title || `Boat #${item.id}`}
            price={`AED ${item.price}`}
            onPress={() => navigation.navigate('RentBoat', { boat: item })}
          />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ padding: 10 }}
        initialNumToRender={10}
        maxToRenderPerBatch={15}
        windowSize={10}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default RentalBoatsScreen;
