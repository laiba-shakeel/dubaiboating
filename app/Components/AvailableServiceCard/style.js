import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    padding: 10,
    justifyContent:"center",
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    width: "90%",
    paddingVertical:20,
    marginBottom:13
    // alignItems: 'center',
  },
  selectedCard: {
    borderColor: '#007AFF',
    backgroundColor: '#e6f0fa',
  },
  title: {
    fontSize: 18,
   fontWeight:"600"
  },
  price: {
    fontSize: 16,
    color: '#000',
     fontWeight: 'bold',
  },
  duration: {
    fontSize: 14,
    color: '#666',
  },
  chipsContainer: {
    paddingVertical: 10,
  },
  chipsContent: {
    paddingHorizontal: 10,
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingBottom:5
  }
});

export default styles;