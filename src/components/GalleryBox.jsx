import React from "react";
import { useState } from "react";

function GalleryBox() {
  const [img, setImg] = useState("")
  const [zoom, setZoom] = useState(false)

  const zoomInImg = (e) => {
    setImg(e.target.src)
    setZoom(true)
  }

  const zoomOutImg = () => {
    setImg("")
    setZoom(false)
  }

  return(
    <>
      <div className="container">
        <section className="gallery-box">
          <div className="item">
            <img src="/images/news-img.jpg" onClick={(e) => { zoomInImg(e) }}/>
          </div>
          <div className="item">
            <img src="/images/news-img.jpg" onClick={(e) => { zoomInImg(e) }}/>
          </div>
          <div className="item">
            <img src="/images/news-img.jpg" onClick={(e) => { zoomInImg(e) }}/>
          </div>
          <div className="item">
            <img src="/images/news-img.jpg" onClick={(e) => { zoomInImg(e) }}/>
          </div>
          <div className="item">
            <img src="/images/news-img.jpg" onClick={(e) => { zoomInImg(e) }}/>
          </div>
        </section>
      </div>
      <div className={"gallery-window " + (zoom ? "active" : "")}>
        <button className="close-btn" onClick={() => {zoomOutImg()}}>
          <ion-icon name="close-sharp"></ion-icon>
        </button>
        <img src={img}/>
      </div>
    </>
  )
}

export default GalleryBox