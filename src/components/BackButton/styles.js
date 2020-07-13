import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 30,
    padding: 6,
    margin: 7,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  },
  btnIcon: {
    height: 17,
    width: 17
  }
});

export default styles;
