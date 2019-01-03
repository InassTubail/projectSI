import React from 'react';
import Button from '../../Commponents/CommonComponent/Button';
import Input from '../../Commponents/CommonComponent/Input';
import './index.css';

/*
These Functions under Development
*/
const signUpByFacebook = () => {};
const signUpByTwitter = () => {};
const signUpByGoogle = () => {};

/* onChange props under development */

const SignUp = () => (
  <div id="login-box">
    <div className="left">
      <h1 className="signUpTitle">Sign up</h1>
      <Input
        id="username"
        className="username"
        type="text"
        name="username"
        placeholder="Username"
      />
      <Input
        id="email"
        className="email"
        type="text"
        name="email"
        placeholder="E-mail"
      />
      <Input
        id="password"
        className="password"
        type="password"
        name="password"
        placeholder="Password"
      />
      <Input
        id="password2"
        className="password2"
        type="password"
        name="password2"
        placeholder="Retype password"
      />
    </div>

    <div className="right">
      <Button
        id="social-signin-facebook"
        className="social-signin facebook"
        value="Sign up with facebook"
        onClick={() => signUpByFacebook()}
      />
      <Button
        id="social-signin-twitter"
        className="social-signin twitter"
        value="Sign up with Twitter"
        onClick={() => signUpByTwitter()}
      />
      <Button
        id="social-signin-google"
        className="social-signin google"
        value="Sign up with Google+"
        onClick={() => signUpByGoogle()}
      />
    </div>
    <div className="or">OR</div>

    <div className="submitOrSignUp">
      <Input
        id="signup_submit"
        className="signup_submit"
        type="submit"
        name="signup_submit"
        placeholder="signup_submit"
        value="Sign me up"
      />
      <a>Already have an account? Sign In</a>
    </div>
  </div>
);
export default SignUp;
