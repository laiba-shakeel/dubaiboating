import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 300, // Adjust height as needed to match the image aspect ratio
    justifyContent: 'flex-end',
  },
  fullOverlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire ImageBackground
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay across the whole image
  },
  content: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight:5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  location: {
    fontSize: 16,
    color: '#FFF',
    // marginTop: 5,
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 5,
  },
  price: {
    fontSize: 16,
    color: '#FFF', // Gold color for rating
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  rating: {
    fontSize: 18,
    color: '#FFD700', // Gold color for rating
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  reviews: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default styles;