import React from 'react'
import './style.scss'
import DropDownItem from 'components/dropDownItem/dropDownItem'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'

class DropDown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filters:[
                'Sea',
                'Automobiles',
                'Mountains',
                'Nature',
                'Children', 
                'People', 
                'City', 
                'Sport', 
                'Rest'
            ]
        }
    }
    handleItemClick = (e) => {
        this.props.handleItemSubmit(e.target.id)
    }
    render(){
        return(
                <div className="dropdown">
                    <span className='navLinkItem dropDownTitle'>Categories</span>
                    <div className="dropdownContent">
                        {this.props.tags.map((item)=>
                            <DropDownItem key={item} onClick={this.handleItemClick} content={item}/>
                            )}
                    </div>
                </div>
        )
    }
} 
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DropDown);
  