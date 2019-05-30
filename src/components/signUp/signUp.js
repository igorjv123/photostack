import React, { Component, PropTypes } from 'react';
import './style.css'
import TextInput from 'components/inputs/textInput'
import BtnSubmit from 'components/inputs/button'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'
import Base from 'components/base/base'

class RegistrationForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
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
    e.preventDefault()
    this.props.handleRegistrationSubmit(this.state)
    
  }
  render(){
    return(
      <div className='registrationPage'>
          <h2>Sign Up</h2>
          <form className='registrationForm' onSubmit={this.handleSubmit} >
            
              <TextInput type='text' id='firstName' placeholder='First Name' onChange={this.handleChange}/>
              <TextInput type='text' id='lastName' placeholder='Last Name' onChange={this.handleChange} />
           
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
)(RegistrationForm);
