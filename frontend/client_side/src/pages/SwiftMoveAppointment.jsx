import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../App.css'

function SwiftMoveAppointment() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            typeOfMove: event.target.typeOfMove.value,
            estimatedWeight: event.target.estimatedWeight.value,
            numberOfRooms: event.target.numberOfRooms.value,
            additionalService: event.target.additionalService.value,
            additionalDetails: event.target.additionalDetails.value,
        };
    
        try {
          const response = await axios.post('http://localhost:3000/swiftmoves/swiftmove', formData);
          if (response.status === 200) {
            alert('Swift Move data added successfully!');
            window.location.reload();
          } else {
            alert('Error adding Swift Move!');
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
              <div className="row">
                <div className="col-md-6">
                  <h4>Type of Move</h4>
                  <select className="form-select" id="typeOfMove">
                    <option selected>Select additional services</option>
                    <option value="Local">Local</option>
                    <option value="Long Distance">Long Distance</option>
                    <option value="Office">Office</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <h4>Number of Rooms</h4>
                  <input
                    type="number"
                    className="form-control"
                    id="numberOfRooms"
                    placeholder="Enter the number of rooms"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h4>Estimated Weight (kg)</h4>
                  <input
                    type="number"
                    className="form-control"
                    id="estimatedWeight"
                    placeholder="Enter the estimated weight in kilograms"
                  />
                </div>
                <div className="col-md-6">
                  <h4>Additional Services</h4>
                  <select className="form-select" id="additionalService">
                    <option selected>Select additional services</option>
                    <option value="packing">Packing</option>
                    <option value="storage">Storage</option>
                    <option value="insurance">Insurance</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4>Additional Details</h4>
                  <textarea
                    className="form-control"
                    id="additionalDetails"
                    rows="3"
                    placeholder="Provide any additional details"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Book Now
              </button>
              </form>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default SwiftMoveAppointment