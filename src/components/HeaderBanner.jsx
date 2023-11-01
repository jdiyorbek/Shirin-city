import React from "react";

function HeaderBanner(props) {

  const { title } = props
  return(
    <>
      <section className="header-banner">
        <div className="header-banner__text">
          <h1 className="h1">
            {title}
          </h1>
        </div>
      </section>
    </>
  )
}

export default HeaderBanner