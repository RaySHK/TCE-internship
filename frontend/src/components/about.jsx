import React from "react";
import Navbar from "./navbar";
import AboutImg from "./assets/coffee.jpg";
import './about.css'
const About = () => {
  return (
    <>
    <Navbar/>
      <section className="about" id="about">

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our service special?</h3>
            <p>
            A café that caters to students with quick bites, affordable coffee, and a welcoming environment to study, hang out, or grab a snack.Our mission is to provide a cozy space for students, offering quality food and beverages that won't break the bank. 
            </p>
            <p>
            Our vision is to become the go-to place for students looking for a comfortable spot to recharge, socialize, and stay fueled during long study sessions.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;