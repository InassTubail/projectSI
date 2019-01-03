import React from 'react';
import Button from '../../Commponents/CommonComponent/Button';
import Input from '../../Commponents/CommonComponent/Input';
import './index.css';

/* onChange props under development */

const SignIn = () => (
  <div id="signInBox" className="signInBox">
    <div className="signInContainer">
      <h1 className="signInTitle">Sign in</h1>

      <Input
        id="email"
        className="email"
        type="text"
        name="email"
        placeholder="E-mail"
        value=""
      />
      <Input
        id="password"
        className="password"
        type="password"
        name="password"
        placeholder="Password"
      />
      <Input
        id="signin_submit"
        className="signin_submit"
        type="submit"
        name="signin_submit"
        placeholder="signup_submit"
        value="Sign me in"
      />
      <a>You don't have an account? Sign up</a>
    </div>
  </div>
);
export default SignIn;
