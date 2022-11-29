import React, { useState } from 'react'
import { View, Text, Image, Button} from 'react-native'
import styles from './styles'
import { headings } from '../../styles/headings'


const Contact = ({ navigation, route }) => {
  const contact = route.params.contact

  return (
        <View style={styles.main}>
          <View style={styles.button}>
            <Button title='Edit' onPress={()=>{}}/>
          </View>
          <Image style={styles.image} source={{ uri: contact.thumbnailPhoto }}/>
          <Text style={headings.h1}> {contact.name} </Text>
          <Text style={headings.h1}> {contact.phoneNumber} </Text>
          
        </View>
  )
}

export default Contact
