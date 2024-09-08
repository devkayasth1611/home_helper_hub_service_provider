import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Cleaning() {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="center_text">
          <div className="cleaning_icon">
            <img
              className="img_title"
              src="../cleaning.png"
              alt="Cleaning Service"
            />
          </div>
          <span className="title1">Sparkle Clean</span>
        </div>

        {/* Residential Cleaning */}
        <section id="residential-cleaning" className="mb-5">
          <span className="text-primary mb-3 title1">Residential Cleaning</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Comprehensive cleaning services for homes and residential
                properties, ensuring a clean and healthy living environment.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">House Cleaning</li>
                <li className="list-group-item">Apartment Cleaning</li>
                <li className="list-group-item">Deep Cleaning</li>
                <li className="list-group-item">Move-in/Move-out Cleaning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Commercial Cleaning */}
        <section id="commercial-cleaning" className="mb-5">
          <span className="text-primary mb-3 title1">Commercial Cleaning</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Professional cleaning services tailored for businesses and
                commercial spaces to maintain a pristine and inviting
                environment.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Office Cleaning</li>
                <li className="list-group-item">Retail Cleaning</li>
                <li className="list-group-item">Industrial Cleaning</li>
                <li className="list-group-item">Post-construction Cleaning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Specialty Cleaning */}
        <section id="specialty-cleaning" className="mb-5">
          <span className="text-primary mb-3 title1">Specialty Cleaning</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Specialized cleaning services using advanced techniques and
                equipment to address specific cleaning needs.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Carpet Cleaning</li>
                <li className="list-group-item">Window Cleaning</li>
                <li className="list-group-item">Upholstery Cleaning</li>
                <li className="list-group-item">Green Cleaning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Emergency Cleaning Services */}
        <section id="emergency-cleaning" className="mb-5">
          <span className="text-primary mb-3 title1">
            Emergency Cleaning Services
          </span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Immediate response cleaning services for unexpected situations
                requiring urgent attention.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Water Damage Cleaning</li>
                <li className="list-group-item">Fire Damage Cleaning</li>
                <li className="list-group-item">Mold Remediation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consultation and Design Services */}
        <section id="consultation-design" className="mb-5">
          <span className="text-primary mb-3 title1">
            Consultation and Design Services
          </span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Expert advice and customized plans to ensure your cleaning needs
                are effectively met.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Customized Cleaning Plans</li>
                <li className="list-group-item">Cleaning Audits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section id="additional-services" className="mb-5">
          <span className="text-primary mb-3 title1">Additional Services</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Extra services to complement your cleaning needs and enhance
                your living or working space.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Organizing Services</li>
                <li className="list-group-item">Laundry Services</li>
                <li className="list-group-item">Window Washing</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 mb-5">
            <Link className="btn btn-primary" to="/Appointment" type="submit">
              Add Service
            </Link>
          </div>
        </section>
      </div>

      {/* Image Gallery */}
      <div className="container mt-4">
        <h4 className="mb-3 title1">Our Projects</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="../clean1.png"
              alt="Project 1"
              className="img-fluid rounded img_size"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="../clean2.png"
              alt="Project 2"
              className="img-fluid rounded img_size"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="../clean3.png"
              alt="Project 3"
              className="img-fluid rounded img_size"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cleaning;
