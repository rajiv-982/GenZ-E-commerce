import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-container">
      <div class="footer-column">
      <h4>Trending Products</h4>
      <ul>
          <li>Exclusive Drops</li>
          <li>Flash Sales</li>
          <li>Limited Edition Gear</li>
          <li>Personalized Picks</li>
          <li>Customizable Apparel</li>
      </ul>

      </div>

      <div class="footer-column">
      <h4>Quick Links</h4>
      <ul>
          <li>Shop Now</li>
          <li>Trending</li>
          <li>Our Story</li>
          <li>Find Us</li>
          <li>Get Exclusive Access</li>
          
      </ul>

      </div>

      <div class="footer-column">
      <h4>Explore GenZCart</h4>
      <ul>
          <li>Meet the Squad</li>
          <li>Behind the Scenes</li>
          <li>What They’re Saying</li>
          <li>Latest Buzz</li>
          <li>In the Loop</li>
      </ul>

      </div>

      <div class="footer-column">
      <h4>Legal Stuff</h4>
      <ul>
          <li>Your Privacy Matters</li>
          <li>Terms & Conditions</li>
          <li>Accessibility Info</li>
      </ul>

      </div>

      <div class="footer-column">
          <h4>Connect with Us</h4>
          
      </div>
  </div>
      <h1 className="text-center">All Right Reserved &copy; GenZCart</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;