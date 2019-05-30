import React from 'react';
// import './style.scss'
import RadioButton from 'components/radioButton/radioButton'


class RadioButtonWrapper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeButton : 'all'
        }
    }
    handleClick = (e) => {
        this.props.handleRadioClick(e.target.id)
    }
    render(){
        const buttons = this.props.buttons
            .map((button)=><RadioButton key={button.id} id={button.id} label={button.label} defaultChecked={button.id==this.state.activeButton}  />)
        return (
            <div onChange={this.handleClick}>
                {buttons}
            </div>
        );
    }
}

export default RadioButtonWrapper;