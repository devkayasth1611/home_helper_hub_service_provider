import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"; // Import Axios
import "../App.css"

function ElectricianTable() {

  const [electricians, setElectricians] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get("http://localhost:3000/electrics/electric")
      .then((response) => {
        setElectricians(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the electrician data!", error);
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
                  <h5 className="card-title">Electrician tables</h5>
                  

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>serviceType</th>
                        <th>applianceType</th>
                        <th>noOfOutlets</th>
                        <th>noOfSwitches</th>
                        <th>wiringType</th>
                        <th>voltageRequirements</th>
                        <th>date</th>
                        <th>time</th>
                        <th>additionalDetails</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {electricians.map((electrician) => (
                        <tr key={electrician._id}>
                          <td>{electrician.serviceType}</td>
                          <td>{electrician.applianceType}</td>
                          <td>{electrician.noOfOutlets}</td>
                          <td>{electrician.noOfSwitches}</td>
                          <td>{electrician.wiringType}</td>
                          <td>{electrician.voltageRequirements}</td>
                          <td>{electrician.date}</td>
                          <td>{electrician.time}</td>
                          <td>{electrician.additionalDetails}</td>
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

export default ElectricianTable