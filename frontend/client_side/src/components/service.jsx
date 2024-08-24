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
                        <div class="building_icon"><img className='img_s' src="../homepainter.png" /></div>
                        <h4 class="residential_text">Painter<br /> Plus</h4>
                        <p class="service_text">Transform your home with our professional painting services. Whether you need a fresh coat of paint for a single room or a complete home makeover, our skilled painters deliver flawless finishes and vibrant colors that breathe new life into your space.<br /></p>
                     </div>
                     <div class="readmore_bt"><Link to="/Painter">Read More</Link></div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img className='img_s' src="../electrician.png" /></div>
                        <h4 class="residential_text">BrightSpark Electricians</h4>
                        <p class="service_text">Expert electrical services for your home’s safety and efficiency. From fixing faulty wiring to installing new lighting fixtures, our certified electricians handle all your electrical needs with precision and care, ensuring your home is both safe and energy-efficient.</p>
                     </div>
                     <div class="readmore_bt"><Link to="/Electrician">Read More</Link></div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img className='img_s' src="../cleaning.png" /></div>
                        <h4 class="residential_text">Sparkle<br /> Clean</h4>
                        <p class="service_text">Thorough and reliable home cleaning services tailored to your needs. Our professional cleaners tackle every nook and cranny, from dusting and vacuuming to deep cleaning kitchens and bathrooms, leaving your home spotless and refreshed.<br /><br /></p>
                     </div>
                     <div class="readmore_bt"><Link to="/Cleaning">Read More</Link></div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img className='img_s' src="../carpainter.png" /></div>
                        <h4 class="residential_text">Master Carpenters</h4>
                        <p class="service_text">Skilled carpentry services for all your home improvement needs. From custom furniture and cabinetry to repairs and renovations, our expert carpenters bring craftsmanship and attention to detail to every project, enhancing the beauty and functionality of your home.</p>
                     </div>
                     <div class="readmore_bt"><Link to="/Carpainter">Read More</Link></div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img className='img_s' src="../plumber.png" /></div>
                        <h4 class="residential_text">Plumb <br />Perfect</h4>
                        <p class="service_text">Professional plumbing services you can trust for everything from minor leaks to major installations. Our experienced plumbers handle repairs, maintenance, and new installations with precision and care, ensuring your plumbing system runs smoothly and efficiently.<br /><br /><br /></p>
                     </div>
                     <div class="readmore_bt"><Link to="/Plumber">Read More</Link></div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img className='img_s' src="../mason.png" /></div>
                        <h4 class="residential_text">Mason<br /> Masters</h4>
                        <p class="service_text">Expert masonry services for durable and beautiful stone, brick, and concrete work. Whether it's building a new patio, repairing a chimney, or crafting custom stone features, our skilled masons deliver high-quality craftsmanship that stands the test of time, enhancing the structural integrity and aesthetic appeal of your home.</p>
                     </div>
                     <div class="readmore_bt"><Link to="/Mason">Read More</Link></div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img className='img_s' src="../event.png" /></div>
                        <h4 class="residential_text">Event<br />Ease</h4>
                        <p class="service_text"> Comprehensive event management services tailored to make your special occasions memorable and stress-free. From weddings and corporate events to private parties, our experienced team handles every detail—planning, coordination, decor, and more—ensuring a seamless and unforgettable experience that leaves you and your guests delighted.</p>
                     </div>
                     <div class="readmore_bt"><Link to="/Event">Read More</Link></div>
                  </div>
                  <div class="col-lg-3 col-sm-6">
                     <div class="service_box">
                        <div class="building_icon"><img className='img_s' src="../pack.png" /></div>
                        <h4 class="residential_text">Swift<br />Move</h4>
                        <p class="service_text"> Efficient and reliable packing and moving services designed to make your relocation hassle-free. Our professional movers expertly handle everything from packing delicate items to transporting heavy furniture, ensuring that your belongings are safely and securely moved to your new home or office with care and precision.</p>
                     </div>
                     <div class="readmore_bt"><Link to="/SwiftMove">Read More</Link></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  </div>
  )
}

export default Service