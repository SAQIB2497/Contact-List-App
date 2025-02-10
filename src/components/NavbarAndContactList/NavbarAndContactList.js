import React from 'react'
import ContactList from './ContactList/ContactList';
import './NavbarAndContactList.css';
import VerticalNavbar from './VerticalNavbar/VerticalNavbar';

const NavbarAndContactList = () => {
  return (
    <div className='navbar-and-list'>
      <VerticalNavbar />
      <ContactList />
    </div>
  )
}

export default NavbarAndContactList