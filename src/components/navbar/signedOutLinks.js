import React from 'react';
import './style.css'
import {NavLink} from 'react-router-dom'

const SingnedOutLinks = () => {
  return (
        <div className='navLinkContainer'>
            <NavLink to='/signin' className='navLinkItem'>Sign In</NavLink>
            <NavLink to='/signup' className='navLinkItem'>Sign Up</NavLink>
        </div>
  );
}

export default SingnedOutLinks;