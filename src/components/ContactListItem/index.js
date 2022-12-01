import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { headings } from '../../styles/headings'

const ContactListItem = ({ contact, navigation, onContactEdit }) => {
    return (
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Contact', { contact })}>
            <View style={styles.contactItem}>
                {
                    contact?.thumbnailPhoto ?
                    <Image style={styles.image} source={{ uri: contact?.thumbnailPhoto }} />
                    :
                    null
                }
                <Text style={headings.h2}>{contact?.name}</Text>
            </View>
        </TouchableOpacity>
         <TouchableOpacity style={styles.editButton} onPress={() => onContactEdit(contact)}>
         <Text style={styles.editText}>Edit Contact</Text>
         </TouchableOpacity>
         </View>



    )
}

export default ContactListItem
