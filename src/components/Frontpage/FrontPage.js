import React from 'react';
import {Link} from 'react-router-dom'

const Frontpage = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div>
          <h1 className="sixty-header">3Sixty</h1>
        </div>
        <form className="login">
          <div className="login-email">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email..."
              id="email"
              required
            />
          </div>
          <div className="login-pass">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password..."
              id="password"
              required
            />
          </div>
          <Link to="/aboutpage">
            {" "}
            <button className="loginBtn">Log In</button>{" "}
          </Link>
        </form>
      </div>
      <div className="signUp">
        <div>
          <h1>Create a new account</h1>
        </div>
        <form>
          <div className="signUp-box">
            <div className="login-email">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter name..."
                id="name"
                required
              />
            </div>
            <div className="login-email">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username..."
                id="username"
                required
              />
            </div>
          </div>
          <div className="login-email2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email..."
              id="newemail"
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter new password..."
              id="newpassword"
              required
            />
          </div>
          <Link to="/aboutpage">
            <button className="signUpBtn">Sign Up</button>
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
}
 
export default Frontpage;