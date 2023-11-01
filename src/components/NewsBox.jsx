import React from "react";
import NewsCard from "./NewsCard";
import data from "../data.json";
import { Link } from "react-router-dom";

function NewsBox() {
  return(
    <>
      <div className="container">
        <section className="news-box">
          <div className="news-box__filter">

          </div>

          <div className="news-box__cards">
            {data.map(item => (
                <NewsCard key={item.id} title={item.title} description={item.description} date={item.date}/>
            ))}
          </div>

          <div className="news-box__type">
            <h3>Kategoriyalar</h3>
            <ul>
              <li><Link href="/"><ion-icon name="arrow-forward-outline"></ion-icon> So'ngi yangiliklar</Link></li>
              <li><Link href="/"><ion-icon name="arrow-forward-outline"></ion-icon> Eng ommabop yangiliklar</Link></li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default NewsBox