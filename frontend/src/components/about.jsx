import React from"react";
import Navbar from "./navbar";

const About = () =>{
    return(
        <>
        <Navbar/>
        <header>
        <h1>About Us</h1>
    </header>

    <section>
        <h2>Our Story</h2>
        <p>
            Insert a brief description of your company's history and mission here.
        </p>
    </section>

    <section>
        <h2>Our Team</h2>
        <p>
            Meet the people behind our company and learn about their roles.
        </p>
    </section>

    <section>
        <h2>Our Values</h2>
        <p>
            Highlight the core values and principles that your company stands for.
        </p>
    </section>

    <footer>
        <p>Contact us at <a href="./contact">Contact Us</a></p>
    </footer>
        </>
    );
}
export default About;