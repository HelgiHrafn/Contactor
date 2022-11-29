import React, { useState } from 'react'
import styles from './styles'
import ContactList from '../../components/ContactList'
import Toolbar from '../../components/Toolbar'
import { View } from 'react-native'
import AddContactModal from '../../components/AddContactModal'
import Searchbar from '../../components/SearchBar'
import * as imageService from '../../services/imageService'
import tempdata from '../../resources/tempdata.json'
import EditContactModal from '../../components/EditContactModal'

const Contacts = ({ navigation }) => {
    // A boolean flag to indicate wether the modal to add a contact is open or not
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    const [contactsMaster, setContactsMaster] = useState(tempdata.data)

    const [filteredContacts, setFilteredContacts] = useState(contactsMaster)

    const takePhoto = async () => {
        const photo = await imageService.takePhoto()
        console.log(photo)
    }

    const selectFromCameraRoll = () => {
        console.log('Camera Rolll')
    }

    const addContact = async () => {
    // const newBoard = await fileService.addItem(inputs, boardSmall)
        console.log('We need to add contact to fileservice')
    }
    const filter = (text) => {
        if (text) {
            const filtered = contactsMaster.filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase()
                    const query = text.toUpperCase()
                    return itemData.indexOf(query) > -1
                }

            )
            setFilteredContacts(filtered)
        } else {
            setFilteredContacts(contactsMaster)
        }
    }
    return (
        <View style={styles.main}>
            <Toolbar
                onAdd={() => setIsAddModalOpen(true)}/>
            <Searchbar filter={filter}/>
            <AddContactModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                title={'Create new contact!'}
                takePhoto={takePhoto}
                selectFromCameraRoll={selectFromCameraRoll}
                addContact={addContact}/>
            <ContactList navigation={navigation} contacts={filteredContacts}/>
            
        </View>
    )
}

export default Contacts
