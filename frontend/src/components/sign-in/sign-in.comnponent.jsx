import React, { useState,useEffect } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '../../images/google.png';
import './sign-in.styles.scss';
import { Marginer } from '../marginer';
import { UserAuth } from '../../components/firebase/AuthContext';

export function SignIn (){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  const handleChange = event => {
    const { value, name } = event.target;

    {name === 'email' && setEmail(value)}
    {name === 'password' && setPassword(value)}
    this.setState({ [name]: value });
  };
  const {googleSignIn,user} = UserAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (user) {
             navigate('/account');
        }
    }, [user]);

    return (
        <div className='sign-in'>
          <div className='title-container'>
            <h1 className="Tittle">Welcome to <span>Hotelica</span></h1>
            <div className='account'>
              <p>No Account?</p>
              <a href="/signup">Sign up</a>
            </div>
          </div>
            
            <h2>Sign in</h2>
            <Marginer direction="vertical" margin={60} />
            <div>
              <button className='google-btn'><img src={GoogleIcon} alt="Google icon" onClick={handleGoogleSignIn} />Sign in with Google</button>
            </div>

        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            placeholder= 'Username or email address'
            required
          />
          <Marginer direction='vertical' margin={20} />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            placeholder='Password'
            required
          />

          <Link to="/signup"><p>Forgot password?</p></Link>
          <Marginer direction='vertical' margin={40} />
          <CustomButton type='submit'> Sign in </CustomButton>
               
                
        </form>
      </div>
    );
}
