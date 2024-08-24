import React from 'react'
import { Link } from 'react-router-dom'

function Service() {
  return (
    <div>
    <div class="service_section layout_padding">
         <div class="container-fluid">
            <div class="row">
               <div class="col-sm-12">
                  <h1 class="service_taital">Our Services</h1>
               </div>
            </div>
            <div class="service_section_2">
               <div class="row">
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img src="images/building-icon.png" /></div>
                        <h4 class="residential_text">Residential Services</h4>
                        <p class="service_text">alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything</p>
                     </div>
                     <div class="readmore_bt"><a href="#">Read More</a></div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img src="images/flash-icon.png" /></div>
                        <h4 class="residential_text">Commercial Services</h4>
                        <p class="service_text">alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything</p>
                     </div>
                     <div class="readmore_bt"><a href="#">Read More</a></div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img src="images/industrial-icon.png" /></div>
                        <h4 class="residential_text">Industrial Services</h4>
                        <p class="service_text">alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything</p>
                     </div>
                     <div class="readmore_bt"><a href="#">Read More</a></div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img src="images/bulb-icon.png" /></div>
                        <h4 class="residential_text">Electrical Services</h4>
                        <p class="service_text">alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything</p>
                     </div>
                     <div class="readmore_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  </div>
  )
}

export default Service