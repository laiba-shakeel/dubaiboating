import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../../Components/Header';
import { marinaData } from '../../Utils/data';
import SelectiveCard from '../../Components/SelectiveCard';
import styles from './style';

const MarinasScreen = () => {
  return (
    <View style={styles.container}>
      <Header showLogin={true} showRegister={true} backgroundColor="#fff" />
      <ScrollView style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
        <Text style={styles.heading}>Marinas</Text>
        {marinaData.map(item => (
          <SelectiveCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            location={item.location}
            extraInfo={item.extraInfo}
            onPress={() => console.log(`Viewing ${item.title}`)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default MarinasScreen;