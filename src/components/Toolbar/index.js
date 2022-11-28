import React from 'react'
import { View, TouchableHighlight, Text, Image } from 'react-native'
import styles from './styles'

const Toolbar = ({ onAdd }) => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
            <Text style={styles.toolbarActionText}>Create Contact</Text>
        </TouchableHighlight>
        <Text style={styles.toolbarActionText}>LOGO</Text>
    </View>
)

export default Toolbar