import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { headings } from '../../styles/headings'



const ContactListItem = ({ contact, navigation }) => {
  return (
    <View style={styles.contactItem}>
      <Image style={styles.image} source={{ uri: contact.thumbnailPhoto}} />
      <Text style={headings.h2}>{contact.name}</Text>
    </View>
  )
}

export default ContactListItem