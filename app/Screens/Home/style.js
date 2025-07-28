import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  cardGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
},

  screenContainer: {
    // borderWidth: 1,
    // borderColor: 'black',
    flex: 1,
    width: '100%',
    // backgroundColor:"black"
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal:15,
    // textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
   cardScroll: {
    paddingHorizontal: 10,
    marginBottom:20, 
    gap:10,
    width:"100%",
    flex:1
  },
   cardRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
export default styles;