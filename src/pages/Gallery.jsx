import React from "react";


import HeaderBanner from "../components/HeaderBanner";
import GalleryBox from "../components/GalleryBox";


import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function Gallery() {
  return (
    <>
      <Header />
      <HeaderBanner title="Galereya"/>
      <GalleryBox />
      <Footer />
    </>
  )
}

export default Gallery