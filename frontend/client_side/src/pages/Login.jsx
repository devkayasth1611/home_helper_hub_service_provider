import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Login successful");
  };

  return (
    <div className="container">
      <div className="container-fluid login-signup-container">
        <div className="row">
          <div className="col-md-6 signin-container">
            <div className="signin-form">
              <h2 className="text-center">Sign In</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
                <p>
                  Don't have an account? <Link to="/Register">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6 signup-container">
            <div className="signup-form">
              <h2>Sign Up</h2>
              <p>New to our platform? Create an account to get started!</p>
              <Link to="/Register">
                <button className="btn btn-outline-light">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
