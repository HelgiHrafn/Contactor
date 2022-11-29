import React from 'react'
import Modal from '../Modal'
// import styles from './styles';
import EditContactInput from '../EditContactInput'

const EditContactModal = ({
    isOpen,
    closeModal,
    title,
    editContact,
    contact,
    takePhoto,
    selectFromCameraRoll
}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}>
        <EditContactInput contact={contact} editContact={editContact} closeModal={closeModal} takePhoto={takePhoto} selectFromCameraRoll={selectFromCameraRoll}></EditContactInput>

    </Modal>
)

export default EditContactModal
