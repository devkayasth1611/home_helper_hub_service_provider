import React from 'react'
import { Link } from 'react-router-dom'

function PainterAppoinment() {
  return (
    <div>
         <div className="container mt-4">
      <span class="text-primary mb-3 title1">Buy Service</span>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h4>Room Name</h4>
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
              </div>
              <div className="col-md-6">
                <h4>Wall Colors</h4>
                <div className="row">
                  <div className="col-md-4">
                    <label className="form-label">Wall 1</label>
                    <input
                      type="color"
                      className="form-control"
                      id="wall1Color"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Wall 2</label>
                    <input
                      type="color"
                      className="form-control"
                      id="wall2Color"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Wall 3</label>
                    <input
                      type="color"
                      className="form-control"
                      id="wall3Color"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Wall 4</label>
                    <input
                      type="color"
                      className="form-control"
                      id="wall4Color"
                    />
                  </div>
                </div>
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
                <h4>Number of Coats</h4>
                <input
                  type="number"
                  className="form-control"
                  id="coats"
                  placeholder="Enter the number of coats"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h4>Paint Type</h4>
                <select className="form-select" id="paintType">
                  <option selected>Select type of paint</option>
                  <option value="emulsion">Emulsion Paint</option>
                  <option value="enamel">Enamel Paint</option>
                  <option value="distemper">Distemper</option>
                  <option value="texture">Texture Paint</option>
                </select>
              </div>
              <div className="col-md-6">
                <h4>Paint Finish</h4>
                <select className="form-select" id="paintFinish">
                  <option selected>Select finish</option>
                  <option value="matte">Matte</option>
                  <option value="satin">Satin</option>
                  <option value="glossy">Glossy</option>
                  <option value="semi-glossy">Semi-Glossy</option>
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

export default PainterAppoinment