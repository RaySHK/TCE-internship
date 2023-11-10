import React from "react";
import Navbar from "./navbar";

import './contact.css';

const Contact = () => {
  return (
    <>
    <Navbar/>
      <section class="contact" id="contact">
        <div class="row">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.638885755539!2d74.92279731072978!3d12.866584817119413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358ff28ef6cf3%3A0xe93953598f53c53c!2sSahyadri%20College%20of%20Engineering%20%26%20Management%20(Autonomous)!5e0!3m2!1sen!2sus!4v1698287479559!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;