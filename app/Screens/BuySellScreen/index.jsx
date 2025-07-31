import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../../Components/Header';
import { sellingProducts } from '../../Utils/data';
import SellingProductCard from '../../Components/SellingProductCard';
import styles from './style';
const BuySellScreen = () => {
  return (
    <View style={styles.container}>
      <Header showLogin={true} showRegister={true} backgroundColor="#fff" />
      <ScrollView style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
        <Text style={styles.heading}>Featured Boats for Sale</Text>
        {sellingProducts.map(item => (
          <SellingProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            condition={item.condition}
            price={item.price}
            year={item.year}
            length={item.length}
            location={item.location}
            onPress={() => console.log(`Viewing ${item.title}`)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default BuySellScreen;
