import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import axios from 'axios'

function UserForm() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      userName: event.target.userName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      phoneNumber: event.target.phoneNumber.value,
      address: event.target.address.value,
      
      
    };

    try {
      const response = await axios.post('http://localhost:3000/users/user', formData);
      if (response.status === 200) {
        alert('User data added successfully!');
        window.location.reload();
      } else {
        alert('Error adding User!');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
        <main id="main" className="main">

<div className="pagetitle">
  <h1>Form Layouts</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home
        </Link>
        </li>
      <li className="breadcrumb-item">Forms</li>
      <li className="breadcrumb-item active">Layouts</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}
         <div className="col-lg-12">

<div className="card">
  <div className="card-body">
    <h5 className="card-title">User Form</h5>

    {/* <!-- Browser Default Validation --> */}
              <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12">
        <label for="inputName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="fullName" placeholder='Enter Full Name'/>
      </div>
      <div className="col-12">
        <label for="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder='Enter Email'/>
      </div>
      <div className="col-12">
        <label for="inputPassword4" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder='Enter password'/>
      </div>
      <div className="col-12">
        <label for="inputPassword4" className="form-label">confirmPassword</label>
        <input type="password" className="form-control" id="confirmPassword" placeholder='Enter password'/>
      </div>
               
                <div className="col-12">
        <label for="inputName" className="form-label">Phone Number</label>
        <input type="text" className="form-control" id="phoneNumber" placeholder='Enter phone Number'/>
      </div>
                <div className="col-12">
                  <label for="inputAddress5" className="form-label">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St"/>
                </div>
               
                
              
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                  </div>
                
                
                  
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">ADD</button>
                </div>
              </form>
              {/* <!-- End Browser Default Validation --> */}
  </div>
</div>



</div>
</main> 
    </div>
  )
}

export default UserForm