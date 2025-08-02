import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ConfirmBookingModal = ({visible, onClose, onConfirm, bookingDetails}) => {
  const {
    services = [],
    stylist,
    date,
    time,
    duration = 0,
    amount = 0,
  } = bookingDetails;    

  // Format time properly
  const formattedTime = time
    ? new Date(time).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'N/A';

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Confirm Booking</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Selected Services</Text>
            {services.length > 0 ? (
              services.map((s, idx) => (
                <View key={idx} style={styles.serviceItem}>
                  <Text style={[styles.value, {flex: 1, flexShrink: 1}]}>
                    {s.name}
                  </Text>
                  <Text style={[styles.value, {marginLeft: 10}]}>
                    AED {s.price}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={styles.value}>No services selected</Text>
            )}
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Staff</Text>
            <Text style={styles.value}>
              {stylist?.name || 'Any Available Staff'}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Date & Time</Text>
            <Text style={styles.value}>
              {date || 'N/A'} at {formattedTime}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Duration</Text>
            <Text style={styles.value}>
              {Math.floor(duration / 60)} hr {duration % 60} min
            </Text>
          </View>

          <View style={styles.rowTotal}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>AED {amount}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmBtn} onPress={onConfirm}>
              <Text style={styles.confirmText}>Confirm Booking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmBookingModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000088',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '85%',
    maxHeight: '95%', // 👈 add this
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 10,
  
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  row: {
    marginBottom: 12,
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  rowTotal: {
    marginTop: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: '500',
    color: '#555',
  },
  value: {
    fontSize: 14,
    color: '#222',
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  totalValue: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: 10, // ✅ use gap instead of marginRight
  },
  cancelBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },

  confirmBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#ff4081',
    alignItems: 'center',
  },

  cancelText: {
    color: '#333',
    fontWeight: 'bold',
  },
  confirmText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
