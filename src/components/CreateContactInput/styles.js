import { StyleSheet, Dimensions } from 'react-native'
const { width: winWidth } = Dimensions.get('window')

export default StyleSheet.create({
    input: {
        fontFamily: 'Futura',
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 7,
        margin: 2,
        padding: 2,
        width: winWidth - 120
    },
    button: {
        fontFamily: 'Futura',
        fontSize: 20
    },
    buttonBackground: {
        width: '100%',
        alignSelf: 'flex-end',
        padding: 4,
        marginBottom: 5,
        marginTop: 10,
        borderRadius: 7
    },
    icon: {
        fontSize: 60,
        marginTop: 20,
        marginBottom: 20
    },
    content: {
        alignItems: 'center'
    }
})
