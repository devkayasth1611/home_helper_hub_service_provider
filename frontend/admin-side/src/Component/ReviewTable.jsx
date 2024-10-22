import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"; // Import Axios
import "../App.css"

function ReviewTable() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get("http://localhost:3000/reviews/review")
      .then((response) => {
        setReviews(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the review data!", error);
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
                  <h5 className="card-title">Review tables</h5>
                  

                  {/* Table with stripped rows */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th>rating</th>
                        <th>comment</th>
                        <th>reviewDate</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {reviews.map((review) => (
                        <tr key={review._id}>
                          <td>{review.rating}</td>
                          <td>{review.comment}</td>
                          <td>{review.reviewDate}</td>
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

export default ReviewTable