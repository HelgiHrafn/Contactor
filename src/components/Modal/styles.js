import { StyleSheet, Dimensions } from 'react-native'

const { width: winWidth } = Dimensions.get('window')

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  body: {
    alignItems: 'center',
    borderRadius: 10,
    width: winWidth - 50,
    backgroundColor: 'white',
    padding: 10
  },
  title: {
    fontFamily: 'Futura',
    fontSize: 30,
    marginBottom: 20
  },
  closeButton: {
    width: 30,
    height: 30
  },
  buttonWrapper: {
    width: '97%',
    height: 20
  }
})
