import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">Home helper Hub</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>
        {/* <!-- End Logo --> */}

        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        {/* <!-- End Search Bar --> */}

        
<a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
  
  <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
</a>
{/* <!-- End Profile Iamge Icon --> */}

<ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
  <li className="dropdown-header">
    <h6>Kevin Anderson</h6>
    <span>Web Designer</span>
  </li>
  <li>
    <hr className="dropdown-divider"/>
  </li>

  <li>
    <Link className="dropdown-item d-flex align-items-center" to="/UserProfile">
      <i className="bi bi-person"></i>
      <span>My Profile</span>
    </Link>
  </li>
  <li>
    <hr className="dropdown-divider"/>
  </li>
  
 
  <li>
    <a className="dropdown-item d-flex align-items-center" href="#">
      <i className="bi bi-box-arrow-right"></i>
      <span>Sign Out</span>
    </a>
  </li>

</ul>
{/* <!-- End Profile Dropdown Items --> */}

{/* <!-- End Profile Nav --> */}

      </header>
    </div>
  );
}

export default Header;
