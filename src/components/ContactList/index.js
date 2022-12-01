/* eslint-disable react/prop-types */
import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import ContactListItem from '../ContactListItem'

const ContactList = ({ contacts, navigation, onContactEdit }) => (
    <View style={[styles.list, styles.coolShadow]}>
        <FlatList
            numColumns={1}
            data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
            renderItem={({ item }) => {
                return (
                    <ContactListItem
                        onContactEdit={onContactEdit} 
                        navigation={navigation} 
                        contact={item} />
                )
            }}
        />
        <FlatList/>
    </View>
)

export default ContactList
