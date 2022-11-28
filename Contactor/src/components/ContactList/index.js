import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './styles'
import ContactListItem from '../ContactListItem'

const ContactList = ({contacts}) => (
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
    </View>
)

export default ContactList