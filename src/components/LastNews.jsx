import React from "react";

function LastNews() {
  return(
    <>
      <section className="last-news">
        <h1 className="title">
          Latest News and Articles
        </h1>
        <div className="last-news__box">
          <div className="card">
            <div className="img-box">
              <img src="/images/news-img.jpg"/>
              <div className="date">
                <ion-icon name="calendar-outline"></ion-icon>
                April 2, 2022
              </div>
            </div>
            <h2 className="title">
              Improve Workflow With bluecollar Construction
            </h2>
            <p className="description">
              Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.
            </p>
            <a href="" className="read-more">
              Read More...
            </a>
          </div>
          <div className="card">
            <div className="img-box">
              <img src="/images/news-img.jpg"/>
              <div className="date">
                <ion-icon name="calendar-outline"></ion-icon>
                April 2, 2022
              </div>
            </div>
            <h2 className="title">
              Improve Workflow With bluecollar Construction
            </h2>
            <p className="description">
              Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna sit amet tincidunt. Interdum et malesuada.
            </p>
            <a href="" className="read-more">
              Read More...
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default LastNews