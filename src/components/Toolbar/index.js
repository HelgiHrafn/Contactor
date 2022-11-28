import React from 'react'
import { View, TouchableHighlight, Text, Image } from 'react-native'
import styles from './styles'

const Toolbar = ({ onAdd }) => (
    <View tyle={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
            <Text style={styles.toolbarActionText}>Create Contact</Text>
        </TouchableHighlight>
        <Text tyle={styles.toolbarActionText}>LOGO</Text>
    </View>
)

export default Toolbar