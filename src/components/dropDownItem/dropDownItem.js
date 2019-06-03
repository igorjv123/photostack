import React from 'react'
import './style.scss'
import {NavLink} from 'react-router-dom'


const DropDowmItem = (props) => {
    return (
        <NavLink className='dropDownItem' onClick={props.onClick} style={{display:'block'}} id={props.content} to='/' >{props.content}</NavLink>
    )
}
export default DropDowmItem;