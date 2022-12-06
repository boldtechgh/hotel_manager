import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

import GoogleIcon from '../../images/google.png';
import { Marginer } from '../marginer';

// import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
          firstName: '',
          lastName: '',
        username: '',
          email: '',
          address: '',
          phoneNumber:'',
        passwordVerify: '',
        
        password: '',

      
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
              <p>Have an Account?</p>
              <a href="/signin">Sign in</a>
            </div>
          </div>
            
            <h2>Sign up</h2>

            {/* <div>
              <button className='google-btn'><img src={GoogleIcon} alt="Google icon" />Sign in with Google</button>
            </div> */}

            <form onSubmit={this.handleSubmit}>
            <div className='merge-input'>
          <FormInput
            name='firstName'
            type='text'
            handleChange={this.handleChange}
            value={this.state.firtName}
            placeholder= 'First Name'
            required
          />
          <FormInput
            name='lastName'
            type='text'
            handleChange={this.handleChange}
            value={this.state.lastName}
            placeholder= 'Last Name'
            required
                    />
                </div>
                <div>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            placeholder= 'Email address'
            required
          />
          <FormInput
            name='username'
            type='text'
            handleChange={this.handleChange}
            value={this.state.username}
            placeholder= 'Username'
            required
                    />
                    </div>
          <div className='merge-input'>
            <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            placeholder= 'Password'
            required
          />
          <FormInput
            name='passwordVerify'
            type='passwordVerify'
            value={this.state.passwordVerify}
            handleChange={this.handleChange}
            placeholder= 'Confirm Password'
            required
          />
          </div>
          <Marginer direction="vertical" margin={50} />
          <CustomButton type='submit'> Sign Up </CustomButton>
          
        </form>
      </div>
    );
  }
}

export default SignUp;
