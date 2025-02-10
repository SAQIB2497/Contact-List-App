import React, { useEffect, useState } from 'react';
import ContactData from './ContactData';
import './ContactList.css';

const ContactList = () => {

  const [contacts , setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch("https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json");
      const data = await res.json();
      const contactsData = [];
      for(const key in data) {
        contactsData.push({
          key: key,
          name: data[key].name,
          surname: data[key].surname,
          tel: data[key].tel
        });
      }
      setContacts(contactsData);
    }
    fetchContacts();

  },[contacts]);

  return (
    <div className='contact-list'>
      <table>
        <thead>
          <tr>
            <th><p>Profile</p></th>
            <th><p>Name</p></th>
            <th><p>Surname</p></th>
            <th><p>Mobile</p></th>
            <th><p>Actions</p></th>
          </tr>
        </thead>
       <ContactData contacts={contacts}/>
      </table>
    </div>
  )
}

export default ContactList