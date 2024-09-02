import React from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import '../App.css'

function CarpenterAppointment() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
          serviceType: event.target.serviceType.value,
          materialType: event.target.materialType.value,
          projectSize: event.target.projectSize.value,
          date: event.target.date.value,
          time: event.target.time.value,
          additionalDetails: event.target.additionalDetails.value,
        };
    
        try {
          const response = await axios.post('http://localhost:3000/carpenters/carpenter', formData);
          if (response.status === 200) {
            alert('Carpenter data added successfully!');
            window.location.reload();
          } else {
            alert('Error adding carpenter!');
          }
        } catch (error) {
          console.error('There was an error!', error);
        }
      };

  return (
    <div>
     <div className="container mt-4">
      <span className="text-primary mb-3 title1">Buy Service</span>
      <div className="card">
        <div className="card-body">
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <h5>Service Type</h5>
                <select className="form-select" id="serviceType" required>
                  <option value="" disabled selected>Select Service Type</option>
                  <option value="furniture-assembly">Furniture Assembly</option>
                  <option value="cabinet-installation">Cabinet Installation</option>
                  <option value="custom-furniture">Custom Furniture</option>
                  <option value="repair-restoration">Repair & Restoration</option>
                </select>
              </div>
              <div className="col-md-6">
                <h5>Material Type</h5>
                <select className="form-select" id="materialType" required>
                  <option value="" disabled selected>Select Material Type</option>
                  <option value="wood">Wood</option>
                  <option value="plywood">Plywood</option>
                  <option value="mdf">MDF</option>
                  <option value="particle-board">Particle Board</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <h5>Project Size</h5>
                <input
                  type="text"
                  className="form-control"
                  id="projectSize"
                  placeholder="Enter size or scope of the project"
                  required
                />
              </div>
              <div className="col-md-6">
                <h5>Preferred Date</h5>
                <input type="date" className="form-control" id="date" required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <h5>Preferred Time</h5>
                <input type="time" className="form-control" id="time" required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <h5>Additional Details</h5>
                <textarea
                  className="form-control"
                  id="additionalDetails"
                  rows="3"
                  placeholder="Provide any additional details or special requests"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Buy Now
            </button>
          </form>
        </div>
      </div>
      </div> 
    </div>
  )
}

export default CarpenterAppointment