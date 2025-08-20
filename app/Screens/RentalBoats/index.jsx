import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Header from '../../Components/Header';
import styles from './style';
import RentalBoatCard from '../../Components/RentalBoatCard';
import { getRentalBoats } from '../../API/RentalBoats';

const RentalBoatsScreen = () => {
  const [rentalBoats, setRentalBoats] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return (
    <View style={styles.container}>
      <Header showLogin={true} showRegister={true} backgroundColor="#fff" />
      <ScrollView style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
        <Text style={styles.heading}>Rental Boats</Text>

        {loading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={{ marginTop: 20 }}
          />
        ) : (
          <View style={styles.cardGrid}>
            {rentalBoats.map(boat => (
              <RentalBoatCard
                key={boat.id}
                image={getImageUrl(boat)}
                title={boat.title || `Boat #${boat.id}`}
                price={`AED ${boat.price}`}
                onPress={() => navigation.navigate('RentBoat', { boat })}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default RentalBoatsScreen;
