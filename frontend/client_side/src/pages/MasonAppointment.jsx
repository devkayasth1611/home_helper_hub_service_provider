import React from 'react'
import { Link } from 'react-router-dom'

function MasonAppointment() {
  return (
    <div>
        <div className="container mt-4">
        <span className="text-primary mb-3 title1">Buy Service</span>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h4>Structure Type</h4>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wall"
                    value="Wall"
                  />
                  <label className="form-check-label" htmlFor="wall">
                    Wall
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="foundation"
                    value="Foundation"
                  />
                  <label className="form-check-label" htmlFor="foundation">
                    Foundation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="chimney"
                    value="Chimney"
                  />
                  <label className="form-check-label" htmlFor="chimney">
                    Chimney
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <h4>Material Type</h4>
                <select className="form-select" id="materialType">
                  <option selected>Select material type</option>
                  <option value="brick">Brick</option>
                  <option value="stone">Stone</option>
                  <option value="concrete">Concrete</option>
                  <option value="masonry">Masonry Blocks</option>
                </select>
              </div>
            </div>
            <div className="row">
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
                <h4>Work Type</h4>
                <select className="form-select" id="workType">
                  <option selected>Select type of work</option>
                  <option value="newConstruction">New Construction</option>
                  <option value="repair">Repair</option>
                  <option value="renovation">Renovation</option>
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
              Buy Now
            </button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default MasonAppointment