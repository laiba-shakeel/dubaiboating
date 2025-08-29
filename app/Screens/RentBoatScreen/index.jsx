import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { useRentBoatScreen } from './helper';
import styles from './style';
import DateCalendar from '../../Components/DateCalender';
import TimePicker from '../../Components/TimePicker';
import BookingServiceCard from '../../Components/BookingServiceCard';
import ServiceDetailContainer from '../../Components/ServiceDetailContainer';
import ConfirmBookingModal from '../../Components/ConfirmBookingModal';
import { parse, isValid, isSameDay } from 'date-fns';
import BoatDetailModal from '../../Components/BoatDetailModal';

const RentBoatScreen = () => {
  const route = useRoute();
  const { boat } = route.params || {};
  const [userBoats, setUserBoats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null); // New state for user data
  const { companyData } = route.params || {};
  const scrollRef = useRef(null);

  // Use companyId = 1 if companyData is missing (can be removed if not needed)
  const company = companyData || {
    id: 1,
    name: 'Default Salon',
    location: '',
    imageUrl: '',
    rating: 4.5,
    reviews: 25,
  };

  const {
    selectedServices,
    selectedStylist,
    selectedDate,
    selectedTime,
    handleDateSelect,
    handleTimeSelect,
    handleBookNow,
    isAllSelected,
    isLoadingData,
    resetState,
    isModalVisible,
    closeModal,
    confirmBooking,
    bookingDetails,
    handleBottomBookNow,
    staffAppointments,
    selectedBoat,
    setSelectedBoat,
    isBoatModalVisible,
    setBoatModalVisible,
  } = useRentBoatScreen(company);

  useFocusEffect(
    React.useCallback(() => {
      resetState();
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, []),
  );

  useEffect(() => {
    if (boat) {
      console.log('Boat received:', boat);
      console.log('User ID:', boat.user_id);

      // Fetch all boats and filter by user_id (keeping this active)
      fetch('https://api.dubaiboating.com/public/api/boats/rental-boats')
        .then(res => res.json())
        .then(allBoats => {
          const filtered = allBoats.filter(b => b.user_id === boat.user_id);
          console.log('User specific boats:', filtered);
          setUserBoats(filtered);
        })
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [boat]);

  // Updated useEffect to fetch and store user data based on boat.user_id
  useEffect(() => {
    if (boat?.user_id) {
      fetch(`https://api.dubaiboating.com/public/api/users/${boat.user_id}`)
        .then(res => res.json())
        .then(userData => {
          setUserData(userData); // Store user data in state
          console.log('User data:', userData);
        })
        .catch(err => console.error('Error fetching user data:', err));
    }
  }, [boat?.user_id]);

  // Commenting out the second useEffect that might involve other API calls
  /*
  useEffect(() => {
    if (!selectedDate || !selectedStylist?.staff_id) {
      handleTimeSelect(null);
    }
  }, [selectedDate, selectedStylist, handleTimeSelect]);
  */

  const totalDuration = bookingDetails.totalDuration || 0;
  const totalPrice = bookingDetails.totalPrice || 0;
  const displayDuration = `${Math.floor(totalDuration / 60)} hr ${
    totalDuration % 60
  } min`;

  const selectedStylistStaffId = selectedStylist?.staff_id;

  const parsedSelectedDate = selectedDate
    ? parse(selectedDate, 'MM/dd/yyyy', new Date())
    : null;

 const handleBoatClick = (boat) => {
  setSelectedBoat(boat); // Use the raw boat data from API
  setBoatModalVisible(true);
};

  // Render the loading UI after all Hooks
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={[styles.container, { backgroundColor: '#FFF' }]}>
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator size="large" color="#003478" />
            <Text style={{ marginTop: 10 }}>Loading user boats...</Text>
          </View>
        ) : (
          <>
            <ConfirmBookingModal
              visible={isModalVisible}
              onClose={closeModal}
              onConfirm={() => {
                confirmBooking();
                if (selectedDate && selectedBoat) {
                  handleDateSelect(selectedDate);
                }
              }}
              bookingDetails={{
                services: bookingDetails.services,
                stylist: selectedStylist,
                date: selectedDate,
                time: selectedTime,
                totalPrice,
                totalDuration,
                boat: selectedBoat,
              }}
            />
            <BoatDetailModal
              visible={isBoatModalVisible}
              onClose={() => setBoatModalVisible(false)}
              boat={selectedBoat}
            />
            <ScrollView
              ref={scrollRef}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
            >
              {isLoadingData ? (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                  }}
                >
                  <ActivityIndicator size="large" color="#003478" />
                  <Text style={{ marginTop: 10, color: 'gray' }}>
                    Loading...
                  </Text>
                </View>
              ) : (
                <>
                  <ServiceDetailContainer
                    username={userData?.username || 'Unknown User'}
                    location="Dubai"
                    email={userData?.email || 'No Email'}
                    imageUrl={userData?.imageUrl || company.imageUrl || null}
                  />
                  <Text style={styles.bookingTitle}>Choose Your Boat</Text>
                  <FlatList
                    horizontal
                    data={userBoats}
                    renderItem={({ item, index }) => (
                      <BookingServiceCard
                        key={index}
                        title={item.title || `Boat ${index + 1}`}
                        price={item.price || '0.00'}
                        image={
                          item.images?.length > 0
                            ? {
                                uri: `https://api.dubaiboating.com/storage/app/public/${item.images[0].image_url}`,
                              }
                            : require('../../Assets/b1.jpeg')
                        }
                        onPress={() => handleBoatClick(item)}
                      />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    style={styles.cardScroll}
                    initialNumToRender={5} // render only first 5 initially
                    maxToRenderPerBatch={10} // render more on demand
                    windowSize={5} // keeps only nearby items in memory
                    removeClippedSubviews={true}
                  />
                  {selectedServices.length > 0 && (
                    <View
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        padding: 15,
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginBottom: 5,
                        }}
                      >
                        Selected Services
                      </Text>
                      {bookingDetails.services.map((service, idx) => (
                        <View
                          key={idx}
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 5,
                            flexWrap: 'wrap',
                          }}
                        >
                          <Text
                            style={{ flex: 1, flexShrink: 1, color: 'black' }}
                          >
                            {service.name}
                          </Text>
                          <Text style={{ color: 'black' }}>
                            AED {service.price}
                          </Text>
                        </View>
                      ))}
                      <View
                        style={{
                          borderBottomColor: '#ccc',
                          borderBottomWidth: 1,
                          marginVertical: 10,
                        }}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Text style={{ fontWeight: 'bold' }}>
                          Total Duration
                        </Text>
                        <Text>{displayDuration}</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginTop: 5,
                        }}
                      >
                        <Text style={{ fontWeight: 'bold' }}>Total Price</Text>
                        <Text style={{ fontWeight: '600' }}>
                          AED {totalPrice}
                        </Text>
                      </View>
                    </View>
                  )}
                  <DateCalendar
                    selectedDate={selectedDate}
                    onDateSelect={handleDateSelect}
                  />
                  <View style={{ maxHeight: 290, marginBottom: 20 }}>
                    <TimePicker
                      selectedTime={selectedTime}
                      onTimeSelect={handleTimeSelect}
                      busyIntervals={[]}
                      selectedDate={selectedDate}
                    />
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.bookBtn,
                      {
                        backgroundColor: isAllSelected()
                          ? '#003478'
                          : '#E0E0E0',
                        borderColor: isAllSelected() ? '#003478' : '#BDBDBD',
                        marginTop: 20,
                      },
                    ]}
                    onPress={handleBookNow}
                  >
                    <Text
                      style={{
                        color: isAllSelected() ? 'white' : '#757575',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}
                    >
                      {isAllSelected()
                        ? 'Book Now'
                        : 'Select Services and Time'}
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </ScrollView>
            <View style={styles.fixedBottom}>
              <TouchableOpacity
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 20,
                  backgroundColor: '#003478',
                  alignItems: 'center',
                  marginLeft: 10,
                }}
                onPress={handleBottomBookNow}
              >
                <Text
                  style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
                >
                  Book now
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default RentBoatScreen;
