import React from 'react';
import Content from 'components/content/content'
import './style.css'
import AddPhoto from 'components/addPhoto/addPhoto'
   
class AddPhotoPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      photo:{
        image:null
      }
      
    }
  }
  render(){
    return (
      <div id='mainContainer'>
        <Content margin='60px 20px 20px 20px'> 
          <AddPhoto/>
        </Content>         
      </div>
    );
  }
}
export default AddPhotoPage;


  