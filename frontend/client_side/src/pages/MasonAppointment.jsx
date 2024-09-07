import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function MasonAppointment() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      structureType: event.target.structureType.value,
      areaSize: event.target.areaSize.value,
      materialType: event.target.materialType.value,
      workType: event.target.workType.value,
      additionalDetails: event.target.additionalDetails.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/masons/mason",
        formData
      );
      if (response.status === 200) {
        alert("Mason data added successfully!");
        window.location.reload();
      } else {
        alert("Error adding Mason!");
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
                  <h4>Structure Type</h4>
                  <select className="form-select" id="structureType">
                    <option selected>Select Structure type</option>
                    <option value="Wall">Wall</option>
                    <option value="Foundation">Foundation</option>
                    <option value="concrete">Concrete</option>
                    <option value="Chimmney">Chimney</option>
                  </select>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasonAppointment;
