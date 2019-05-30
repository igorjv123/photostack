import React from 'react';
import Navbar from './components/navbar/navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './style.css'
// import RegistrationForm from 'components/re gistration/registration'
import SignInPage from 'pages/signInPage/signInPage'
import SignUpPage from 'pages/signUpPage/signUpPage'
import HomePage from 'pages/homePage/homePage'
import ProfilePage from 'pages/profilePage/profilePage'
import AddPhotoPage from 'pages/addPhotoPage/addPhotoPage'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>       
          <Switch>
            <Route exact path = '/' component={HomePage} />
            <Route path = '/signup' component={SignUpPage} />
            <Route path = '/profile' component={ProfilePage} />
            <Route path = '/signin' component = {SignInPage} />
            <Route path = '/addphoto' component = {AddPhotoPage} />
            
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
