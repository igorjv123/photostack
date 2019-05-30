import React, { Component} from 'react';
import './style.css'
import TextInput from 'components/inputs/textInput'
import BtnSubmit from 'components/inputs/button'
import { mapStateToProps, mapDispatchToProps } from "./container";
import {connect} from 'react-redux'

class SignIn extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = (e) => { 
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    this.props.handleLoginSubmit(this.state)
    e.preventDefault()
  }
  render(){
    return(
      <div className='registrationPage'>
          <h2>Sign In</h2>
          <form className='registrationForm' onSubmit={this.handleSubmit} >
                       
              <TextInput type='text' id='email' placeholder='E-mail' onChange={this.handleChange}/>
              <TextInput type='password' id='password' placeholder='Password' onChange={this.handleChange}/>
              
              <BtnSubmit value='Submit'/>

          </form>
          
          
      </div>
    )  
    
  }
  
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);