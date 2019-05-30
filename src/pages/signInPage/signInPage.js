import React from 'react';
import Content from 'components/content/content'
import './style.css'
import SignIn from 'components/signIn/signIn'

function SignInPage() {
  return (
    <div>
        <div id='mainContainer'>
            <Content margin='60px 20px 20px 20px'> 
              <SignIn/>
            </Content>
        </div>
    </div>
  );
}

export default SignInPage;
