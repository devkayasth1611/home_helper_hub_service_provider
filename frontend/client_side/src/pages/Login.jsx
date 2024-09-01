import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // To navigate to different routes

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error state

    try {
      const response = await axios.post("http://localhost:3000/logins/login", { email, password });
      
      // If login is successful
      if (response.status === 200) {
        alert("Login successful");
        localStorage.setItem("token", response.data.token); // Store the token
        navigate("/"); // Redirect to the dashboard or another protected route
      }
    } catch (err) {
      // Handle errors
      if (err.response && err.response.status === 400) {
        setError(err.response.data.message); // Display validation error
      } else {
        setError("An unexpected error occurred");
      }
    }
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