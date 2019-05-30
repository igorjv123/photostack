import React from 'react';
import './style.css'

const Content = (props) => {
  return (
        <div className='contentContainer' style={{'margin':props.margin?`${props.margin}`:'',
          'minHeight':`${700}px`}}>
            {props.children}
        </div>
  );
}

export default Content;