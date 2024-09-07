import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { Link } from "react-router-dom";
import "../App.css";

function AdminTable() {
  const [admins, setAdmins] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState({
    _id: "",
    adminName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // Fetch data from the correct API endpoint
    axios
      .get("http://localhost:3000/admins/admin")
      .then((response) => {
        if (response.data && response.data.status === 200) {
          setAdmins(response.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the admin data!", error);
      });
  }, []);

  // Function to handle the click on the "Edit" button
  const handleEditClick = (admin) => {
    setIsEditing(true);
    setCurrentAdmin(admin);
  };

  // Handle input changes in the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    if (window.confirm("Are you sure you want to Update this admin?")) {
    e.preventDefault();
  
    console.log("Submitting admin update:", currentAdmin); // Debug log
  
    // Update the admin data via API
    axios.post(`http://localhost:3000/admins/admin/${currentAdmin._id}`, currentAdmin)

      .then((response) => {
        console.log("API Response:", response); // Debug log
  
        if (response.data && response.data.status === 200) {
          // Update the state with the modified admin data
          setAdmins((prevAdmins) =>
            prevAdmins.map((admin) =>
              admin._id === currentAdmin._id ? currentAdmin : admin
            )
          );
          setIsEditing(false); // Close the edit form
        } else {
          console.error("Failed to update admin:", response);
        }
      })
      .catch((error) => {
        console.error("There was an error updating the admin!", error);
      });
  }};
  

  // Function to handle delete operation
  const handleDeleteClick = (adminId) => {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      axios
        .delete(`http://localhost:3000/admins/admin/${adminId}`)
        .then((response) => {
          if (response.data && response.data.status === 200) {
            // Remove the deleted admin from the state
            setAdmins((prevAdmins) =>
              prevAdmins.filter((admin) => admin._id !== adminId)
            );
          } else {
            console.error("Failed to delete admin:", response);
          }
        })
        .catch((error) => {
          console.error("There was an error deleting the admin!", error);
        });
    }
  };

  // Render table rows manually using a loop
  const renderTableRows = () => {
    const rows = [];
    for (let i = 0; i < admins.length; i++) {
      rows.push(
        <tr key={admins[i]._id}>
          <td>{admins[i].adminName}</td>
          <td>{admins[i].email}</td>
          <td>{admins[i].password}</td>
          <td>{admins[i].phoneNumber}</td>
          <td>
            <button
              className="edit-btn"
              onClick={() => handleEditClick(admins[i])}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteClick(admins[i]._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Data Tables</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Tables</li>
              <li className="breadcrumb-item active">Data</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Admin Table</h5>

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>Admin Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableRows()}</tbody>
                  </table>
                  {/* End Table with stripped rows */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {isEditing && (
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Admin Form</h5>
                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleFormSubmit}>
                  <div className="col-12">
                    <label htmlFor="inputName" className="form-label">
                      Admin Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="adminName"
                      value={currentAdmin.adminName}
                      onChange={handleInputChange}
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
                      name="email"
                      value={currentAdmin.email}
                      onChange={handleInputChange}
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
                      name="password"
                      value={currentAdmin.password}
                      onChange={handleInputChange}
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
                      name="phoneNumber"
                      value={currentAdmin.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
                {/* <!-- Vertical Form --> */}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminTable;
