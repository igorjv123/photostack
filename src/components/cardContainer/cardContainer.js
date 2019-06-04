import React, { Component } from 'react';
import './style.css'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'
import Card from 'components/card/card'
import PopUp from 'components/popUp/popUp'
import LoadingImage from 'images/loading.gif'
import Pagination from 'components/pagination/pagination';
import AuthHOC from 'components/authHOC/authHOC'
import { withRouter } from 'react-router-dom';

class CardContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      images:{},
      showPopup: false,
      openCard: null,
      page:1,
      loading:true,
      filters:[],
      location: props.location.pathname
    };
  }
  handleClick = (e) => {
  }
  componentWillReceiveProps(nextProps){
    this.setState({loading:false})
    if (
        nextProps.filters !== this.props.filters 
        || nextProps.search !== this.props.search 
        || nextProps.deletePhoto !== this.props.deletePhoto 
      ) {
      this.setState({loading:true},
        ()=>this.props.getImagesSubmit({page:this.state.page, amount:10, filters: this.props.filters, search: this.props.search, location:this.state.location, userId: this.props.user._id}))
    }
  } 
  componentWillMount(){
  
     let page = this.state.page
      this.setState({filters:this.props.filters}, ()=>{
        this.props.getImagesSubmit({page:page, amount:10, filters: this.props.filters, search: this.props.search, location:this.state.location, userId: this.props.user._id})}
        )
  }

  renderCards(images){
    let items;
    if(images){
      items = images.map((card)=> 
         <Card onClick = {()=>this.togglePopup(card)} id={card._id} key = {card._id} title={card.title} src = {card.image.base64} date = {card.date}/>
      )
    } 
    else{
      items = <h2>There are no photos :(</h2>
    }
    return items;
  } 
  togglePopup = (card) => {
    this.setState({
      openCard: card,
      showPopup: !this.state.showPopup
    });
  }
  closePopup = (e) => {
    if(e.target.className === 'popup' || e.target.className === 'deleteButton'){
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
   
  }
  handlePagClick = (index) =>{
    let amount = this.props.amount?this.props.amount:10
    this.setState({page:index, loading:true}, ()=>{
      this.props.getImagesSubmit({page:index,amount:amount, filters:this.props.filters, search: this.props.search,location:this.state.location, userId: this.props.user._id});
    })
  }
  render(){
      const images = this.props.images.data
      let items = !this.state.loading?this.renderCards(images):<img className='cardContainerLoading' alt='' style={{height:142, width:400}} src={LoadingImage}/>
      let image = this.state.openCard
    return(
      <div>
        <div className='cardContainer'>
          {items}
          {this.state.showPopup ? 

            <PopUp
              image = {image}
              closePopup={this.closePopup}
            />
            : null
          }
        </div>
         {!this.state.loading?<Pagination onClick={this.handlePagClick} amount={this.props.images.dataLength} active={this.state.page}/>:null}
      </div>
    )  
    
  }
  
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthHOC(withRouter(props => <CardContainer {...props}/>)));
