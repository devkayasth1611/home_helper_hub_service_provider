import React from "react";
import "../App.css";

function Plumber() {
  return (
    <div>
      <div className="container">
        <div className="center_text">
          <div className="building_icon">
            <img
              className="img_title"
              src="../plumber.png"
              alt="Plumber Icon"
            />
          </div>
          <span className="title1">Plumber Perfact</span>
        </div>

        {/* <!-- Pipe Installation --> */}
        <section id="pipe-installation" className="mb-5">
          <span className="text-primary mb-3 title1">Pipe Installation</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Involves installing and repairing pipes that carry water, gas,
                or waste in residential and commercial buildings. Ensures proper
                connections, fittings, and sealing.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Water Pipe Installation</li>
                <li className="list-group-item">Gas Pipe Installation</li>
                <li className="list-group-item">Waste Pipe Installation</li>
                <li className="list-group-item">Pipe Repair and Replacement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Leak Repair --> */}
        <section id="leak-repair" className="mb-5">
          <span className="text-primary mb-3 title1">Leak Repair</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Specializes in detecting and repairing leaks in pipes, faucets,
                toilets, and other plumbing fixtures to prevent water damage.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Faucet Leak Repair</li>
                <li className="list-group-item">Toilet Leak Repair</li>
                <li className="list-group-item">Pipe Leak Repair</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Drain Cleaning --> */}
        <section id="drain-cleaning" className="mb-5">
          <span className="text-primary mb-3 title1">Drain Cleaning</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Involves clearing clogs and blockages from drains and ensuring
                smooth water flow. Includes the use of specialized tools and
                equipment.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Kitchen Drain Cleaning</li>
                <li className="list-group-item">Bathroom Drain Cleaning</li>
                <li className="list-group-item">Main Line Cleaning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Water Heater Services --> */}
        <section id="water-heater" className="mb-5">
          <span className="text-primary mb-3 title1">
            Water Heater Services
          </span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Involves installation, repair, and maintenance of water heaters
                to ensure a steady supply of hot water in homes and businesses.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Water Heater Installation</li>
                <li className="list-group-item">Water Heater Repair</li>
                <li className="list-group-item">
                  Tankless Water Heater Services
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Fixture Installation --> */}
        <section id="fixture-installation" className="mb-5">
          <span className="text-primary mb-3 title1">Fixture Installation</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Involves installing and replacing plumbing fixtures like
                faucets, sinks, toilets, and showers to ensure proper function
                and aesthetics.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Faucet Installation</li>
                <li className="list-group-item">Toilet Installation</li>
                <li className="list-group-item">Sink Installation</li>
                <li className="list-group-item">Shower Installation</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 mb-5">
            <button className="btn btn-primary" type="submit">
              ADD
            </button>
          </div>
        </section>
      </div>

      {/* Image Section */}
      <div className="container mt-4">
        <h4 className="mb-3 title1">Our Projects</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="../plumber1.png"
              alt="Project 1"
              className="img-fluid rounded img_size"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="../plumber2.png"
              alt="Project 2"
              className="img-fluid rounded img_size"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="../plumber3.png"
              alt="Project 3"
              className="img-fluid rounded img_size"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plumber;
