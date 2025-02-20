import React, { useEffect, useState } from 'react';
import "./Form.css";
import addnewImage from "../../../assets/add-new-img.svg";
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Ui/Button.js';
import { contactListActions } from '../../../store/contact-slice';
import { addContact, updateContact } from '../../../store/Contact-Actions.js';

const Form = () => {
    const dispatch = useDispatch();
    const existingContactKey = useSelector(state => state.contact.key);
    const [userData, setUserData] = useState({ name: "", surname: "", tel: "" });

    useEffect(() => {
        const fetchExistingContact = async () => {
            if (existingContactKey) {
                try {
                    const res = await fetch(
                        `https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${existingContactKey}.json`
                    );
                    const existingContact = await res.json();
                    setUserData(existingContact || { name: "", surname: "", tel: "" });
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchExistingContact();
    }, [existingContactKey]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (existingContactKey) {
            dispatch(updateContact(existingContactKey, userData));
            dispatch(contactListActions.setExistingContactKey(""));
        } else {
            dispatch(addContact(userData));
        }
        setUserData({ name: "", surname: "", tel: "" });
    }

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='add-new-img'>
                <img src={addnewImage} alt="Add new contact" />
            </div>
            <div className='input-text'>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={userData.name}
                    onChange={inputHandler}
                    required
                />
                <input
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    value={userData.surname}
                    onChange={inputHandler}
                    required
                />
            </div>
            <div className='input-tel'>
                <input
                    type="tel"
                    placeholder="Phone Number"
                    name="tel"
                    value={userData.tel}
                    onChange={inputHandler}
                    required
                />
            </div>
            <Button name={existingContactKey ? 'Update' : 'Add'} />
        </form>
    )
}

export default Form;