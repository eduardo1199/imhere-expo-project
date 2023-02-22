import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161414',
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28
  },
  infoData: {
    color: '#3f3f3f',
    fontSize: 15
  },
  input: {
   backgroundColor: '#3f3f3f',
   color: '#FFFFFF',
   borderRadius: 5,
   height: 60,
   padding: 16,
   marginLeft: 15,
   flex: 1,
  },
  button: {
    backgroundColor: '#5de224',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  quantity: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  containerInputForm: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  }
});
