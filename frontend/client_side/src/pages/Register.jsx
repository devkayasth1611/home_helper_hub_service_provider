import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const Register = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      fullName: event.target.fullName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
      phoneNumber: event.target.phoneNumber.value,
      address: event.target.address.value,
    };

    try {
      const response = await axios.post('http://localhost:3000/users/user', formData);
      if (response.status === 200) {
        alert('Registered successfully!');
        window.location.reload();
      } else {
        alert('Error while Register!');
      }
    } catch (error) {
      console.error('There was an error!', error);
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
                    id="fullName"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                    id="phoneNumber"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="address"
                    id="address"
                  />
                </div>
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
