import React from "react";
import { Link } from "react-router-dom";

function Carusel() {
  return(
    <>
      <section className="carusel">
          <div className="carusel-wrapper">
            <div className="container">
              <div className="carusel-item">
                <h1>
                  We Are Professional Quality Services
                </h1>
                <Link to="/contact">
                  Our Services
                </Link>
              </div>
              {/* <div className="carusel-item">
                <h1>
                  We Are Professional Quality Services
                </h1>
                <Link to="/contact">
                  Our Services
                </Link>
              </div>
              <div className="carusel-item">
                <h1>
                  We Are Professional Quality Services
                </h1>
                <Link to="/contact">
                  Our Services
                </Link>
              </div> */}
            </div>
          </div>
        </section>
    </>
  )
}

export default Carusel