import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const SearchFilter = ({ search, setSearch, activeFilter, setActiveFilter }) => {
  const [showFilters, setShowFilters] = useState(false);

  const filterOptions = ['Length', 'Type', 'Location', 'Condition'];

  return (
    <View>
      {/* search row */}
      <View style={styles.container}>
        <Text style={styles.icon}>🔍</Text>

        <TextInput
          style={styles.input}
          placeholder={`Search by ${activeFilter || 'Boat'}`}
          value={search}
          onChangeText={setSearch}
        />

        <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
          <Text style={styles.icon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* filters pills */}
      {showFilters && (
        <View style={styles.filterContainer}>
          {filterOptions.map((option, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.pill,
                activeFilter === option && styles.pillSelected,
              ]}
              onPress={() =>
                setActiveFilter(activeFilter === option ? null : option)
              }
            >
              <Text
                style={[
                  styles.pillText,
                  activeFilter === option && styles.pillTextSelected,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#817a7a9c',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  icon: {
    fontSize: 22,
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  pill: {
    borderWidth: 1,
    borderColor: '#817a7a9c',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 5,
  },
  pillSelected: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  pillText: {
    fontSize: 14,
    color: '#333',
  },
  pillTextSelected: {
    color: '#fff',
  },
});

export default SearchFilter;
