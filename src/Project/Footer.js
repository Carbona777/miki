import React from 'react';
import './Combined.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';



import logo1 from'./logo1.png'; // Import your CSS file

function Footer() {
    
  return (
    <>
    <footer>
      <div className="row">
        <div className="col">
          <img src={logo1}className="logo" alt="logo" />
          <p>
            MusclesGenerate Copyright 2024 JW Media, LLC, parent company of
            MusclesMiki. All rights reserved.
          </p>
        </div>
        <div className="col">
          <h3>Products</h3>
          <p>Workouts</p>
          <p>Nutrition</p>
          <p>Features</p>
          <p className="email-id">NoneTeam@gmail.com</p>
          <h4>+91 -01120592366</h4>
        </div>
        <div className="col">
          <h3 className='linkss'>Links</h3>
          <ul className="links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="col">
          <h2 className="selter">NewSletter</h2>

          <form>
            <i className="far fa-envelope"></i>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faYoutube} />
        </div>
        </div>
      </div>
      <hr />
      <p className="copyright">©2020 -All Rights Reserved</p>
    </footer>
    </>
  );
}

export default Footer;
