import React, { useState } from 'react'
import styles from './styles'
import ContactList from '../../components/ContactList'
import Toolbar from '../../components/Toolbar'

const Contacts = ({ navigation }) => {

    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    const addContact = async () => {
    //const newBoard = await fileService.addItem(inputs, boardSmall)
    console.log("We need to add contact to fileservice")

    }
      const contacts =  [
            {
                "id": 1,
                "name": "Johnny Knoxville",
                "phoneNumber": "772-4254",
                "thumbnailPhoto": "https://flxt.tmsimg.com/assets/198743_v9_bb.jpg"
            },
            {
                "id": 2,
                "name": "Steve O",
                "phoneNumber": "644-7205",
                "thumbnailPhoto": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492113764/articles/2016/04/12/up-close-and-personal-with-the-all-new-steve-o/160411-yamato-steve-o-tease_i0c7sr"
            },
            {
                "id": 3,
                "name": "Bam Margera",
                "phoneNumber": "656-9649",
                "thumbnailPhoto": "https://static.wikia.nocookie.net/fan-hardcore/images/5/50/Bam_margera.jpg/revision/latest?cb=20220213043836"
            },
            {
                "id": 4,
                "name": "Chris Pontius",
                "phoneNumber": "538-6449",
                "thumbnailPhoto": "https://biographyline.com/wp-content/uploads/2021/05/Chris-Pontius.jpg" },
            {
                  "id": 5,
                  "name": "Dua Lipa",
                  "phoneNumber": "4206969",
                  "thumbnailPhoto": "https://i.insider.com/63713995951bdc00182ddd13?width=700"
            },
            {
                  "id": 6,
                  "name": "Saul Goodman",
                  "phone": "(505) 503-4455",
                  "thumbnailPhoto": "https://static.wikia.nocookie.net/inconsistently-heinous/images/e/e0/Saul_2009.jpg/revision/latest?cb=20220828160305"
            }]
    
            return (
            <View style={styles.main}>
            <ContactList navigation={navigation} contacts={contacts}>
            </ContactList>
            <Toolbar
            onAdd={() => setIsAddModalOpen(true)}/>
            <AddContactModal
            isOpen={isAddModalOpen}
            closeModal={() => setIsAddModalOpen(false)}
            title={'Create new contact!'}
            addContact={addContact}/>
            </View>
    )
  }

  
  export default Contacts