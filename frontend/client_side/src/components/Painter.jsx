import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Painter() {
  return (
    <div>
      <div className="container">
        <div className="center_text">
          <div className="building_icon">
            <img className="img_title" src="../homepainter.png" />
          </div>
          <span className="title1">Painter Plus</span>
        </div>

        {/* <!-- Interior Painting --> */}
        <section id="interior-painting" class="mb-5">
          <span class="text-primary mb-3 title1">Interior Painting</span>
          <div class="row">
            <div class="col-md-6">
              <p>
                Involves painting the interior walls, ceilings, trim, and other
                surfaces within a building or home. Typically includes surface
                preparation, priming, and applying multiple coats of paint.
                Often customized to the client’s preferences regarding color
                schemes, finishes, and styles.
              </p>
            </div>
            <div class="col-md-6">
              <ul class="list-group">
                <li class="list-group-item">Wall Painting</li>
                <li class="list-group-item">Ceiling Painting</li>
                <li class="list-group-item">Trim and Molding Painting</li>
                <li class="list-group-item">Accent Walls</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Exterior Painting --> */}
        <section id="exterior-painting" class="mb-5">
          <span class="text-primary mb-3 title1">Exterior Painting</span>
          <div class="row">
            <div class="col-md-6">
              <p>
                Focuses on painting the exterior surfaces of a building,
                including walls, doors, windows, and sometimes roofs. Requires
                weather-resistant and durable paint to withstand the elements.
              </p>
            </div>
            <div class="col-md-6">
              <ul class="list-group">
                <li class="list-group-item">Siding Painting</li>
                <li class="list-group-item">Deck and Fence Painting</li>
                <li class="list-group-item">Stucco Painting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Decorative Painting --> */}
        <section id="decorative-painting" class="mb-5">
          <span class="text-primary mb-3 title1">Decorative Painting</span>
          <div class="row">
            <div class="col-md-6">
              <p>
                Involves creating unique and artistic designs on walls or
                ceilings, often for aesthetic or thematic purposes.
              </p>
            </div>
            <div class="col-md-6">
              <ul class="list-group">
                <li class="list-group-item">Faux Finishing</li>
                <li class="list-group-item">Murals</li>
                <li class="list-group-item">Textured Painting</li>
                <li class="list-group-item">Stencil Painting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Commercial Painting --> */}
        <section id="commercial-painting" class="mb-5">
          <span class="text-primary mb-3 title1">Commercial Painting</span>
          <div class="row">
            <div class="col-md-6">
              <p>
                Tailored for businesses, commercial buildings, and large-scale
                projects. It often involves specialized equipment and
                techniques.
              </p>
            </div>
            <div class="col-md-6">
              <ul class="list-group">
                <li class="list-group-item">Office Building Painting</li>
                <li class="list-group-item">
                  Warehouse and Industrial Painting
                </li>
                <li class="list-group-item">Retail Store Painting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Specialty Painting --> */}
        <section id="specialty-painting" class="mb-5">
          <span class="text-primary mb-3 title1">Specialty Painting</span>
          <div class="row">
            <div class="col-md-6">
              <p>
                Involves specific types of painting that require specialized
                knowledge and materials.
              </p>
            </div>
            <div class="col-md-6">
              <ul class="list-group">
                <li class="list-group-item">Epoxy Flooring</li>
                <li class="list-group-item">Fire-Resistant Coatings</li>
                <li class="list-group-item">Waterproofing Paint</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Residential Painting --> */}
        <section id="residential-painting" class="mb-5">
          <span class="text-primary mb-3 title1">Residential Painting</span>
          <div class="row">
            <div class="col-md-6">
              <p>
                Includes painting services specifically tailored for homes and
                residential properties.
              </p>
            </div>
            <div class="col-md-6">
              <ul class="list-group">
                <li class="list-group-item">New Home Painting</li>
                <li class="list-group-item">Repainting and Renovation</li>
                <li class="list-group-item">Cabinet Painting</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 mb-5">
            <Link className="btn btn-primary" to="/Appointment" type="submit">Add Service</Link>
          </div>
        </section>
      </div>

      {/* image section */}
      <div className="container mt-4">
        <h4 className="mb-3 title1">Our Projects</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="../paint1.png"
              alt="Project 1"
              className="img-fluid rounded img_size"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="../paint2.png"
              alt="Project 2"
              className="img-fluid rounded img_size"
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="../paint3.png"
              alt="Project 3"
              className="img-fluid rounded img_size"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Painter;
