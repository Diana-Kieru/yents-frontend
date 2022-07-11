import React from 'react';
import './SignUpForm.css'

const SignUpForm = () => {
  return (
    <div className="sign-up-container">
      <div className="sign-up-text-container">
          <h1>Welcome</h1>
        <div className="sign-up-text">
          <h2>The YENTs portal is your gateway to crypto</h2>
          <h2>With your YENT wallet you can buy crypto without the hussle of managing your private keys</h2>
          <h2>Sign up now to find out how ></h2>
        </div>
      </div>
      <div className="sign-up-form-container">
        <div className="sign-up-form">
          <h1>Sign up</h1>
          <h3>Register for an account or if you dont have one or   <span>Sign in</span></h3>
            <form>
                  <input type="text" name="firstname" placeholder="Firstname"/>
                <input type="text" name="lastname" placeholder="Lastname" />
                <input type="email" name="email" placeholder="Email"/>
                <input type="number" name="number" placeholder="Phone Number"/>
                <input type="password" name="password" placeholder="Create Password"/>
                <input type="password" name="password" placeholder="Repeat Password"/>
                <div className="terms-container">
                  <input type="checkbox" name="terms" class="checkbox"/>
                  <label htmlFor="terms">I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></label>
                </div>
                <button className="submit-button">Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm