/* eslint-disable react/prop-types */
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './styles'


const ContactList = ({ navigation }) => (
    <View>
        <Text>Contacts</Text>
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
