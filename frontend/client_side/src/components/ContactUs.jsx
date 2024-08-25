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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29980639598!2d72.41458770277544!3d23.020157729658276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1724564315643!5m2!1sen!2sin" width="600" height="450"></iframe>
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
