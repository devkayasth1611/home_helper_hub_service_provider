import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import SiderBar from './components/SiderBar';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <SiderBar/>
        <Routes>
    <Route path="/" element={<Home />} />

        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
