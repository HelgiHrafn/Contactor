import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'



const ContactListItem = ({ contact, navigation }) => {
  return (
    <View>
    <Text>{contact.name}</Text>
    <Image source={{ uri: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'}} />
    </View>
  )
}

export default ContactListItem