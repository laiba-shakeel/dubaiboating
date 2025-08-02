import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {addDays, format, isSameDay, addMonths, subMonths} from 'date-fns';
import CalendarPicker from 'react-native-calendar-picker';

const DateCalendar = ({onDateSelect}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateSelect = date => {
    const formattedDate = date ? format(date, 'MM/dd/yyyy') : null;
    setSelectedDate(date);
    setCurrentMonth(date);
    onDateSelect(formattedDate);
  };

  const goToPreviousMonth = () => {
    const newMonth = subMonths(currentMonth, 1);
    const current = new Date();
    if (
      newMonth.getMonth() < current.getMonth() &&
      newMonth.getFullYear() <= current.getFullYear()
    ) {
      return;
    }
    setCurrentMonth(newMonth);
  };

  const goToNextMonth = () => {
    const newMonth = addMonths(currentMonth, 1);
    const maxDate = new Date(2025, 11, 31);
    if (newMonth > maxDate) {
      return;
    }
    setCurrentMonth(newMonth);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Date</Text>
      <TouchableOpacity onPress={toggleCalendar} style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={selectedDate ? format(selectedDate, 'MM/dd/yyyy') : ''}
          editable={false}
          placeholder="MM/dd/yyyy"
        />
        <Text style={styles.icon}>📅</Text>
      </TouchableOpacity>
      {showCalendar && (
        <View style={styles.calendarContainer}>
          <View style={styles.navigation}>
            <TouchableOpacity
              onPress={() => {
                const current = new Date();
                if (
                  currentMonth.getMonth() !== current.getMonth() ||
                  currentMonth.getFullYear() !== current.getFullYear()
                ) {
                  goToPreviousMonth();
                }
              }}
              disabled={
                currentMonth.getMonth() === new Date().getMonth() &&
                currentMonth.getFullYear() === new Date().getFullYear()
              }
              activeOpacity={1} // No feedback when disabled
            >
              <Text
                style={[
                  styles.navText,
                  currentMonth.getMonth() === new Date().getMonth() &&
                    currentMonth.getFullYear() === new Date().getFullYear() && {
                      color: '#ccc',
                    },
                ]}>
                Previous
              </Text>
            </TouchableOpacity>
            <Text style={styles.monthYear}>
              {format(currentMonth, 'MMMM yyyy')}
            </Text>
            <TouchableOpacity
              onPress={() => {
                const newMonth = addMonths(currentMonth, 1);
                const maxDate = new Date(2025, 11, 31);
                if (newMonth <= maxDate) {
                  goToNextMonth();
                }
              }}
              disabled={
                currentMonth.getFullYear() === 2025 &&
                currentMonth.getMonth() === 11 // December 2025
              }>
              <Text
                style={[
                  styles.navText,
                  currentMonth.getFullYear() === 2025 &&
                    currentMonth.getMonth() === 11 && {
                      color: '#ccc',
                    },
                ]}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
          <CalendarPicker
            onDateChange={handleDateSelect}
            selectedStartDate={selectedDate}
            todayBackgroundColor="#e6f0fa"
            selectedDayColor="#007AFF"
            minDate={new Date()}
            maxDate={new Date(2025, 11, 31)}
            initialDate={currentMonth}
            onMonthChange={date => {
              const today = new Date();
              const startOfCurrentMonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                1,
              );
              const selectedMonth = new Date(
                date.getFullYear(),
                date.getMonth(),
                1,
              );

              if (selectedMonth >= startOfCurrentMonth) {
                setCurrentMonth(date);
              }
            }}
            hideArrows={true}
            customHeader={() => <View style={{height: 0, width: 0}} />}
            hideDayNames={false}
            headerWrapperStyle={{height: 0}}
          />

          <TouchableOpacity
            onPress={() => setShowCalendar(false)}
            style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginVertical: 25,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'space-around',
  },
  title: {fontSize: 16, fontWeight: '600', color: '#000', marginBottom: 10},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 8,
    justifyContent: 'space-around',
  },
  input: {flex: 1, height: 40, paddingHorizontal: 8},
  icon: {padding: 8},
  calendarContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  navText: {
    fontSize: 14,
    color: '#007AFF',
    paddingHorizontal: 10,
  },
  monthYear: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    flex: 1,
    numberOfLines: 1,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 4,
    alignItems: 'center',
  },
  closeText: {color: '#fff', fontWeight: 'bold'},
});

export default DateCalendar;
