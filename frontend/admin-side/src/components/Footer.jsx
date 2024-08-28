import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_section">
         <div className="container">
            <div className="footer_sectio_2">
               <div className="row">
                  <div className="col-lg-4 col-md-4">
                     <h2 className="useful_text">Quick Links</h2>
                     <div className="footer_menu">
                        <ul>
                           <li className="active"><Link to="/">Home</Link></li>
                           <li><Link to="/AboutUs">About</Link></li>
                           <li><Link to="/Service">Services</Link></li>
                           <li><Link to="/Appointment">Appointment</Link></li>
                           <li><Link to="/ContactUS">Contact Us</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                     <h2 className="useful_text"></h2>
                     <p className="footer_text"></p>
                     <div className="social_icon">
                        <ul>
                           <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                     <h2 className="useful_text">Newsletter</h2>
                     <input type="text" className="Enter_text" placeholder="Enter Your Email" name="Enter Your Email" />
                     <div className="subscribe_bt"><a href="#">Subscribe</a></div>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">@2024 All Rights Reserved. Design by Dev, Vishal, Krishna.</p>
         </div>
      </div>
      </div>
      
  );
}

export default Footer;
