import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div>
      <div className="banner_section">
        <div className="container">
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="banner_taital">Electricity Service </h1>
                      <p className="banner_text">
                        Anything embarrassing hidden in the middle of text. All
                        the Lorem Ipsuanything embarrassing h
                      </p>
                      <div className="read_bt">
                        <Link to="/Appointment">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
