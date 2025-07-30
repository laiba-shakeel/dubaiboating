import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import HeroContainer from '../../Components/HeroContainer';
import {
  boatCategories,
  buySellBoats,
  fishingTours,
  boatRentals,
  waterSports,
  sellingProducts,
} from '../../Utils/data';
import ServiceCard from '../../Components/ServicesCard';
import Card from '../../Components/Card';
import styles from './style';
import SellingProductCard from '../../Components/SellingProductCard';

const HomeScreen = () => {
  const renderCards = (data, title) => (
    <View style={{ width: '100%', paddingHorizontal: 10 }}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.cardGrid}>
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            location={item.location}
            price={item.price}
            image={item.image}
          />
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <View style={{ backgroundColor: 'black', height: 500 }}>
          <HeroContainer />
        </View>
        <Text style={styles.heading}>Popular Boats Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardScroll}
        >
          {boatCategories.map((category, index) => (
            <ServiceCard
              key={index}
              title={category.title}
              items={category.items}
              image={category.image}
              onPress={() => alert(`Navigating to ${category.title} screen`)}
            />
          ))}
        </ScrollView>
        {renderCards(buySellBoats, 'Buy & Sell Boats')}
        {renderCards(fishingTours, 'Fishing Tours')}
        {renderCards(boatRentals, 'Boats Rentals')}
        {renderCards(waterSports, 'Water Sports')}
        <View style={{ paddingHorizontal: 10 }}>
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
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
