import React from 'react';
import './style.css'

const BtnSubmit = (props) => {
  return (
    <button style={props.style} className='btnSubmit' disabled={props.disabled} onClick={props.onClick}>{props.value}</button>
  );
}

export default BtnSubmit;