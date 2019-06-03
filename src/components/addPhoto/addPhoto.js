import React from 'react';
import './style.scss'
import DragAndDropWrapper from 'components/dragAndDropWrapper/dragAndDropWrapper'
import TextInput from 'components/inputs/textInput'
import BtnSubmit from 'components/inputs/button'
import BtnSubmitDark from 'components/inputs/buttonDark'
import CheckboxInput from 'components/checkbox/checkbox'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'
import AuthHOC from 'components/authHOC/authHOC'
import { withRouter } from 'react-router-dom'

class AddPhoto extends React.Component{
  constructor(props){
    super(props)
    let { firstName, lastName, _id,  } = props.user;
    this.state = {
      
      photo:{
        title:'',
        description:'',
        tags: [],
        private:false,
        image:null,
        authorId:_id,
        authorFullName: firstName + ' ' + lastName,
        date: null,
      }

    }
  }
  handlCancelClick = () => {
    let state = this.state;
    state.photo.image = null
    this.setState(state)
  }
  onDone = (image) => {
    let state = this.state;
    state.photo.image = image
    console.log(image)
    this.setState(state)
  }
  handleInputChange = (e) =>{
    let state = this.state;
    state.photo[e.target.id] = e.target.value
    this.setState(state)
  }
  handleCheckClick = (e) =>{
    let state = this.state;
    state.photo.private = !state.photo.private
    this.setState(state);
    
  }
  handleTagClick = (e) => {
    let state = this.state;
    let tags = state.photo.tags.slice(0);
    let index = tags.indexOf(e.target.id)
    if(index !== -1){
      tags.splice(index)
    }
    else{
      tags.push(e.target.id)
    }
    state.photo.tags = tags.slice(0);
    this.setState({state})
  }
  handleSubmitClick = () => {
    let date = new Date()
    let state = this.state.photo;
    state.date = date
    this.setState({state}, ()=>{
      this.props.addNewPhoto(this.state.photo)
      this.props.history.push('/')
    })
 
  }
  render(){
    return (
      <div>
        <div  className='addPhotoWrapper'>      
          <div className='dragAndDropContainer'>
              {this.state.photo.image?
                <div className='photoWrapper'> 
                 {/* style={{backgroundImage:`url(${this.state.photo.image.base64})`}}> */}
                   <img className='addPhoto' src={this.state.photo.image.base64} alt='' />
                </div>
              :
                <DragAndDropWrapper
                    onDone = {this.onDone}
                />
              }                       
              
          </div>  
          <div className='addPhotoInfo'>
              <TextInput type='text' id='title' placeholder='Title' onChange={this.handleInputChange} />
              <TextInput type='text' id='description' placeholder='Description' onChange={this.handleInputChange} />
              <div className='addPhotoTags'>
              {this.props.tags.map((tag)=>
             <CheckboxInput key={tag}  onChange={this.handleTagClick} id={tag} label={tag}/>
              )}
              </div>
          </div>  
        </div>
        <div className='addPhotoButtons'>
            {this.state.photo.image?
              <BtnSubmitDark className='addPhotoBtnCancel whiteBtn'
              onClick={this.handlCancelClick} 
              value='Change photo'/>
              :
              null  
            }          
            <BtnSubmit className='addPhotoBtnCancel'
              onClick={this.handleSubmitClick} 
              value='Submit'/>            
            <CheckboxInput onChange={this.handleCheckClick} id='private' label='Private'/>
          </div>
    </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthHOC(withRouter(props => <AddPhoto {...props}/>)));



  