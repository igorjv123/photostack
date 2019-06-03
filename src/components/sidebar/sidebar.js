import React, {Component} from 'react';
import './style.scss'
import CheckboxInput from 'components/checkbox/checkbox'
import FilterSectionWrapper from 'components/filterSectionWrapper/filterSectionWrapper'
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from 'react-redux'
import RadioButtonWrapper from 'components/radioButtonWrapper/radioButtonWrapper'

class Sidebar extends Component {
  constructor(props) {
        super(props);

        this.state = {
          height: 1000,
          scroll:0,
          filter:{  
            tags:[],
            dateFrom:'',
            dateTo:'',
            date:'all'
          },
          radio:[
            {id:1, label:'Today'},
            {id:7, label:'Last week'},
            {id:30, label:'Last month'},
            {id:'all', label:'All time'},
          ],
         activeTags:[],
    }
  }
  handleDateSubmit = () => {
    this.props.handleChangeFilter(this.state.filter)
   
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
  handleDateChange = (e) => {
    var time = {...this.state}
    time.filter[e.target.id] = e.target.value
    this.setState({...time});
  }
  handleScroll = () => {
      this.setState({scroll: window.scrollY});
  }
  componentWillMount(){
    this.setState({height:window.outerHeight-50})
  }
  componentDidMount = () => {
    if(this.props.filter.tags[0]){
      window.scroll(0, window.innerHeight-50)
    }
    if(this.props.search.length>0){
      window.scroll(0, window.innerHeight-50)

    }
    const el = document.querySelector('#mainContainer');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.onscroll = () => {
      this.handleScroll()
    }
  }
  componentWillUnmount(){
    window.onscroll = null;
  }
  handleRadioClick = (id) => {
    let state = this.state;
    state.filter.date = id
    this.setState({state})
    this.props.handleChangeFilter(state.filter)
  }
  render() {
    return (
      <div id={'sidebar'} style={{'height':`${this.state.height}'px'`}} className={`sidebarContainer ${this.state.scroll+50 > this.state.top? "fixed-nav" : ""}`}>
        <p className='filterTitle'>Filter</p>
        <FilterSectionWrapper title='Tags'>
          {this.props.tags.map((tag)=>
             <CheckboxInput key={tag}  onChange={this.handleTagClick} id={tag} label={tag}/>
            )}
        </FilterSectionWrapper>
        <FilterSectionWrapper title='Added'>
          <RadioButtonWrapper handleRadioClick={this.handleRadioClick} buttons={this.state.radio}/>
        </FilterSectionWrapper>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);