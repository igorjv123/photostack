import React from 'react';
import './style.scss'

const CheckboxInput = (props) => {
  return (
    <label className="container">{props.label}
        <input defaultChecked={props.defaultChecked} type="checkbox" id={props.id} checked={props.checked} onChange={props.onChange}/>
        <span className="checkmark"></span>
    </label>
  );
}

export default CheckboxInput;