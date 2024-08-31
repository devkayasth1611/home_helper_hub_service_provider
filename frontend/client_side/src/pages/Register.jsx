import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      try {
        // Add your registration logic here
        console.log("Registration successful");
      } catch (error) {
        console.error("Error during registration:", error);
        setError("An error occurred during registration");
      }
    }
  };

  return (
    <div className="container">
      <div className="container-fluid login-signup-container">
        <div className="row">
          <div className="col-md-6 signup-container">
            <div className="signup-form">
              <h2 className="text-center">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
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
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
                <p>
                  Already have an account? <Link to="/Login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-6 signin-container">
            <div className="signin-form">
              <h2>Welcome Back</h2>
              <p>Already have an account? Sign in to stay connected with us!</p>
              <Link to="/Login">
                <button className="btn btn-outline-light">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
