import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function ServiceForm() {
  return (
    <div>
        <main id="main" className="main">

<div className="pagetitle">
  <h1>Form Elements</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link></li>
      <li className="breadcrumb-item">Forms</li>
      <li className="breadcrumb-item active">Elements</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section className="section">
  <div className="row">
    <div className="col-lg-12">

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Service Form</h5>

          {/* <!-- General Form Elements --> */}
          <form>
            <div className="row mb-3">
              <label for="inputText" className="col-sm-2 col-form-label">Service Name</label>
              <div className="col-sm-12">
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="row mb-3">
                  <label for="inputPassword" className="col-sm-2 col-form-label">description</label>
                  <div className="col-sm-12">
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
                <div className="row mb-3">
              <label for="inputText" className="col-sm-2 col-form-label">Price</label>
              <div className="col-sm-12">
                <input type="text" className="form-control"/>
              </div>
            </div>
                <div class="row mb-3">
                  <label for="inputTime" class="col-sm-2 col-form-label">Duration</label>
                  <div class="col-sm-12">
                    <input type="time" class="form-control"/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="inputNumber" class="col-sm-2 col-form-label">service Image</label>
                  <div class="col-sm-12">
                    <input class="form-control" type="file" id="formFile"/>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">ADD</button>
                </div>
            </form>
            </div>
            </div>
            </div>
            </div>
            </section>
            </main>
    </div>
  )
}

export default ServiceForm