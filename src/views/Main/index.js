import React, { useState, useEffect } from 'react'
import styles from './styles'
import ContactList from '../../components/ContactList'
import Toolbar from '../../components/Toolbar'
import { View } from 'react-native'
import AddContactModal from '../../components/AddContactModal'
import Searchbar from '../../components/SearchBar'
import * as imageService from '../../services/imageService'
import * as fileService from '../../services/fileService'

const Contacts = ({ navigation }) => {
    // A boolean flag to indicate wether the modal to add a contact is open or not
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    const [contactsMaster, setContactsMaster] = useState([])

    const [filteredContacts, setFilteredContacts] = useState(contactsMaster)

    const [imageTemp, setImageTemp] = useState({})

    useEffect(() => {
        (async () => {
            const contacts = await fileService.getAllContacts()
            setContactsMaster(contacts)
            setFilteredContacts(contacts)
        })()
    }, [])

    const addImage = async image => {
        const newImage = await fileService.addImage(image)
        return newImage
    }

    const takePhoto = async () => {
        const image = await imageService.takePhoto()
        const imageUri = image.assets[0].uri
        if (image.assets.length > 0) {
            const imageToSet = await addImage(imageUri)
            setImageTemp(imageToSet)
        }
    }

    const selectFromCameraRoll = async () => {
        const image = await imageService.selectFromCameraRoll()
        const imageUri = image.assets[0].uri
        if (image.assets.length > 0) {
            const imageToSet = await addImage(imageUri)
            setImageTemp(imageToSet)
        }
    }

    const addContact = async (input) => {
        try {
            if (imageTemp) {
                input.thumbnailPhoto = imageTemp.file
            } else {
                input.thumbnailPhoto = ''
            }
            await fileService.saveJson(input)
            setContactsMaster([...contactsMaster, input])
            setFilteredContacts([...filteredContacts, input])
        } catch (ex) {
            console.log('err saving img: ', ex)
        }
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
