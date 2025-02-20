import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactData from './ContactData';
import './ContactList.css';
import { contactListActions } from '../../../store/contact-slice';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contact.contactList);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch("https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json");
                const data = await res.json();
                const contactsData = [];
                for(const key in data) {
                    contactsData.push({
                        key: key,
                        ...data[key]
                    });
                }
                dispatch(contactListActions.setContactList(contactsData));
            } catch (error) {
                console.log(error);
            }
        }
        fetchContacts();
    }, [dispatch]);

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

export default ContactList;