import React from "react";
import "../App.css";

function Painter() {
  return (
    <div>
      <div className="container">
        <div className="center_text">
          <div className="building_icon">
            <img className="img_title" src="../homepainter.png" />
          </div>
          <span className="title">Painter Plus</span>
        </div>

        {/* <!-- Interior Painting --> */}
        <section id="interior-painting" class="mb-5">
          <span class="text-primary mb-3 title">Interior Painting</span>
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
          <span class="text-primary mb-3 title">Exterior Painting</span>
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
          <span class="text-primary mb-3 title">Decorative Painting</span>
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
          <span class="text-primary mb-3 title">Commercial Painting</span>
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
          <span class="text-primary mb-3 title">Specialty Painting</span>
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
          <span class="text-primary mb-3 title">Residential Painting</span>
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
        </section>
      </div>

      {/* Buy Service */}
      <div className="container mt-4">
      <span class="text-primary mb-3 title">Buy Service</span>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h4>Room Name</h4>
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
              </div>
              <div className="col-md-6">
                <h4>Wall Colors</h4>
                <div className="row">
                  <div className="col-md-4">
                    <label className="form-label">Wall 1</label>
                    <input
                      type="color"
                      className="form-control"
                      id="wall1Color"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Wall 2</label>
                    <input
                      type="color"
                      className="form-control"
                      id="wall2Color"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Wall 3</label>
                    <input
                      type="color"
                      className="form-control"
                      id="wall3Color"
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Wall 4</label>
                    <input
                      type="color"
                      className="form-control"
                      id="wall4Color"
                    />
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
                  id="coats"
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
          </div>
        </div>
      </div>
      {/* image section */}
      <div className="container mt-4">
      <h4 className="mb-3 title">Our Projects</h4>
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
