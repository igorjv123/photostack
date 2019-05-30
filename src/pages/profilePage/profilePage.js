import React from 'react';
import Content from 'components/content/content'
import './style.css'
import CardContainer from 'components/cardContainer/cardContainer'
import AuthHOC from 'components/authHOC/authHOC'


class ProfilePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      file:null
    }
  }
  onDone=(a)=>{
    this.setState({file:a})
  }
  render(){
    const {firstName, lastName, createdAt, photo} = this.props.user
    return (
      <div>
          <div id='mainContainer'>
            <div className='profileInfo'> 
              <img className='profilePhoto' src='https://cdn.pixabay.com/photo/2015/08/28/18/03/guy-912234_960_720.jpg'/>
              <p className='userFullName'>{firstName + ' ' + lastName }</p>
            </div>
              <Content margin='60px 20px 20px 350px'> 
                <CardContainer />
              </Content>       
          </div>
      </div>
    );
  }
}

export default AuthHOC(ProfilePage);