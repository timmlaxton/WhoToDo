import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <div className="dark-overlay">
        <div className="landing-inner">
        <h1 className="x-large multicolortext">Whodo</h1>
          <p className="lead">
          Make Notes - Track Progress - Get Things Done
          </p>
          <div className="buttons">
            <Link to="register" className="btn btn-primary">Sign Up</Link>
            <Link to="login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
  )
}

export default Landing
