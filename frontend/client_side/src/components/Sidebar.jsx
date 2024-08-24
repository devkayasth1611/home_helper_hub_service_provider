import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bgCol sidebar collapse">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link col hover" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link col hover" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link col hover" href="#">
                  Settings
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link col hover" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
