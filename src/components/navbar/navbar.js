import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'
import SingnedInLinks from './signedInLinks'
import SingnedOutLinks from './signedOutLinks'
import logo from './logo.png'
import SearchBar from 'components/searchBar/searchBar'
import DropDown from 'components/dropDown/dropDown'
const Navbar = () => {
  return (
    <header>
        <div className = 'logo'>
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

export default Navbar;