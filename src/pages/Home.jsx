import React from "react"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

import WhyUs from "../components/WhyUs"
import LastNews from "../components/LastNews"
import MapAndContact from "../components/MapAndContact"
import Carusel from "../components/Carusel"

function Home() {
  return (
    <>
      <Header />
      <Carusel />
      <WhyUs />
      <LastNews />
      <MapAndContact />
      <Footer />
    </>
  )
}

export default Home