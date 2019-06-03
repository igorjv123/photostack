import React from 'react';
import Content from 'components/content/content'
import './style.css'
import CardContainer from 'components/cardContainer/cardContainer'
import AuthHOC from 'components/authHOC/authHOC'
import RadioButtonWrapper from 'components/radioButtonWrapper/radioButtonWrapper'
import CheckboxInput from 'components/checkbox/checkbox'
import FilterSectionWrapper from 'components/filterSectionWrapper/filterSectionWrapper'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'

class ProfilePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      file:null,
      radio:[
        {id:1, label:'Today'},
        {id:7, label:'Last week'},
        {id:30, label:'Last month'},
        {id:'all', label:'All time'},
      ],
      filter:{  
        tags:[],
        dateFrom:'',
        dateTo:'',
        date:'all'
    },
    }
  }
  onDone=(a)=>{
    this.setState({file:a})
  }
  handleCategoryClick = (e) => {
    this.props.handleItemSubmit(e.target.id)
    window.scroll(0, window.innerHeight-50)
    this.toogleMenu()

}
handleTagClick = (e) => {
    let tags = this.state.filter.tags;
    if(e.target.checked){
      tags.push(e.target.id)
      this.setState({filter:{
        tags:tags
      }},()=>this.props.handleChangeFilter(this.state.filter))
    }
    else{
      let index = tags.indexOf(e.target.id)
      let state = this.state;
     
      tags.splice(index)
      state.filter.tags = tags
      this.setState({state})
    }
    this.props.handleChangeFilter(this.state.filter)
  }
  handleRadioClick = (id) => {
    let state = this.state;
    state.filter.date = id
    this.setState({state})
    this.props.handleChangeFilter(state.filter)
  }
  render(){
    const {firstName, lastName, createdAt, photo} = this.props.user
    return (
      <div>
          <div id='mainContainer'>
            <div className='profileInfo'> 
              <img className='profilePhoto' src={photo} alt=''/>
              <p className='userFullName'>{firstName + ' ' + lastName }</p>
              <FilterSectionWrapper title='Tags'>
                {this.props.tags.map((tag)=>
                  <CheckboxInput key={tag}  onChange={this.handleTagClick} id={tag} label={tag}/>
                  )}
              </FilterSectionWrapper>
              <FilterSectionWrapper title='Added'>
                <RadioButtonWrapper handleRadioClick={this.handleRadioClick} buttons={this.state.radio}/>
              </FilterSectionWrapper>
            </div>
              <Content> 
                <CardContainer />
              </Content>       
          </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthHOC(ProfilePage));