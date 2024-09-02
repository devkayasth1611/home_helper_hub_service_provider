import React from "react";
import "../App.css";
import { Link } from 'react-router-dom'
import axios from "axios";

function ServiceProviderForm() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      companyName: event.target.companyName.value,
      rating: event.target.rating.value,
      biography: event.target.biography.value,
      experience: event.target.experience.value,
      
    };

    try {
      const response = await axios.post('http://localhost:3000/serviceproviders/serviceprovider', formData);
      if (response.status === 200) {
        alert('Service Provider data added successfully!');
        window.location.reload();
      } else {
        alert('Error adding Service Provider!');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Form Elements</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Forms</li>
              <li className="breadcrumb-item active">Elements</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Service Provider Form</h5>

                  {/* <!-- General Form Elements --> */}
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        company Name
                      </label>
                      <div className="col-sm-12">
                        <input type="text" className="form-control" id="companyName" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        rating
                      </label>
                      <div className="col-sm-12">
                        <input type="text" className="form-control" id="rating" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        biography
                      </label>
                      <div className="col-sm-12">
                        <input type="text" className="form-control" id="biography" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="inputPassword"
                        className="col-sm-2 col-form-label"
                      >
                        experience
                      </label>
                      <div className="col-sm-12">
                        <textarea className="form-control" id="experience"></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                  <button className="btn btn-primary" type="submit">ADD</button>
                </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServiceProviderForm;
