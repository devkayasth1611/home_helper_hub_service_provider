import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function AdminTable() {
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
                    <tbody>
                      <tr>
                        <td>Krishna</td>
                        <td>Krishnabj@gmail.com</td>
                        <td>123krishna</td>
                        <td>1234567890</td>
                        <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Dev</td>
                        <td>Dev123@gmail.com</td>
                        <td>123Dev</td>
                        <td>1234567890</td>
                        <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Vishal</td>
                        <td>Vishal123@gmail.com</td>
                        <td>123vishal</td>
                        <td>1234567890</td>
                        <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Pooja</td>
                        <td>Pooja123@gmail.com</td>
                        <td>123Pooja</td>
                        <td>1234567890</td>
                        <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>krish</td>
                        <td>Krish123@gmail.com</td>
                        <td>123krish</td>
                        <td>1234567890</td>
                        <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Krisha</td>
                        <td>Krisha@gmail.com</td>
                        <td>123krisha</td>
                        <td>1234567890</td>
                        <td>
                          <button className="edit-btn">Edit</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                  
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

export default AdminTable