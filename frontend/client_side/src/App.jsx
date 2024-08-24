import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Router>
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        {sidebarOpen && <Sidebar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
