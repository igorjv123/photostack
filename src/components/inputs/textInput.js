import React from 'react';
import './style.css'

const TextInput = (props) => {
  return (
    <input className='textInput' type={props.type} id={props.id} placeholder={props.placeholder} onChange={props.onChange}/>
  );
}

export default TextInput;