import React from "react";
import './style.css'

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            Intern's <span>Cafe</span>
          </h3>
          <p>
            <h4>Order with ease - User Friendly Interface, Contactless payments, Pre-ordering method</h4>
          </p>
          <a href="#" className="btn">
            Order now
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;