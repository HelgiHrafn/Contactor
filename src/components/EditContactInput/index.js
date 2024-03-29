import React, { useState } from 'react'
import { View, TextInput, Text, Button, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Entypo } from '@expo/vector-icons'


const EditContactInput = ({ contact, loading, editContact, closeModal, takePhoto, selectFromCameraRoll }) => {
    const [inputs, setInputs] = useState({
        
        name: contact.name,
        phoneNumber: contact.phoneNumber,
        id: contact.id
    })

    const inputHandler = (name, value) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }

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
        if (!phoneNumber || isNaN(phoneNumber)) {
            errors.phoneNumber = 'Phone number can not be empty and must only include numbers'
        }
        if (phoneNumber.length !== 7) {
            errors.phoneNumber = 'Phone number must be 7 characters in length'
        }

        setErrors(errors)

        return !(Object.keys(errors).length > 0)
    }

    const register = () => {
        if (validateForm()) {
            editContact(inputs)
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
            {loading ? null : 
                <TouchableOpacity style={styles.buttonBackground}>
                    <Button
                        title="Save"
                        onPress={() => { register(); validateForm() }}
                        style={styles.button}/>
                </TouchableOpacity>}
        </View>
    )
}

export default EditContactInput
