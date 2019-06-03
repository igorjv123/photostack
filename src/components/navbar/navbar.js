import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import SingnedInLinks from './signedInLinks'
import SingnedOutLinks from './signedOutLinks'
import logo from './logo.png'
import SearchBar from 'components/searchBar/searchBar'
import DropDown from 'components/dropDown/dropDown'
import BurgerMenu from 'components/burgerMenu/burgerMenu'
import {withRouter} from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      width:1024
    }
  }
  componentDidMount(){
    // window.onresize = function(e){
    //   console.log(window.screen.width)
    //   if(window.screen.width < 1024 && this.state.width >= 1024){
    //     this.setState({width:window.screen.width})
    //   }
    //   if(window.screen.width>1024 && this.state.width <= 1024){
    //     this.setState({width:window.screen.width})
    //   }
    // }
    window.onresize = (e) => {
      console.log(11)
      if(window.screen.width>700){
        this.setState({
          width:window.innerWidth,
          height: window.innerHeight-50 
        })
      }
    };
  }
  render(){
    return (
      <header>
          <div className = 'logo'>
              <BurgerMenu location={this.props.location}/>
              <Link to='/' className='logoText'> <img className = 'headerLogo' src={logo} alt='logo' /></Link>
              <Link to='/' className='logoText'> <span className='purple'>Photo</span>Stack</Link>
              
          </div>
          <div>
            
          </div>
          <nav>
              <SearchBar placeholder={'Search...'} button={'Search'}/>
              <DropDown/>
              <SingnedInLinks />  
              {/* <SingnedOutLinks /> */}
          </nav>
      </header>
    );
  }
}

export default withRouter(props => <Navbar {...props}/>);