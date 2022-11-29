import { StyleSheet } from 'react-native'
import { uranianBlue } from '../../styles/colors'

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    backgroundColor: uranianBlue

  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center'
  },
  toolbarActionText: {
    fontWeight: 'bold'

  },
  logo: {
    width: 140,
    height: '100%'
  }

})
