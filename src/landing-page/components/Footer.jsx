import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__brand">
            <a href="#">Knowledge Hive</a>
          </div>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#index" className="footer__nav-link">
                  Home
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#about" className="footer__nav-link">
                  About Us
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#features" className="footer__nav-link">
                  Features
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#contact" className="footer__nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer__social">
            <a
              href="https://github.com/vedanshi28/knowledgehive"
              className="footer__social-link"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="footer__social-link">
              <i class="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
        <div className="flex items-center text-center flex-col">
          <p className="footer__copyright text-indigo-400">
            &copy; Copyright 2024 Knowledge Hive. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
