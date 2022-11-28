import React from 'react'
import { View, TouchableHighlight, Text, Image } from 'react-native'
import styles from './styles'
import { headings } from '../../styles/headings'

const Toolbar = ({ onAdd }) => (
    <View style={styles.toolbar}>
        <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
            <Text style={[headings.h3, styles.toolbarActionText]}>Create Contact</Text>
        </TouchableHighlight>
    </View>
)

export default Toolbar