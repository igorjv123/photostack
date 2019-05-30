import React from 'react';
import './style.scss'

const DateInput = (props) => {
  return (
    <label className='datelabel'>
        <span>{props.label}</span>
        <input className='dateInput' type='date' id={props.id} placeholder={props.placeholder} onChange={props.onChange}/>
    </label>
  );
}

export default DateInput;