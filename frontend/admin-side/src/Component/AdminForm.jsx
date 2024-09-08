import React from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      adminName: event.target.adminName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      phoneNumber: event.target.phoneNumber.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/admins/admin",
        formData
      );
      if (response.status === 200) {
        alert("Admin data added successfully!");
        window.location.reload();
      } else {
        alert("Error adding Admin!");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Form Layouts</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Forms</li>
              <li className="breadcrumb-item active">Layouts</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Admin Form</h5>
              {/* <!-- Vertical Form --> */}
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                  <label htmlFor="inputName" className="form-label">
                    Admin Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminName"
                    placeholder="Enter User Name"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
              </form>
              {/* <!-- Vertical Form --> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminForm;
