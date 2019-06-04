import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import SingnedInLinks from './signedInLinks'
import SingnedOutLinks from './signedOutLinks'
import logo from './logo.png'
import SearchBar from 'components/searchBar/searchBar'
import DropDown from 'components/dropDown/dropDown'
import BurgerMenu from 'components/burgerMenu/burgerMenu'
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      width:1024
    }
  }
  render(){
    return (
      <header>
          <div className = 'logo'>
              <BurgerMenu location={this.props.location}/>
              <Link to='/' className='logoText'> <img className = 'headerLogo' src={logo} alt='logo' /></Link>
              <Link to='/' className='logoText'> <span className='purple'>Photo</span>Stack</Link>
              
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