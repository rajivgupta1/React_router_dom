import React from 'react'
import { Link  } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
        <h1>Menu</h1>
        <Link to='/'> About Us</Link>
       <Link to='/contact'>Contact us</Link>
    </div>
  )
}

export default Menu