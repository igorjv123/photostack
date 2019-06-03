import React from 'react';
import './style.css'
import {NavLink} from 'react-router-dom'
import AuthHOC from 'components/authHOC/authHOC'
import DropDownItem from 'components/dropDownItem/dropDownItem'

const SingnedInLinks = (props) => {
  return (
        <div className='navLinkContainer'>
            <NavLink to='/addphoto' className='navLinkItem'>Add Photo</NavLink>
            <div className='navProfileWrapper'>
              <img className='profileIcon' src={props.user.photo} alt='Profile'/>
              <div className='profileMenuWrapper'>
                <NavLink className='dropdownLink' to='/profile' >
                  <span className='dropDownItem'>My profile</span>
                </NavLink>
                <NavLink className='dropdownLink' to='/'>
                  <span className='dropDownItem'>Log out</span>
                </NavLink>
              </div>
            </div>
           
        </div>
  );
}

export default AuthHOC(SingnedInLinks);