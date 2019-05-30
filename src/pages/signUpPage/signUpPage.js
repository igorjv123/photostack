import React from 'react';
import Content from 'components/content/content'
import './style.css'
import MainSlider from 'components/slider/slider'
import SignUp from 'components/signUp/signUp'

function SignUpPage() {
  return (
    <div>
        <div id='mainContainer'>
            <Content margin='60px 20px 20px 20px'> 
              <SignUp/>
            </Content>
        </div>
    </div>
  );
}

export default SignUpPage;
