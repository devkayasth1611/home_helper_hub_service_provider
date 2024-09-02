import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

function EventAppointment() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      eventType: event.target.eventType.value,
      noOfGuest: event.target.noOfGuest.value,
      vanueLocation: event.target.vanueLocation.value,
      date: event.target.date.value,
      additionalDetails: event.target.additionalDetails.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/events/event",
        formData
      );
      if (response.status === 200) {
        alert("Event data added successfully!");
        window.location.reload();
      } else {
        alert("Error adding Event!");
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
              <div className="row mt-3">
                <div className="col-md-6">
                  <h4>Service Type</h4>
                  <select className="form-select" id="eventType">
                    <option selected>Select Event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Private Party">Private Party</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <h4>Preferred Appointment Date</h4>
                  <input type="date" className="form-control" id="date" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h4>Number of Guests</h4>
                  <input
                    type="number"
                    className="form-control"
                    id="noOfGuest"
                    placeholder="Enter the number of guests"
                  />
                </div>
                <div className="col-md-6">
                  <h4>Venue Location</h4>
                  <input
                    type="text"
                    className="form-control"
                    id="vanueLocation"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventAppointment;
