import React from 'react'
import Modal from '../Modal'
// import styles from './styles';
import EditContactInput from '../EditContactInput'

const EditContactModal = ({
    isOpen,
    closeModal,
    title,
    editContact,
    takePhoto,
    selectFromCameraRoll
}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}>
        <EditContactInput editContact={editContact} closeModal={closeModal} takePhoto={takePhoto} selectFromCameraRoll={selectFromCameraRoll}></EditContactInput>

    </Modal>
)

export default EditContactModal
