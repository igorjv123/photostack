import React from 'react';
import './style.css'
import Moment from 'react-moment'
const Card = (props) => {
    const style={
        backgroundImage: "url(" + props.src + ")"
    }
    return (
        <div id={props.id} className='cardItem' style={style} onClick={()=>props.onClick(props.card)}>
            <div className='cardInfo'>
                <p className='cardTitle'>{props.title?props.title:'Autumn day'}</p>
                <p className='cardDate'><Moment format='DD/MM/YYYY'>{props.date}</Moment></p>
            </div>
        </div>
    );
}
export default Card;