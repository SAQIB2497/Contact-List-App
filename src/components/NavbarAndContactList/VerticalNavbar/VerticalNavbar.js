import React from 'react'
import Form from './Form';
import Navbar from './Navbar';
import './VerticalNavbar.css';

const VerticalNavbar = () => {
  return (
    <div className='vertical-nav'>
      <Navbar/>
      <Form/>
    </div>
  )
}

export default VerticalNavbar