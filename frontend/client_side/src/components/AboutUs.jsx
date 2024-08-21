import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>We are dedicated to providing the best service to our customers.</p>
      </section>

      <section className="about-content">
        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            hello mission is to revolutionize the industry by delivering top-quality products and 
            exceptional customer service. We strive to innovate and lead the market with integrity.
          </p>
        </div>
        <div className="about-vision">
          <h2>Our Vision</h2>
          <p>
            hello vision is to be the leading provider of innovative solutions, trusted by our customers 
            and respected by our peers. We aim to make a positive impact on the industry and the community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;