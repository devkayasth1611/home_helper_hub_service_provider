import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

function UserForm() {
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
              <form className="row g-3">
              <div className="col-12">
        <label for="inputName" className="form-label">User Name</label>
        <input type="text" className="form-control" id="inputName" placeholder='Enter User Name'/>
      </div>
      <div className="col-12">
        <label for="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail" placeholder='Enter Email'/>
      </div>
      <div className="col-12">
        <label for="inputPassword4" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputpassword" placeholder='Enter password'/>
      </div>
                <div className="col-md-4">
                  <label for="validationDefault01" className="form-label">First name</label>
                  <input type="text" className="form-control" id="validationDefault01" placeholder='Enter First Name'/>
                </div>
                <div className="col-md-4">
                  <label for="validationDefault02" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="validationDefault02" placeholder='Enter Last Name'/>
                </div>
                <div className="col-12">
                  <label for="inputAddress5" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddres5s" placeholder="1234 Main St"/>
                </div>
               
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity" placeholder='Enter your City'/>
                </div>
                <div class="col-md-4"/>
                  <label for="inputState" className="form-label">State</label>
                  <select id="inputState" className="form-select">
                    <option selected>Gujrat</option>
                    <option>Gujrat</option>
                    <option>Madhya Pradesh</option>
                    <option>Uttar Pradesh</option>
                    <option>Rajasthan</option>
                    <option>Andhra Pradesh</option>
                    <option>Goa</option>
                    <option>Maharashtra</option>
                    <option>Sikkim</option>
                    <option> Chhattisgarh</option>

                  </select>
                  <div className="col-md-2">
                  <label for="inputZip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="inputZip" placeholder='Enter zip'/>
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