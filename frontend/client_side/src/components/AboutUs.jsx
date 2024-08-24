import React from 'react';
import "../App.css";

const AboutUs = () => {
  return (
    <>
    <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="about_taital">About Our electricity Company</h1>
               </div>
            </div>
         </div>
      </div>
      <div className="about_section_2 layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_taital_main">
                     <h1 className="slightly_text">Slightly believable. If you are going</h1>
                     <p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                     <div className="readmore_btn"><a href="#">Read More</a></div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="about_img"><img src="about-img.png" /></div>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};

export default AboutUs;