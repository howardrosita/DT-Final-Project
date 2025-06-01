import React from "react";

import logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook-icon.png";
import instagram from "../../assets/images/instagram-icon.png";
import twitter from "../../assets/images/twitter-icon.png";
import youtube from "../../assets/images/youtube-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img
            src={logo}
            alt="Red Curtain Addict Logo"
            className="footer-logo"
          />
        </div>

        <div className="footer-section links-small">
          <a href="#">Events</a>
          <a href="#">News</a>
          <a href="#">Episodes</a>
        </div>

        <div className="footer-section links-small">
          <a href="#">For professionals</a>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <a href="#">Terms & conditions</a>
        </div>

        <div className="footer-section social-media">
          <p>
            Follow us on social media and join our growing community of
            performing arts enthusiasts.
          </p>
          <div className="social-icons">
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
        </div>
        <p style={{ flex: "0 0 500px" }}>© Red Curtain Addict 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
