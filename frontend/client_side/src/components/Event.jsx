import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function EventManager() {
  return (
    <div>
      <div className="container">
        <div className="center_text">
          <div className="building_icon">
            <img className="img_title" src="../event.png" alt="Event Manager" />
          </div>
          <span className="title1">Event Ease</span>
        </div>

        {/* <!-- Wedding Planning --> */}
        <section id="wedding-planning" className="mb-5">
          <span className="text-primary mb-3 title1">Wedding Planning</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Involves organizing and coordinating all aspects of a wedding,
                including venue selection, catering, decoration, and more.
                Tailored to the couple’s preferences to create a memorable
                event.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Venue Selection</li>
                <li className="list-group-item">Catering Services</li>
                <li className="list-group-item">Decoration and Themes</li>
                <li className="list-group-item">Entertainment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Corporate Events --> */}
        <section id="corporate-events" className="mb-5">
          <span className="text-primary mb-3 title1">Corporate Events</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Focuses on organizing events for businesses, including
                conferences, meetings, product launches, and team-building
                activities.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Conferences</li>
                <li className="list-group-item">Product Launches</li>
                <li className="list-group-item">Team-Building Activities</li>
                <li className="list-group-item">Corporate Parties</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Private Parties --> */}
        <section id="private-parties" className="mb-5">
          <span className="text-primary mb-3 title1">Private Parties</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Specializes in planning and executing private parties such as
                birthdays, anniversaries, and other celebrations. Personalized
                to suit the client's style and preferences.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Birthday Parties</li>
                <li className="list-group-item">Anniversary Celebrations</li>
                <li className="list-group-item">Themed Parties</li>
                <li className="list-group-item">Holiday Parties</li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Music Festivals --> */}
        <section id="music-festivals" className="mb-5">
          <span className="text-primary mb-3 title1">Music Festivals</span>
          <div className="row">
            <div className="col-md-6">
              <p>
                Organizes large-scale music events, including venue booking,
                artist management, stage setup, and security arrangements.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">Venue Booking</li>
                <li className="list-group-item">Artist Management</li>
                <li className="list-group-item">Stage Setup</li>
                <li className="list-group-item">Security Arrangements</li>
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
          <h4 className="mb-3 title1">Our Events</h4>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img
                src="../event1.png"
                alt="Event 1"
                className="img-fluid rounded img_size"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="../event2.png"
                alt="Event 2"
                className="img-fluid rounded img_size"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="../event3.png"
                alt="Event 3"
                className="img-fluid rounded img_size"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventManager;
