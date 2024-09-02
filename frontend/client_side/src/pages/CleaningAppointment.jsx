import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

function CleaningAppointment() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      serviceType: event.target.serviceType.value,
      roomType: event.target.roomType.value,
      areaSize: event.target.areaSize.value,
      noOfRooms: event.target.noOfRooms.value,
      // date: event.target.date.value,
      // time: event.target.time.value,
      cleaningType: event.target.cleaningType.value,
      frequency: event.target.frequency.value,
      additionalDetails: event.target.additionalDetails.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/cleanings/cleaning",
        formData
      );
      if (response.status === 200) {
        alert("Cleaning data added successfully!");
        window.location.reload();
      } else {
        alert("Error adding cleaning!");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="container mt-4">
      <span className="text-primary mb-3 title1">Buy Service</span>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <diallv className="row">
              {/* Service Type */}
              <div className="col-md-6">
                <h4>Cleaning Type</h4>
                <select className="form-select" id="serviceType">
                  <option value="" disabled selected>
                    Select type of cleaning
                  </option>
                  <option value="Residental">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Specilaity">Speciality</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>

              {/* Room Types */}
              <div className="col-md-6">
                <h4>Room Types</h4>
                <select className="form-select" id="roomType">
                  <option value="" disabled selected>
                    Select type of cleaning
                  </option>
                  <option value="Living Room">Living Room</option>
                  <option value="Bedrooms">Bedrooms</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Bathroom">Bathroom</option>
                  <option value="Office">Office</option>
                </select>
              </div>
            </diallv>

            <div className="row mt-3">
              <div className="col-md-6">
                <h4>Area Size (sq ft)</h4>
                <input
                  type="number"
                  className="form-control"
                  id="areaSize"
                  placeholder="Enter the area size in square feet"
                />
              </div>
              <div className="col-md-6">
                <h4>Number of Rooms</h4>
                <input
                  type="number"
                  className="form-control"
                  id="noOfRooms"
                  placeholder="Enter the number of rooms"
                />
              </div>
            </div>

            {/* Cleaning Type and Frequency */}
            <div className="row mt-3">
              <div className="col-md-6">
                <h4>Cleaning Type</h4>
                <select className="form-select" id="cleaningType">
                  <option value="" disabled selected>
                    Select type of cleaning
                  </option>
                  <option value="standard">Standard Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="moveInMoveOut">
                    Move-In/Move-Out Cleaning
                  </option>
                  <option value="postConstruction">
                    Post-Construction Cleaning
                  </option>
                </select>
              </div>
              <div className="col-md-6">
                <h4>Frequency</h4>
                <select className="form-select" id="frequency">
                  <option value="" disabled selected>
                    Select frequency
                  </option>
                  <option value="oneTime">One-Time</option>
                  <option value="weekly">Weekly</option>
                  <option value="biWeekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>

            {/* Additional Details */}
            <div className="row mt-3">
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

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary mt-3">
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CleaningAppointment;
