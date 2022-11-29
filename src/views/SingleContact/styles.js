import { StyleSheet } from 'react-native'
import { amaranth, celadon, ceruleanCrayola, chineseViolet, corn, emerald, fireOpal, maximumYellowRed, uranianBlue, vividTangerine } from '../../styles/colors';

export default StyleSheet.create({
  main: {
    padding: 10,
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'white',
    height: '100%',

  },
  h1: {
    fontSize: 40,
    fontFamily: 'Futura',
    margin: 10
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  button: {
    alignSelf: 'flex-end'
  },
  callButton:{
    backgroundColor: emerald,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 45,
    marginLeft: 5
  },
  phoneContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: fireOpal,
    padding: 5,
    borderRadius: 10
  },
  phoneNumber: {
    color: 'white',
  },
  personContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ceruleanCrayola,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 1000,
    marginBottom: 10,
  }
});