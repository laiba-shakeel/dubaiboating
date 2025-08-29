import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

export const useRentBoatScreen = companyData => {
  const [activeChip, setActiveChip] = useState(null);
  const [viewingChip, setViewingChip] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedStylist, setSelectedStylist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'MM/dd/yyyy'),
  );
  const [selectedTime, setSelectedTime] = useState(null);
  const [staffList, setStaffList] = useState([]); // Default to empty
  const [companyServices, setCompanyServices] = useState([]); // Default to empty
  const [isLoadingData, setIsLoadingData] = useState(false); // No API, so no loading
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [staffAvailability, setStaffAvailability] = useState({}); // Default to empty
  const [staffAppointments, setStaffAppointments] = useState({}); // Default to empty
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedBoat, setSelectedBoat] = useState(null);
  const [isBoatModalVisible, setBoatModalVisible] = React.useState(false);

  // Commented out API-related useEffect
  /*
  useEffect(() => {
    if (companyData?.id) {
      setIsLoadingData(true);

      const loadInitialData = async () => {
        try {
          const [rawStaff, rawServices] = await Promise.all([
            GetCompanyStaff(companyData.id),
            GetCompanyServices(companyData.id),
          ]);

          const staff = rawStaff?.data || rawStaff || [];
          const services = rawServices?.data || rawServices || [];

          setStaffList(staff);
          setCompanyServices(services);

          if (staff.length > 0) {
            const firstStaff = staff[0];
            setSelectedStylist(firstStaff); // ✅ Auto-select first stylist
          }

          const availabilityMap = {};
          const appointmentMap = {};

          for (const person of staff) {
            const staffId = person.staff_id;

            try {
              const res = await GetAvailableStaff(staffId);
              const appointments = Array.isArray(res?.data) ? res.data : [];
              appointmentMap[staffId] = appointments;

              const busyIntervals = appointments.map(appointment => {
                const start = new Date(appointment.appointment_date);
                const end = new Date(
                  start.getTime() +
                    Number(appointment.duration_minutes || 0) * 60000,
                );
                return { start, end };
              });

              availabilityMap[staffId] = busyIntervals;
            } catch (err) {
              console.error(
                `Error loading availability for staff ${staffId}`,
                err,
              );
              availabilityMap[staffId] = [];
              appointmentMap[staffId] = [];
            }
          }

          setStaffAvailability(availabilityMap);
          setStaffAppointments(appointmentMap);

          // ✅ Auto-select today's date and trigger logic
          const today = format(new Date(), 'MM/dd/yyyy');
          setSelectedDate(today);
          handleDateSelect(today);
        } catch (error) {
          console.error('API error:', error);
        } finally {
          setIsLoadingData(false);
        }
      };

      loadInitialData();
    }
  }, [companyData?.id]);
  */

  // Chips (categories) toggle
  const toggleChip = chip => {
    if (activeChip === chip) {
      setActiveChip(null);
      setViewingChip(null);
    } else {
      setActiveChip(chip);
      setViewingChip(chip);
    }
  };

  // Service select/deselect
  const toggleService = serviceName => {
    setSelectedServices(prev =>
      prev.includes(serviceName)
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName],
    );
  };

  const handleStylistSelect = staff => setSelectedStylist(staff);
  const handleDateSelect = date => setSelectedDate(date);
  const handleTimeSelect = time => setSelectedTime(time);

  const isAllSelected = () => {
    return selectedDate && selectedTime && selectedBoat;
  };

  const handleBookNow = () => {
    if (isAllSelected()) setIsModalVisible(true);
  };

  const confirmBooking = () => {
    setIsModalVisible(false);
    resetState();
  };

  const resetState = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedBoat(null);
  };

  const closeModal = () => setIsModalVisible(false);

  // Get service objects for selected names (now returns empty if no services)
  const selectedServiceObjects = selectedServices.map(name => {
    return {
      name,
      price: 0, // Default price since no services from API
      duration_minutes: 0, // Default duration since no services from API
    };
  });

  // Calculate total price and duration (will be 0 without API data)
  const totalPrice = selectedServiceObjects.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedServiceObjects.reduce(
    (sum, s) => sum + s.duration_minutes,
    0,
  );

  const bookingDetails = {
    services: selectedServiceObjects,
    stylist: selectedStylist,
    date: selectedDate,
    time: selectedTime,
    totalPrice,
    totalDuration,
  };

  const handleBottomBookNow = () => {
    if (isAllSelected()) setIsModalVisible(true);
  };

  return {
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
    confirmBooking,
    isAllSelected,
    isLoadingData,
    resetState,
    isModalVisible,
    closeModal,
    bookingDetails,
    handleBottomBookNow,
    staffAppointments,
    currentMonth,
    setCurrentMonth,
    selectedBoat,
    setSelectedBoat,
    isBoatModalVisible,
    setBoatModalVisible,
  };
};