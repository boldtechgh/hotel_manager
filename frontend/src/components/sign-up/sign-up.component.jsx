import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

import './sign-up.styles.scss';

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
        <h1 className="Tittle">Hotel Manager</h1>
        <h2>Complete the form below</h2>

            <form onSubmit={this.handleSubmit}>
            <div className='data1'>
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
            placeholder= 'Email'
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
          <FormInput
            name='address'
            type='text'
            handleChange={this.handleChange}
            value={this.state.address}
            placeholder= 'Address'
            required
          />
          <FormInput
            name='phoneNumber'
            type='number'
            value={this.state.phoneNumber}
            handleChange={this.handleChange}
            placeholder= 'Phone Number'
            required
          />
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
          <CustomButton type='submit'> Sign Up </CustomButton>
          <br />
          <Link to="/"><p>I don't have an account</p></Link>
        </form>
      </div>
    );
  }
}

export default SignUp;
