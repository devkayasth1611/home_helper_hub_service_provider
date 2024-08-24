import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header({ onToggleSidebar }) {
  return (
    <div className="header_section">
         <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <Link className="navbar-brand" to="/Home" ><img className="hw" src="logo.png" /> <span className="title">Home Helper Hub</span></Link>
               {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
               {/* <span className="navbar-toggler-icon"></span>
               </button> */}
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                        <Link className="nav-link" to="/Home">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/AboutUS">About Us</Link>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="services.html">Services</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="testimonial.html">Testimonial</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="blog.html">Blog</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact Us</a>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                  </form>
               </div>
            </nav>
         </div>
      </div>
  );
}

export default Header;
