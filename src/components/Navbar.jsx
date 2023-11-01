import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false)

  let navActive = nav ? "active" : ""

  const showNav = () => {
    setNav(true)
    console.log("shown")
  }

  const hideNav = (e) => {
    setNav(false)
    console.log("hidden")
  }

  return(
    <>
      <button className="open-nav-btn" onClick={showNav}>
        <ion-icon name="list-outline"></ion-icon>
      </button>
      <nav className={"header__navigation " + navActive}>
        <button className="close-nav-btn" onClick={hideNav}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <ul>
          <li><Link to="/">Bosh sahifa</Link></li>
          <li><Link to="/news">Yangiliklar</Link></li>
          <li><Link to="/gallery">Galereya</Link></li>
          <li><Link to="/contact">Bog'lanish</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar