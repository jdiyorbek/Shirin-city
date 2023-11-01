import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Carusel from "../components/Carusel";

function Header() {
  return (
    <>
        <header className="header">
          <div className="container">
            <div className="header__contact-info">
              <Link to="/" className="header__logo">
                <img src="./images/l.jpg" alt="" />
              </Link>
              <div className="contact-info">
                <div className="contact-info-item">
                  <span className="fa fa-phone" aria-hidden="true"></span>
                  <div>
                    <h4>Telefon raqamimiz</h4>
                    <span>+998 91 547-40-71</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <span className="fa fa-map-marker" aria-hidden="true"></span>
                  <div>
                    <h4>Manzilimiz: </h4>
                    <span>Qorasuv</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container nav-container">
          <Navbar />
        </div>
    </>
  )
}

export default Header