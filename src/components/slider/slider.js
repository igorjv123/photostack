import React, { Component} from 'react';
import './style.scss'
import BtnSubmit from 'components/inputs/button'
import {NavLink} from 'react-router-dom'
const data = {
    properties: [
      {id:1, index:0, src:'https://s7d2.scene7.com/is/image/OliverPeoples/3B-2018Campaign-Tasya_Horz_Boudreau_SS18?scl=1'},
      {id:2, index:1, src:'https://cdn.motor1.com/images/mgl/Zq72Z/s1/mercedes-amg-gt-r-by-domanig.jpg'},
      {id:3, index:2, src:'https://www.culturalsurvival.org/sites/default/files/styles/max_2600x2600/public/7395984848_3072609d55_o.jpg?itok=r5KzX0-v'}
    ]
}

class MainSlider extends Component{
    constructor(props){
        super(props);
        this.sliderContainer = React.createRef();
        this.state = {
          properties: data.properties,
          property: data.properties[0],
          height: window.screen.width,
          width:1,
          height: 1
        }
      }
      nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
          property: data.properties[newIndex]
        })
      }
      prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
          property: data.properties[newIndex]
        })
      }
      componentWillMount(){
        this.setState({
          width:window.screen.width,
          height: window.innerHeight-50 
        })
  
      
      }
      componentDidMount(){
        window.onresize = (e) => {
          if(window.screen.width>700){
            this.setState({
              width:window.innerWidth,
              height: window.innerHeight-50 
            })
          }
        };
        this.interval = setInterval(()=>{
      
            if(this.state.property.index === data.properties.length-1){
              this.setState({property: this.state.properties[0]})
            }
            else(
              this.nextProperty()
            )
          }, 5000)
      }

      componentWillUnmount() {
        window.onresize = null
        clearTimeout(this.interval);
      }
      
      render(){
        const {properties, property, width, height} = this.state;
        
        return(
        <div className='slider' ref={this.sliderContainer} >
            <div className={`mainSlider active-slide-${property.index}`} style = {{ 'width':'inherit', 'height':height}}
            >
                <div className='sliderPhotoWrapper' 
                  style = {{'transform':`translateX(-${property.index*(100)}%)`, 'width':width, 'height':height}} 
                >
                    {
                      properties.map((property)=>
                      <div 
                        className='sliderImage' key={property.id} style = {{'backgroundImage':`url(${property.src})`, 'width':width, 'height':height, 'left': width*property.index}}
                      ></div>
                      )
                    }                                     
                </div>
                <div className='sliderText' style={{ }}>
                    <p className='mainSliderHeader'>Welcome to <span className='purple'>Photo</span><span className='purple'></span>Stack!</p>
                    <p className='mainSliderText'>Your personal free photo album</p>
                    <div className='mainSliderButtonsWrapper'>
                      <NavLink to='/signin' className=''> <BtnSubmit value='Sign In' /> </NavLink>
                      <p style={{"padding":"10px"}}> or </p>
                      <NavLink to='/signup' className=''> <BtnSubmit style={{'backgroundColor':'#fff', 'color': '#ff408c'}} value='Sign Up' /> </NavLink>
                    </div>
                </div>
            </div>
        </div>
        )  
    }
}

export default MainSlider;