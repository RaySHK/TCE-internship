import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
// import { useState } from 'react';
// import CounterComponent from "./calc";

const Home = () => {
  return (
    <>
    <Navbar />
      {/* carousel */}
  <div id="myCarousel" className="carousel slide mb-6 pointer-event" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className aria-label="Slide 1" />
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" className />
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" className="active" aria-current="true" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item">
        <img src={require("./assets/pexels-mariana-kurnyk-1775043.jpg")} className="bd-placeholder-img" width="100%" height="600px" aria-hidden="true" preserveaspectratio="xMidYMid slice" focusable="false" />
        <div className="container">
          <div className="carousel-caption text-end" style={{color: 'black'}}>
            <h1>Order with ease </h1>
            <p className="opacity-75">Fresh and Healthy food. User Friendly Interface. Contactless payments. Fast delivery</p>
            <p><a className="btn btn-lg btn-primary" href="./menu"> Order Now!</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item active carousel-item-start">
        <img src={require("./assets/pexels-elle-hughes-1660030.jpg")} className="bd-placeholder-img" width="100%" height="600px" aria-hidden="true" preserveaspectratio="xMidYMid slice" focusable="false" />
        <div className="container">
          <div className="carousel-caption text-end" style={{color: 'black'}}>
            <h1>Farm Fresh Ingredients.</h1>
            <p>Freshly harvested Ingredients. <br />Each produce delivery comes with the option to easily add items from our collection of <br />artisanal foods, grocery basics and unique farm products</p>
            <p><a className="btn btn-lg btn-primary" href="./signup">Sign Up</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item carousel-item-next carousel-item-start">
        <img src={require("./assets/pexels-robin-stickel-70497.jpg")} className="bd-placeholder-img" width="100%" height="600px" aria-hidden="true" preserveaspectratio="xMidYMid slice" focusable="false" />
        <div className="container">
          <div className="carousel-caption text-start" style={{color: 'black'}}>
            <h1 style={{color: 'white'}}>Reservation at your fingertips.</h1>
            <p style={{color: 'white'}}>Reserve a table at our cafe and enjoy our cuisine. </p>
            <p><a className="btn btn-lg btn-primary" href="./contact">Reserve a table now!</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
      

        

      
    </>
    
  );
};
export default Home;