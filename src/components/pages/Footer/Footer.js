import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__links">
        <div className="footer__link-wrapper">
          <div className="footer__link-wrapper--items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer__link-wrapper--items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer__link-wrapper">
          <div className="footer__link-wrapper--items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social">
        <div className="social__wrap">
          <Link to="/" className="social__logo">
            StreamerCred
          </Link>
          <small className="copyright">Jeremy Gehlen © 2020</small>
          <div className="social__wrap--icons">
            <a
              className="social__wrap--icons__link"
              href="https://www.linkedin.com/in/jeremy-gehlen/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/JSGehlen/streamercred"
              target="_blank"
              rel="noopener noreferrer"
              className="social__wrap--icons__link"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
