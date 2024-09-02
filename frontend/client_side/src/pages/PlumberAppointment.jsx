import React from "react";
import { Link } from "react-router-dom";

function PlumberAppointment() {
  return (
    <div>
      <div className="container mt-4">
        <span className="text-primary mb-3 title1">Buy Service</span>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h4>Service Type</h4>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="install"
                    value="Installation"
                  />
                  <label className="form-check-label" htmlFor="install">
                    Installation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="repair"
                    value="Repair"
                  />
                  <label className="form-check-label" htmlFor="repair">
                    Repair
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="maintenance"
                    value="Maintenance"
                  />
                  <label className="form-check-label" htmlFor="maintenance">
                    Maintenance
                  </label>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlumberAppointment;
