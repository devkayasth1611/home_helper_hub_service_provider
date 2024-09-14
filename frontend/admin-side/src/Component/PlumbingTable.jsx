import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"; // Import Axios
import "../App.css"

function PlumbingTable() {

  const [plumbers, setPlumbers] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get("http://localhost:3000/plumbers/plumber")
      .then((response) => {
        setPlumbers(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the Plumbing data!", error);
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
                  <h5 className="card-title">plumber tables</h5>
                  

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>serviceType</th>
                        <th>fixtureType</th>
                        <th>urgency</th>
                        <th>areaSize</th>
                        <th>additionalDetails</th>
                        
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {plumbers.map((Plumber) => (
                        <tr key={Plumber._id}>
                          <td>{Plumber.serviceType}</td>
                          <td>{Plumber.fixtureType}</td>
                          <td>{Plumber.urgency}</td>
                          <td>{Plumber.areaSize}</td>
                          <td>{Plumber.additionalDetails}</td>
                          
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

export default PlumbingTable