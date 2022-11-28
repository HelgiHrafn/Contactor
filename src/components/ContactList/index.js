/* eslint-disable react/prop-types */
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './styles'
import ContactListItem from '../ContactListItem'

const ContactList = ({ contacts, navigation }) => (
    <View>
        <FlatList
            numColumns={1}
            data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
            renderItem={({item})=>{
                return (
                    <ContactListItem contact={item} />
                )
            }}
        />
        <FlatList/>
    </View>
)

export default ContactList
