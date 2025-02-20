import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactListActions } from '../../../store/contact-slice';
import "./Navbar.css";

const Navbar = () => {
    const dispatch = useDispatch();
    const totalContacts = useSelector(state => state.contact.totalContacts);

    useEffect(() => {
        const fetchTotalContacts = async () => {
            try {
                const res = await fetch("https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json");
                const data = await res.json();
                dispatch(contactListActions.fetchTotalContacts(data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchTotalContacts();
    }, [dispatch]);

    return (
        <ul>
            <li>
                <a href='#!' className='link'>
                    <i className='fa-solid fa-address-book'></i>
                    <div>
                        <h2>All contacts</h2>
                        <p>{totalContacts} contacts</p>
                    </div>
                </a>
            </li>
        </ul>
    )
}

export default Navbar;