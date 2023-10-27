import React from "react";
import "./AboutUs.css"; // Import your custom CSS file

 export const AboutUs=()=> {
  return (
    <>
    <div className="Aboutuspage">
    <div className="container containerAboutus mt-5 justify-content-center align-item-center">
      <h1 className="display-4 text-primary">Welcome to Our Website</h1>
      <p className="lead">
      Welcome to ReviewAnything, your trusted hub for real, everyday product reviews. We're all about simplicity – you log in, read reviews, and share your own. No distractions, just what you need to make smart decisions when buying gadgets, fashion, or anything else.

      </p>
      <p>
      ReviewAnything is your go-to source for genuine user feedback. We believe in the power of people helping people.

      </p>
      <p> So, join us, voice your opinions, and explore a community where your insights matter. Together, we simplify decision-making and make sure your choices are well-informed.</p>            <p>  Thank you for being part of our journey!</p>
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

