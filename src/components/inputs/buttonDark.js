import React from 'react';
import './style.css'

const BtnSubmitDark = (props) => {
  return (
    <button style={props.style} className='btnSubmitDark' onClick={props.onclick}>{props.value}</button>
  );
}

export default BtnSubmitDark;