import React from "react"

import Header from "../layouts/Header"
import Footer from "../layouts/Footer"

import HeaderBanner from "../components/HeaderBanner"
import NewsBox from "../components/NewsBox"

function News() {
  return (
    <>
      <Header />
      <HeaderBanner title="Yangiliklar"/>
      <NewsBox />
      <Footer />
    </>
  )
}

export default News