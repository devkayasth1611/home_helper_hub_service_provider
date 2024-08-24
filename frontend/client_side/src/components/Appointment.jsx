import React from 'react'
import "../App.css";

function Appointment() {
  return (
    <div>
        <div className="contact_section layout_padding">
         <div className="container-fluid">
            <div className="contact_section_2 align">
               <div className="row">
                  <div className="col-md-6">
                     <h1 className="contact_taital">Book Appointment</h1>
                     <form action="">
                        <div className="mail_section_1">
                           <input type="text" className="mail_text" placeholder="Name" name="Name" />
                           <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number" /> 
                           <input type="text" className="mail_text" placeholder="Email" name="Email" />
                           <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                           <div className="send_bt"><a href="#">Book</a></div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Appointment