import React from 'react'
import './style.scss'
import OpenedPhotoContainer from 'components/openedPhotoContainer/openedPhotoContainer'
const PopUp = (props) => {
      
      return (
        <div className='popup' onClick={props.closePopup}>
          <div className='popup_inner'>
            <OpenedPhotoContainer images={props.images} activeImage={props.image}/>
          </div>
        </div>
      );
  }
  export default PopUp;
  