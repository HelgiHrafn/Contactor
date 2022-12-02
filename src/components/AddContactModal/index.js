import React from 'react'
import Modal from '../Modal'
import CreateContactInput from '../CreateContactInput'

const AddContactModal = ({
    isOpen,
    closeModal,
    title,
    addContact,
    takePhoto,
    selectFromCameraRoll,
    loading
}) => (
    <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}>
        <CreateContactInput
            addContact={addContact}
            closeModal={closeModal}
            takePhoto={takePhoto}
            selectFromCameraRoll={selectFromCameraRoll}
            loading={loading}>
        </CreateContactInput>
    </Modal>
)

export default AddContactModal
