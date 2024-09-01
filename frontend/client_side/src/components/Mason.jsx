import React from "react";
import "../App.css";

function Mason() {
  return (
    <div>
      <div className="container">
        <div className="center_text">
          <div className="building_icon">
            <img className="img_title" src="../mason.png" alt="Mason Plus" />
          </div>
          <span className="title1">Mason Master</span>
        </div>

        {/* <!-- Bricklaying Services --> */}
        <section id="bricklaying-services" className="mb-5">
          <span className="text-primary mb-3 title1">Bricklaying Services</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Involves the construction of walls, partitions, and other structures using bricks and mortar.
                Typically includes surface preparation, layout, and alignment to ensure stability and durability.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Wall Construction</li>
                <li className="list-group-item">Fireplace Construction</li>
                <li className="list-group-item">Archways</li>
                <li className="list-group-item">Brick Repair</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Concrete Services --> */}
        <section id="concrete-services" className="mb-5">
          <span className="text-primary mb-3 title1">Concrete Services</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Focuses on the installation of concrete slabs, foundations, walkways, and other structures.
                Requires precise mixing, pouring, and curing techniques for strength and durability.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Foundation Laying</li>
                <li className="list-group-item">Driveway Installation</li>
                <li className="list-group-item">Walkways and Patios</li>
                <li className="list-group-item">Concrete Repair</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Stone Masonry --> */}
        <section id="stone-masonry" className="mb-5">
          <span className="text-primary mb-3 title1">Stone Masonry</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Involves the use of natural stones to create structures like walls, steps, and decorative elements.
                Requires skilled craftsmanship for precise cutting, fitting, and bonding.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Stone Wall Construction</li>
                <li className="list-group-item">Stone Steps and Pathways</li>
                <li className="list-group-item">Stone Veneer Installation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Chimney Construction --> */}
        <section id="chimney-construction" className="mb-5">
          <span className="text-primary mb-3 title1">Chimney Construction</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Tailored for constructing or repairing chimneys in residential or commercial properties.
                Involves specialized techniques to ensure proper ventilation and safety.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">New Chimney Construction</li>
                <li className="list-group-item">Chimney Repair and Restoration</li>
                <li className="list-group-item">Fireplace Chimneys</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Masonry Repair Services --> */}
        <section id="masonry-repair" className="mb-5">
          <span className="text-primary mb-3 title1">Masonry Repair Services</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Focuses on repairing existing masonry structures, including bricks, stones, and concrete elements.
                Ensures the longevity and integrity of the structure through quality repair work.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Brick and Stone Repair</li>
                <li className="list-group-item">Tuckpointing</li>
                <li className="list-group-item">Concrete Crack Repair</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Buy Service */}
      {/* <div className="container mt-4">
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
      </div> */}
      <div className="col-md-2 mb-5">
                  <button className="btn btn-primary" type="submit">ADD</button>
                </div>

      {/* image section */}
      <div className="container mt-4">
        <h4 className="mb-3 title1">Our Projects</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="../mason1.png"
              alt="Project 1"
              className="img-fluid rounded img_size"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="../mason2.png"
              alt="Project 2"
              className="img-fluid rounded img_size"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="../mason3.png"
              alt="Project 3"
              className="img-fluid rounded img_size"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mason;
