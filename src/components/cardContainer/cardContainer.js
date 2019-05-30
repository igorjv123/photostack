import React, { Component } from 'react';
import './style.css'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'
import Card from 'components/card/card'
import PopUp from 'components/popUp/popUp'
import LoadingImage from 'images/loading.gif'
import Pagination from 'components/pagination/pagination';

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
    };
  }
  handleClick = (e) => {
  }
  componentWillReceiveProps(nextProps){
    this.setState({loading:false})
    if (nextProps.filters !== this.props.filters || nextProps.search !== this.props.search  ) {
      this.setState({loading:true},
        ()=>this.props.getImagesSubmit({page:this.state.page,amount:10, filters: this.props.filters, search: this.props.search}))
    }
  } 
  componentWillMount(){
     let page = this.state.page
      this.setState({filters:this.props.filters}, ()=>{
        this.props.getImagesSubmit({page:page,amount:10, filters: this.props.filters, search: this.props.search})}
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
    if(e.target.className === 'popup'){
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
   
  }
  handlePagClick = (index) =>{
    let amount = this.props.amount?this.props.amount:10
    this.setState({page:index, loading:true}, ()=>{
      this.props.getImagesSubmit({page:index,amount:amount, filters:this.props.filters, search: this.props.search});
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
)(CardContainer);
