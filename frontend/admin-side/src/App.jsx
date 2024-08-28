import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/header';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>
     <Router>
      <Header />
      <Sidebar />
      <Routes>
      </Routes>
     </Router>
    </>
  )
}

export default App
