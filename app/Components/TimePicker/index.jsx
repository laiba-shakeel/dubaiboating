import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import {
  setHours,
  setMinutes,
  format,
  addMinutes,
  isAfter,
  isBefore,
  parse,
  isValid,
  isSameDay, 
} from 'date-fns';

const TimePicker = ({
  onTimeSelect,
  selectedTime,
  busyIntervals = [],
  selectedDate,
}) => {
  const generateTimeSlots = () => {
    if (!selectedDate) return [];
    const baseDate = isValid(new Date(selectedDate))
      ? new Date(selectedDate)
      : parse(selectedDate, 'MM/dd/yyyy', new Date());

    if (!isValid(baseDate)) return [];

    let currentTime = setHours(setMinutes(baseDate, 0), 9);
    const endTime = setHours(setMinutes(baseDate, 30), 19);

    const slots = [];
    while (currentTime <= endTime) {
      slots.push(new Date(currentTime));
      currentTime = addMinutes(currentTime, 30);
    }

    return slots;
  };
  const isBusySlot = slot => {
    const slotEnd = addMinutes(slot, 30);
    return busyIntervals.some(interval => {
      const start = new Date(interval.start);
      const end = new Date(interval.end);
      if (!isValid(start) || !isValid(end)) return false; 
      return (
        (isValid(slot) && isValid(slotEnd) && 
         ((slot >= start && slot < end) ||
          (slotEnd > start && slotEnd <= end) ||
          (slot <= start && slotEnd >= end)))
      );
    });
  };

  const timeSlots = generateTimeSlots();

  const renderTime = ({ item }) => {
    const isBusy = isBusySlot(item);
    const isSelected = selectedTime?.getTime?.() === item.getTime();

    const now = new Date(); 
    const isPast = isBefore(item, now) && isSameDay(item, now); 

    const shouldDisable = isBusy || isPast;

    return (
      <TouchableOpacity
        style={[
          styles.timeCard,
          isSelected && styles.selectedTimeCard,
          shouldDisable && styles.disabledCard,
        ]}
        onPress={() => {
          if (!shouldDisable) {
            onTimeSelect(item);
          }
        }}
        disabled={shouldDisable}>
        <Text
          style={[
            styles.timeText,
            isSelected && styles.selectedTimeText,
            shouldDisable && styles.disabledText,
          ]}>
          {format(item, 'h:mm a')}
        </Text>
        {isSelected && !shouldDisable && <View style={styles.checkmark} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Time *</Text>
      {timeSlots.length > 0 ? (
        <FlatList
          data={timeSlots}
          renderItem={renderTime}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          scrollEnabled={true}
          style={{ height: 250 }}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      ) : (
        <Text style={styles.noSlotsText}>No available time slots</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  timeCard: {
    width: '30%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTimeCard: {
    backgroundColor: '#e6f0fa',
    borderColor: '#007AFF',
  },
  timeText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  selectedTimeText: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  disabledCard: {
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
  },
  disabledText: {
    color: '#aaa',
  },
  checkmark: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
    marginTop: 5,
  },
  noSlotsText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    paddingVertical: 10,
  },
});

export default TimePicker;