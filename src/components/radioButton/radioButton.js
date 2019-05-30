import React from 'react';
import './style.scss'

const RadioButton = (props) => {
    return (
        <label className="radioContainer">{props.label}
        <input checked={props.checked} type="radio" defaultChecked={props.defaultChecked} name='radio' id={props.id} onClick={props.onChange}/>
        <span className="radioCheckmark"></span>
      </label>
    );
}

export default RadioButton;