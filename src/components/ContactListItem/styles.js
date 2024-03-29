import { StyleSheet } from 'react-native'
import { emerald } from '../../styles/colors'
export default StyleSheet.create({
    contactItem: {
        borderColor: 'lightgray',
        borderTopWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginRight: 10
    },
    touchable: {
        activeOpacity: 0.6,
        underlayColor: '#FFF'
    },
    checkbox: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        margin: 10
    },
    editButton: {
        backgroundColor: emerald,
        borderRadius: 7,
        paddingHorizontal: 5,
        paddingVertical: 2,
        margin: 10,
        alignSelf: 'flex-end'
    },
    buttonContainer: {
        display: 'flex',
        flexGrow: 1
    },
    editText: {
        fontFamily: 'Futura',
        color: 'black'
    }
})
