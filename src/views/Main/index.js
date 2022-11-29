import React, { useState } from 'react'
import styles from './styles'
import ContactList from '../../components/ContactList'
import Toolbar from '../../components/Toolbar'
import { View } from 'react-native'
import AddContactModal from '../../components/AddContactModal'
import Searchbar from '../../components/SearchBar'
import * as imageService from '../../services/imageService'
import * as fileService from '../../services/fileService'
import tempdata from '../../resources/tempdata.json'

const Contacts = ({ navigation }) => {
    // A boolean flag to indicate wether the modal to add a contact is open or not
      const [isAddModalOpen, setIsAddModalOpen] = useState(false)

      const [contactsMaster, setContactsMaster] = useState(tempdata.data)

      const [filteredContacts, setFilteredContacts] = useState(contactsMaster)

      const addImage = async image => {
            const newImage = await fileService.addImage(image);
      //Here we would add an Image to a contact
       };

      const takePhoto = async () => {
            const imageLocation = await imageService.takePhoto();
            if (imageLocation.length > 0) { await addImage(imageLocation); }
      };

      const selectFromCameraRoll = async () => {
            console.log("Camera Rolll")
            const imageLocation = await imageService.selectFromCameraRoll();
            if (imageLocation.length > 0) { await addImage(imageLocation); }
      };

      const addContact = async (input) => {
            console.log(input.name)
            console.log(input.phoneNumber)
            console.log("We need to add contact to fileservice")

      };


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
