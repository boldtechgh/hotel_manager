import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrandLogo } from '../../components/Logo';
import { SignIn } from '../../components/sign-in/sign-in.comnponent';
import { SignUp } from '../../components/sign-in/sign-up.component';
import { AccountContext } from './context';
import './Login.styles.scss';

const Login = () => {
    const initialActive = useParams();
    const [active, setActive] = useState(initialActive ? initialActive : 'signin');

    const switchActive = (active) => {
        setTimeout(() => setActive(active), 400);
    };

    const switchToSignUp = () => {
        switchActive('signup');
    };

    const switchToSignin = () => {
        switchActive('signin');
    };

    const contextValue = {
        switchToSignUp, switchToSignin
    };

    return (
    <AccountContext.Provider value={contextValue}>
    <div className='sign-in-and-sign-up'>
    <BrandLogo hideLogo />
      {active.action === 'signin' && <SignIn />}
      {active.action === 'signup' && <SignUp />}
    </div>
    </AccountContext.Provider>
    
    )
};
  

export default Login;
