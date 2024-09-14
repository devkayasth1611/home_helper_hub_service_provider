import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { Link } from "react-router-dom";
import "../App.css";

function CarpenterTable() {
  const [Carpenters, setCarpenters] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCarpenter, setCurrentCarpenter] = useState({
    _id: "",
    serviceType: "",
    materialType: "",
    projectSize: "",
    date: "",
    time: "",
    additionalDetails: "",
   
  });

  useEffect(() => {
    // Fetch data from the correct API endpoint
    axios
      .get("http://localhost:3000/carpenters/carpenter")
      .then((response) => {
        if (response.data && response.data.status === 200) {
          setCarpenters(response.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the carpenter data!", error);
      });
  }, []);

  // Function to handle the click on the "Edit" button
  const handleEditClick = (Carpenter) => {
    setIsEditing(true);
    setCurrentCarpenter(Carpenter);
  };

  // Handle input changes in the edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentCarpenter((prevCarpenter) => ({
      ...prevCarpenter,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    if (window.confirm("Are you sure you want to Update this Carpenter?")) {
    e.preventDefault();
  
    console.log("Submitting Carpenter update:", currentCarpenter); // Debug log
  
    // Update the admin data via API
    axios.post(`http://localhost:3000/carpenters/carpenter/${currentCarpenter._id}`, currentCarpenter)

      .then((response) => {
        console.log("API Response:", response); // Debug log
  
        if (response.data && response.data.status === 200) {
          // Update the state with the modified admin data
          setCarpenters((prevCarpenters) =>
            prevCarpenters.map((Carpenter) =>
              Carpenter._id === currentCarpenter._id ? currentCarpenter : Carpenter
            )
          );
          setIsEditing(false); // Close the edit form
        } else {
          console.error("Failed to update Carpenter:", response);
        }
      })
      .catch((error) => {
        console.error("There was an error updating the Carpenter!", error);
      });
  }};
  

  // Function to handle delete operation
  const handleDeleteClick = (CarpenterId) => {
    if (window.confirm("Are you sure you want to delete this Carpenter?")) {
      axios
        .delete(`http://localhost:3000/carpenters/carpenter/${CarpenterId}`)
        .then((response) => {
          if (response.data && response.data.status === 200) {
            // Remove the deleted Carpenter from the state
            setCarpenters((prevCarpenters) =>
              prevCarpenters.filter((Carpenters) => Carpenter._id !== CarpenterId)
            );
          } else {
            console.error("Failed to delete Carpenter:", response);
          }
        })
        .catch((error) => {
          console.error("There was an error deleting the Carpenter!", error);
        });
    }
  };

  // Render table rows manually using a loop
  const renderTableRows = () => {
    const rows = [];
    for (let i = 0; i < Carpenters.length; i++) {
      rows.push(
        <tr key={Carpenters[i]._id}>
          <td>{Carpenters[i].serviceType}</td>
          <td>{Carpenters[i].materialType}</td>
          <td>{Carpenters[i].projectSize}</td>
          <td>{Carpenters[i].date}</td>
          <td>{Carpenters[i].time}</td>
          <td>{Carpenters[i].additionalDetails}</td>
          <td>
            <button
              className="edit-btn"
              onClick={() => handleEditClick(Carpenters[i])}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteClick(Carpenters[i]._id)}
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
                  <h5 className="card-title">Carpenter Table</h5>

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>serviceType</th>
                        <th>materialType</th>
                        <th>projectSize</th>
                        <th>date</th>
                        <th>time</th>
                        <th>additionalDetails</th>
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
                <h5 className="card-title">Carpenter Form</h5>
                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleFormSubmit}>
                  <div className="col-12">
                    <label htmlFor="inputName" className="form-label">
                    serviceType
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="serviceType"
                      value={currentCarpenter.CarpenterName}
                      onChange={handleInputChange}
                      placeholder="Enter User Name"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">
                    materialType
                    </label>
                    <input
                      type="materialType"
                      className="form-control"
                      name="email"
                      value={currentCarpenter.email}
                      onChange={handleInputChange}
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputPassword4" className="form-label">
                    projectSize
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={currentCarpenter.password}
                      onChange={handleInputChange}
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputNumber" className="form-label">
                      date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phoneNumber"
                      value={currentCarpenter.phoneNumber}
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




export default CarpenterTable