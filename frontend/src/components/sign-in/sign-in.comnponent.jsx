import React, { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../images/google.png";
import "./sign-in.styles.scss";
import { Marginer } from "../marginer";
import { UserAuth } from "../../components/firebase/AuthContext";
// const auth = getAuth();

export function SignIn(props) {
  // !Create google SigninProfile

  //google
  const { googleSignIn, passwordSignIn } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();

      // if (login) return (document.location.href = "/dashboard/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { email, password } = formData;

  const handleSubmit = async (event) => {
    event.preventDefault();

    await passwordSignIn(email, password);
  };

  return (
    <div className="sign-in">
      <div className="title-container">
        <h1 className="Tittle">
          Welcome to <span>Hotelica</span>
        </h1>
        <div className="account">
          <p>No Account?</p>
          <a href="/signup">Sign up</a>
        </div>
      </div>

      <h2>Sign in</h2>
      <Marginer direction="vertical" margin={60} />
      <div>
        <button className="google-btn" onClick={handleGoogleSignIn}>
          <img src={GoogleIcon} alt="Google icon" />
          Sign in with Google
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <FormInput
          inputType="input"
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          placeholder="Username or email address"
          required
        />
        <Marginer direction="vertical" margin={20} />
        <FormInput
          inputType="input"
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          placeholder="Password"
          required
        />

        <Link to="/signup">
          <p>Forgot password?</p>
        </Link>
        <Marginer direction="vertical" margin={40} />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
}
