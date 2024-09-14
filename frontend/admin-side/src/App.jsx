import React,{ useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './Component/Header'
import SideBar from './Component/SideBar'
import Footer from './Component/Footer'
import Home from './Component/Home'
import DataTable from './Component/DataTable';
import GeneralTable from './Component/GeneralTable';
import UserProfile from './Component/UserProfile';
import Login from './Component/Login';
import Register from './Component/Register';
import AdminForm from './Component/AdminForm';
import AdminTable from './Component/AdminTable';
import UserForm from './Component/UserForm';
import UserTable from './Component/UserTable';
import AppointmentForm from './Component/AppointmentForm';
import AppointmentTable from './Component/AppointmentTable';
import ServiceForm from './Component/ServiceForm';
import ServiceTable from './Component/ServiceTable';
import ServiceProviderForm from './Component/ServiceProviderForm';
import ServiceProviderTable from './Component/ServiceProviderTable';
import ServiceCategoryForm from './Component/ServiceCategoryForm';
import ServiceCategoryTable from './Component/ServiceCategoryTable';
import PaymentForm from './Component/PaymentForm';
import PaymentTable from './Component/PaymentTable';
import ReviewForm from './Component/ReviewForm';
import ReviewTable from './Component/ReviewTable';
import AdminUpdate from './Component/AdminUpdate';
import CarpenterTable from './Component/CarpenterTable';
import PainterTable from './Component/PainterTable';
import ElectricianTable from './Component/ElectricianTable';
import PlumbingTable from './Component/PlumbingTable';
import SwiftMoveTable from './Component/SwiftMoveTable';
import EventManagementTable from './Component/EventManagementTable';
import MasonTable from './Component/MasonTable';
import CleaningTable from './Component/CleaningTable';

function App() {
  

  return (
    <>
     <Router>
        <Header />
        <SideBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DataTable" element={<DataTable />} />
          <Route path="/GeneralTable" element={<GeneralTable />} />
          <Route path='/UserProfile' element={<UserProfile />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/AdminForm' element={<AdminForm />} />
          <Route path='/AdminTable' element={<AdminTable />} />
          <Route path='/UserForm' element={<UserForm />} />
          <Route path='/UserTable' element={<UserTable />} />
          <Route path='/AppointmentForm' element={<AppointmentForm />} />
          <Route path='/AppointmentTable' element={<AppointmentTable />} />
          <Route path='/ServiceForm' element={<ServiceForm />} />
          <Route path='/ServiceTable' element={<ServiceTable />} />
          <Route path='/ServiceProviderForm' element={<ServiceProviderForm />} />
          <Route path='/ServiceProviderTable' element={<ServiceProviderTable />} />
          <Route path='/ServiceCategoryForm' element={<ServiceCategoryForm />} />
          <Route path='/ServiceCategoryTable' element={<ServiceCategoryTable />} />
          <Route path='/PaymentForm' element={<PaymentForm />} />
          <Route path='/PaymentTable' element={<PaymentTable />} />
          <Route path='/ReviewForm' element={<ReviewForm />} />
          <Route path='/ReviewTable' element={<ReviewTable />} />
          <Route path='/AdminUpdate' element={<AdminUpdate />} />
          <Route path='/CarpenterTable' element={<CarpenterTable />} />
          <Route path='/PainterTable' element={<PainterTable />} />
          <Route path='/ElectricianTable' element={<ElectricianTable />} />
          <Route path='/PlumbingTable' element={<PlumbingTable />} /> 
          <Route path='/SwiftMoveTable' element={<SwiftMoveTable />} />
          <Route path='/EventManagementTable' element={<EventManagementTable />} />
          <Route path='/MasonTable' element={<MasonTable />} />
          <Route path='/CleaningTable' element={<CleaningTable />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
