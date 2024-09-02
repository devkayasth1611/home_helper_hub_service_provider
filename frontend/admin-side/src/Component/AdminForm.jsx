import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

function AdminForm() {
  return (
    <div>
        <main id="main" className="main">

<div className="pagetitle">
  <h1>Form Layouts</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
      <li className="breadcrumb-item">Forms</li>
      <li className="breadcrumb-item active">Layouts</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}
         <div className="col-lg-12">

<div className="card">
  <div className="card-body">
    <h5 className="card-title">Admin Form</h5>

    {/* <!-- Vertical Form --> */}
    <form className="row g-3">
      <div className="col-12">
        <label for="inputName" className="form-label">Admin Name</label>
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
      <div className="col-12">
        <label for="inputNumber" className="form-label">Phone Number</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Enter Phone Number"/>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Add</button>
        <button type="reset" className="btn btn-secondary">Reset</button>
      </div>
    </form>
    {/* <!-- Vertical Form --> */}

  </div>
</div>



</div>
</main> 
    </div>
  )
}

export default AdminForm