import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardScroll: {
    paddingHorizontal: 10,
    marginBottom: 20,
    gap: 10,
    width: '100%',
    flex: 1,
    backgroundColor: 'transparent',
  },
  cardList: {
    gap: 10,
  },
  chipsContainer: {
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  chipsContent: {
    alignItems: 'center',
  },
  serviceCardContainer: {
    height: 200,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  serviceCardContent: {
    paddingBottom: 10,
  },
  bookingCardContainer: {
    height: 150,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  bookingCardList: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    zIndex: 10,
  },
  serviceScrollContainer: {
    height: 250, // You can adjust this
    marginHorizontal: 10,
    marginTop: 10,
  },

  headerTitle: {
    color: 'black',
    fontSize: 20,
    paddingHorizontal: 12,
    paddingTop: 12,
    fontWeight: 'bold',
  },

  bookingTitle: {
    color: 'black',
    fontSize: 22,
    paddingHorizontal: 12,
    paddingTop: 8,
    fontWeight: 'bold',
    marginBottom:10
  },

  subTitle: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 12,
    paddingTop: 8,
    fontWeight: '600',
  },

  bookBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 15,
    // marginVertical: 15,
    marginBottom: 85,
  },
});

export default styles;
