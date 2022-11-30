import React, { useState } from 'react'
import { View, Text, Image, Button, Linking, TouchableOpacity } from 'react-native'
import styles from './styles'
import { headings } from '../../styles/headings'
import { FontAwesome } from '@expo/vector-icons'
import EditContactModal from '../../components/EditContactModal'
import * as imageService from '../../services/imageService'

const Contact = ({ navigation, route }) => {
    const contact = route.params.contact

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const takePhoto = async () => {
        const photo = await imageService.takePhoto()
        console.log(photo)
    }

    const selectFromCameraRoll = () => {
        console.log('Camera Rolll')
    }

    const editContact = (contact, inputs) => {
        contact.name = inputs.name
        contact.thumbnailPhoto = inputs.thumbnailPhoto
        contact.phoneNumber = inputs.phoneNumber
    }

    return (
        <View style={styles.main}>
            <View style={styles.button}>
                <Button title='Edit' onPress={() => { setIsEditModalOpen(true) }}/>
            </View>
            <View style={styles.personContainer}>
                <Image style={styles.image} source={{ uri: contact.thumbnailPhoto }}/>
            </View>
            <Text style={headings.h1}> {contact.name} </Text>

            <View style={styles.phoneContainer}>
                <Text style={[headings.h2, styles.phoneNumber]}>Phone: {contact.phoneNumber} </Text>
                <TouchableOpacity style={styles.callButton} onPress={() => Linking.openURL('tel:')}>
                    <FontAwesome name='phone' size={35} color="white"/>
                </TouchableOpacity>
            </View>
            <EditContactModal
                isOpen={isEditModalOpen}
                closeModal={() => setIsEditModalOpen(false)}
                title={'Edit contact!'}
                takePhoto={takePhoto}
                selectFromCameraRoll={selectFromCameraRoll}
                editContact={editContact}
                contact={contact}/>
        </View>
    )
}

export default Contact
