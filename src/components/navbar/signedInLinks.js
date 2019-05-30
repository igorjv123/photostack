import React from 'react';
import './style.css'
import {NavLink} from 'react-router-dom'

const SingnedInLinks = () => {
  return (
        <div className='navLinkContainer'>
            <NavLink to='/addphoto' className='navLinkItem'>Add Photo</NavLink>
            <NavLink to='/profile' className='navLinkItem'>My profile</NavLink>
            <NavLink to='/' className='navLinkItem'>Log Out</NavLink>
        </div>
  );
}

export default SingnedInLinks;