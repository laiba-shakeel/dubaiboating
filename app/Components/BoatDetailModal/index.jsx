import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

const BoatDetailModal = ({ visible, onClose, boat }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  if (!boat) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>

          {/* Title and Price */}
          <Text style={styles.boatHead}>BOAT DETAIL:</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={styles.boatTitle}>{boat.title}</Text>
            <Text style={styles.boatPrice}>{boat.price}</Text>
          </View>

          {/* Carousel */}
          <FlatList
            data={boat.images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image
                source={item}
                style={styles.boatImage}
                resizeMode="cover"
              />
            )}
          />

          {/* Scrollable Content */}
          <ScrollView style={styles.scrollView}>
            {/* Item Overview */}
            <View style={styles.itemOverviewContainer}>
              <Text style={styles.sectionTitle}>Item Overview</Text>
              <View style={styles.overviewRow}>
                <View style={styles.overviewItem}>
                  <Text style={styles.overviewLabel}>LENGTH</Text>
                  <Text style={styles.overviewValue}>{boat.length || '70-100 ft.'}</Text>
                </View>
                <View style={styles.overviewItem}>
                  <Text style={styles.overviewLabel}>YEAR</Text>
                  <Text style={styles.overviewValue}>{boat.year || '2018'}</Text>
                </View>
                <View style={styles.overviewItem}>
                  <Text style={styles.overviewLabel}>BRAND</Text>
                  <Text style={styles.overviewValue}>{boat.brand || 'yamaha'}</Text>
                </View>
                <View style={styles.overviewItem}>
                  <Text style={styles.overviewLabel}>MODEL</Text>
                  <Text style={styles.overviewValue}>{boat.model || '2018'}</Text>
                </View>
                <View style={styles.overviewItem}>
                  <Text style={styles.overviewLabel}>CONDITION</Text>
                  <Text style={styles.overviewValue}>{boat.condition || 'Used'}</Text>
                </View>
              </View>
            </View>

            {/* Description with Dropdown */}
            <View style={styles.descriptionContainer}>
              <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => setIsDescriptionOpen(!isDescriptionOpen)}
              >
                <Text style={styles.sectionTitle}>Description</Text>
                <Text style={styles.dropdownIndicator}>
                  {isDescriptionOpen ? '▲' : '▼'}
                </Text>
              </TouchableOpacity>
              {isDescriptionOpen && (
                <View style={styles.descriptionContent}>
                  <Text style={styles.descriptionText}>TECHNICAL SPECIFICATIONS</Text>
                  <Text style={styles.specText}>Loa (m) {boat.loa || '21.14'}</Text>
                  <Text style={styles.specText}>Lh(m) {boat.lh || '20.88'}</Text>
                  <Text style={styles.specText}>Max beam (m) {boat.maxBeam || '5.00'}</Text>
                  <Text style={styles.specText}>Engines {boat.engines || '2 x MTU V10 2000 M96'}</Text>
                  <Text style={styles.specText}>Engine HP {boat.engineHP || '1.623'}</Text>
                  <Text style={styles.specText}>Transmission {boat.transmission || 'Surface Drives'}</Text>
                  <Text style={styles.specText}>Top System {boat.topSystem || '85P - Surface Drives'}</Text>
                  <Text style={styles.specText}>Max speed (kn) {boat.maxSpeed || '16'}</Text>
                  <Text style={styles.specText}>Cruise speed (kn) {boat.cruiseSpeed || '40'}</Text>
                  <Text style={styles.specText}>Range nm at cruising speed {boat.range || '300'}</Text>
                  <Text style={styles.specText}>Material {boat.material || 'GRP'}</Text>
                  <Text style={styles.specText}>Laden displacement kg {boat.ladenDisplacement || '45.17'}</Text>
                  <Text style={styles.specText}>Unladen displacement kg {boat.unladenDisplacement || '39.45'}</Text>
                  <Text style={styles.specText}>Fuel (l) {boat.fuel || '1,500'}</Text>
                  <Text style={styles.specText}>Water (l) {boat.water || '900'}</Text>
                  <Text style={styles.specText}>Gyro stabilizers {boat.gyroStabilizers || 'Seakeeper NG9'}</Text>
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxHeight: '90%', // Ensure modal doesn't exceed screen height
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  boatImage: {
    width: width * 0.6,
    height: 200,
    borderRadius: 8,
    marginRight: 10,
  },
  boatTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    marginVertical: 10,
  },
  boatHead: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  boatPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003478',
  },
  scrollView: {
    marginTop: 15,
  },
  itemOverviewContainer: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  overviewRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  overviewItem: {
    width: '30%',
    marginBottom: 10,
    padding: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    alignItems: 'center',
  },
  overviewLabel: {
    fontSize: 12,
    color: '#666',
  },
  overviewValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  descriptionContainer: {
    marginBottom: 15,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  dropdownIndicator: {
    fontSize: 16,
    color: '#000',
  },
  descriptionContent: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 5,
  },
  specText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
});

export default BoatDetailModal;