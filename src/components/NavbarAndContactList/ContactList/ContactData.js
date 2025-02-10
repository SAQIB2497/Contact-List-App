import React from 'react'
import { useDispatch } from 'react-redux'
import { contactListActions } from '../../../store/contact-slice';
import { deleteContact } from '../../../store/Contact-Actions';

const ContactData = (props) => {

    const dispatch = useDispatch();

    const deleteContactHandler = (key) => {
        dispatch(deleteContact(key));
    }
    const updateContactHandler = (key) => {
        dispatch(contactListActions.setExistingContactKey(key));
    }

    return (
        <tbody>
            {
                props.contacts.map((contact) => {
                    return (
                        <tr key={contact.key}>
                            <td>
                                <div className='profile-img-box'>
                                    <i className='fa-solid fa-user'></i>
                                </div>
                            </td>
                            <td><h2>{contact.name}</h2></td>
                            <td><h2>{contact.surname}</h2></td>
                            <td><h2>{contact.tel}</h2></td>
                            <td>
                                <div>
                                    <i className='fa-solid fa-pen'
                                        onClick={() => { updateContactHandler(contact.key) }}></i>
                                    <i className='fa-solid fa-trash'
                                        onClick={() => { deleteContactHandler(contact.key) }}></i>
                                    <i className='fa-solid fa-heart'></i>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default ContactData