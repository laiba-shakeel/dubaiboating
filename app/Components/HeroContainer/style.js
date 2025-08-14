import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire container
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay with 50% opacity (adjust 0.5 to 0.3-0.7 as needed)
  },
  content: {
    gap: 15,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    zIndex: 1, // Ensure content is above the overlay
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    padding: 10,
    backgroundColor: '#003478',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  icon: {
    color: '#FFF',
    fontSize: 20,
  },
  searchText: {
    color: '#fff',
    fontSize: 14,
    fontWeight:"500"
  },
});

export default styles;
