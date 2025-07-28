import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f5ff',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    // marginBottom: 20,
    backgroundColor:"#007bff",
    paddingVertical:20,
    borderTopStartRadius:12,
    borderEndStartRadius:12
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginBottom: 10,
    justifyContent:"center",
    alignItems:"center"
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
  signInButton: {
    backgroundColor: '#007bff',
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
    color: '#000',
  },
  createAccountText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;