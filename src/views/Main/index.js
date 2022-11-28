
import { View, Text } from 'react-native'
//import styles from './styles'
import Toolbar from'../../components/Toolbar'
import AddContactModal from '../../components/AddContactModal'
import React, { useState } from 'react'


const Contacts = ({ navigation }) => {

const [isAddModalOpen, setIsAddModalOpen] = useState(false)

const addContact = async () => {
  //const newBoard = await fileService.addItem(inputs, boardSmall)
  console.log("We need to add contact to fileservice")
}



    return (
          <View>
            <Toolbar
            onAdd={() => setIsAddModalOpen(true)}/>
            <AddContactModal
            isOpen={isAddModalOpen}
            closeModal={() => setIsAddModalOpen(false)}
            title={'Create new contact!'}
            addContact={addContact}/>
          </View>
    )
  }
  
  export default Contacts