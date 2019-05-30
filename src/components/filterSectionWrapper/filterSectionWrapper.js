import React from 'react';
import './style.scss'

const FilterSectionWrapper = (props) => {
  return (
    <div className='filterSection'>
        <p className='filtertSectionTitle'>{props.title}</p>
        {props.children}
    </div>    
  );
}

export default FilterSectionWrapper;