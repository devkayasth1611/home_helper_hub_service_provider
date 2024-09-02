import React, { useState } from 'react';
import '../App.css';

import CarpenterAppointment from '../pages/CarpenterAppointment';
import CleaningAppointment from '../pages/CleaningAppointment';
import ElectricianAppointment from '../pages/ElectricianAppointment';
import EventAppointment from '../pages/EventAppointment';
import MasonAppointment from '../pages/MasonAppointment';
import SwiftMoveAppointment from '../pages/SwiftMoveAppointment';
import PlumberAppointment from '../pages/PlumberAppointment';
import PainterAppoinment from '../pages/PainterAppoinment';

function Appointment() {
  // State to track selected service type
  const [selectedService, setSelectedService] = useState('');

  // Function to handle service type change
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  // Function to render the selected service component
  const renderServicePage = () => {
    switch (selectedService) {
      case 'CarpenterAppointment':
        return <CarpenterAppointment />;
      case 'CleaningAppointment':
        return <CleaningAppointment />;
      case 'ElectricianAppointment':
        return <ElectricianAppointment />;
      case 'EventAppointment':
        return <EventAppointment />;
      case 'MasonAppointment':
        return <MasonAppointment />;
      case 'SwiftMoveAppointment':
        return <SwiftMoveAppointment />;
      case 'PlumberAppointment':
        return <PlumberAppointment />;
      case 'PainterAppoinment':
          return <PainterAppoinment />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header text-center">
          <h2 className="title1">Service Appointment Form</h2>
        </div>
        <div className="card-body">
          <form>
            {/* Service Type */}
            <div className="mb-3">
              <label htmlFor="serviceType" className="form-label">Service Type</label>
              <select
                className="form-select"
                id="serviceType"
                value={selectedService}
                onChange={handleServiceChange}
                required
              >
                <option value="" disabled>Select Service Type</option>
                <option value="CleaningAppointment">Cleaning</option>
                <option value="ElectricianAppointment">Electrician</option>
                <option value="PlumberAppointment">Plumbing</option>
                <option value="CarpenterAppointment">Carpentry</option>
                <option value="PainterAppoinment">Painting</option>
                <option value="SwiftMoveAppointment">Swift Move</option>
                <option value="EventAppointment">Event Management</option>
                <option value="MasonAppointment">Mason</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      {/* Conditionally render the selected service page */}
      <div className="mt-4">
        {renderServicePage()}
      </div>
    </div>
  );
}

export default Appointment;
