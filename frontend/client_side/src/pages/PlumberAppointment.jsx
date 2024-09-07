import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PlumberAppointment() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      serviceType: event.target.serviceType.value,
      fixtureType: event.target.fixtureType.value,
      urgency: event.target.urgency.value,
      areaSize: event.target.areaSize.value,
      additionalDetails: event.target.additionalDetails.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/plumbers/plumber",
        formData
      );
      if (response.status === 200) {
        alert("Plumber data added successfully!");
        window.location.reload();
      } else {
        alert("Error adding Plumber!");
      }
    } catch (error) {
      console.error("There was an error!", error);
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
                  <h4>Service Type</h4>
                  <div className="form-group">
                    <select className="form-select" id="serviceType">
                      <option selected>Select fixture type</option>
                      <option value="Installation">Installation</option>
                      <option value="Repair">Repair</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4>Fixture Type</h4>
                  <div className="form-group">
                    <select className="form-select" id="fixtureType">
                      <option selected>Select fixture type</option>
                      <option value="faucet">Faucet</option>
                      <option value="toilet">Toilet</option>
                      <option value="sink">Sink</option>
                      <option value="shower">Shower</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h4>Urgency</h4>
                  <input
                    type="text"
                    className="form-control"
                    id="urgency"
                    placeholder="Urgent, Regular, etc."
                  />
                </div>
                <div className="col-md-6">
                  <h4>Area Size (sq ft)</h4>
                  <input
                    type="number"
                    className="form-control"
                    id="areaSize"
                    placeholder="Enter the area size in square feet"
                  />
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
                Buy Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlumberAppointment;
