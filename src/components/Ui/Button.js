import React from 'react'
import './Button.css';

const Button = (props) => {
  return (
    <button type='submit'>{props.name}</button>
  )
}

export default Button