import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

function AppointmentForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      appointmentDate: event.target.appointmentDate.value,
      status: event.target.status.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/appointments/appointment",
        formData
      );
      if (response.status === 200) {
        alert("Appointment data added successfully!");
        window.location.reload();
      } else {
        alert("Error adding Appointment!");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

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
                  <h5 className="card-title">Appointment Form</h5>

                  {/* <!-- General Form Elements --> */}
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <label
                        for="inputDate"
                        className="col-sm-2 col-form-label"
                      >
                        Appointment Date
                      </label>
                      <div className="col-sm-12">
                        <input
                          type="date"
                          className="form-control"
                          id="appointmentDate"
                        />
                      </div>
                    </div>
                    <fieldset className="row mb-3">
                      <legend className="col-form-label col-sm-2 pt-0">
                        Status
                      </legend>
                      <div className="col-sm-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="status"
                            value="In Process"
                          />
                          <label className="form-check-label" for="gridRadios1">
                            In Process
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="status"
                            value="Done"
                          />
                          <label className="form-check-label" for="gridRadios2">
                            Done
                          </label>
                        </div>
                        <div className="form-check disabled">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="status"
                            value="Pendding"
                          />
                          <label className="form-check-label" for="gridRadios3">
                            Pendding
                          </label>
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

export default AppointmentForm;
