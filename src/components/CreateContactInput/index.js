import React, { useState } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

const CreateContactInput = ({ addContact, closeModal, takePhoto, selectFromCameraRoll }) => {
  const [inputs, setInputes] = useState({
    name: '',
    phoneNumber: ''
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
      addContact(inputs)
      closeModal()
    }
  }

  return (
        <View>
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

            <TouchableOpacity style={styles.buttonBackground}>
            <Button
              title="Create"
              onPress={() => { register(); validateForm() }}
              style={styles.button}/>
            </TouchableOpacity>
        </View>
  )
}

export default CreateContactInput