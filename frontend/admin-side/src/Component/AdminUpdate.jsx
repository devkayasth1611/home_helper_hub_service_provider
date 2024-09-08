import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate

function AdminUpdate() {
  const { id } = useParams(); // Get the admin ID from the URL parameters
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [admin, setAdmin] = useState({
    adminName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // Fetch the admin data using the ID from the URL
    axios
      .get(`http://localhost:3000/admins/admin/${id}`)
      .then((response) => {
        if (response.data && response.data.status === 200) {
          setAdmin(response.data.data); // Assuming the API returns the admin object directly
        } else {
          console.error("Failed to fetch admin:", response);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the admin data!", error);
      });
  }, [id]);

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value,
    }));
  };

  // Handle form submission to save changes
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Update the admin data via API
    axios
      .put(`http://localhost:3000/admins/admin/${id}`, admin)
      .then((response) => {
        if (response.data && response.data.status === 200) {
          navigate("/admin"); // Navigate back to the AdminTable after successful update
        } else {
          console.error("Failed to update admin:", response);
        }
      })
      .catch((error) => {
        console.error("There was an error updating the admin!", error);
      });
  };

  return (
    <div>
      <h2>Edit Admin</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Admin Name</label>
          <input
            type="text"
            name="adminName"
            value={admin.adminName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={admin.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={admin.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={admin.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate("/admin")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AdminUpdate;
