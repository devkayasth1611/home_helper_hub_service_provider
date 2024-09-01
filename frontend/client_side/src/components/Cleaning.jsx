import React from "react";
import "../App.css";

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
                Comprehensive cleaning services for homes and residential properties, ensuring a clean and healthy living environment.
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
                Professional cleaning services tailored for businesses and commercial spaces to maintain a pristine and inviting environment.
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
                Specialized cleaning services using advanced techniques and equipment to address specific cleaning needs.
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
          <span className="text-primary mb-3 title1">Emergency Cleaning Services</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Immediate response cleaning services for unexpected situations requiring urgent attention.
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
          <span className="text-primary mb-3 title1">Consultation and Design Services</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Expert advice and customized plans to ensure your cleaning needs are effectively met.
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
                Extra services to complement your cleaning needs and enhance your living or working space.
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
        </section>
      </div>

      {/* Buy Service Form */}
      {/* <div className="container mt-4">
        <span className="text-primary mb-3 title1">Buy Service</span>
        <div className="card">
          <div className="card-body">
            <form> */}
              {/* Service Type and Room Types */}
              {/* <div className="row"> */}
                {/* Service Type */}
                {/* <div className="col-md-6">
                  <h4>Service Type</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="residential"
                      value="Residential"
                    />
                    <label className="form-check-label" htmlFor="residential">
                      Residential
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="commercial"
                      value="Commercial"
                    />
                    <label className="form-check-label" htmlFor="commercial">
                      Commercial
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="specialty"
                      value="Specialty"
                    />
                    <label className="form-check-label" htmlFor="specialty">
                      Specialty
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="emergency"
                      value="Emergency"
                    />
                    <label className="form-check-label" htmlFor="emergency">
                      Emergency
                    </label>
                  </div>
                </div> */}

                {/* Room Types */}
                {/* <div className="col-md-6">
                  <h4>Room Types</h4>
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
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="bathroom"
                      value="Bathroom"
                    />
                    <label className="form-check-label" htmlFor="bathroom">
                      Bathroom
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="office"
                      value="Office"
                    />
                    <label className="form-check-label" htmlFor="office">
                      Office
                    </label>
                  </div>
                </div>
              </div> */}

              {/* Area Size and Number of Rooms */}
              {/* <div className="row mt-3">
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
                  <h4>Number of Rooms</h4>
                  <input
                    type="number"
                    className="form-control"
                    id="rooms"
                    placeholder="Enter the number of rooms"
                  />
                </div>
              </div>

              {/* Preferred Service Date and Time */}
              {/* <div className="row mt-3">
                <div className="col-md-6">
                  <h4>Preferred Service Date</h4>
                  <input
                    type="date"
                    className="form-control"
                    id="serviceDate"
                  />
                </div>
                <div className="col-md-6">
                  <h4>Preferred Service Time</h4>
                  <input
                    type="time"
                    className="form-control"
                    id="serviceTime"
                  />
                </div>
              </div> */}

              {/* Cleaning Type and Frequency */}
              {/* <div className="row mt-3">
                <div className="col-md-6">
                  <h4>Cleaning Type</h4>
                  <select className="form-select" id="cleaningType">
                    <option value="" disabled selected>
                      Select type of cleaning
                    </option>
                    <option value="standard">Standard Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="moveInMoveOut">Move-In/Move-Out Cleaning</option>
                    <option value="postConstruction">Post-Construction Cleaning</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <h4>Frequency</h4>
                  <select className="form-select" id="frequency">
                    <option value="" disabled selected>
                      Select frequency
                    </option>
                    <option value="oneTime">One-Time</option>
                    <option value="weekly">Weekly</option>
                    <option value="biWeekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div> */}

              {/* Additional Details */}
              {/* <div className="row mt-3">
                <div className="col-md-12">
                  <h4>Additional Details</h4>
                  <textarea
                    className="form-control"
                    id="additionalDetails"
                    rows="3"
                    placeholder="Provide any additional details"
                  ></textarea>
                </div>
              </div> */}

              {/* Submit Button */}
              {/* <button type="submit" className="btn btn-primary mt-3">
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
