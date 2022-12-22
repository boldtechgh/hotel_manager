import React, { useState } from "react";
import GoogleIcon from "../../images/google.png";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { Marginer } from "../marginer";
import { UserAuth } from "../../components/firebase/AuthContext";

export function SignUp() {
  const [formData, setFormData] = useState({
    fistName: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    passwordVerify: "",
  });

  const { googleSignIn, user, passwordSignUp } = UserAuth();
  const { firstName, lastName, username, email, password, passwordVerify } =
    formData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    passwordSignUp(email, password);
  };

  return (
    <div className="sign-in">
      <div className="title-container">
        <h1 className="Tittle">
          Welcome to <span>Hotelica</span>
        </h1>
        <div className="account">
          <p>Have an Account?</p>
          <a href="/signin">Sign in</a>
        </div>
      </div>

      <h2>Sign up</h2>

      <div>
        <button className="google-btn">
          <img src={GoogleIcon} alt="Google icon" />
          Sign up with Google
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="merge-input">
          <FormInput
            inputType="input"
            name="firstName"
            type="text"
            handleChange={handleChange}
            value={firstName}
            placeholder="First Name"
            required
          />
          <FormInput
            inputType="input"
            name="lastName"
            type="text"
            handleChange={handleChange}
            value={lastName}
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <FormInput
            inputType="input"
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
            placeholder="Email address"
            required
          />
          <FormInput
            inputType="input"
            name="username"
            type="text"
            handleChange={handleChange}
            value={username}
            placeholder="Username"
            required
          />
        </div>
        <div className="merge-input">
          <FormInput
            inputType="input"
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            placeholder="Password"
            required
          />
          <FormInput
            inputType="input"
            name="passwordVerify"
            type="passwordVerify"
            value={passwordVerify}
            handleChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <Marginer direction="vertical" margin={50} />
        <CustomButton type="submit"> Sign Up </CustomButton>
      </form>
    </div>
  );
}
