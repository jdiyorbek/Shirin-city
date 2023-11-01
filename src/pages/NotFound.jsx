import React from "react";
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import HeaderBanner from "../components/HeaderBanner"

function NotFound() {
  return(
    <>
      <Header />
      <HeaderBanner title="404 - Sahifa topilmadi"/>
      <Footer />
    </>
  )
}

export default NotFound