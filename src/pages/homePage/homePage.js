import React from 'react';
import Content from 'components/content/content'
import './style.css'
import MainSlider from 'components/slider/slider'
import Sidebar from 'components/sidebar/sidebar'
import CardContainer from 'components/cardContainer/cardContainer'

class SignInPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filters:{}
    }
  }
  handleFilterChange = (filters) => {
    this.setState({filters:filters})
  }
  render(){
    return (
      <div>
          <MainSlider />
          <div id='mainContainer'>
            <Sidebar/>
            <Content>
              <CardContainer/>
            </Content>
          </div>
      </div>
    );
  }
}

export default SignInPage;
