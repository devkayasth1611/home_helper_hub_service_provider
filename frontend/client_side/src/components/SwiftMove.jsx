import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function SwiftMove() {
  return (
    <div>
      <div className="container">
        <div className="center_text">
          <div className="moving_icon">
            <img
              className="img_title"
              src="../pack.png"
              alt="Swift Move Icon"
            />
          </div>
          <span className="title1">Swift Move</span>
        </div>

        {/* <!-- Residential Moving --> */}
        <section id="residential-moving" className="mb-5">
          <span className="text-primary mb-3 title1">Residential Moving</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Services include packing, transporting, and unpacking household
                items. We ensure a smooth and stress-free move to your new home.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Local Moving</li>
                <li className="list-group-item">Long-Distance Moving</li>
                <li className="list-group-item">Apartment Moving</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Commercial Moving --> */}
        <section id="commercial-moving" className="mb-5">
          <span className="text-primary mb-3 title1">Commercial Moving</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Specialized in moving offices and businesses, ensuring minimal
                disruption to operations.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Office Relocation</li>
                <li className="list-group-item">Corporate Moving</li>
                <li className="list-group-item">Warehouse Relocation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Specialty Moving --> */}
        <section id="specialty-moving" className="mb-5">
          <span className="text-primary mb-3 title1">Specialty Moving</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Moving services for valuable and delicate items, ensuring their
                safe transportation.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Piano Moving</li>
                <li className="list-group-item">Fine Art Moving</li>
                <li className="list-group-item">Antique Moving</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Packing Services --> */}
        <section id="packing-services" className="mb-5">
          <span className="text-primary mb-3 title1">Packing Services</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Professional packing services to ensure your items are safe and
                secure during transit.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Full Packing Service</li>
                <li className="list-group-item">Partial Packing Service</li>
                <li className="list-group-item">Unpacking Service</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 mb-5">
            <Link className="btn btn-primary" to="/Appointment" type="submit">
              Add Service
            </Link>
          </div>
        </section>

        {/* Image Section */}
        <div className="container mt-4">
          <h4 className="mb-3 title1">Our Projects</h4>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img
                src="../pack1.png"
                alt="Project 1"
                className="img-fluid rounded img_size"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="../pack2.png"
                alt="Project 2"
                className="img-fluid rounded img_size"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="../pack3.png"
                alt="Project 3"
                className="img-fluid rounded img_size"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwiftMove;
