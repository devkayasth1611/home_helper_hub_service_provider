import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function EventAppointment() {
  return (
    <div>
        <div className="container mt-4">
          <span className="text-primary mb-3 title1">Buy Service</span>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h4>Event Type</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="wedding"
                      value="Wedding"
                    />
                    <label className="form-check-label" htmlFor="wedding">
                      Wedding
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="corporateEvent"
                      value="Corporate Event"
                    />
                    <label className="form-check-label" htmlFor="corporateEvent">
                      Corporate Event
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="privateParty"
                      value="Private Party"
                    />
                    <label className="form-check-label" htmlFor="privateParty">
                      Private Party
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4>Event Date</h4>
                  <input
                    type="date"
                    className="form-control"
                    id="eventDate"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h4>Number of Guests</h4>
                  <input
                    type="number"
                    className="form-control"
                    id="guestCount"
                    placeholder="Enter the number of guests"
                  />
                </div>
                <div className="col-md-6">
                  <h4>Venue Location</h4>
                  <input
                    type="text"
                    className="form-control"
                    id="venueLocation"
                    placeholder="Enter the venue location"
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
                Book Now
              </button>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default EventAppointment