/* eslint-disable react/prop-types */
import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from './styles'
import ContactListItem from '../ContactListItem'
import { headings } from '../../styles/headings'

const ContactList = ({ contacts, navigation }) => (
    <View style={[styles.list, styles.coolShadow]}>
        <FlatList
            numColumns={1}
            data={contacts.sort((a, b) => a.name.localeCompare(b.name))}
            renderItem={({item})=>{
                return (
                    <ContactListItem navigation={navigation} contact={item} />
                )
            }}
        />
        <FlatList/>
    </View>
)

export default ContactList
