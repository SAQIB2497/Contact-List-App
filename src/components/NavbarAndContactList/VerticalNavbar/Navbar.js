import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { contactListActions } from '../../../store/contact-slice';

const Navbar = () => {
    const dispatch = useDispatch();

    const totalContacts = useSelector(state => state.contact.totalContacts);
    useEffect(() => {
        const fetchTotalContacts = () => {
            fetch("https://contact-list-app-ec02e-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json")
                .then(res => res.json())
                .then(data => {
                    dispatch(contactListActions.fetchTotalContacts(data))
                })
        }
        fetchTotalContacts();
    }, [])

    return (
        <ul>
            <li>
                <a href='' className='link'>
                    <i className='fa-solid fa-address-book'></i>
                    <div>
                        <h2>All contacts</h2>
                        <p>{totalContacts} contacts</p>
                    </div>
                </a>
            </li>
            {/* <li>
                <a href='' className='link'>
                    <i className='fa-solid fa-heart'></i>
                    <div>
                        <h2>Favourites</h2>
                        <p>10 contacts</p>
                    </div>
                </a>
            </li> */}
        </ul>
    )
}

export default Navbar