import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"; // Import Axios
import "../App.css"

function SwiftMoveTable() {

  const [Swiftmoves, setSwiftMoves] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get("http://localhost:3000/swiftmoves/swiftmove")
      .then((response) => {
        setSwiftMoves(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the SwiftMove data!", error);
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
                  <h5 className="card-title">Swift-Move tables</h5>
                  

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>typeOfMove</th>
                        <th>estimatedWeight</th>
                        <th>numberOfRooms</th>
                        <th>additionalService</th>
                        <th>additionalDetails</th>
                        
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {Swiftmoves.map((swiftmove) => (
                        <tr key={swiftmove._id}>
                          <td>{swiftmove.typeOfMove}</td>
                          <td>{swiftmove.estimatedWeight}</td>
                          <td>{swiftmove.numberOfRooms}</td>
                          <td>{swiftmove.additionalService}</td>
                          <td>{swiftmove.additionalDetails}</td>
                          
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

export default SwiftMoveTable