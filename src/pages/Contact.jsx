import React from "react"

import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

import HeaderBanner from "../components/HeaderBanner"
import MapAndContact from "../components/MapAndContact"


function Contact() {
  return (
    <>
      <Header />
      <HeaderBanner title="Bog'lanish"/>
      <MapAndContact />
      <Footer />
    </>
  )
}

export default Contact