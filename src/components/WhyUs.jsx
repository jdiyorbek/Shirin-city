import React from "react";

function WhyUs() {
  return(
    <>
      <div className="why-us">
        <div className="why-us__box-reason">
          <ul className="window">
            <li>Project Done</li>
            <li>People Working</li>
            <li>Business Partners</li>
            <li>Happy Customers</li>
          </ul>
        </div>
        <div className="why-us__box-description">
          <h1>
            Few Reasons Why You Should Choose Us
          </h1>
          <p>
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada. 
          </p>
          <ul>
            <li><ion-icon name="checkmark-circle-sharp"></ion-icon>35 Years Experience</li>
            <li><ion-icon name="checkmark-circle-sharp"></ion-icon>Excellence Certificate</li>
            <li><ion-icon name="checkmark-circle-sharp"></ion-icon>Affordable Price</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default WhyUs