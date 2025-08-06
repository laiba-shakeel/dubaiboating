import React, { useRef, useEffect } from 'react';
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
import Chips from '../../Components/Chips';
import DateCalendar from '../../Components/DateCalender';
import TimePicker from '../../Components/TimePicker';
import BookingServiceCard from '../../Components/BookingServiceCard';
import AvailableServiceCard from '../../Components/AvailableServiceCard';
import ServiceDetailContainer from "../../Components/ServiceDetailContainer'";
import ConfirmBookingModal from '../../Components/ConfirmBookingModal';
import { parse, isValid, isSameDay } from 'date-fns';
import { buySellBoats } from '../../Utils/data';

const RentBoatScreen = () => {
  const route = useRoute();
  const { companyData } = route.params || {};
  const scrollRef = useRef(null);

  // Use companyId = 1 if companyData is missing
  const company = companyData || {
    id: 1,
    name: 'Default Salon',
    location: '',
    imageUrl: '',
    rating: 4.5,
    reviews: 25,
  };

  const {
    activeChip,
    viewingChip,
    selectedServices,
    selectedStylist,
    selectedDate,
    selectedTime,
    staffList,
    companyServices,
    staffAvailability,
    toggleChip,
    toggleService,
    handleStylistSelect,
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
  } = useRentBoatScreen(company);

  useFocusEffect(
    React.useCallback(() => {
      resetState();
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, []),
  );

  useEffect(() => {
    if (!selectedDate || !selectedStylist?.staff_id) {
      handleTimeSelect(null);
    }
  }, [selectedDate, selectedStylist, handleTimeSelect]);

  const totalDuration = bookingDetails.totalDuration || 0;
  const totalPrice = bookingDetails.totalPrice || 0;
  const displayDuration = `${Math.floor(totalDuration / 60)} hr ${
    totalDuration % 60
  } min`;

  const selectedStylistStaffId = selectedStylist?.staff_id;

  const parsedSelectedDate = selectedDate
    ? parse(selectedDate, 'MM/dd/yyyy', new Date())
    : null;

  const busyIntervalsForPicker =
    selectedStylistStaffId &&
    staffAppointments[selectedStylistStaffId] &&
    isValid(parsedSelectedDate)
      ? staffAppointments[selectedStylistStaffId]
          .filter(appointment => {
            const appointmentDate = new Date(appointment.appointment_date);
            return (
              isValid(appointmentDate) &&
              appointmentDate.toDateString() ===
                parsedSelectedDate.toDateString()
            );
          })
          .map(appointment => {
            const utcStart = new Date(appointment.appointment_date);
            const localStart = new Date(
              utcStart.getTime() + utcStart.getTimezoneOffset() * 60000,
            );
            const localEnd = new Date(
              localStart.getTime() + appointment.duration_minutes * 60000,
            );
            return { start: localStart, end: localEnd };
          })
          .filter(interval => isValid(interval.start) && isValid(interval.end))
      : [];
  const handleBoatSelect = boat => {
    // If the same boat is clicked again, deselect it; otherwise, select the new boat
    setSelectedBoat(prevSelectedBoat =>
      prevSelectedBoat?.title === boat.title ? null : boat,
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={[styles.container, { backgroundColor: '#FFF' }]}>
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
              <Text style={{ marginTop: 10, color: 'gray' }}>Loading...</Text>
            </View>
          ) : (
            <>
              <ServiceDetailContainer
                title={company.name}
                location={company.location}
                imageUrl={company.imageUrl}
                rating={company.rating || 4.5}
                reviews={company.reviews || 25}
              />
              <Text style={styles.bookingTitle}>Choose Your Boat</Text>
              <FlatList
                horizontal
                data={buySellBoats}
                renderItem={({ item, index }) => (
                  <BookingServiceCard
                    key={index}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    onPress={() => handleBoatSelect(item)}
                    isSelected={selectedBoat?.title === item.title}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                style={styles.cardScroll}
              />
              {selectedServices.length > 0 && (
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 15,
                    marginTop: 15,
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
                      <Text style={{ flex: 1, flexShrink: 1, color: 'black' }}>
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
                    <Text style={{ fontWeight: 'bold' }}>Total Duration</Text>
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
                    <Text style={{ fontWeight: '600' }}>AED {totalPrice}</Text>
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
                  busyIntervals={busyIntervalsForPicker}
                  selectedDate={selectedDate}
                />
              </View>
              <TouchableOpacity
                style={[
                  styles.bookBtn,
                  {
                    backgroundColor: isAllSelected() ? '#003478' : '#E0E0E0',
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
                  {isAllSelected() ? 'Book Now' : 'Select Services and Time'}
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
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Book now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RentBoatScreen;
