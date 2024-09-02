import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ElectricianAppointment() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      serviceType: event.target.serviceType.value,
      applianceType: event.target.applianceType.value,
      noOfOutlets: event.target.noOfOutlets.value,
      noOfSwitches: event.target.noOfSwitches.value,
      wiringType: event.target.wiringType.value,
      voltageRequirements: event.target.voltageRequirements.value,
      date: event.target.date.value,
      time: event.target.time.value,
      additionalDetails: event.target.additionalDetails.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/electrics/electric",
        formData
      );
      if (response.status === 200) {
        alert("Electricians data added successfully!");
        window.location.reload();
      } else {
        alert("Error adding Electricians!");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <span className="title1">Buy Service</span>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row mt-3">
                <div className="col-md-6">
                  <h4>Service Type</h4>
                  <select className="form-select" id="serviceType">
                    <option selected>Select service type</option>
                    <option value="Installation">Installation</option>
                    <option value="Repair">Repair</option>
                    <option value="Maintenance">Fiber Optic</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <h4>Appliance Type</h4>
                  <select className="form-select" id="applianceType">
                    <option selected>Select appliance type</option>
                    <option value="lighting">Lighting</option>
                    <option value="heating">Heating</option>
                    <option value="cooling">Cooling</option>
                    <option value="plumbing">Plumbing</option>
                  </select>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <h4>Number of Outlets</h4>
                  <input
                    type="number"
                    className="form-control"
                    id="noOfOutlets"
                    placeholder="Enter the number of outlets"
                  />
                </div>
                <div className="col-md-6">
                  <h4>Number of Switches</h4>
                  <input
                    type="number"
                    className="form-control"
                    id="noOfSwitches"
                    placeholder="Enter the number of switches"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <h4>Wiring Type</h4>
                  <select className="form-select" id="wiringType">
                    <option selected>Select wiring type</option>
                    <option value="copper">Copper</option>
                    <option value="aluminum">Aluminum</option>
                    <option value="fiber-optic">Fiber Optic</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <h4>Voltage Requirement</h4>
                  <input
                    type="text"
                    className="form-control"
                    id="voltageRequirements"
                    placeholder="Enter voltage requirement (e.g., 110V, 220V)"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <h4>Preferred Appointment Date</h4>
                  <input type="date" className="form-control" id="date" />
                </div>
                <div className="col-md-6">
                  <h4>Preferred Appointment Time</h4>
                  <input type="time" className="form-control" id="time" />
                </div>
              </div>
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
              <button type="submit" className="btn btn-primary mt-3">
                Buy
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectricianAppointment;
