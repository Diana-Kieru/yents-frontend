import React from 'react';
import './LogInForm.css'
import { NavLink } from 'react-router-dom';

const LogInForm = () => {
  return (
    <div className='top-div'>
      <div className='left'>
        <div className='inner'>
          <h2>Welcome</h2>
          <p>The YENTs portal is your gateway to crypto.</p>
          <p>With your YENT wallet you can buy crypto without the hussle of managing your private keys.</p>
          <p>Sign in now to find out how.</p>
        </div>
      </div>
      <div className='right'>
        <div className='inner-right'>
          <h2>Log In</h2>
          <p><NavLink to='../signup'>Sign up</NavLink> if you don't have an account.</p>
          <form>
            <input type='email' placeholder='Email...'/>
            <input type='password' placeholder='Password'/>
            <div className='now'>
              <p>Forgot password?</p>
              <button className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogInForm