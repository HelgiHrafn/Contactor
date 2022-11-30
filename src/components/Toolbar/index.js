import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { headings } from '../../styles/headings'

const Toolbar = ({ onAdd }) => (
    <View style={styles.toolbar}>
        <TouchableOpacity style={styles.toolbarAction} onPress={onAdd}>
            <Text style={[headings.h3, styles.toolbarActionText]}>Create Contact</Text>
        </TouchableOpacity>
    </View>
)

export default Toolbar
