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
    selectFromCameraRoll,
    loading
}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}>
        <EditContactInput contact={contact} editContact={editContact} closeModal={closeModal} takePhoto={takePhoto} selectFromCameraRoll={selectFromCameraRoll} loading={loading}></EditContactInput>

    </Modal>
)

export default EditContactModal
