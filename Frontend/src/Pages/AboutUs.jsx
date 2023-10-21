import React from "react";
import "./AboutUs.css"; // Import your custom CSS file

 export const AboutUs=()=> {
  return (
    <>
    <div className="Aboutuspage">
    <div className="container containerAboutus mt-5 justify-content-center align-item-center">
      <h1 className="display-4 text-primary">Welcome to Our Website</h1>
      <p className="lead">
        We are a dedicated team of professionals working to provide top-notch solutions to our clients. Our mission is to deliver excellence in every project we undertake.
      </p>
      <p>
        We value transparency, innovation, and customer satisfaction. With years of experience, we have successfully completed numerous projects across various industries.
      </p>
      <p>Feel free to contact us to discuss your requirements or to learn more about our services. We look forward to working with you!</p>
      <hr/>
      {/* Social Media Links with Icons */}
        <p>Contact Us</p>
      <div className="social-icons mt-4">
        <a href="https://www.linkedin.com/in/hival-patel-657654249" className="social-icon"><i className="fab fa-linkedin fa-3x"></i></a>
        <a href="https://www.instagram.com/hival_01" className="social-icon"><i className="fab fa-instagram fa-3x"></i></a>
      </div>
    </div>
    </div>
    </>
  );
}

export default AboutUs;
