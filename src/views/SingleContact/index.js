import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import styles from './styles'
import { headings } from '../../styles/headings'
import { FontAwesome } from '@expo/vector-icons'

const Contact = ({ route }) => {
    const contact = route.params.contact

    return (
        <View style={styles.main}>
            {/* <View style={styles.button}>
                <Button title='Edit' onPress={() => { editContact }}/>
            </View> */}
            <View style={styles.personContainer}>
                <Image style={styles.image} source={{ uri: contact.thumbnailPhoto }}/>
            </View>
            <Text style={headings.h1}> {contact.name} </Text>

            <View style={styles.phoneContainer}>
                <Text style={[headings.h2, styles.phoneNumber]}>Phone: {contact.phoneNumber} </Text>
                <TouchableOpacity style={styles.callButton} onPress={() => Linking.openURL(`tel: ${contact.phoneNumber}`)}>
                    <FontAwesome name='phone' size={35} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Contact
