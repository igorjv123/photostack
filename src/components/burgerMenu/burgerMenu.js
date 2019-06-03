import React from 'react';
import './style.scss'
import AuthHOC from 'components/authHOC/authHOC'
import FilterSectionWrapper from 'components/filterSectionWrapper/filterSectionWrapper'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'
import DropDownItem from 'components/dropDownItem/dropDownItem'
import BurgerMenuProfile from 'components/burgerMenuProfile/burgerMenuProfile'
import RadioButtonWrapper from 'components/radioButtonWrapper/radioButtonWrapper'
import CheckboxInput from 'components/checkbox/checkbox'

class BurgerMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            toogleMenu: false,
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
    toogleMenu = () => {
        this.setState({...this.state, toogleMenu: !this.state.toogleMenu})
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
        const {toogleMenu} = this.state;
        const {user} = this.props;
        const { pathname } = this.props.location
        return(
            <div id="burgerMenu">
                <div onClick={this.toogleMenu} className= 'burgerIconWrapper'>
                    <p className={!toogleMenu?'burgerIcon':'burgerIconActive'}></p>
                    <p className={!toogleMenu?'burgerIcon':'burgerIconActive'}></p>
                    <p className={!toogleMenu?'burgerIcon':'burgerIconActive'}></p>
                </div>
                <div onClick={this.toogleMenu} style={{display:toogleMenu?'block':'none'}} className='darkWrapperClose'></div>
                <div 
                    // style={{height: window.outerHeight}} 
                    id='burgerMenuContent' 
                    className={`burgerMenuContent ${toogleMenu?'show':null}`}>
                        <BurgerMenuProfile user={user}/>
                        <div className='burgerMenuItems'>
                            <FilterSectionWrapper title='Categories'>
                                {this.props.tags.map((item)=>
                                    <DropDownItem  onClick={this.handleCategoryClick} key={item} content={item}/>
                                )}
                            </FilterSectionWrapper>
                            {pathname==='/' || pathname === '/profile'?
                            <div>
                                <FilterSectionWrapper title='Filter Tags'>
                                {this.props.tags.map((tag)=>
                                    <CheckboxInput key={tag}  onChange={this.handleTagClick} id={tag} label={tag}/>
                                    )}
                               
                                </FilterSectionWrapper>
                            <FilterSectionWrapper title='Filter Date'>
                                <RadioButtonWrapper handleRadioClick={this.handleRadioClick} buttons={this.state.radio}/>
                            </FilterSectionWrapper>
                            </div>
                            :
                                    null
                            }
                        </div>
                        
                       

                </div>
                
        </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthHOC(BurgerMenu));
