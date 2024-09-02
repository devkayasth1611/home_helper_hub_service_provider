import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PainterAppoinment() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      roomName: event.target.roomName.value,
      areaSize: event.target.areaSize.value,
      paintType: event.target.paintType.value,
      wallColors: event.target.wallColors.value,
      noOfCoats: event.target.noOfCoats.value,
      paintFinish: event.target.paintFinish.value,
      additionalDetails: event.target.additionalDetails.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/paintings/painting",
        formData
      );
      if (response.status === 200) {
        alert("Painting data added successfully!");
        window.location.reload();
      } else {
        alert("Error adding Painting!");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <span class="text-primary mb-3 title1">Buy Service</span>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="row">
                  <div className="col-md-6">
                    <h4>Room Name</h4>
                    <select className="form-select" id="roomName">
                      <option selected>Select type of Room</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Kitchen">Kitchen</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <h4>Wall Colors</h4>
                    <div className="row">
                      <div className="col-md-4">
                        <label className="form-label">Wall 1</label>
                        <input
                          type="color"
                          className="form-control"
                          id="wallColors"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Wall 2</label>
                        <input
                          type="color"
                          className="form-control"
                          id="wallColors"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Wall 3</label>
                        <input
                          type="color"
                          className="form-control"
                          id="wallColors"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Wall 4</label>
                        <input
                          type="color"
                          className="form-control"
                          id="wallColors"
                        />
                      </div>
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
                    id="noOfCoats"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PainterAppoinment;
