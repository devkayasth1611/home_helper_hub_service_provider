import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function PaymentForm() {
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Form Elements</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
        <Link to="/">Home</Link>
        </li>
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
                  <h5 className="card-title">Payment Form</h5>

                  {/* <!-- General Form Elements --> */}
                  <form>
                  <div className="row mb-3">
                    <label for="inputText" className="col-sm-2 col-form-label">
                      Amount
                    </label>
                    <div className="col-sm-12">
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">
                      Payment Method
                    </legend>
                    <div className="col-sm-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios1"
                          value="option1"
                        />
                        <label className="form-check-label" for="gridRadios1">
                          Online
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label className="form-check-label" for="gridRadios2">
                          Cash On
                        </label>
                      </div>
                      <div className="form-check disabled">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios"
                          value="option3"
                        />
                        <label className="form-check-label" for="gridRadios3">
                          Card
                        </label>
                      </div>
                      <div className="row mb-3">
                        <label
                          for="inputDate"
                          className="col-sm-2 col-form-label"
                        >
                          Payment Date
                        </label>
                        <div className="col-sm-12">
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary" type="submit">
                          ADD
                        </button>
                      </div>
                    </div>
                  </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PaymentForm;
