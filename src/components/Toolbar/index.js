import React from 'react'
import { View, TouchableHighlight, Text, Image } from 'react-native'
import styles from './styles'

const Toolbar = ({ }) => (
    <View>
        <TouchableHighlight>
            <Text>Create Contact</Text>
        </TouchableHighlight>
        <Text>LOGO</Text>
        <TouchableHighlight>
            <Text>Modify Contact</Text>
        </TouchableHighlight>

    </View>
)

export default Toolbar