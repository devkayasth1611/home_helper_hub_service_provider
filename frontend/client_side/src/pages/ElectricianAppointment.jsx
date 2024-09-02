import React from 'react'
import { Link } from 'react-router-dom'

function ElectricianAppointment() {
  return (
    <div>
         <div className="container mt-4">
        <span className="title1">Buy Service</span>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h4>Service Type</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="installation"
                      value="Installation"
                    />
                    <label className="form-check-label" htmlFor="installation">
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
                    id="outlets"
                    placeholder="Enter the number of outlets"
                  />
                </div>
                <div className="col-md-6">
                  <h4>Number of Switches</h4>
                  <input
                    type="number"
                    className="form-control"
                    id="switches"
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
                    id="voltageRequirement"
                    placeholder="Enter voltage requirement (e.g., 110V, 220V)"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <h4>Preferred Appointment Date</h4>
                  <input
                    type="date"
                    className="form-control"
                    id="appointmentDate"
                  />
                </div>
                <div className="col-md-6">
                  <h4>Preferred Appointment Time</h4>
                  <input
                    type="time"
                    className="form-control"
                    id="appointmentTime"
                  />
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
            </div>
          </div>
        </div> 
    </div>
  )
}

export default ElectricianAppointment