import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { Link } from "react-router-dom";
import "../App.css";

function AdminTable() {
  const [adminData, setAdminData] = useState([]); // Initialize an empty array to store the data

  useEffect(() => {
    fetchAdminData(); // Call the fetch function when the component mounts
  }, []);

  const fetchAdminData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admins/admin");
      const data = response.data;
      console.log("Response data:", data);
      console.log("Type of data:", typeof data);
      console.log("Array check:", Array.isArray(data));
      setAdminData(data); // Update the state with the received data
    } catch (error) {
      console.error(error);
    }
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
                  {adminData !== null && (
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
                      <tbody>
                        {Array.isArray(adminData) &&
                          adminData.map((admin, index) => (
                            <tr key={index}>
                              <td>{admin.adminName}</td>
                              <td>{admin.email}</td>
                              <td>{admin.password}</td>
                              <td>{admin.phoneNumber}</td>
                              <td>
                                <button className="edit-btn">Edit</button>
                                <button className="delete-btn">Delete</button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  )}
                  {/* End Table with stripped rows */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminTable;
