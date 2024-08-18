import React from "react";

function Header() {
  return (
    <header className="bgCol text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between py-3">
            <h1 className="h3">HomeHelper Hub</h1>

            {/* <!-- Navbar --> */}
            <nav className="d-none d-md-block">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Contact Us</a>
                </li>
              </ul>
            </nav>

            <button className="btn btn-light d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
              Toggle Sidebar
            </button>
          </div>
        </div>
      </header>
  );
}

export default Header;