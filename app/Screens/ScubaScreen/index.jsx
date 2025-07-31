import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../../Components/Header';
import SelectiveCard from '../../Components/SelectiveCard';
import styles from './style';
import { scubaData } from '../../Utils/data';

const ScubaScreen = () => {
  return (
    <View style={styles.container}>
      <Header showLogin={true} showRegister={true} backgroundColor="#fff" />
      <ScrollView style={{ paddingHorizontal: 10, backgroundColor: 'white' }}>
        <Text style={styles.heading}>Scuba Course</Text>
        {scubaData.map(item => (
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

export default ScubaScreen;
