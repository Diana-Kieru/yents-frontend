import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <div className="logo__container">
            <img src="" alt="" />
        </div>
      </Link>
        
        <nav>
            
            
        </nav>
        <Link to="/login" style={{textDecoration: "none"}}>
          <button>Log in</button>
        </Link>
        <Link to="/signup" style={{textDecoration: "none"}}>
          <button>Sign up</button>
        </Link>
    </div>
  )
}

export default Navbar