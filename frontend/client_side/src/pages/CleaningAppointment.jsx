import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function CleaningAppointment() {
  return (
    <div className="container mt-4">
      <span className="text-primary mb-3 title1">Buy Service</span>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row">
              {/* Service Type */}
              <div className="col-md-6">
                <h4>Service Type</h4>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="residential"
                    value="Residential"
                  />
                  <label className="form-check-label" htmlFor="residential">
                    Residential
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="commercial"
                    value="Commercial"
                  />
                  <label className="form-check-label" htmlFor="commercial">
                    Commercial
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="specialty"
                    value="Specialty"
                  />
                  <label className="form-check-label" htmlFor="specialty">
                    Specialty
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="emergency"
                    value="Emergency"
                  />
                  <label className="form-check-label" htmlFor="emergency">
                    Emergency
                  </label>
                </div>
              </div>
              <div className="col-md-6"></div>

              {/* Room Types */}
              <div className="col-md-6">
                <h4>Room Types</h4>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="livingRoom"
                    value="Living Room"
                  />
                  <label className="form-check-label" htmlFor="livingRoom">
                    Living Room
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="bedroom"
                    value="Bedroom"
                  />
                  <label className="form-check-label" htmlFor="bedroom">
                    Bedroom
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="kitchen"
                    value="Kitchen"
                  />
                  <label className="form-check-label" htmlFor="kitchen">
                    Kitchen
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="bathroom"
                    value="Bathroom"
                  />
                  <label className="form-check-label" htmlFor="bathroom">
                    Bathroom
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="office"
                    value="Office"
                  />
                  <label className="form-check-label" htmlFor="office">
                    Office
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-3"></div>
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
                  id="rooms"
                  placeholder="Enter the number of rooms"
                />
              </div>
            </div>
            <div className="row mt-3">
              {/* Preferred Service Date and Time */}
              {/* <div className="row mt-3">
                <div className="col-md-6">
                  <h4>Preferred Service Date</h4>
                  <input
                    type="date"
                    className="form-control"
                    id="serviceDate"
                  />
                </div>
                <div className="col-md-6">
                  <h4>Preferred Service Time</h4>
                  <input
                    type="time"
                    className="form-control"
                    id="serviceTime"
                  />
                </div>
              </div>
              <div className="row mt-3">
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
              <div className="row mt-3"></div>

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
