import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return(
    <>
      <div className="bg-primary">
        <div className="container">
          <footer className="footer">
            <div className="footer__top">
              <div className="item">
                <span className="fa fa-envelope-o" aria-hidden="true"></span>
                <div>
                  <h4>E-pochta</h4>
                  <span>Info@Example.com</span>
                </div>
              </div>
              <div className="item">
                <span className="fa fa-phone" aria-hidden="true"></span>
                <div>
                  <h4>Telefon raqamimiz</h4>
                  <span>+998 91 547-40-71</span>
                </div>
              </div>
              <div className="item">
                <span className="fa fa-map-marker" aria-hidden="true"></span>
                <div>
                  <h4>Manzil</h4>
                  <span>Info@Example.com</span>
                </div>
              </div>
            </div>
            <hr />
            
          </footer>
        </div>
      </div>
    </>
  )
}

export default Footer