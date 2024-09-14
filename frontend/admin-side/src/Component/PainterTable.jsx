import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"; // Import Axios
import "../App.css"

function PainterTable() {

  const [painters, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get("http://localhost:3000/paintings/painting")
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the painter data!", error);
      });
  }, []);


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
                  <h5 className="card-title">painter tables</h5>
                  

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>roomName</th>
                        <th>areaSize</th>
                        <th>paintType</th>
                        <th>wallColors</th>
                        <th>noOfCoats</th>
                        <th>paintFinish</th>
                        <th>additionalDetails</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {painters.map((painter) => (
                        <tr key={painter._id}>
                          <td>{painter.roomName}</td>
                          <td>{painter.areaSize}</td>
                          <td>{painter.paintType}</td>
                          <td>{painter.wallColors}</td>
                          <td>{painter.noOfCoats}</td>
                          <td>{painter.paintFinish}</td>
                          <td>{painter.additionalDetails}</td>
                          <td>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                          </td>
                        </tr>
                      ))}
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                  {/* End Table with stripped rows */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PainterTable