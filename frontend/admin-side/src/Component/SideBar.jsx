import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div>
        <aside id="sidebar" className="sidebar">

<ul className="sidebar-nav" id="sidebar-nav">

  <li className="nav-item">
    <Link className="nav-link " to="/">
      <i className="bi bi-grid"></i>
      <span>Dashboard</span>
    </Link>
  </li>
  {/* <!-- End Dashboard Nav --> */}

  <li className="nav-item">
  <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/GeneralTable">
              <i className="bi bi-circle"></i><span>General Tables</span>
            </Link>
          </li>
          <li>
            <Link to="/DataTable">
              <i className="bi bi-circle"></i><span>Data Tables</span>
            </Link>
          </li>
          <li>
            <Link to="/AdminTable">
              <i className="bi bi-circle"></i><span>Admin Table</span>
            </Link>
          </li>
          <li>
            <Link to="/UserTable">
              <i className="bi bi-circle"></i><span>User Table</span>
            </Link>
          </li>
          <li>
            <Link to="/AppointmentTable">
              <i className="bi bi-circle"></i><span>Appointment Table</span>
            </Link>
          </li>
          <li>
            <Link to="/ServiceTable">
              <i className="bi bi-circle"></i><span>Service Table</span>
            </Link>
          </li>
          <li>
            <Link to="/ServiceProviderTable">
              <i className="bi bi-circle"></i><span>Service Provider Table</span>
            </Link>
          </li>
          <li>
            <Link to="/ServiceCategoryTable">
              <i className="bi bi-circle"></i><span>Service Category Table</span>
            </Link>
          </li>
          <li>
            <Link to="/PaymentTable">
              <i className="bi bi-circle"></i><span>Payment Table</span>
            </Link>
          </li>
          <li>
            <Link to="/ReviewTable">
              <i className="bi bi-circle"></i><span>Review Table</span>
            </Link>
          </li>
        </ul>
      </li>
  </li>

  <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <Link to="/AdminForm">
              <i className="bi bi-circle"></i><span>Admin Form</span>
            </Link>
          </li>
          
          <li>
            <Link to="/UserForm">
              <i className="bi bi-circle"></i><span>User Form</span>
            </Link>
          </li>
         
          <li>
            <Link to="/AppointmentForm">
              <i className="bi bi-circle"></i><span>Appointment Form</span>
            </Link>
          </li>
         
          <li>
            <Link to="/ServiceForm">
              <i className="bi bi-circle"></i><span>Service Form</span>
            </Link>
          </li>
         
          <li>
            <Link to="/ServiceProviderForm">
              <i className="bi bi-circle"></i><span>Service Provider Form</span>
            </Link>
          </li>
          
          <li>
            <Link to="/ServiceCategoryForm">
              <i className="bi bi-circle"></i><span>Service Category Form</span>
            </Link>
          </li>
          
          <li>
            <Link to="/PaymentForm">
              <i className="bi bi-circle"></i><span>Payment Form</span>
            </Link>
          </li>
          
          <li>
            <Link to="/ReviewForm">
              <i className="bi bi-circle"></i><span>Review Form</span>
            </Link>
          </li>
        </ul>
      </li>
      {/* <!-- End Forms Nav --> */}
  <li className="nav-heading">Pages</li>

  <li className="nav-item">
        <Link className="nav-link collapsed" to="/UserProfile">
          <i className="bi bi-person"></i>
          <span>Profile</span>
        </Link>
      </li>
      {/* <!-- End Profile Page Nav --> */}

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/Register">
          <i className="bi bi-card-list"></i>
          <span>Register</span>
        </Link>
      </li>
      {/* <!-- End Register Page Nav --> */}

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/Login">
          <i className="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </Link>
      </li>
      {/* <!-- End Login Page Nav --> */}

</ul>
  
</aside>
    </div>
  )
}

export default SideBar