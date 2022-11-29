import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { headings } from '../../styles/headings'

const ContactListItem = ({ contact, navigation }) => {
    return (

        <TouchableOpacity onPress={() => navigation.navigate('Contact', { contact })}>
            <View style={styles.contactItem}>
                <Image style={styles.image} source={{ uri: contact.thumbnailPhoto }} />
                <Text style={headings.h2}>{contact.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ContactListItem
