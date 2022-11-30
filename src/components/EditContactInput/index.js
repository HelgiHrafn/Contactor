import React, { useState } from 'react'
import { View, TextInput, Text, Button, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Entypo } from '@expo/vector-icons'

const EditContactInput = ({ contact, editContact, closeModal, takePhoto, selectFromCameraRoll }) => {
    const [inputs, setInputs] = useState({
        name: contact.name,
        phoneNumber: contact.phoneNumber
    })

    const inputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    // const takePhoto = () => {
    //   console.log("Paparazzi")

    // }

    // const selectFromCameraRoll = () => {
    //   console.log("Camera Rolll")

    // }

    const [errors, setErrors] = useState({
        name: '',
        phoneNumber: ''
    })

    const validateForm = () => {
        const { name, phoneNumber } = inputs
        const errors = {}

        if (!name) {
            errors.name = 'Name can not be empty'
        }
        if (!phoneNumber) {
            errors.phoneNumber = 'Number can not be empty'
        }

        setErrors(errors)

        return !(Object.keys(errors).length > 0)
    }

    const register = () => {
        if (validateForm()) {
            editContact(inputs, contact)
            closeModal()
        }
    }

    return (
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={inputs.name}
                onChangeText={text => inputHandler('name', text)} />
            <Text>{errors.name}</Text>
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={inputs.phoneNumber}
                onChangeText={text => inputHandler('phoneNumber', text)} />
            <Text>{errors.phoneNumber}</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: contact.thumbnailPhoto }}/>

                <View>
                    <TouchableOpacity
                        onPress={() => takePhoto()}>
                        <Entypo style={styles.icon} name="camera"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => selectFromCameraRoll()}>
                        <Entypo style={styles.icon} name="image"/>
                    </TouchableOpacity>

                </View>

            </View>
            <TouchableOpacity style={styles.buttonBackground}>
                <Button
                    title="Save"
                    onPress={() => { register(); validateForm() }}
                    style={styles.button}/>
            </TouchableOpacity>
        </View>
    )
}

export default EditContactInput
