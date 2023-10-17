import React from "react";

function MapAndContact() {
  return(
    <>
      <div className="container">
        <section className="map-and-contact">
          <div className="box-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.914090122878!2d66.96310278985567!3d39.580213254996245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1fa750adf12b%3A0xae495a7328ad66d!2sGulobod%20Hamom%20%26%20Sauna!5e0!3m2!1sen!2s!4v1697527057828!5m2!1sen!2s" loading="lazy"></iframe>
          </div>
          <div className="box-2">
            <h1 className="title">
              Biz bilan bog'laning
            </h1>
            <form>
              <input type="text" name="name" className="first-name" placeholder="Ismingiz"/>
              <input type="text" name="phone" className="phone" placeholder="Telefon raqamingiz"/>
              <textarea name="message" placeholder="Xabaringizni yozing"></textarea>
              <button type="submit">
                Button
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default MapAndContact