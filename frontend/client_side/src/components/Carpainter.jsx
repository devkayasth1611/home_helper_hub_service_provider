import React from "react";
import "../App.css";

function Carpentry() {
  return (
    <div>
      <div className="container">
        <div className="center_text">
          <div className="building_icon">
            <img className="img_title" src="../carpainter.png" alt="Carpentry Icon" />
          </div>
          <span className="title1">Master Carpenter</span>
        </div>

        {/* <!-- Residential Carpentry --> */}
        <section id="residential-carpentry" className="mb-5">
          <span className="text-primary mb-3 title1">Residential Carpentry</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Expert carpentry services for homes, including custom furniture, cabinetry, and general woodwork, designed to enhance the beauty and functionality of your living space.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Custom Furniture</li>
                <li className="list-group-item">Cabinetry Installation</li>
                <li className="list-group-item">Trim and Molding</li>
                <li className="list-group-item">Deck and Patio Construction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Commercial Carpentry --> */}
        <section id="commercial-carpentry" className="mb-5">
          <span className="text-primary mb-3 title1">Commercial Carpentry</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                High-quality carpentry services for commercial spaces, including office interiors, retail displays, and structural woodwork, tailored to meet your business needs.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Office Interiors</li>
                <li className="list-group-item">Retail Display Units</li>
                <li className="list-group-item">Partitions and Walls</li>
                <li className="list-group-item">Custom Shelving</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Custom Woodworking --> */}
        <section id="custom-woodworking" className="mb-5">
          <span className="text-primary mb-3 title1">Custom Woodworking</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Bespoke woodworking services to create one-of-a-kind pieces, from intricate carvings to unique furniture, crafted with precision and care.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Handcrafted Furniture</li>
                <li className="list-group-item">Wood Carving</li>
                <li className="list-group-item">Custom Shelves</li>
                <li className="list-group-item">Wooden Art Pieces</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Repair and Restoration --> */}
        <section id="repair-restoration" className="mb-5">
          <span className="text-primary mb-3 title1">Repair and Restoration</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Professional repair and restoration services for damaged or aged woodwork, bringing your wooden items back to life with expert craftsmanship.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Furniture Repair</li>
                <li className="list-group-item">Wood Surface Refinishing</li>
                <li className="list-group-item">Antique Restoration</li>
                <li className="list-group-item">Structural Repairs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Outdoor Carpentry --> */}
        <section id="outdoor-carpentry" className="mb-5">
          <span className="text-primary mb-3 title1">Outdoor Carpentry</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Custom outdoor carpentry services including deck building, pergolas, and garden structures, designed to enhance your outdoor living spaces.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Deck Construction</li>
                <li className="list-group-item">Pergolas and Gazebos</li>
                <li className="list-group-item">Fencing and Gates</li>
                <li className="list-group-item">Garden Sheds</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Eco-Friendly Carpentry --> */}
        <section id="eco-friendly-carpentry" className="mb-5">
          <span className="text-primary mb-3 title1">Eco-Friendly Carpentry</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Sustainable carpentry solutions using eco-friendly materials and practices, aimed at minimizing environmental impact while delivering high-quality results.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Sustainable Wood Options</li>
                <li className="list-group-item">Recycled Materials</li>
                <li className="list-group-item">Eco-Friendly Finishes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Book Service --> */}
      {/* <div className="container mt-4">
      <span className="text-primary mb-3 title1">Buy Service</span>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <h5>Service Type</h5>
                <select className="form-select" id="serviceType" required>
                  <option value="" disabled selected>Select Service Type</option>
                  <option value="furniture-assembly">Furniture Assembly</option>
                  <option value="cabinet-installation">Cabinet Installation</option>
                  <option value="custom-furniture">Custom Furniture</option>
                  <option value="repair-restoration">Repair & Restoration</option>
                </select>
              </div>
              <div className="col-md-6">
                <h5>Material Type</h5>
                <select className="form-select" id="materialType" required>
                  <option value="" disabled selected>Select Material Type</option>
                  <option value="wood">Wood</option>
                  <option value="plywood">Plywood</option>
                  <option value="mdf">MDF</option>
                  <option value="particle-board">Particle Board</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <h5>Project Size</h5>
                <input
                  type="text"
                  className="form-control"
                  id="projectSize"
                  placeholder="Enter size or scope of the project"
                  required
                />
              </div>
              <div className="col-md-6">
                <h5>Preferred Date</h5>
                <input type="date" className="form-control" id="preferredDate" required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <h5>Preferred Time</h5>
                <input type="time" className="form-control" id="preferredTime" required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <h5>Additional Details</h5>
                <textarea
                  className="form-control"
                  id="additionalDetails"
                  rows="3"
                  placeholder="Provide any additional details or special requests"
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Buy Now
            </button>
          </form>
        </div>
      </div>
      </div> */}
      <div className="col-md-2 mb-5">
                  <button className="btn btn-primary" type="submit">ADD</button>
                </div>

       {/* Image Gallery */}
       <div className="container mt-4">
        <h4 className="mb-3 title1">Our Projects</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="../carpenter1.png"
              alt="Project 1"
              className="img-fluid rounded img_size"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="../carpenter2.png"
              alt="Project 2"
              className="img-fluid rounded img_size"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="../carpenter3.png"
              alt="Project 3"
              className="img-fluid rounded img_size"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carpentry;
