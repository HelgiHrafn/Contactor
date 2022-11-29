import React from 'react'
import NativeModal from 'react-native-modal'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'
import { Icon } from '@rneui/themed'

const Modal = ({
    isOpen,
    closeModal,
    title,
    children

}) => (
    <NativeModal
        isVisible={isOpen}
        hasBackdrop={true}
        onBackButtonPress={closeModal}
        style={styles.modal}>
        <View style={styles.body}>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}><Icon name="close"></Icon></TouchableOpacity>
            </View>
            <Text style={styles.title} >{title}</Text>
            {children}
        </View>
    </NativeModal>
)

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node

}
export default Modal
