import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import GoogleIcon from '../../images/google.png';

import './sign-in.styles.scss';
import { Marginer } from '../marginer';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
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
              <button className='google-btn'><img src={GoogleIcon} alt="Google icon" />Sign in with Google</button>
            </div>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            placeholder= 'Username or email address'
            required
          />
          <Marginer direction='vertical' margin={20} />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
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
}

export default SignIn;
