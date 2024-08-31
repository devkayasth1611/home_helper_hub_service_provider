import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <div className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img className="hw" src="./logo.png" alt="Logo" />
            <span className="title">Home Helper Hub</span>
          </Link>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUS">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Appointment">
                  Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
