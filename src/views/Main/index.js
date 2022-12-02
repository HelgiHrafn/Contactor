import React, { useState, useEffect } from 'react'
import styles from './styles'
import ContactList from '../../components/ContactList'
import Toolbar from '../../components/Toolbar'
import { View } from 'react-native'
import AddContactModal from '../../components/AddContactModal'
import EditContactModal from '../../components/EditContactModal'
import Searchbar from '../../components/SearchBar'
import * as imageService from '../../services/imageService'
import * as fileService from '../../services/fileService'


const Contacts = ({ navigation }) => {
    // A boolean flag to indicate wether the modal to add a contact is open or not
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    const [contactsMaster, setContactsMaster] = useState([])

    const [filteredContacts, setFilteredContacts] = useState(contactsMaster)

    const [imageTemp, setImageTemp] = useState({})

    const [currentEditingContact, setCurrentEditingContact] = useState()

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        //fileService.cleanDirectory();
        getAllContacts();
    }, [])

    const addImage = async image => {
        const newImage = await fileService.addImage(image)
        return newImage
    }

    const takePhoto = async () => {
        setLoading(true);
        const image = await imageService.takePhoto()
        const imageUri = image.assets[0].uri
        if (image.assets.length > 0) {
            const imageToSet = await addImage(imageUri)
            setImageTemp(imageToSet)
        }
        setLoading(false);
    }

    const selectFromCameraRoll = async () => {
        setLoading(true);
        const image = await imageService.selectFromCameraRoll()
        const imageUri = image.assets[0].uri
        if (image.assets.length > 0) {
            const imageToSet = await addImage(imageUri)
            setImageTemp(imageToSet)
        }
        setLoading(false);
    }

    const addContact = async (input) => {
        console.log("we add a contact")
        try {
            
            if (imageTemp) {
                input.thumbnailPhoto = imageTemp.file
            } else {
                input.thumbnailPhoto = ''
            }
            await fileService.saveJson(input)
            getAllContacts();
        } catch (ex) {
            console.log('err saving img: ', ex)
        }
        setImageTemp([])
    }

    const getAllContacts = async () => {
        const contacts = await fileService.getAllContacts()
        console.log("whats contacts", contacts)
        setContactsMaster(contacts)
        setFilteredContacts(contacts)
    }

    const editContact = async (input) => {
        try {
            if (imageTemp) {
                input.thumbnailPhoto = imageTemp.file
            } else {
                input.thumbnailPhoto = ''
            }
            await fileService.editJson(input)
            console.log("do we finish this ")
            getAllContacts();

        } catch (ex) {
            console.log('err saving img: ', ex)
        }
        setImageTemp([])
    }

    const filter = (text) => {
        if (text) {
            const filtered = contactsMaster.filter(
                function (item) {
                    console.log(item)
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
            <Toolbar onAdd={() => setIsAddModalOpen(true)}/>
            <Searchbar filter={filter}/>
            <AddContactModal
                isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}
                title={'Create new contact!'}
                takePhoto={takePhoto}
                selectFromCameraRoll={selectFromCameraRoll}
                loading={loading}
                addContact={addContact}/>
            <EditContactModal
                isOpen={isEditModalOpen}
                contact={currentEditingContact}
                closeModal={() => setIsEditModalOpen(false)}
                loading={loading}
                takePhoto={takePhoto}
                selectFromCameraRoll={selectFromCameraRoll}
                editContact={editContact}
                title={'Edit contact'}/>
            <ContactList 
                navigation={navigation} 
                contacts={filteredContacts}
                onContactEdit={(contact) => { setIsEditModalOpen(true); setCurrentEditingContact(contact)}}/> 
        </View>
    )
}

export default Contacts
