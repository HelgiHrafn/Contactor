import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { FlatList } from 'react-native-web'
import ContactListItem from '../../components/ContactListItem'
import styles from './styles'


const Contact = ({ navigation, route }) => {
  const contact = route.params.contact

  return (
        <View style={styles.main}>
          <Text style={styles.h1}> {contact.name} </Text>
          <Text style={styles.h1}> {contact.phoneNumber} </Text>
          <Image style={styles.image} source={{ uri: contact.thumbnailPhoto }}/>
        </View>
  )
}

export default Contact
