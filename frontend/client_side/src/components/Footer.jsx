import React from "react";
import "../App.css";

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
                           <li className="active"><a href="index.html">Home</a></li>
                           <li><a href="about.html">About</a></li>
                           <li><a href="service.html">Services</a></li>
                           <li><a href="blog.html">Blog</a></li>
                           <li><a href="testimonial.html">Testimonial</a></li>
                           <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                     <h2 className="useful_text">Blog</h2>
                     <p className="footer_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
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
            <p className="copyright_text">2024 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a> Distribution by <a href="https://themewagon.com">ThemeWagon</a></p>
         </div>
      </div>
      </div>
      
  );
}

export default Footer;
