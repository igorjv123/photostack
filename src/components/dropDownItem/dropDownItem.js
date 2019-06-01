import React from 'react'
import './style.scss'
import {NavLink} from 'react-router-dom'


const DropDowmItem = (props) => {
    return (
        <div className='dropDownItem' onClick={props.onClick}>
            <NavLink style={{display:'block'}} id={props.content} to='/' >{props.content}</NavLink>
        </div>
    )
}
export default DropDowmItem;