import React, { useState, useEffect } from 'react'
import styles from './styles'
import ContactList from '../../components/ContactList'
import Toolbar from '../../components/Toolbar'
import { View, AsyncStorage } from 'react-native'
import AddContactModal from '../../components/AddContactModal'
import Searchbar from '../../components/SearchBar'
import * as imageService from '../../services/imageService'
import * as fileService from '../../services/fileService'
import tempdata from '../../resources/tempdata.json'

const Contacts = ({ navigation }) => {
    // A boolean flag to indicate wether the modal to add a contact is open or not
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    const [contactsMaster, setContactsMaster] = useState([])

    const [filteredContacts, setFilteredContacts] = useState(contactsMaster)

    const [imageTemp, setImageTemp] = useState({})

    useEffect(() => {
        (async () => {
            console.log("useEffect")
            const contacts = await fileService.getAllContacts()
            console.log(contacts)
            setContactsMaster(contacts)
            setFilteredContacts(contacts)
        })();
    }, []);

    const addImage = async image => {
        const newImage = await fileService.addImage(image)
        // Here we would add an Image to a contact
    }

    const takePhoto = async () => {
        const image = await imageService.takePhoto()
        if (image.assets.length > 0) {
            const imageToSet = await addImage(image)
            setImageTemp(imageToSet)
            console.log(imageTemp)
        }
    }

    const selectFromCameraRoll = async () => {
        console.log('Camera Rolll')
        const image = await imageService.selectFromCameraRoll()
        if (image.length > 0) {
            const imageToSet = await addImage(image)
            setImageTemp(imageToSet)
            // await addImage(imageLocation)
        }
    }

    const addContact = async (input) => {
        try {
            let filename = ''
            const uuid = 'sdfsdfsdf'
            const data = {
                name: '',
                phoneNumber: '',
                image: ''
            }
            console.log(input.name)
            console.log(input.phoneNumber)
            console.log('We need to add contact to fileservice')

            data.name = input.name
            data.phoneNumber = input.phoneNumber
            // TODO: generate uuid
            filename = data.name + uuid
            const imageSuccessData = null
            if (imageTemp && imageTemp?.base64) {
                console.log('imageTemp?.base64: ', imageTemp?.base64)
                data.image = imageTemp.base64
            // imageSuccessData = await fileService.saveImage(imageTemp.saveDir, imageTemp.base64);
            // if(imageSuccessData && imageSuccessData.success) {
            // }
            }
            await fileService.saveJson(filename, data)
            setContactsMaster([...contactsMaster, data])
            setFilteredContacts([...filteredContacts, data])
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
