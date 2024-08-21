import React from "react";
import "../App.css";

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebar"
          className="col-md-3 col-lg-2 d-md-block bgCol sidebar collapse"
        >
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* 
          

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h2>Welcome to HomeHelper Hub</h2>
            </div>
            <p>Your one-stop solution for managing all your home needs efficiently.</p>
            <p>Explore our services to get started with your home management journey.</p>

          

          </main> */}
      </div>
    </div>
  );
}

export default Sidebar;
