import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f5ff',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#003478',
    paddingVertical: 20,
    borderTopStartRadius: 12,
    borderEndStartRadius: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subText: {
    fontSize: 16,
    color: '#fff',
  },
  inputContainer: {
    backgroundColor: '#fff',
    padding: 20,
    // borderRadius: 10,
    elevation: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  forgotText: {
    color: '#003478',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#003478',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#003478',
  },
  createAccountText: {
    color: '#003478',
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
  backgroundColor: '#fff',
  borderRadius: 10,
  margin: 15,
  // marginBottom:35,
  // marginTop:20,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 5,
  elevation: 3,
  overflow: 'hidden',
},

cardHeader: {
  backgroundColor: '#003478',
  alignItems: 'center',
  padding: 20,
},

cardTitle: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 5,
},

cardSubtitle: {
  color: '#e0e0e0',
  fontSize: 14,
  marginTop: 2,
},

cardBody: {
  padding: 15,
},

label: {
  fontSize: 16,
  color: '#003478',
  marginBottom: 5,
  fontWeight: '600',
},

input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 10,
  marginBottom: 15,
  fontSize: 16,
  backgroundColor: '#fff',
},

passwordContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: 15,
  backgroundColor: '#fff',
},

passwordInput: {
  flex: 1,
  fontSize: 16,
  paddingVertical: 10,
},

saveButton: {
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
  marginBottom:25
},

saveText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},

});

export default styles;
