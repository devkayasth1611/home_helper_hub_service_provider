import React,{useState,useEffect} from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import axios from "axios"; // Import Axios

function ServiceProviderTable() {
  const [serviceproviders, setserviceproviders] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get("http://localhost:3000/serviceproviders/serviceprovider")
      .then((response) => {
        setserviceproviders(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the serviceprovider data!", error);
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
                  <h5 className="card-title">Service Provider Tables</h5>
                  

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        
                        
                      <th>Compney Name</th>
                        <th>rating</th>
                        <th>biography
                        </th>
                        <th>experience</th>
                        
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {serviceproviders.map((serviceprovider) => (
                        <tr key={serviceprovider._id}>
                          <td>{serviceprovider.companyName}</td>
                          <td>{serviceprovider.rating}</td>
                          <td>{serviceprovider.biography}</td>
                          <td>{serviceprovider.experience}</td>
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

export default ServiceProviderTable