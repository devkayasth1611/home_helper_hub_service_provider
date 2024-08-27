import React from "react";
import "../App.css";

const AboutUs = () => {
  return (
    <>
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="about_taital">About Our Home-Helper Hub</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="about_section_2 layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital_main">
                <h1 className="slightly_text">
                  Your Trusted Partner for All Home Services
                </h1>
                <p className="lorem_text">
                  Welcome to Home Helper Hub, where we are dedicated to making
                  your home a place of comfort, safety, and beauty. We
                  understand that maintaining a home can be a challenge, with
                  countless tasks requiring attention and expertise. That’s why
                  we created Home Helper Hub—a comprehensive platform that
                  connects you with top-notch professionals who can handle all
                  your home service needs with ease and reliability.
                </p>
                <h1 className="slightly_text">Our Mission</h1>
                <p className="lorem_text">
                  Our mission is to simplify home maintenance and improvement by
                  offering a seamless and trusted platform where homeowners can
                  easily access, book, and manage a wide range of services. We
                  are committed to delivering high-quality, dependable, and
                  affordable solutions that make life easier and homes better.
                </p>
                <h1 className="slightly_text">What We Offer</h1>
                <p className="lorem_text">
                  At Home Helper Hub, we provide a wide array of services under
                  one roof, ensuring that whatever your home needs, we have the
                  right solution for you. From routine maintenance and emergency
                  repairs to major renovations and specialized services, we
                  cover every aspect of home care, including:
                  <ol>
                    <li>
                      <span className="text_s">1.Cleaning Services :</span> Keep
                      your home fresh and clean with our professional cleaning
                      teams.
                    </li>
                    <li>
                      <span className="text_s">2.Electrical Services :</span>
                      Ensure your home’s electrical systems are safe and
                      up-to-date with expert installations and repairs.
                    </li>
                    <span className="text_s">3.Plumbing Services :</span>{" "}
                    Address leaks, clogs, and installations with our reliable
                    plumbing professionals.
                    <li>
                      <span className="text_s">4.Painting Services :</span>
                      Enhance your home’s aesthetics with high-quality interior
                      and exterior painting.
                    </li>
                    <li>
                      <span className="text_s">
                        5.Landscaping & Lawn Care :
                      </span>
                      Transform your outdoor space into a beautiful,
                      well-maintained oasis.
                    </li>
                    <li>
                      <span className="text_s">6.Handyman Services :</span> From
                      minor repairs to small upgrades, our handymen are here to
                      help with a variety of tasks.
                    </li>
                  </ol>
                </p>
                <h1 className="slightly_text">Our Values</h1>
                <p className="lorem_text">
                  At the heart of Home Helper Hub are the values that guide
                  everything we do:
                  <ol>
                    <li className="text_s">Quality :</li> We work with skilled
                    and experienced professionals who are committed to
                    delivering top-tier service every time.
                    <li className="text_s">Trust :</li> We believe in building
                    lasting relationships with our customers based on
                    transparency, integrity, and reliability.
                    <li className="text_s">Convenience :</li> We strive to make
                    booking and managing home services as easy and hassle-free
                    as possible.
                    <li className="text_s">Customer Satisfaction :</li> Your
                    satisfaction is our ultimate goal, and we go above and
                    beyond to ensure you’re happy with our services.
                  </ol>
                </p>
                <h1 className="slightly_text">Our Story</h1>
                <p className="lorem_text">
                Home Helper Hub was born out of a simple idea: to create a centralized platform that makes it easier for homeowners to find and book reliable home services. What started as a small venture has grown into a trusted hub, serving countless families and businesses. Our journey has been guided by a deep understanding of the challenges homeowners face and a commitment to providing solutions that are both effective and convenient.
                </p>
                <h1 className="slightly_text">Why Choose Us?</h1>
                <p className="lorem_text">
                When you choose Home Helper Hub, you’re choosing a partner who genuinely cares about your home. We handpick our service providers, ensuring they meet our strict standards for quality, professionalism, and customer service. Our easy-to-use platform allows you to book the services you need with confidence, knowing that help is just a click away.
                </p>
                <h1 className="slightly_text">Join Our Community</h1>
                <p className="lorem_text">
                We invite you to join the Home Helper Hub community and experience the peace of mind that comes from having all your home service needs taken care of by experts. Whether you’re dealing with a small repair, planning a renovation, or simply keeping up with routine maintenance, Home Helper Hub is here to make your life easier.
                </p>
                <h1 className="slightly_text">Get in Touch</h1>
                <p className="lorem_text">
                We’d love to hear from you! Whether you have questions, need advice, or are ready to book a service, our team is here to help. Contact us today and discover how Home Helper Hub can make your home the best it can be.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_img">
                <img src="about-img.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
