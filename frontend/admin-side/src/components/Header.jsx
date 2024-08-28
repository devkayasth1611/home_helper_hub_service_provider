import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`header_section ${sidebarOpen ? "shift-content" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="btn btn-dark" onClick={toggleSidebar}>
            &#9776;
          </button>
          <Link className="navbar-brand" to="/">
            <img className="hw" src="./logo.png" alt="Logo" />
            <span className="title">Home Helper Hub</span>
          </Link>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUS">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Service">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Appointment">Appointment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
        
        {/* Sidebar */}
        <div id="mySidebar" className={`sidebar ${sidebarOpen ? "openSidebar" : ""}`}>
          <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>
            &times;
          </a>
          <Link to="/" onClick={toggleSidebar}>Home</Link>
          <Link to="/AboutUS" onClick={toggleSidebar}>About Us</Link>
          <Link to="/Service" onClick={toggleSidebar}>Services</Link>
          <Link to="/Appointment" onClick={toggleSidebar}>Appointment</Link>
          <Link to="/ContactUs" onClick={toggleSidebar}>Contact Us</Link>
        </div>

        {/* Overlay for Sidebar */}
        {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      </div>
    </div>
  );
}

export default Header;
