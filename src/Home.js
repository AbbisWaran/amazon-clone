import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71uuDYxn3XL._SL1500_.jpg"
            rating={4}
            quantity={1}
          />
          <Product
            id="23"
            title="New Apple iPhone 12 Mini (64GB) - Black"
            price={94.29}
            image="https://images-na.ssl-images-amazon.com/images/I/41eeQ1z4SlL._SX330_BO1,204,203,200_.jpg"
            rating={4}
            quantity={1}
          />
        </div>
        <div className="home__row">
          <Product
            title="Acer 21.5 Inch Full HD IPS Ultra Slim (6.6mm Thick) Monitor I Frameless Design I AMD Free Sync I Eye Care Features I Stereo Speakers (HA220Q)"
            price={79.5}
            image="https://images-na.ssl-images-amazon.com/images/I/71wRe7xkcSL._SL1246_.jpg"
            rating={4}
            quantity={1}
          />
          <Product
            title="The 4-Hour Work Week: Escape the 9-5, Live Anywhere and Join the New Rich"
            price={59.2}
            image="https://images-na.ssl-images-amazon.com/images/I/51iGkLC6jhL._SX314_BO1,204,203,200_.jpg"
            rating={5}
            quantity={1}
          />
          <Product
            title="Bosch 8 kg 5 Star Inverter Fully Automatic Front Loading Washing Machine with In- built Heater (WAJ2426MIN,White)"
            price={340.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71zjknKWpWL._SL1500_.jpg"
            rating={5}
            quantity={1}
          />
        </div>
        <div className="home__row">
          <Product
            title="All-new Echo Dot (4th Gen) | #1 smart speaker brand in India with Alexa (White)"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/619OHusLWiL._SL1000_.jpg"
            rating={5}
            quantity={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
