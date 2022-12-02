import React, { useState } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Entypo } from '@expo/vector-icons'


const CreateContactInput = ({ addContact, loading, closeModal, takePhoto, selectFromCameraRoll }) => {
    const [inputs, setInputs] = useState({
        name: '',
        phoneNumber: ''
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

        setErrors(errors)

        return !(Object.keys(errors).length > 0)
    }

    const register = () => {
        if (validateForm()) {
            addContact(inputs)
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
            <TouchableOpacity
                onPress={() => takePhoto()}>
                <Entypo style={styles.icon} name="camera"/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => selectFromCameraRoll()}>
                <Entypo style={styles.icon} name="image"/>
            </TouchableOpacity>
            { loading ? null: 
                <TouchableOpacity style={styles.buttonBackground}>
                    <Button
                        title="Create"
                        onPress={() => { register(); validateForm() }}
                        style={styles.button}/>
                </TouchableOpacity>}
        </View>
    )
}

export default CreateContactInput
