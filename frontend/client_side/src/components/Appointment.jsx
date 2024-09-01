// import React from 'react';
// import '../App.css';

// function Appointment() {
//   return (
//     <div className="container">
//       <div className="card">
//         <div className="card-header text-center">
//           <h2 className='title1'>Service Appointment Form</h2>
//         </div>
//         <div className="card-body">
//           <form>
//             {/* Service Type */}
//             <div className="mb-3">
//               <label htmlFor="serviceType" className="form-label">Service Type</label>
//               <select className="form-select" id="serviceType" required>
//                 <option value="" disabled selected>Select Service Type</option>
//                 <option value="Cleaning">Cleaning</option>
//                 <option value="Electrician">Electrician</option>
//                 <option value="Plumbing">Plumbing</option>
//                 <option value="Carpentry">Carpentry</option>
//                 <option value="Painting">Painting</option>
//                 <option value="Moving">Swift Move</option>
//                 <option value="Event Management">Event Management</option>
//               </select>
//             </div>

//             {/* Appointment Date */}
//             <div className="mb-3">
//               <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
//               <input type="date" className="form-control" id="appointmentDate" required />
//             </div>

//             {/* Additional Notes */}
//             <div className="mb-3">
//               <label htmlFor="notes" className="form-label">Additional Notes</label>
//               <textarea className="form-control" id="notes" rows="4" placeholder="Enter any additional notes" />
//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="btn btn-primary w-100">Book Service</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Appointment;

import React, { useState } from 'react';
import '../App.css';
// Import all the individual service pages/components
import Cleaning from './Cleaning';
import Electrician from './Electrician';
import Plumbing from './Plumber';
import Carpentry from './Carpainter';
import Painting from './Painter';
import SwiftMove from './SwiftMove';
import EventManagement from './Event';

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
      case 'Cleaning':
        return <Cleaning />;
      case 'Electrician':
        return <Electrician />;
      case 'Plumbing':
        return <Plumbing />;
      case 'Carpentry':
        return <Carpentry />;
      case 'Painting':
        return <Painting />;
      case 'Swift Move':
        return <SwiftMove />;
      case 'Event Management':
        return <EventManagement />;
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
                <option value="Cleaning">Cleaning</option>
                <option value="Electrician">Electrician</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Carpentry">Carpentry</option>
                <option value="Painting">Painting</option>
                <option value="Swift Move">Swift Move</option>
                <option value="Event Management">Event Management</option>
              </select>
            </div>

            {/* Appointment Date */}
            <div className="mb-3">
              <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
              <input type="date" className="form-control" id="appointmentDate" required />
            </div>

            {/* Additional Notes */}
            <div className="mb-3">
              <label htmlFor="notes" className="form-label">Additional Notes</label>
              <textarea className="form-control" id="notes" rows="4" placeholder="Enter any additional notes" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">Book Service</button>
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
