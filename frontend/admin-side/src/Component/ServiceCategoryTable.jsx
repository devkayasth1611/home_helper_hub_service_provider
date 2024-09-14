import React,{useState,useEffect} from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import axios from "axios"; // Import Axios

function ServiceCategoryTable() {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get("http://localhost:3000/categories/category")
      .then((response) => {
        setcategories(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the category data!", error);
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
                  <h5 className="card-title">Service Category Tables</h5>
                  

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        
                        
                      <th>Service Name</th>
                        <th>Description</th>
                        
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => (
                        <tr key={category._id}>
                          <td>{category.categoryName}</td>
                          <td>{category.description}</td>
                          
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

export default ServiceCategoryTable