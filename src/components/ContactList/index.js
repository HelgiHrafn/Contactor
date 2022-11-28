/* eslint-disable react/prop-types */
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './styles'


const ContactList = ({ navigation }) => (
    <View>
        <Text>Contacts</Text>
        <FlatList/>
    </View>
)

export default ContactList
