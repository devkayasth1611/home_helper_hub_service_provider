import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom' 

function ReviewTable() {
  return (
    <div>
         <main id="main" className="main">
        <div className="pagetitle">
          <h1>Review Tables</h1>
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
                  <h5 className="card-title">Review Tables</h5>
                  

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        
                        
                      <th>Rating</th>
                        <th>Comment</th>
                        
                        <th data-type="date" data-format="YYYY/MM/DD">
                          Review Date
                        </th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        
                        <td>3</td>
                        <td>Good</td>
                        <td>2024/06/16</td>
                        
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

export default ReviewTable