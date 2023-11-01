import React from "react";

function NewsCard(props) {

  const {id, title, description, date} = props
  
  return(
    <>
      {/* <div className="card">
        <div className="">{id}</div>
        <div className="">{title}</div>
        <div className="">{description}</div>
        <div className="">{date}</div>
      </div> */}
      <a href="/" className="card">
        <div className="image">
          <img src="/images/news-img.jpg" alt="" />
        </div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="date"><ion-icon name="calendar-outline"></ion-icon> {date}</div>
      </a>
    </>
  )
}

export default NewsCard