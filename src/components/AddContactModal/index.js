import React from 'react'
import Modal from '../Modal'
// import styles from './styles';
import CreateContactInput from '../CreateContactInput'

const AddContactModal = ({
  isOpen,
  closeModal,
  title,
  addContact
}) => (
    <Modal
    isOpen={isOpen}
    closeModal={closeModal}
    title={title}>
        <CreateContactInput addContact={addContact} closeModal={closeModal}></CreateContactInput>

    </Modal>
)

export default AddContactModal