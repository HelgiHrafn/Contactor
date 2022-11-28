import React, { useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import ContactList from '../../components/ContactList'

const Contacts = ({ navigation }) => {

      const contacts =  [
            {
                "id": 1,
                "name": "Johnny Knoxville",
                "phoneNumber": "772-4254",
                "thumbnailPhoto": "https://images.prismic.io/indiecampers-demo/9f34856d-05da-4afb-832f-d3a36de83b7f_Hero---Kinderdijk.jpg"
            },
            {
                "id": 2,
                "name": "Steve O",
                "phoneNumber": "644-7205",
                "thumbnailPhoto": "https://hbr.org/resources/images/article_assets/2019/06/Jun19_05_1040477378.jpg"
            },
            {
                "id": 3,
                "name": "Bam Margera",
                "phoneNumber": "656-9649",
                "thumbnailPhoto": "https://images-na.ssl-images-amazon.com/images/I/61fq9A8jEGL._SL1500_.jpg"
            },
            {
                "id": 4,
                "name": "Chris Pontius",
                "phoneNumber": "538-6449",
                "thumbnailPhoto": "https://images-na.ssl-images-amazon.com/images/I/61fq9A8jEGL._SL1500_.jpg" }]
    return (
          <View style={styles.main}>
            <ContactList contacts={contacts} ></ContactList>
          </View>
    )
  }
  
  export default Contacts