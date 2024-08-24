import React, { useState } from 'react';
import '../App.css';

const ContactUs = () => {

  return (
    <>
      <div className="contact_section layout_padding">
         <div className="container-fluid">
            <div className="contact_section_2">
               <div className="row">
                  <div className="col-md-6">
                     <h1 className="contact_taital">Get In Touch</h1>
                     <form action="">
                        <div className="mail_section_1">
                           <input type="text" className="mail_text" placeholder="Name" name="Name" />
                           <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number" /> 
                           <input type="text" className="mail_text" placeholder="Email" name="Email" />
                           <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                           <div className="send_bt"><a href="#">SEND</a></div>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-6 padding_right0">
                     <div className="map_main">
                        <div className="map-responsive">
                           <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="470" ></iframe>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};

export default ContactUs;
