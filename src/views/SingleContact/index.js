import React, { useState } from 'react'
import { View, Text, Image, Button, Linking} from 'react-native'
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
          <View>
            <Text style={headings.h2}>Phone: {contact.phoneNumber} </Text>
            <Button title='Call' onPress={()=>Linking.openURL('tel:')}/>
          </View>
          
          
        </View>
  )
}

export default Contact
