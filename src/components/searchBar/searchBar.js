import React from 'react';
import './style.scss'
import BtnSubmit from 'components/inputs/button'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }
    handleInputChange = (e) => {
        this.setState({value:e.target.value}, ()=> this.props.onHandleSearch(this.state.value))
        window.scroll(0, window.innerHeight-50)
        window.scroll(0, window.innerHeight-50)
        this.props.onHandleSearch(this.state.value)

    }
    handleSearchSubmit = () => {
        this.props.onHandleSearch(this.state.value)
    }
    render(){
        return (
        <div className='searchBar'>
            <input type='text' placeholder={this.props.placeholder} onChange={this.handleInputChange}/>
            <NavLink to='/'><BtnSubmit style={{width:'80px', height:'30px', fontSize:'1em', padding:0}} onClick={this.handleSearchSubmit} value={this.props.button}/></NavLink>
        </div>
        );
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar);
