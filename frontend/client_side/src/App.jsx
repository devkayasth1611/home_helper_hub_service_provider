import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Appointment from "./components/Appointment";
import ContactUs from "./components/ContactUs";
import Service from "./components/service";
import Home from "./components/Home";
import Painter from "./components/Painter";
import Carpainter from "./components/Carpainter";
import Plumber from "./components/Plumber";
import Cleaning from "./components/Cleaning";
import Mason from "./components/Mason";
import SwiftMove from "./components/SwiftMove";
import Electrician from "./components/Electrician";
import Event from "./components/Event";
import Payment from "./pages/Payment";
import Review from "./pages/Review";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/Painter" element={<Painter />} />
          <Route path="/Cleaning" element={<Cleaning />} />
          <Route path="/Plumber" element={<Plumber />} />
          <Route path="/Carpainter" element={<Carpainter />} />
          <Route path="/Mason" element={<Mason />} />
          <Route path="/SwiftMove" element={<SwiftMove />} />
          <Route path="/Electrician" element={<Electrician />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
