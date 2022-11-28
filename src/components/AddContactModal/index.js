import React from 'react'
import Modal from '../Modal'
// import styles from './styles';
import CreateContactInput from '../CreateContactInput'



const AddContactModal = ({
  isOpen,
  closeModal,
  title,
  addContact,
  takePhoto,
  selectFromCameraRoll
}) => (
    <Modal
    isOpen={isOpen}
    closeModal={closeModal}
    title={title}>
        <CreateContactInput addContact={addContact} closeModal={closeModal} takePhoto={takePhoto} selectFromCameraRoll={selectFromCameraRoll}></CreateContactInput>

    </Modal>
)


export default AddContactModal