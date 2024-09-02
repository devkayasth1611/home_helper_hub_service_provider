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
          

         
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
